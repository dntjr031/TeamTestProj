function target02(){
  $("#target02").find("span").html("바꿈요");
}

function target04(){
  $("#parentdiv").find(".target04").eq(1)
    .css("background","skyblue");
}

function target06(){
  $(".target06").find("input[type=checkbox]")
    .each(function(){
      $(this).prop("checked", false);
    });
}

function target08(){
  $(".target08").find("option:eq(1)").prop("selected", true);
}

function target10(){
  $("#target10").find("option:even").each(function(){
    $(this).css("background","skyblue");
  });
}

function target12(){
  $(".target12").each(function(){
    var len = $(this).children().length;
    if(len == 0){
      $(this).hide();
    }
  });
}

function target14(){
  var row1 = $("#target14").find("tr:eq(0)").html();
  var row2 = $("#target14").find("tr:eq(1)").html();

  $("#target14").find("tr:eq(0)").html(row2);
  $("#target14").find("tr:eq(1)").html(row1);

}
