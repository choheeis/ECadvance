//이 file은 popup.html에서 넘어온 파일이니까 popup창을 다루는 file임.

document.addEventListener('DOMContentLoaded', function() {
document.getElementById('textInput').focus();
  document.getElementById("findButton").addEventListener("click", buttonClickHandler);
  document.getElementById("textInput").addEventListener("keydown", keyupHandler);
    document.getElementById("textInput").addEventListener("change", textAreaChangeHandler);
});

/*function textAreaChangeHandler(){
chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
     var activeTab = tabs[0];
   chrome.tabs.sendMessage(activeTab.id, {"message" : document.getElementById("textInput").value});
 });
}*/

function buttonClickHandler() {
/*
팝업창의 console에 나타남.
*/
chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
/*
chrome.tabs.query : 해당 조건을 만족시키는 모든 탭을 get하고 callback함수 실햄.
object - currentWindow : 현재 이 코드가 실행되고 있는 창
*/
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { "message" : document.getElementById("textInput").value});
    /*
    activeTab.id 탭의 content.js로 메시지를 보냄.
    popup의 button object에도 이 메시지를 보냄
    runtime.onMessage가 content file에 있어야함.
    */
  });
}

function keyupHandler(event){
      if(event.keyCode===13){
         document.getElementById("findButton").click();
        }

}
