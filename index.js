const puppeteer = require('puppeteer');
let page;

async function getBrowserPage() {
  const browser = await puppeteer.launch({args: ['--no-sandbox']});
  return browser.newPage();
}

exports.screenshot = async (req, res) => {

  if (req.method != 'POST') {
    res.status(400).send('Please use POST method');
  }

  switch (req.get('content-type')) {
    case 'applicatiion/json':
      break;
    defalut:
      console.log('default')
      res.status(400).send('Please use Content-Type applicatiion/json');
      break;
  }

  const url = req.body.url;
  const viewport = req.body.size;

  if (!url) {
    return res.send('Please provide URL as GET parameter, for example: <a href="?url=https://example.com">?url=https://example.com</a>');
  }

  if (!page) {
    page = await getBrowserPage();
    page.setViewport(viewport)
  }

  await page.goto(url);
  const imageBuffer = await page.screenshot();
  res.set('Content-Type', 'image/png');
  res.send(imageBuffer);
};
