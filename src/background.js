chrome.runtime.onConnect.addListener((port) => {
  console.assert(port.name === "tChannel");
  port.onMessage.addListener(async (msg) => {
    if (msg.request === "translateText") {
      console.log(msg.content);
      port.postMessage({response: 'hellooooo the connection is stable'})
    }
});
});