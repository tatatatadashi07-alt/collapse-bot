const TOKEN = process.env.COLLAPSE_BOT_TOKEN
const TYPE = process.env.POST_TYPE

const messages = {
  am1145: '現在、日本時間 午前11時45分です🕚',
  pm1145: '現在、日本時間 午後11時45分です🌙',
  am0810: '現在、日本時間 午前8時10分です☀️',
  pm0810: '現在、日本時間 午後8時10分です🌆',
}

const content = messages[TYPE]

if (!content) {
  console.error('不明なタイプ:', TYPE)
  process.exit(1)
}

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
