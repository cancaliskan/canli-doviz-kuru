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
var doc = null;

function htmlToElement(html) {
    doc = new DOMParser().parseFromString(html, "text/html");
}

function getInnerHtml(XPath) {
    return doc.evaluate(XPath, doc, null, XPathResult.ANY_TYPE, null).iterateNext().innerHTML;
}

$(document).ready(() => {
    $('.currency section').addClass('loading');
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            var response = req.responseText;
            if (response) {
                htmlToElement(response);
                $(".currency .message").hide();
                $(".currency #dollarBuyingPrice").text(getInnerHtml(DollarXPathForBuying));
                $(".currency #dollarSellingPrice").text(getInnerHtml(DollarXPathForSelling));
                $(".currency #dollarUpdateTime").text(getInnerHtml(DollarXPathForLastUpdate));

                $(".currency #euroBuyingPrice").text(getInnerHtml(EuroXPathForBuying));
                $(".currency #euroSellingPrice").text(getInnerHtml(EuroXPathForSelling));
                $(".currency #euroUpdateTime").text(getInnerHtml(EuroXPathForLastUpdate));

                $(".currency #gramGoldBuyingPrice").text(getInnerHtml(GramGoldXPathForBuying));
                $(".currency #gramGoldSellingPrice").text(getInnerHtml(GramGoldXPathForSelling));
                $(".currency #gramGoldUpdateTime").text(getInnerHtml(GramGoldXPathForLastUpdate));
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