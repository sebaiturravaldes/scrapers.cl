//Requires
const _ = require('lodash');
const rp = require('request-promise');
const cheerio = require('cheerio');

//Selectors
let WOMSelector = 'body > section.fe_wrap > div.bgpurple > div > div.fe_content_tabs > div.tabs_info > div:nth-child(1) > div > div:nth-child(1) > div.body > span.body_precio';

//Urls to Web Scrapings
const urls = [
    {
        name: 'Huawei Mate 20 Pro',
        url: 'http://www.wom.cl/equipos/ficha/huawei-mate-20-pro',
        selector: WOMSelector
    },
    {
        name: 'Huawei P20 Lite',
        url: 'http://www.wom.cl/equipos/ficha/huawei-p20-lite',
        selector: WOMSelector
    }
];


//Each urls
_.each(urls, (item) => {
    rp(item.url)
        .then((html) => {
            let $ = cheerio.load(html);
            console.log('\t' + item.name + ': ' + $(item.selector).text());
        })
        .catch((error) => {
            console.log(error);
        });
});