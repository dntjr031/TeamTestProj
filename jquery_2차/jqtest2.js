function target01(){
  $("#target01").css("background", "skyblue");
}

function target03(){
  var span = $("#target03").find("span").clone();
  $("#target03").append(span);
}

function target05(){
  $(".target05").find("button").attr('disabled', true);
}

function target07(){
  $copy = $("#child").detach();
  $("#parent2").append($copy);
}

function target09(){
  setTimeout(function(){
    $(".target09").children().each(function(){
      $(this).css("font-size","15pt")
        .css("font-family","Castellar");
    });
  }, 1000);

}

function target11(){
  $("#target11").children().not("h2").hide();
}

function target13(){
  setInterval(function(){
      n = $("#target13").find("input").val();
      n *= 1
      $("#target13").find("input").val(n+1);
  }, 1000);
}
