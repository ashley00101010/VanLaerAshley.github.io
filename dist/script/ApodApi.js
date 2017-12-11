var url = "https://api.nasa.gov/planetary/apod?api_key=ptlWiqiiUnEJNcy09i8xjMoRz0W37UjkcLTH8NCf";


$.ajax({
    url: url,
    success: function(result){
        if("copyright" in result) {
            $("#copyright").text("Image Credits: " + result.copyright);
        }
        else {
            $("#copyright").text("Image Credits: " + "Public Domain");
        }

        if(result.media_type == "video") {
            $("#apod_img_id").css("display", "none");
            $("#apod_vid_id").attr("src", result.url);
        }
        else {
            $("#apod_vid_id").css("display", "none");
            $("#apod_img_id").attr("src", result.hdurl);
        }
        $("#apod_explaination").text(result.explanation);
        $("#apod_title").text(result.title);
    }
});