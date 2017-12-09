const $buttonB = $("#buttonB");
$("#LDbutt").click(function() {
    console.log("1");
    if ($("#LDbutt").val() == "Full screen") {
        $("#LDbutt").val("Close full screen");
        $('.aside, .quickSettings, .textBox, .second-api, #apod_title, #APOD, #copyright').css("display", "none");
        $('#content').css("width", "100%").css("position", "fixed").css("top", "0").css("left", "unset");
        $('body, html').css("background", "#000000").css("transition-duration", "600ms");
        $('#apod_img_id, .video').css("max-height", "unset").css("height", "unset").css("top", "50%").css("transform", "translateY(-50%)");
        $('.api-info').css("max-width", "unset").css("height", "100vh").css("margin-top", "unset").css("left", "50%").css("transform", "translateX(-50%)");

        const mq = window.matchMedia( "(max-width: 475px)" );
        if (mq.matches) {
            $('#buttonB').css("bottom", "157px").css("left", "50%").css("transform", "translateX(-50%)").css("top", "unset").css("right", "unset");
        } else {
            $('#buttonB').css("bottom", "30px").css("left", "50%").css("transform", "translateX(-50%)").css("top", "unset").css("right", "unset");
        }
    } else {
        $("#LDbutt").val("Full screen");
        $('#content').css("width", "").css("position", "").css("top", "").css("left", "");
        $('body, html').css("background", "");
        $('#apod_img_id, .video').css("max-height", "").css("height", "").css("top", "").css("transform", "");
        $('.api-info').css("max-width", "").css("height", "").css("margin-top", "").css("left", "").css("transform", "");
        $('#buttonB').css("bottom", "").css("left", "").css("transform", "").css("top", "").css("right", "");
        $('.aside, .quickSettings, .textBox, .second-api, #apod_title, #APOD, #copyright').css("display", "");
    }
});
