const SlackMessage = require('./src/slack');

module.exports = function SlackInit(slackurl,opts={}) {
    return new SlackMessage(slackurl,opts);
}