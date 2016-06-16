$(document).ready(function() {

  $("form#grocerylist").submit(function(event) {
    var items = [];
    grocerylist.push($("#grocery-list").val()); 
  var upperCaseItems = items.map(function(item) {
  return item.toUpperCase();


  });

  $("form#list_text").show();

  event.preventDefault();

});
});
