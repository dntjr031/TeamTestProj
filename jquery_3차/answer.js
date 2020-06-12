function taget15(){
  $("#target15 tbody tr").each(function(){
    var a = $(this).find("td:eq(0)").text();
    var b = $(this).find("td:eq(2)").text();
    a *= 1;
    b *= 1;
    $(this).find("td:eq(4)").text(a+b);
  });
}

function target17(){
  var color = $("#target17").css("background");
  color = color.substr(0,color.indexOf(")")+1)
  if(color == "rgb(255, 0, 0)"){
    $("#target17").css("background", "rgba(52, 180, 227)");
  }else{
    $("#target17").css("background", "rgba(255, 0, 0)");
  }

}

function target19(){
  $("#target19").children().each(function(){
    $(this).hide();
  });
}

function target16(){
  $("#target16 td").each(function(){
    no = $(this).html();
    if(no > 10){
      $(this).css("background", "skyblue");
    }
  });
}

function target18(){
  $("#target18 span").each(function(){
    var a = $(this).text();
    if(a == "bold"){
      $(this).css("font-weight","bold");
    }
  });
}

function target20(){
  $("#target20 input").attr('disabled', true)
    .css("color","red");
}
