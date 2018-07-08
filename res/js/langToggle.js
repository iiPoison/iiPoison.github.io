$(document).ready(function () {

  //устанавливаем начальный язык
  $(".en_language").css("display","none");
  $(".ru_language").css("display","inline");
  $("#rulanguage").css("border","1px solid red");

  //переключениче на русский язык
  $("#rulanguage").on('click', function () {
    $(".en_language").css("display","none");
    $(".ru_language").css("display","inline");
    $("#rulanguage").css("border","1px solid red");
    $("#enlanguage").css("border","1px solid grey");
  });

  //переключение на английский язык
  $("#enlanguage").on('click', function () {
    $(".en_language").css("display","inline");
    $(".ru_language").css("display","none");
    $("#enlanguage").css("border","1px solid red");
    $("#rulanguage").css("border","1px solid grey");
  });

});

/*

<span class="en_language"></span>
<span class="ru_language"></span>

*/
