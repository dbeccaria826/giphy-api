$(document).ready(function () {
    //Set up an array, used for generating buttons later
    //Loop through array to generate the number of buttons = to the number of items in the array
    //Create a function that takes in the users response and creates a new button based on the user input
    //Smallest Actionable Pieces (SAP)
    //data-
    //still-animate
    //click function grabs data state if state is still switches to animate value

    let topics = ["nicolas cage", "werner herzog", "david lynch", "the wickerman", "half in the bag", "redlettermedia", "mike stoklasa"]
    //Adding styling using jquery instead of using css

    function startApp() {


        for (let i = 0; i < topics.length; i++) {
            console.log("loop works")
            createButton(i, topics[i]);

        }
        console.log(topics)
        //Creating a new button
        $("#usersubmit").on('click', function () {
            event.preventDefault()
            let userSearch = $('#usersearch').val()
            //Clearing whatever user typed
            $('#usersearch').val('')
            if(topics.indexOf(userSearch) > -1) {
                alert('We already have that button')
            } else if (topics.indexOf(userSearch) === -1) {
            topics.push(userSearch)
            console.log(topics)
            console.log("submit works")
            createButton((topics.length - 1), userSearch);
        }
        })

    }

    function createButton(i, value) {
        $("#buttons").append("<button id=newbutton" + i + ">" + value + "</button>")
        $("#newbutton" + i).attr("data-name", value)
        $("#newbutton" + i).attr("class", "btn btn-dark")
        $("#newbutton" + i).on("click", function () {

            $('#img-container').empty()
            let gifName = $(this).attr("data-name")
            let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&limit=10&rating=pg&api_key=zTLXTIZUb2r2dOKO3slPidvtQ1hExHuU";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                let gifData = response.data;

                console.log(gifData)


                for (let i = 0; i < gifData.length; i++) {

                    console.log(gifData[i].rating)


                    $('#img-container').append('<div class=imghold id=imgholder_' + i + '></div>')
                    $('#imgholder_' + i).append('<div id=rating><p>Rating: ' + gifData[i].rating + ' </p></div>')
                    $("#imgholder_" + i).append("<img id=newimg" + i + " src=" + gifData[i].images.fixed_height_still.url + ">")
                    $("#newimg" + i).attr("data-value", "still")
                    $("#newimg" + i).attr("data-still", gifData[i].images.fixed_height_still.url)
                    $("#newimg" + i).attr("data-animate", gifData[i].images.fixed_height.url)
                   
                    


                    $("#newimg" + i).on("click", function () {

                        let value = $(this).attr("data-value")
                        console.log(value)
                        if (value === "still") {
                            $(this).attr("src", $(this).attr("data-animate"))
                            $(this).attr("data-value", "animate")

                        } else {

                            $(this).attr("src", $(this).attr("data-still"))
                            $(this).attr("data-value", "still")
                        }


                    })


                }
                




            })
        })

    }


    startApp()


})