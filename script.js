$(".button").on("click", () => {
    // fetch the API
    //$("#result").html("This app shows the current position of the International Space Station")
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
    .then(resp => resp.json())
    .then(rslt => {
       $("#result").html(`The latitude is ${rslt.latitude}° and the longitude is ${rslt.longitude}°`)
       $(".exp").html("A negative latitude stands for the southern hemisphere and a negative longitude stands for the western hemisphere")
       $("img").attr("src","https://i0.wp.com/printworldmaps.com/wp-content/uploads/2022/09/World-Map-with-Latitude-and-Longitude-PDF.jpg?resize=432%2C247&ssl=1")
    })
});

