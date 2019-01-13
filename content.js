
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){


 var message = request.message;
  if(message != " "){

  console.log(message);
  var href = $(":contains("+message+")");
  $(":contains("+message+")").css("color","red");
  console.log(href);

  if(href.length != 0) {
    href.click();
     // alert("검색어를 찾을 수 없습니다.");
     // 김초밥 자ㅡ살
  }else{
    alert("검색어를 찾을 수 없습니다.");
  }
}


  /*  const url = window.location.shref;
    //console.log(usrl);
    const request = new XMLHttpRequest();
    request.open('GET',url, true);
    request.onload = function () {
    var html = request.responseText;
    /*

 var position = new Array();
    var pos = html.indexOf(message);

    while(pos > -1){
        position.push(pos);
        pos =  html.indexOf(message, pos + 1);
    }
console.log(position);


var front_html = html.substring(0,position[1]+1);
var reverse_html = front_html.split("").reverse().join("");
s
console.log(html);
console.log('=======');
console.log(reverse_html);

var ferh_index = reverse_html.indexOf('ferh');
if(ferh_index != -1){
  var href_index = position[1]-ferh_index-3;
  console.log(ferh_index);
  console.log(href_index);
}else{
  console.log("하이퍼링크 없음");
}
*/
//console.log(html);
//};
//request.send();



});
