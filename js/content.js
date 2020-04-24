const DollarXPathForBuying = "//*[@id='hero']/div[1]/div[1]/table/tbody/tr[1]/td[3]";
const DollarXPathForSelling = "//*[@id='hero']/div[1]/div[1]/table/tbody/tr[1]/td[4]"
const DollarXPathForLastUpdate = "//*[@id='hero']/div[1]/div[1]/table/tbody/tr[1]/td[6]"

const EuroXPathForBuying = "//*[@id='hero']/div[1]/div[1]/table/tbody/tr[2]/td[3]";
const EuroXPathForSelling = "//*[@id='hero']/div[1]/div[1]/table/tbody/tr[2]/td[4]";
const EuroXPathForLastUpdate = "//*[@id='hero']/div[1]/div[1]/table/tbody/tr[2]/td[6]";

const GramGoldXPathForBuying = "//*[@id='hero']/div[1]/div[2]/table/tbody/tr[2]/td[3]";
const GramGoldXPathForSelling = "//*[@id='hero']/div[1]/div[2]/table/tbody/tr[2]/td[4]";
const GramGoldXPathForLastUpdate = "//*[@id='hero']/div[1]/div[2]/table/tbody/tr[2]/td[6]";

const URL = "https://canlidoviz.com/";

function htmlToElement(html) {
    var doc = new DOMParser().parseFromString(html, "text/html");
    return doc;
}

$(document).ready(() => {
    $('.currency section').addClass('loading');
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            var response = req.responseText;
            if (response) {
                debugger;
                var doc = htmlToElement(response);
                $(".currency .message").hide();
                $(".currency #dollarBuyingPrice").text(doc.evaluate(DollarXPathForBuying, doc, null, XPathResult.ANY_TYPE, null).iterateNext().innerHTML);
                $(".currency #dollarSellingPrice").text(doc.evaluate(DollarXPathForSelling, doc, null, XPathResult.ANY_TYPE, null).iterateNext().innerHTML);
                $(".currency #dollarUpdateTime").text(doc.evaluate(DollarXPathForLastUpdate, doc, null, XPathResult.ANY_TYPE, null).iterateNext().innerHTML);

                $(".currency #euroBuyingPrice").text(doc.evaluate(EuroXPathForBuying, doc, null, XPathResult.ANY_TYPE, null).iterateNext().innerHTML);
                $(".currency #euroSellingPrice").text(doc.evaluate(EuroXPathForSelling, doc, null, XPathResult.ANY_TYPE, null).iterateNext().innerHTML);
                $(".currency #euroUpdateTime").text(doc.evaluate(EuroXPathForLastUpdate, doc, null, XPathResult.ANY_TYPE, null).iterateNext().innerHTML);

                $(".currency #gramGoldBuyingPrice").text(doc.evaluate(GramGoldXPathForBuying, doc, null, XPathResult.ANY_TYPE, null).iterateNext().innerHTML);
                $(".currency #gramGoldSellingPrice").text(doc.evaluate(GramGoldXPathForSelling, doc, null, XPathResult.ANY_TYPE, null).iterateNext().innerHTML);
                $(".currency #gramGoldUpdateTime").text(doc.evaluate(GramGoldXPathForLastUpdate, doc, null, XPathResult.ANY_TYPE, null).iterateNext().innerHTML);
            } else {
                $(".currency section").hide();
                $(".currency .message").text("Bir hata oluştu..");
            }
            $('.currency section').removeClass('loading');
        }
    };

    req.open('GET', URL);
    req.send(null);
});