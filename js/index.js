function getRandomInteger(min=1, max=6) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeDice(imageClass){
    const randNum=getRandomInteger();
    document.querySelector('.'+imageClass).setAttribute("src","images/dice"+randNum+".png");
}