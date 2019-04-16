import crypto from "crypto"

export default email => {
  const size = 200
  const md5 = crypto
    .createHash("md5")
    .update(email)
    .digest("hex")

  return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`
}
