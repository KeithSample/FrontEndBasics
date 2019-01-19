var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '/home/keith/Pictures/hellomook.jpg'){
        myImage.setAttribute ('src', '/home/keith/Pictures/thicc.jpg');
    } else {
        myImage.setAttribute('src','/home/keith/Pictures/hellomook.jpg')
    }
}
var myButton = document.querySelector('button');

function Feed(){
    var food = prompt('What are you gonna feed me?!')
    localStorage.setItem('food', food);
    if (food==="chicken"||food==="whip cream"||food==="peanut butter"||food==="steak")
    {
        alert('NOM NOM NOM!');
    } else {
        alert('YUCKY!')
    }
}

myButton.onclick = function() {
    Feed();
}