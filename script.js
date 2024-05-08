$(".button").on("click", () => {
    // fetch the API
    //$("#result").html("This app shows the current position of the International Space Station")
    fetch('http://api.open-notify.org/iss-now.json')
    .then(resp => resp.json())
    .then(rslt => {
        console.log(rslt.iss_position)
       $("#result").html(`The latitude is ${rslt.iss_position.latitude}° and the longitude is ${rslt.iss_position.longitude}°`)
    })
});

