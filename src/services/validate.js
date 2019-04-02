const validate = values => {
  const errors = {}
  const emailRegex = /\S+@\S+\.\S+/
  const phoneRegex = /(01[0|1|6|9|7])[-](\d{3}|\d{4})[-](\d{4}$)/g

  if (!values.name) {
    errors.name = "이름을 반드시 입력해주세요"
  }
  if (!values.email) {
    errors.email = "이메일을 반드시 입력해주세요"
  } else if (!emailRegex.test(values.email)) {
    errors.email = "이메일 형식에 맞게 입력해주세요"
  }
  if (!values.phone) {
    errors.phone = "휴대폰 번호를 반드시 입력해주세요"
  } else if (!phoneRegex.test(values.phone)) {
    errors.phone = "휴대폰 형식에 맞게 입력해주세요"
  }
  if (!values.password) {
    errors.password = "패스워드를 반드시 입력해주세요"
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "패스워드를 한 번 더 입력해주세요"
  }
  // if (!values.courseId) {
  //   errors.courseId = "required"
  // }
  // if (!values.courseType) {
  //   errors.courseType = "required"
  // }
  return errors
}

export default validate
