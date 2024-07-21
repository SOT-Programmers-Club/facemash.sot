document.addEventListener('DOMContentLoaded', () => {
    leftNum = getImage();
    rightNum = getImage();
    
    // Ensure leftNum and rightNum are not the same
    while (rightNum === leftNum) {
        rightNum = getImage();
    }
    
    left.setAttribute('src', `img/${leftNum}.png`);
    right.setAttribute('src', `img/${rightNum}.png`);
});

left.addEventListener('click', function () {
    let newRightNum;
    do {
        newRightNum = getImage();
    } while (newRightNum === leftNum);
    rightNum = newRightNum;
    right.setAttribute('src', `img/${rightNum}.png`);
});

right.addEventListener('click', function () {
    let newLeftNum;
    do {
        newLeftNum = getImage();
    } while (newLeftNum === rightNum);
    leftNum = newLeftNum;
    left.setAttribute('src', `img/${leftNum}.png`);
});

function getImage() {
    return Math.ceil(Math.random() * 783);
}
