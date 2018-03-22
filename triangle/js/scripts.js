var triangleType = function(length1, length2, length3) {
  if (length1 === length2 && length2 === length3) {
    alert("equilateral");
  }else{
    alert("other triangle");
  }
}

// Below is front end logic or user interface
$(document).ready(function(){
  $("#lengths").submit(function(event){
    event.preventDefault();
    var length1 = parseInt($("#side1").val());
    var length2 = parseInt($("#side2").val());
    var length3 = parseInt($("#side3").val());

    triangleType(length1, length2, length3);

  //  $("type").empty().append(quote);
  //  $("#output").show();

  });
});
