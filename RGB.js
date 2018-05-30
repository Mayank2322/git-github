var colors=randomColors(6);
var squares = document.querySelectorAll(".square");
var answer= pickColor();
var change = document.getElementById("change");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
change.textContent=answer;
for(var i=0; i<squares.length ;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click", function(){
		var userAnswer = this.style.backgroundColor;
		console.log(userAnswer,answer);
		if(userAnswer === answer)
		{
			message.textContent = "Correct !!!";
			h1.style.backgroundColor= answer;
			changecolor(userAnswer);
			reset.textContent="Play Again ?"
		}
		else
		{
			this.style.backgroundColor="#232323";
			message.textContent = "Try again !!!";
		}
	})
}
function changecolor(color)
{
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}
function pickColor()
{
	var random = Math.floor(Math.random()*colors.length + 1);
	return colors[random];
}
function randomColors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		var x = Math.floor(Math.random()*256);
		var y = Math.floor(Math.random()*256);
		var z = Math.floor(Math.random()*256);
		arr.push("rgb("+x+","+" "+y+","+" "+z+")");
	}
	return arr;
}
reset.addEventListener("click",function(){
	colors=randomColors(6);
	answer= pickColor();
	hard.classList.add("selected");
	easy.classList.remove("selected");
	message.textContent="";
	for(i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	change.textContent=answer;
	if(this.textContent ==="Play Again ?")
	{
		this.textContent = "New Colors";
		h1.style.backgroundColor = "blue";
		hard.classList.add("selected");
		easy.classList.remove("selected");
	}
});
easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	h1.style.backgroundColor="blue";
	colors = randomColors(3);
	answer = pickColor();
	message.textContent="";
	change.textContent = answer;
	if(reset.textContent === "Play Again ?")
	{
		reset.textContent="New Colors";
	}
	for(i=0; i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.background = "none";
		}
	}
});
hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	message.textContent="";
	h1.style.backgroundColor="blue";
	colors = randomColors(6);
	answer = pickColor();
	if(reset.textContent === "Play Again ?")
	{
		reset.textContent = "New Colors";
	}

		for(i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	change.textContent=answer;
})