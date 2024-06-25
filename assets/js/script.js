$(function(){
	var allChecks = $("[type=checkbox]");
	var elemento, id, guardar;

	$("[type=checkbox]").change(function(){	
		
		var selected = {};
		for (var i = 0; i < allChecks.length; i++) {
			elemento = $(allChecks[i]);
			id=elemento.attr('id');
			selected[id] = elemento.is(":checked") 
		}
		guardar = JSON.stringify(selected);
		localStorage.setItem('selected',guardar);
	})


	var selectedStorage = localStorage.getItem('selected')
	if(selectedStorage){
		selectedStorage = JSON.parse(selectedStorage);

		for (var i = 0; i < allChecks.length; i++) {
			elemento = $(allChecks[i]);
			id=elemento.attr('id');
			if(selectedStorage[id] && selectedStorage[id] === true){
				elemento.prop('checked', true);
			}
		}
	}
	
})