$("form").on( "submit", function(event){
  event.preventDefault();
  var pElement = "<p>" + $("#input-text").val() + "</p>";
  var b1Element = document.createElement("button");
  var b2Element = document.createElement("button");
  $(b1Element).addClass("check-class");
  $(b2Element).addClass("delete-class");
  $(b1Element).html("Check");
  $(b2Element).html("Delete");
  $(b1Element).attr('type', 'button');
  $(b2Element).attr('type', 'button');
  var liElement = document.createElement("li");
  $(liElement).addClass("list-item");
  $(liElement).append(pElement, b1Element, b2Element);
  $("ul").append(liElement);
});

$("#list").on( "click", ".check-class",function(event){
  var pElement = $(this).parent().children().first();
  var pClassChecked = pElement.hasClass("p-checked");

  if (pClassChecked) {
    $(pElement).removeClass("p-checked");
  }
  else {
    $(pElement).addClass("p-checked");
  }
});

$("#list").on( "click", ".delete-class",function(event){
  $($(this).parent()).remove();
});
