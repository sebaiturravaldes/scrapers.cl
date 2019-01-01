//Requires
const _ = require('lodash');
const rp = require('request-promise');
const cheerio = require('cheerio');

//Urls to Web Scrapings
const urls = {
    'Huawei Mate 20 Pro': 'http://www.wom.cl/equipos/ficha/huawei-mate-20-pro',
    'Huawei P20 Lite': 'http://www.wom.cl/equipos/ficha/huawei-p20-lite'
};

//Selectors
let WOMSelector = 'body > section.fe_wrap > div.bgpurple > div > div.fe_content_tabs > div.tabs_info > div:nth-child(1) > div > div:nth-child(1) > div.body > span.body_precio';


//each urls
_.each(urls, (url, name) => {
    rp(url)
        .then((html) => {
            let $ = cheerio.load(html);
            console.log('\t' + name + ': ' + $(WOMSelector).text());
        })
        .catch((error) => {
            console.log(error);
        });
});