$(document).ready(function() {
  $("form#triangle").submit(function(event){
    event.preventDefault();

    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    var result;

    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      result = ("Not a triangle");
    } else if (side1 === side2 && side2 === side3 && side1 === side3) {
      result = ("Equilateral"); // All side equal
    } else if (side1 != side2 && side1 != side3) {
      result = ("Scalene"); // No side equal
    }
    else {
      result = ("Isosceles"); // Two sides equal
    }

    $(".panel").text(result).show();


  });
});
