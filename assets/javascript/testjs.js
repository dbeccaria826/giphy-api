function createButtons(index, value) {
    $("#buttons").append("<button id=newbutton" + index + ">" + value + "</button>")
    $("#newbutton" + index).attr("data-name", value)







    $("#newbutton" + index).on("click", function () {

        $('#img-container').empty()
        let stuff = $(this).attr("data-name")
        console.log(stuff)
        console.log(this)
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + stuff + "&limit=10&rating=pg&api_key=zTLXTIZUb2r2dOKO3slPidvtQ1hExHuU";









        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            let gifData = response.data;

            console.log(gifData)


            for (let index = 0; index < gifData.length; index++) {
                console.log("loop works")
                console.log(gifData[index].rating)


                $('#img-container').append('<div class=imghold id=imgholder_' + index + '></div>')
                $('#imgholder_' + index).append('<div id=rating><p>Rating: ' + gifData[index].rating + ' </p></div>')

                $("#imgholder_" + index).append("<img id=newimg" + index + " src=" + gifData[index].images.fixed_height_still.url + ">")
                $("#newimg" + index).attr("data-value", "still")
                $("#newimg" + index).attr("data-still", gifData[index].images.fixed_height_still.url)
                $("#newimg" + index).attr("data-animate", gifData[index].images.fixed_height.url)



                $("#newimg" + index).on("click", function () {



                    let value = $(this).attr("data-value")
                    console.log(value)
                    if (value === "still") {
                        $(this).attr("src", $(this).attr("data-animate"))
                        $(this).attr("data-value", "animate")
                        console.log("if state works")
                    } else {
                        console.log("else state works")
                        $(this).attr("src", $(this).attr("data-still"))
                        $(this).attr("data-value", "still")
                    }

                })


            }

        })
    })

}