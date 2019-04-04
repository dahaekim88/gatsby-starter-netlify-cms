import { useState, useEffect } from "react"

const useForm = (callback, validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [clicked, setClicked] = useState("")

  useEffect(() => {
    // console.log("TCL: useForm -> useEffect", errors)
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  const handleSubmit = event => {
    // console.log("TCL: useForm -> handleSubmit", handleSubmit)
    if (event) event.preventDefault()
    setIsSubmitting(true)
    setErrors(validate(values, clicked))
  }

  const handleChange = event => {
    event.persist()
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  const handleClick = event => {
    setClicked(event.target.value)
  }

  return {
    handleChange,
    handleSubmit,
    handleClick,
    values,
    errors,
  }
}

export default useForm
