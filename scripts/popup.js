function showPopup(text, x, y) {
    const popupContainer = document.getElementById('popup-container');
    // const popupContainer = document.createElement('span');
    // popupContainer.id = 'popup-container';
    console.log(popupContainer);

    popupContainer.style.display = 'block';
    popupContainer.style.left = x+window.scrollX+'px';
    popupContainer.style.top = y+window.scrollY+'px';
    popupContainer.textContent = text;

    popupContainer;
}

function hidePopup() {
    console.log("it works!!!!!");
    const popupContainer = document.getElementById('popup-container');
    console.log(popupContainer);
    popupContainer.style.display = 'none';
    popupContainer.textContent = '';
}