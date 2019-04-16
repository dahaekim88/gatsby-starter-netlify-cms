const validate = (values, clicked) => {
  const errors = {}
  const emailRegex = /\S+@\S+\.\S+/
  const phoneRegex = /(01[0|1|6|9|7])[-](\d{3}|\d{4})[-](\d{4}$)/g

  switch (clicked) {
    case "로그인":
      if (!values.email) {
        errors.email = "이메일을 반드시 입력해주세요"
      } else if (!emailRegex.test(values.email)) {
        errors.email = "이메일 형식에 맞게 입력해주세요"
      }
      if (!values.password) {
        errors.password = "패스워드를 반드시 입력해주세요"
      }
      return errors

    case "회원가입":
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
      return errors

    case "추가정보전송":
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
      return errors

    default:
      return errors
  }
}

export default validate
