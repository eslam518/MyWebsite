/* global $, alert, jQuery */

$(document).ready(function () {
    "use strict";
    $('.carousel').carousel({
        interval: 6000
    });
    // Show Tool Box
    $(".gear-check").click(function () {
        "use strict";
        $(".color-option").fadeToggle("slow");
    });
    // Change Theme Color On Click
    var colorLi = $(".color-option ul li"),
        scrollButton = $("#scroll-top");
    colorLi
        .eq(0).css("backgroundColor", "#E41b17").end()
        .eq(1).css("backgroundColor", "#0895D1").end()
        .eq(2).css("backgroundColor", "#13b613").end()
        .eq(3).css("backgroundColor", "#E426D5").end()
        .eq(4).css("backgroundColor", "#ffb300");
    colorLi.click(function () {
        "use strict";
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    // Scroll To Top On Click
    $(window).scroll(function () {
        "use strict";
        if($(this).scrollTop() >= 900){
            scrollButton.show();
        } else {
            scrollButton.hide();
        };
        //$(this).scrollTop() >= 900 ? scrollButton.show() : scrollButton.hide();
    });
    scrollButton.click(function () {
        "use strict";
        $("html,body").animate({scrollTop: 0}, 1000);
    });
    // Loading Screen
    $(".loading-overlay .spinner").fadeOut(2000, function () {
        "use strict";
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut(2000, function () {
            "use strict";
            $(this).remove();
        });
    });
});
//$(document).ready(function () { // => $(window).on("load"function(){})

