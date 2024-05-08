$(".button").on("click", () => {
    // fetch the API
    //$("#result").html("This app shows the current position of the International Space Station")
    fetch('http://api.open-notify.org/iss-now.json')
    .then(resp => resp.json())
    .then(rslt => {
        console.log(rslt.iss_position)
       $("#result").html(`The latitude is ${rslt.iss_position.latitude}° and the longitude is ${rslt.iss_position.longitude}°`)
       $(".exp").html("A negative latitude stands for the southern hemisphere and a negative longitude stands for the western hemisphere")
       $("img").attr("src","https://i0.wp.com/printworldmaps.com/wp-content/uploads/2022/09/World-Map-with-Latitude-and-Longitude-PDF.jpg?resize=432%2C247&ssl=1")
    })
});

