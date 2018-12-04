let arrayTitulos = [];

function Salvar(){
	let titulo = document.getElementById('titulo');
	console.log(titulo.value);
	arrayTitulos.push(titulo.value);	
}

function Resultado(){
	console.log(arrayTitulos);
	
	for(let a in arrayTitulos){
		console.log(arrayTitulos[a])
		
		//document.createElement('tr');
		//document.createElement('td');
		//arrayTitulos[a];
	}
}
