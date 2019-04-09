const env = process.env.NODE_ENV

const development = {
  SERVER_URL: "http://localhost:5000",
  IMPORT_PG: "html5_inicis.INIpayTest",
  M_REDIRECT_URL: "http://localhost:8000",
}

const staging = {
  SERVER_URL: "https://api-dev.studystates.net",
  IMPORT_PG: "html5_inicis",
  M_REDIRECT_URL: "https://dev.studystates.net",
}

const production = {
  SERVER_URL: "https://api-dev.studystates.net",
  IMPORT_PG: "html5_inicis",
  M_REDIRECT_URL: "https://studystates.net",
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
