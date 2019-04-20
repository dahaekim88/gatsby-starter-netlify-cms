import React, { useState } from "react"
import { graphql } from "gatsby"
import jwtDecode from "jwt-decode"
import axios from "axios"

import { Router } from "@reach/router"
import PrivateRoute from "../../components/route/privateRoute"

import Layout from "../../components/Layout"
import Apply from "../../components/apply-page/Apply"
import { Message } from "../../components/styled"
import useForm from "../../components/hooks/useForm"

import { IAMPORT_KEY } from "../../keys"
import { SERVER_URL, IMPORT_PG } from "../../../.config"

const ApplyPage = ({ data }) => {
  const courses = data.allMarkdownRemark.edges
  // console.log("courses: ", courses)

  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState([])
  const [payment, setPayment] = useState({})
  const [coupon, setCoupon] = useState({})
  const [status, setStatus] = useState("unpaid")

  const formApply = async () => {
    setLoading(true)

    const token = localStorage.getItem("token")
    if (token) {
      const { id, name, email, phone } = jwtDecode(token)
      values.id = id
      values.name = name
      values.email = email
      values.phone = phone
    } else {
      alert("로그인 후 스터디 신청이 가능합니다.")
      return
    }

    // console.log("values: ", values)
    const { study_title, study_time, pay_method } = values

    const selectedStudy = courses.filter(
      ({ node }) => node.frontmatter.title === study_title
    )
    // console.log("selectedStudy: ", selectedStudy)

    const study_id = selectedStudy[0].node.id
    const { price } = selectedStudy[0].node.frontmatter.info
    const amount = coupon.discount ? price - price * coupon.discount : price // TODO: test
    // console.log("amount: ", amount)

    // const amount = 1004 // TODO: test

    const merchant_uid = `studystates_${new Date().getTime()}`

    try {
      await axios
        .post(`${SERVER_URL}/payment`, {
          user_id: values.id,
          pay_method,
          study_id,
          merchant_uid,
          amount,
        })
        .then(res => {
          console.log("res: ", res)
          if (res.data.success) {
            const { merchant_uid } = res.data

            const now = new Date()
            now.setDate(now.getDate() + 1)
            const vbank_due = `${now.getFullYear().toString() +
              `0${now.getMonth() + 1}`.slice(-2) +
              `0${now.getDate()}`.slice(-2)}2359`

            const IMP = window.IMP
            IMP.init(IAMPORT_KEY)

            switch (pay_method) {
              case "vbank":
                IMP.request_pay(
                  {
                    pg: IMPORT_PG,
                    pay_method,
                    merchant_uid,
                    name: `${study_title}_${study_time}`,
                    amount,
                    buyer_name: values.name,
                    buyer_email: values.email,
                    buyer_tel: values.phone,
                    vbank_due,
                    notice_url: `${SERVER_URL}/payment/notification`, // TODO: test
                  },
                  rsp => {
                    console.log("rsp: ", rsp)
                    if (rsp.success) {
                      setPayment({
                        ...rsp,
                      })
                      setStatus(rsp.status)
                    } else {
                      alert(rsp.error_msg)
                    }
                  }
                )
                break

              case "bccard":
                IMP.request_pay(
                  {
                    pg: IMPORT_PG,
                    pay_method: "card",
                    card: {
                      detail: [
                        { card_code: "*", enabled: false },
                        { card_code: "bc", enabled: true },
                      ],
                    },
                    display: {
                      card_quota: [2, 3],
                    },
                    merchant_uid,
                    name: `${study_title}_${study_time}`,
                    amount,
                    buyer_name: values.name,
                    buyer_email: values.email,
                    buyer_tel: values.phone,
                    notice_url: `${SERVER_URL}/payment/notification`, // TODO: test
                  },
                  rsp => {
                    console.log("rsp: ", rsp)
                    if (rsp.success) {
                      setPayment({
                        ...rsp,
                      })
                      setStatus(rsp.status)
                    } else {
                      alert(rsp.error_msg)
                    }
                  }
                )
                break

              default:
                IMP.request_pay(
                  {
                    pg: IMPORT_PG,
                    pay_method,
                    card: {
                      detail: [
                        { card_code: "*", enabled: true },
                        { card_code: "bc", enabled: false },
                      ],
                    },
                    merchant_uid,
                    name: `${study_title}_${study_time}`,
                    amount,
                    buyer_name: values.name,
                    buyer_email: values.email,
                    buyer_tel: values.phone,
                    vbank_due,
                    notice_url: `${SERVER_URL}/payment/notification`, // TODO: test
                  },
                  rsp => {
                    console.log("rsp: ", rsp)
                    if (rsp.success) {
                      setPayment({
                        ...rsp,
                      })
                      setStatus(rsp.status)
                    } else {
                      alert(rsp.error_msg)
                    }
                  }
                )
                break
            }
          } else {
            // TODO: error handling
            alert(res.data.error)
          }
        })
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        // console.log("TCL: formApply -> ex.response", ex.response)
        // TODO: error handling
        const { data } = ex.response
        setApiError(data)
      }
    }
  }

  const { values, handleChange, handleSubmit, errors } = useForm(
    formApply,
    validate
  )

  const handleErrors = errors => {
    if (!Array.isArray(errors) && !errors.length > 0) {
      return <Message>{errors[0]}</Message>
    }
    return errors.map(e => <Message>{e}</Message>)
  }

  const handlePrivateTermsAndConditions = () => {
    document
      .getElementsByClassName("formapplypreextra-modal")[0]
      .classList.toggle("view")
  }

  const onCouponChange = async e => {
    const couponVal = e.target.value

    if (couponVal && couponVal.length > 9) {
      setCoupon({
        couponVal,
        couponChk: true,
      })
      try {
        const couponData = await axios
          .get(`${SERVER_URL}/coupon`, { params: { coupon: couponVal } })
          .then(res => {
            return res.data
          })

        const { couponValidity, discount } = couponData
        setCoupon(coupon => ({
          ...coupon,
          couponValidity,
          discount,
        }))
      } catch (ex) {
        console.log(ex)
      }
    } else {
      setCoupon({
        couponVal,
        couponChk: false,
        couponValidity: false,
        discount: 0,
      })
    }
  }

  // console.log("values: ", values)
  // console.log("coupon: ", coupon)
  // console.log("payment: ", payment)
  // console.log("status: ", status)

  return (
    <Layout>
      <Router>
        <PrivateRoute
          path="/apply"
          component={props => (
            <Apply
              {...props}
              loading={loading}
              apiError={apiError}
              values={values}
              errors={errors}
              courses={courses}
              coupon={coupon}
              payment={payment}
              status={status}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleErrors={handleErrors}
              onCouponChange={onCouponChange}
              handlePrivateTermsAndConditions={handlePrivateTermsAndConditions}
            />
          )}
        />
      </Router>
    </Layout>
  )
}

export default ApplyPage

export const pageQuery = graphql`
  query ApplyPage {
    allMarkdownRemark(
      filter: { frontmatter: { open: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            info {
              studyTimes {
                dayOfWeek
                time
              }
              price
            }
            open
          }
        }
      }
    }
  }
`

const validate = values => {
  const errors = {}
  if (!values.study_title) {
    errors.study_title = "스터디를 반드시 선택해주세요"
  }
  if (!values.study_time) {
    errors.study_time = "스터디 시간을 반드시 선택해주세요"
  }
  if (!values.pay_method) {
    errors.pay_method = "결제 방법을 반드시 선택해주세요"
  }
  return errors
}
