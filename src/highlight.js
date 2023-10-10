// Define a CSS class for the highlighted text
const highlightClass = "highlighted-text";

// Declare variables to hold text data
var highlightExists = false;

let highlightedRanges = [];
let originalContent = [];

// console.log(API_KEY_GOOGLE);

// Listen for mouseup event to detect text selection

const popupWrapper = document.createElement('div');
document.body.append(popupWrapper);


document.addEventListener("mouseup", function(event) {
  const selection = window.getSelection();
  console.log(event.target.className);
  if (highlightExists && selection.isCollapsed && !event.target.className.includes('popup')) {
    removePopups();
    // range.deleteContents();
    // range.insertNode(htmlContent);
    highlightExists = false;
  } 

  else if (!selection.isCollapsed) {
      const range = selection.getRangeAt(0);
      const htmlContent = range.cloneContents();
      const highlightedText = range.toString();


      // Create a <span> element to wrap the highlighted text
      const spanElement = document.createElement("span");
      spanElement.className = highlightClass;
      spanElement.textContent = highlightedText;

      const coordX = event.clientX + window.scrollX;
      const coordY = event.clientY + window.scrollY;

      range.deleteContents();

      range.insertNode(spanElement);     
      createPopup(highlightedText,coordX,coordY);

      highlightedRanges.push(range);
      originalContent.push(htmlContent);

      highlightExists = true;

      // Clear the selection
      selection.removeAllRanges();
  }
}
);  

const inputText = 'Hello, world!';

async function translateText(text) {
  const API_KEY = key;
  const requestURL = 'https://translation.googleapis.com/language/translate/v2?key='+API_KEY;
  console.log(requestURL);
    // Construct request
    // const request = {
    //     method: "POST",      
    //     contents: [text],
    //     mimeType: 'text/plain', // mime types: text/plain, text/html
    //     sourceLanguageCode: 'en',
    //     targetLanguageCode: 'es',
    // };

    const request = {     
      "method": "POST",
      "mode": 'no-cors',
      "headers": {
        "q": [text],
        "target": 'ru'
      }
  };

    // Run request
    const [response] = await fetch(requestURL,
      request);

      console.log(response);
}

translateText(inputText);
