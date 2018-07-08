$(document).ready(function () {

  //устанавливаем начальный язык
  $(".ru_language").css("display","none");
  $(".en_language").css("display","inline");
  $("#enlanguage").css("font-size","1.2rem");
  $("#rulanguage").css("font-size","1rem");
  $("#enlanguage").css("text-decoration","underline");
  $("#rulanguage").css("text-decoration","none");

  //переключениче на русский язык
  $("#rulanguage").on('click', function () {
    $(".en_language").css("display","none");
    $(".ru_language").css("display","inline");
    $("#rulanguage").css("font-size","1.2rem");
    $("#enlanguage").css("font-size","1rem");
    $("#rulanguage").css("text-decoration","underline");
    $("#enlanguage").css("text-decoration","none");
  });

  //переключение на английский язык
  $("#enlanguage").on('click', function () {
    $(".en_language").css("display","inline");
    $(".ru_language").css("display","none");
    $("#rulanguage").css("font-size","1rem");
    $("#enlanguage").css("font-size","1.2rem");
    $("#enlanguage").css("text-decoration","underline");
    $("#rulanguage").css("text-decoration","none");
  });

});

/*

<span class="en_language"></span>
<span class="ru_language"></span>

*/
