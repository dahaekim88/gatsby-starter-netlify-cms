import { useState, useEffect } from "react"

const useForm = (callback, validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // console.log("TCL: useForm -> useEffect", errors)
    // TODO: Temp blocking for local-auth.
    if (/*Object.keys(errors).length === 0 && */ isSubmitting) {
      callback()
    }
  }, [errors])

  const handleSubmit = event => {
    // console.log("TCL: useForm -> handleSubmit", handleSubmit)
    if (event) event.preventDefault()
    setIsSubmitting(true)
    setErrors(validate(values))
  }

  const handleChange = event => {
    event.persist()
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}

export default useForm
