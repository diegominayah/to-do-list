/*var button = document.getElementsByTagName("button")[0];

button.addEventListener("mouseleave/click", function () {
	console.log("CLICK!!!")
})*/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var itemList = document.querySelectorAll("li");

/*var markItem = document.getElementById("1") esta variable la definimos de prueba para probar el
tachado de un elemento de la lista de cosas*/

function inputLenght(){
	return input.value.length;
}

function markedItem(){
	for (let i=0; i<itemList.length; i++) {
    	itemList[i].addEventListener("click", function(j) {
        j.currentTarget.classList.toggle("done");
    	})
	}
}

markedItem();

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	itemList = document.querySelectorAll("li");
	input.value = "";
	markedItem();
}

function addListAfterClick(){
	if (inputLenght() > 0 ){
		createListElement();
	}
}

function addListAfterKeypress(event){
	if (inputLenght() > 0 && event.which === 13){ /*en vez de event.wichh tambien se puede usar evet.keyCode*/
		createListElement();
	}
}

button.addEventListener("click",addListAfterClick);  /*este es im ejemplo usando click*/

input.addEventListener("keypress",addListAfterKeypress); /*este es im ejemplo con teclado*/




/*markItem.addEventListener("click",function(){
	markItem.classList.toggle("done");
}) esta es la funcion de captura del evento declarado en la linea 11*/