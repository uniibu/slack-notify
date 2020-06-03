const needle = require('needle');
const defaultOpts =  {
  'username': 'Slack Notification',
  'text': '',
  'icon_emoji': ':robot_face:'
};

class SlackMessage {
  constructor(slackurl,opts) {
    this.slackurl = slackurl;
    this._validateUrl();
    this.payload = Object.assign({},defaultOpts,opts)
  }
  _validateUrl() {
    if(!/^https:\/\/hooks\.slack\.com\/services\/[a-zA-Z0-9\/]+$/.test(this.slackurl)) {
      throw new Error("Invalid Slack Url");
    }
  }
  _buildPayload(message) {
    return Object.assign({},this.payload,{text:message});
  }
  async send(message) {
    try {
      await needle('post', this.slackurl, this._buildPayload(message), { json: true });
    } catch(err) {
      throw new Error(err.message);
    }
  }
}

module.exports = SlackMessage