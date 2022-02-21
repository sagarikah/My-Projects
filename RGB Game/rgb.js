var square= document.querySelectorAll(".square");
var color= [];
var reset= document.querySelector("#reset");
var winColor, winIndex, goal, header;
var message= document.querySelector("#message");
var numSquare= 6;
var body= document.querySelector("body");
body.style.backgroundColor= "#232323";
setSquareColor(numSquare);

for(var i=0; i<square.length; i++)
{
    square[i].addEventListener("click", function()
    {
        if(winColor == this.style.backgroundColor)
            convertAll(winColor);
        else
        {
            this.style.backgroundColor= body.style.backgroundColor;
            message.textContent= "Try Again !";
        }
    })
}

function rgbGen()
{
    var red = Math.floor(Math.random()*(256));
    var green  = Math.floor(Math.random()*(256));
    var blue = Math.floor(Math.random()*(256));

    var genColor = "rgb(" + red.toString() + ", " + green.toString() + ", " + blue.toString() + ")";
    return genColor;
}

function convertAll()
{
    header= document.querySelector("header");

    for(var i=0; i<square.length; i++)
    {
        square[i].style.backgroundColor= winColor.toString();
        header.style.backgroundColor= winColor.toString();
        reset.textContent= "Play Again ?";
        message.textContent= "Correct !";
    }
}

function setSquareColor(numSquare)
{
    header= document.querySelector("header");
    header.style.backgroundColor= "steelblue";

    color.length= numSquare;

    for(var i=0; i<numSquare; i++)
    {
        color[i]= rgbGen();
    }

    for(var i=0; i<numSquare; i++)
    {
        square[i].style.backgroundColor= color[i].toString()
    }

    winIndex= Math.floor(Math.random()*(color.length));
    goal= document.querySelector("#goal");
    goal.textContent= color[winIndex];
    winColor= color[winIndex];
    message.textContent= "";
}

reset.addEventListener("click", function()
{
    setSquareColor(numSquare);
    reset.textContent= "New Colors";
});