const withTypescript = require('@zeit/next-typescript');
module.exports = withTypescript();

// now 배포시 설정 필요, 하지만 이렇게 설정하고 나면 local에서 404 에러 발생
module.exports = {
  target: 'serverless',
};
