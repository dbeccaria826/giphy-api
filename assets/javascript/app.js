$(document).ready(function () {
//Set up an array, used for generating buttons later
//Loop through array to generate the number of buttons = to the number of items in the array
//Create a function that takes in the users response and creates a new button based on the user input
//Smallest Actionable Pieces (SAP)
//data-
//still-animate
//click function grabs data state if state is still switches to animate value

let topics = ["nicolas cage", "sean connery", "werner herzog", "david lynch", "twin peaks", "dune", "trading places", "redlettermedia" ]

function getBtn() {
    for(let i = 0; i < topics.length; i++) {
        console.log("loop works")
        let newBtn = topics[i];
        $("#buttons").append("<button id=newbtn" + i + ">" + newBtn + "</button>" )
        $("#newbtn"+ i).attr("data-name", topics[i])
        $("#newbtn" + i).on("click", function(){
            $('#images').empty()
            let stuff = $(this).attr("data-name")
            console.log(stuff)
            console.log(this)
            let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + stuff + "&limit=10&api_key=zTLXTIZUb2r2dOKO3slPidvtQ1hExHuU";
        $.ajax({
            url: queryURL, 
            method: "GET"
            }).then(function(response){
            console.log(response)
            let gifData = response.data;
           
          console.log(gifData)
            for(let i = 0; i < gifData.length; i++) {
                console.log("loop works") 
                console.log(gifData[i].rating)
                if(gifData.rating !== "pg-13" && gifData.rating !== "r"){
                
                
                $("#images").append("<img id=newimg" + i + " src="+ gifData[i].images.fixed_height_still.url + ">")
                $("#newimg" + i).attr("data-value", "still")
                $("#newimg" + i).attr("data-still", gifData[i].images.fixed_height_still.url)
                $("#newimg" + i).attr("data-animate", gifData[i].images.fixed_height.url)
                $('#newimg' + i).prepend("<div id=rating>")
                $('#rating').append('<p>Rating: ' + gifData[i].rating + '</p>')


            
                $("#newimg" + i).on("click", function() {


                   
                    let value = $(this).attr("data-value")
                    console.log(value)
                    if(value === "still") {
                        $(this).attr("src",$(this).attr("data-animate"))
                        $(this).attr("data-value", "animate")
                        console.log("if state works")
                    } else {
                        console.log("else state works")
                        $(this).attr("src", $(this).attr("data-still"))
                        $(this).attr("data-value", "still")
                    }
                   
                })
                
            }
            }
            
        })
        })
    }
}
$('#clear').on('click', function() {
    $('#images').empty()
})
getBtn()









})