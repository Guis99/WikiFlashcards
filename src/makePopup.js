function createPopup(text, x, y) {
    // const popupContainer = document.getElementsByClassName('popup-container')[0];
    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';

    popupContainer.style.display = 'block';
    popupContainer.style.left = x + 'px';
    popupContainer.style.top = y + 'px';


    const popupDeleter = document.createElement('div');
    popupDeleter.className = 'popup-close';
    popupDeleter.textContent = 'close'
    popupDeleter.onclick = closePopup;

    popupContainer.appendChild(popupDeleter);

    const headerContainer = document.createElement('div');
    headerContainer.className = 'popup-header';
    headerContainer.textContent = text;

    popupContainer.appendChild(headerContainer);

    popupWrapper.appendChild(popupContainer);
}

function removePopups() {
    const popupContainers = document.getElementsByClassName('popup-container');

    for (var i=popupContainers.length-1; i>=0; i-=1){
        popupContainers[i].remove();
        highlightedRanges[i].deleteContents();
        highlightedRanges[i].insertNode(originalContent[i]);
    }

    highlightedRanges = [];
    originalContent = [];
}

function closePopup() {
    var curr = this.parentNode;
    var popupIdx = 0;
    while (curr.previousElementSibling != null) {
        popupIdx++;
        curr = curr.previousElementSibling;
    }

    highlightedRanges[popupIdx].deleteContents();
    highlightedRanges[popupIdx].insertNode(originalContent[popupIdx]);

    highlightedRanges.splice(popupIdx,1);
    originalContent.splice(popupIdx,1);
    this.parentNode.remove();
}
