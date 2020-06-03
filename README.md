# slack-notify
Simple slack notification via legacy webhooks


## Installation
```
npm install @unibtc/slack-notify
```
or
```
yarn add @unibtc/slack-notify
```

## Usage

```
const SlackMessage = require('@unibtc/slack-notify')("https://hooks.slack.com/services/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")

async function sendhello(){
  await SlackMessage.send("hello")
}
sendhello();
```

## Advance Usage

```
const SlackMessage = require('@unibtc/slack-notify')
const slack = SlackMessage("https://hooks.slack.com/services/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",{
    'username': 'Slack Notification', // custom username
    'icon_emoji': ':robot_face:' // custom icon
})

async function sendhello(){
  await slack.send("<!channel> hello") // tagging whole channel
}
sendhello();
```
