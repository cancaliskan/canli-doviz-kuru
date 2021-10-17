$(document).ready(() => {
    $('.currency section').addClass('loading');
    $.getJSON({ url: "https://cancaliskan-doviz-api.herokuapp.com/" }).done(data => {
        if (data) {
            $(".currency .message").hide();
            $(".currency #dollarBuyingPrice").text(data.Dollar.BuyingPrice);
            $(".currency #dollarSellingPrice").text(data.Dollar.SellingPrice);
            $(".currency #dollarUpdateTime").text(data.Dollar.UpdateTime);

            $(".currency #euroBuyingPrice").text(data.Euro.BuyingPrice);
            $(".currency #euroSellingPrice").text(data.Euro.SellingPrice);
            $(".currency #euroUpdateTime").text(data.Euro.UpdateTime);

            $(".currency #gramGoldBuyingPrice").text(data.GramGold.BuyingPrice);
            $(".currency #gramGoldSellingPrice").text(data.GramGold.SellingPrice);
            $(".currency #gramGoldUpdateTime").text(data.GramGold.UpdateTime);
        } else {
            $(".currency section").hide();
            $(".currency .message").text("Bir hata oluştu..");
        }
        $('.currency section').removeClass('loading');
    });
});
