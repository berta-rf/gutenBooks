const fetch = require('node-fetch')

const handler = async function () {
  try {
    const response = await fetch('https://www.gutenberg.org/ebooks/844.epub.noimages', {
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.arrayBuffer()
    console.log(data);

    return {
      statusCode: 200,
      body: JSON.stringify({data:  Buffer.from(data).toString('base64')}),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: error.message ,
    }
  }
}

module.exports = { handler }
