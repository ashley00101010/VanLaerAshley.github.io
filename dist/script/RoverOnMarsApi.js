$(function () {
    const $apiData = $('#apiData');
    var yesterday = new Date();
    var dd = yesterday.getDate()-2;
    var mm = yesterday.getMonth()+1; //January is 0!
    var yyyy = yesterday.getFullYear();
    yesterday = yyyy + '-' + mm + '-' + dd;
    $.ajax({

        type: 'GET',
        url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + yesterday + '&api_key=ptlWiqiiUnEJNcy09i8xjMoRz0W37UjkcLTH8NCf',
        success: function(data) {
            console.log('success', data);
            for (i = 0; i < 50; i++) {
                $apiData.append('<h1>Rover name: ' + data.photos[i].rover.name + '</h1>');
                $apiData.append('<p class="apiText">Camera name: ' + data.photos[i].camera.full_name + '</p>');
                $apiData.append('<p class="apiText">Launch date: ' + data.photos[i].rover.launch_date + '</p>');
                $apiData.append('<p class="apiText">landing date: ' + data.photos[i].rover.landing_date + '</p>');
                $apiData.append('<p class="status_rover">Status Rover: ' + data.photos[i].rover.status + '</p>');
                $apiData.append('<img class="rover_image" src=" '+  data.photos[i].img_src +' " />');
            }
        }
    });
});