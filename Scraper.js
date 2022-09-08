const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
  //method launches instance of browser
  //If you don't want to use chromium use a file path to your chrome
  // To find the path open up chrome and paste chrome://version/
  const browser = await puppeteer.launch({
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
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

  console.log({ name });

  browser.close();
}

scrapeProduct("https://finance.yahoo.com/quote/AAPL?p=AAPL");
