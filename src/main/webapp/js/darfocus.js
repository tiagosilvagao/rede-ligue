$( document ).ready(function() {
$("#editarDados").hide();
$("#preenchaCampos").hide();
})

function darfocus(el){
  var id = '';
  id = (el.id);
  id = id.replace("focus-", "");
  $("#editarDados").show("slow");
  $("#valoresDados").hide("slow");
  $('#' + id).focus();
}

function check_form(){
	var inputs = document.getElementsByClassName('required');
  var len = inputs.length;
  var valid = true;
  for(var i=0; i < len; i++){
     if (!inputs[i].value){ valid = false; }
  }
  if (!valid){
  	$("#preenchaCampos").show("slow");
    return false;
  } else { return true; }
}