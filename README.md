## studystates-client using netlify cms (gatsby) evaluation

## Status

- `dev` branch
- `master` branch

## Gatsby Environment Variables

| Command                        | Env         | `.env`             | `SERVER_URL`                |
| ------------------------------ | ----------- | ------------------ | --------------------------- |
| `gatsby develop`               | development | `.env.development` | `http://localhost:5000`     |
| `gatsby build`, `gatsby serve` | production  | `.env.production`  | `https://api-dev.studystates.net/:9000` |

### Command

#### Development (local)

- `yarn develop` : developement

#### Staging/production

- `yarn develop:staging`
- `yarn build`
- `yarn serve`

| 구분     | IP                            | URL                              | Routing                        |
| ------ | ----------------------------- | -------------------------------- | ------------------------------ |
| client |                               | https://dev.studystates.net/     |                                |
| server | Sandbox dev EC2 `52.78.123.6` | https://api-dev.studystates.net/ | `80` => `443` ,`443` => `5000` |
