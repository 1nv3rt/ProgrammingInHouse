var go = document.getElementById("Go");
function Evento(){
	
	//console.log(name,race);
	var nameDog = [];
	var raceDog = [];
	for(var i = 0; i <= nameDog.length ; i++){
		var name = document.getElementById("Name").value;
		var race = document.getElementById("Race").value;
		nameDog[i] = name;
		raceDog[i] = race;
		console.log(nameDog,raceDog);
	}

}

go.addEventListener("click",Evento);