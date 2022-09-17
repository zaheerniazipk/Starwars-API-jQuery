$(document).ready(function () {

    $("button").on("click", function () {

        // Generate random number b/w 0 and 88
        const randomNumber = Math.ceil(Math.random() * 88);

        // Random API URL
        const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`;

        // get data through Starwars API
        $.get(url, function (data) {
            console.log(data);
            $("h1.name").text(data['name']);
            $("img.character-img").attr("src", data['image']);
        })

    })

});