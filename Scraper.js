const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
  //method launches instance of browser
  const browser = await puppeteer.launch();
  //puppeteer creates a new page in the browser
  const page = await browser.newPage();
  try {
  } catch (err) {
    console.log("absolutely not");
  }
  await page.goto(url);
  const [el] = await page.$x(
    '//*[@id="quote-header-info"]/div[2]/div[1]/div[1]/h1'
  );
  const name = await el.evaluate(() => {
    return document.querySelector("h1").textContent;
  });
  //   const h1Title = await el.getProperty("h1");
  //   const h1text = await h1Title.jsonValue();
  console.log({ name });

  browser.close();
}

scrapeProduct("https://finance.yahoo.com/quote/AAPL?p=AAPL");

//need to add path to chrome after removing chromium
