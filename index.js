let words = [
    {
        "inputs":1,
        "catergory":"UK",
        "word":"London"
    },
    {
        "inputs":2,
        "catergory":"Sports",
        "word":"Chess"
    },
    {
        "inputs":3,
        "catergory":"Country",
        "word":"France"
    },
]


var gameOver = false

randomWord = words.Math.random()

$(".clickable").click(function () {
    var correctGuess = false;

    let id = $(this).attr("id");

    var life = parseInt($("#life").text())

    for (var i = 0; i < randomWord.word.length; i++) {

        if(randomWord.word.charAt(i).toLowercase() == id) {
            
            if (life > 0 && ($(".fill_blanks").eq(i).html() == "__" || $(".fill_blanks").eq(i).html() == id)) {
               
                $(".fill_blanks").eq(i).html(id);
                correctGuess = true;

                if($("#blanks").text() === randomWord.word.toLowercase()) {
                    $("#result").text("You Win!!")
                    correctGuess = true;
                    gameOver = true
                }
            }
        }
    }
})
 


 

 