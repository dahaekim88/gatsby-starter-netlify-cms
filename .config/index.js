const env = process.env.NODE_ENV

const development = {
  SERVER_URL: "http://localhost:5000",
}

const staging = {
  SERVER_URL: "https://api-dev.studystates.net/:5000",
}

const production = {
  SERVER_URL: "https://api-dev.studystates.net/:5000",
}

const config = {
  development,
  staging,
  production,
}

console.log(
  `[+] Environment env=${process.env.NODE_ENV}, config[env]=` +
    JSON.stringify(config[env])
)

module.exports = config[env]
