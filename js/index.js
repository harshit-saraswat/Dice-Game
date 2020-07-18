function getRandomInteger(min=1, max=6) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeDice(imageClass){
    const randNum=getRandomInteger();
    document.querySelector('.'+imageClass).setAttribute("src","images/dice"+randNum+".png");
    return randNum;
}

function changeTitle(winnerName){
    let text;
    if(winnerName==1){
        text='🚩Player 1 Wins!';
    }else if(winnerName==2){
        text='Player 2 Wins!🚩';
    }else{
        text='🚩Draw!🚩';
    }
    document.querySelector('h1').innerHTML=text;
}