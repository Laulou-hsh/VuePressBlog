const secret = require('./secret');
module.exports = {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',
    // 其他的 Vssue 配置
    owner: 'githubsgeek',
    repo: 'VuePressBlog',
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
    autoCreateIssue: true,
}