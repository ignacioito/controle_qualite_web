function envoyerRequete(){

	var request = new XMLHttpRequest();
	request.open("GET", "https://jsonplaceholder.typicode.com/todos");

	request.onreadystatechange=function(){

		if(this.readyState==XMLHttpRequest.DONE && this.status==200){
			var reponse = JSON.parse(this.responseText);
			for(var i = 0; i<reponse.length; i++){

			//Creer un noeud <li> dans <ul>

			var noeudLang = document.createElement("li");
			noeudLang.textContent = reponse[i].title;
			document.getElementById("liste").appendChild(noeudLang);
			//console.log(reponse);
			//document.getElementById('test').innerHTML = reponse.title;
			}
		}
	};
	request.send();
	//console.log("---1--");
};