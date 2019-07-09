$(document).ready(function () {
//Set up an array, used for generating buttons later
//Loop through array to generate the number of buttons = to the number of items in the array
//Create a function that takes in the users response and creates a new button based on the user input
//Smallest Actionable Pieces (SAP)
//data-
//still-animate
//click function grabs data state if state is still switches to animate value

let topics = ["nicolas cage", "sean connery", "werner herzog", "stanley kubrick", "david lynch" ]

function getBtn() {
    for(let i = 0; i < topics.length; i++) {
        console.log('loop works')
        let newBtn = topics[i];
        $('#buttons').append('<button id=newbtn' + i + '>' + newBtn + '</button>' )
        $('#newbtn'+ i).attr('data-value', topics[i])
        $('#newbtn' + i).on('click', function(){
            let stuff = $(this).attr('data-value')
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
                console.log('loop works')
                $('#images').append('<img src=' + gifData[i].images.downsized_still.url + '>')
                
                
                
            }
            
        })
        })
    }
}

getBtn()









})