const TOKEN = process.env.COLLAPSE_BOT_TOKEN
const SCHEDULE = process.env.SCHEDULE

const messages = {
  '45 2 * * *': '現在、日本時間 午前11時45分です🕚',
  '45 14 * * *': '現在、日本時間 午後11時45分です🌙',
  '10 23 * * *': '現在、日本時間 午前8時10分です☀️',
  '10 11 * * *': '現在、日本時間 午後8時10分です🌆',
}

const content = messages[SCHEDULE] || '定期投稿です'

const res = await fetch('https://collapse.jp/api/v4/bot/posts', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    content,
    zone: 'normal',
    reply_restriction: 'all',
  }),
})

const result = await res.json()
console.log(result)
