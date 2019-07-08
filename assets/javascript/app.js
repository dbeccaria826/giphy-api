$(document).ready(function () {
//Set up an array, used for generating buttons later
//Loop through array to generate the number of buttons = to the number of items in the array
//Create a function that takes in the users response and creates a new button based on the user input
//Smallest Actionable Pieces (SAP)
//data-
//still-animate
//click function grabs data state if state is still switches to animate value



let queryURL = "http://api.giphy.com/v1/gifs/search?q=nicolas+cage&limit=10&api_key=zTLXTIZUb2r2dOKO3slPidvtQ1hExHuU"

$.ajax({
    url:queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)
    console.log(response.data[0].images.original)
    //response.data[0].images.original_still.url
    $('#image').append('<img src=' + response.data[0].images.original_still.url + '/>')
    $('#image').on('click', function() {
        $('#image').empty()
        $('#image').append('<img src=' + response.data[0].images.original.url + '/>')
        
    })
})




})