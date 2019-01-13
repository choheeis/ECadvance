

  //chrome.extension.getBackgroundPage().date;
  /*
  backgroun page에 현재 창의 object를 반환함.
  */


/*
chrome.runtime.onConnect.addListener(function(port) {

port.onMessage.addListener(function(msg) {
    console.log(msg);
    if (msg.joke == "Knock knock")
      port.postMessage({question: "Who's there?"});
    else if (msg.answer == "Madame")
      port.postMessage({question: "Madame who?"});
    else if (msg.answer == "Madame... Bovary")
      port.postMessage({question: "I don't get it."});

  });
});

chrome.runtime.onConnect.addListener(function(port2) {
port2.onMessage.addListener(function(msg) {
    console.log(msg);
    if (msg.joke == "textarea changed now!")
      port2.postMessage({question: "OK, I will find your str in page!"});
    else if (msg.answer == "Madame")
      port2.postMessage({question: "Madame who?"});
    else if (msg.answer == "Madame... Bovary")
      port2.postMessage({question: "I don't get it."});

  });
});*/
/* When the browser-action button is clicked... */
/*chrome.browserAction.onClicked.addListener(function(tab) {
    /*...check the URL of the active tab against our pattern and... */
  /*  if (urlRegex.test(tab.url)) {
        /* ...if it matches, send a message specifying a callback too */
    /*    chrome.tabs.sendMessage(tab.id, { text: "report_back" },
                                doStuffWithDOM);


/*chrome.runtime.onMessage.addListener(message) ;
  function message(message, sender, sendResponse){
  if(message.popupOpen) {console.log('test');
alert('test');}
};


chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.create({"url": request.url});
    }
  }
);*/
//이 파일이 모든 API에 접근할 수 있음 ( content는 제한되는데 그걸 도와줌 )
//chrome.tabs는 background파일에서만 사용할 수 있음.                                                                                 세지를 보냄. 그럼 content.js가 URL을 다시 여기로 보내줌.
//그리고 나서 이 파일이 주어진 URL의 페이지를 엶.
/*chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse){
         if( request.message === "start" ){
          start();
        }else{
          alert('no');
        }
      }
    });

    function start()
      {
          alert('started');
      */
/*chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
         if( request.message === "start" ){
alert('test');

         }
         else if(request.message==="search"){
         alert("search" + request.object);
      }
    );

    function start()
      {
          alert('started');
      }*/
      // chrome.runtime.onMessage.addListener(
//       function(request, sender, sendResponse) {
//          if( request.message === "start" ){
//
//            start();
//          }
//       }
//     );
//
//     function start()
//       {
//           alert("started");
//       }
// 저 test가실행이 안되는거 보니까 메시지를 못 주는 것 같은데.
