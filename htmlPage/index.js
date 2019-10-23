(function(){
	let form = document.getElementById("contact_form");
	form.addEventListener('submit', function(e){
		let formElem = e.target.elements;
		let name = formElem.name.value || '--nothing--';
		let message = formElem.text.value || '--nothing--';
		console.log("name: " + name);
		console.log("message: " + message);
	});
})();