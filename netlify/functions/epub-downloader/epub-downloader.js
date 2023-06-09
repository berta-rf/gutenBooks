const fetch = require('node-fetch')

//old url to call before I created the AWS function
// const baseURL = "/.netlify/functions/epub-downloader";

const handler = async function (event) {

  const book_id = event.queryStringParameters.book_id;

  try {
    const response = await fetch(`https://www.gutenberg.org/ebooks/${book_id}.epub.noimages`, {
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
      body: error.message ,
    }
  }
}

module.exports = { handler }
