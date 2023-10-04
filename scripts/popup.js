function showPopup(text, x, y) {
    const popupContainer = document.getElementById('popup-container');
    console.log(popupContainer);

    popupContainer.id = 'popup-container';
    popupContainer.style.display = 'block';
    popupContainer.style.left = x;
    popupContainer.style.top = y;
    popupContainer.textContent = text;
}

function hidePopup() {
    console.log("it works!!!!!");
    const popupContainer = document.getElementById('popup-container');
    console.log(popupContainer);
    popupContainer.style.display = 'none';
    popupContainer.textContent = '';
}