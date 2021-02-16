document.addEventListener("DOMContentLoaded", function() {

    const $chart = $(".js-chart-type3");

    $chart.each(function(){

        let $el = $(this),
            percent = $el.data("percent");

        const $line = $el.find(".chart-container__line-inner");

        if(percent != undefined) {

            $line.css({width: percent + "%"});

        }

    });

});