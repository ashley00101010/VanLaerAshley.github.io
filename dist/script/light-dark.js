const $buttonBox = $("#buttonBox");
$("#dn").click(function() {
    console.log("1");
    if ($("#dn").val() == "Light off") {
        $("#dn").val("Light on");
        $( ":not(body *)" ).css( "background-color", "#101922" );
        $('p, h1, h3, label, input, select, textarea').css("color", "#ffffff");
        $('.textBox, .second-api, fieldset').css("background-color", "#1b2939").css("border", "1px solid #192332");
        $('.contact').css( "background-color", "#101922" );
        $('input, select, textarea').css("background-color", "#1b2939").css("border", "1px solid #101922");
        $('input[type=submit]').css("background-color", "#205fac");
        $('.turn-on').css("visibility", "visible");
        $('.turn-off').css("visibility", "hidden");



    } else {
        $("#dn").val("Light off");
        $( ":not(#apiData *)" ).css( "background-color", "" ).css( "background-image", "" );
        $('p, h1, h3, label, input, select, textarea').css("color", "");
        $('.textBox, .second-api, fieldset').css("background-color", "").css("border", "1px solid #ddd");
        $('.aside p,.aside h1, .aside h3, .quickSettings h3, .tooltip p, input[type=submit]').css("color", "");
        $('input, select, textarea').css("background-color", "").css("border", "1px solid #d3d3d3");
        $('.turn-on').css("visibility", "hidden");
        $('.turn-off').css("visibility", "visible").css("color", "#fff");
    }
});