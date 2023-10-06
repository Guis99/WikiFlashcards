function createPopup(text, x, y) {
    // const popupContainer = document.getElementsByClassName('popup-container')[0];
    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';

    popupContainer.style.display = 'block';
    popupContainer.style.left = x + 'px';
    popupContainer.style.top = y + 'px';


    const popupDeleter = document.createElement('div');
    popupDeleter.className = 'close';
    popupDeleter.textContent = 'close'
    popupDeleter.onclick = closePopup;

    popupContainer.appendChild(popupDeleter);

    const headerContainer = document.createElement('div');
    headerContainer.className = 'popup-header';
    headerContainer.textContent = text;

    popupContainer.appendChild(headerContainer);

    document.body.append(popupContainer);
}

function removePopup() {
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
    console.log('close popup');
    this.parentNode.remove();
}
