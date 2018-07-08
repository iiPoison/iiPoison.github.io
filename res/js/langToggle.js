$(document).ready(function () {

  //устанавливаем начальный язык
  $(".ru_language").css("display","none");
  $(".en_language").css("display","inline");
  $("#enlanguage").css("font-size","1.2rem").css("text-decoration","underline");
  $("#rulanguage").css("font-size","1rem").css("text-decoration","none");

  //переключениче на русский язык
  $("#rulanguage").on('click', function () {
    $(".en_language").css("display","none");
    $(".ru_language").css("display","inline");
    $("#rulanguage").css("font-size","1.2rem").css("text-decoration","underline");
    $("#enlanguage").css("font-size","1rem").css("text-decoration","none");
  });

  //переключение на английский язык
  $("#enlanguage").on('click', function () {
    $(".en_language").css("display","inline");
    $(".ru_language").css("display","none");
    $("#rulanguage").css("font-size","1rem").css("text-decoration","none");
    $("#enlanguage").css("font-size","1.2rem").css("text-decoration","underline");
  });

});

/*

<span class="en_language"></span>
<span class="ru_language"></span>

*/
