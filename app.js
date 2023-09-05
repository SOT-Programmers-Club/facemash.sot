let left = document.getElementById('left');
let right = document.getElementById('right');

var leftNum;
var rightNum;

left.addEventListener('click', function () {
    rightNum = getImage();
    right.setAttribute('src', `img/${rightNum}.png`)
});
right.addEventListener('click', function () {
    leftNum = getImage();
    left.setAttribute('src', `img/${leftNum}.png`)
});

function getImage() {
    let zero = '0';
    let number = Math.ceil((Math.random() * 425));
    console.log(number)
    if (number != 10) { // creating the file number by adding zeroW
        number = number;
    }

    if (number != leftNum && number != rightNum) {
        return number;
    } else {
        return getImage();
    }
}
