// Define a CSS class for the highlighted text
const highlightClass = "highlighted-text";

// Declare variables to hold text data
var highlightExists = false;
var range;
var highlightedText;
var htmlContent;
var selection;

const popupContainer = document.createElement('span');
popupContainer.id = 'popup-container';
popupContainer.textContent = '';
document.body.append(popupContainer);

// Listen for mouseup event to detect text selection
document.addEventListener("mouseup", function(event) {
  if (highlightExists) {
    hidePopup();
    range.deleteContents();
    range.insertNode(htmlContent);
    highlightExists = false;
  } 
  
  else {
    selection = window.getSelection();
    if (!selection.isCollapsed) { 
      range = selection.getRangeAt(0);
      htmlContent = range.cloneContents();
      highlightedText = range.toString();


      // Create a <span> element to wrap the highlighted text
      const spanElement = document.createElement("span");
      spanElement.className = highlightClass;
      spanElement.textContent = highlightedText;

      console.log(event.clientX);
      console.log(event.clientY);

      // Replace the selected range with the <span> element
      range.deleteContents();
      range.insertNode(spanElement);
      showPopup(highlightedText,event.clientX,event.clientY);
      // range.insertNode(popupContainer);

      highlightExists = true;

      // Clear the selection
      selection.removeAllRanges();
    }
  }
});  