window.addEventListener('load', init);

function init(){
    document.querySelector('#c1').addEventListener('click', correct1);
    document.querySelector('#c2').addEventListener('click', correct2);
    document.querySelector('#c3').addEventListener('click', correct3);
    document.querySelector('#c4').addEventListener('click', correct4);
    document.querySelector('#c5').addEventListener('click', correct5);
    document.querySelector('#c6').addEventListener('click', correct6);
    document.querySelector('#w1a').addEventListener('click', wrong1);
    document.querySelector('#w1b').addEventListener('click', wrong1);
    document.querySelector('#w2a').addEventListener('click', wrong2);
    document.querySelector('#w2b').addEventListener('click', wrong2);
    document.querySelector('#w3a').addEventListener('click', wrong3);
    document.querySelector('#w3b').addEventListener('click', wrong3);
    document.querySelector('#w4a').addEventListener('click', wrong4);
    document.querySelector('#w4b').addEventListener('click', wrong4);
    document.querySelector('#w5a').addEventListener('click', wrong5);
    document.querySelector('#w5b').addEventListener('click', wrong5);
    document.querySelector('#w6a').addEventListener('click', wrong6);
    document.querySelector('#w6b').addEventListener('click', wrong6);
}

function correct1(){
    document.querySelector('#ar1').textContent = "Correct!";
}
function correct2(){
    document.querySelector('#ar2').textContent = "Correct!";
}
function correct3(){
    document.querySelector('#ar3').textContent = "Correct!";
}
function correct4(){
    document.querySelector('#ar4').textContent = "Correct!";
}
function correct5(){
    document.querySelector('#ar5').textContent = "Correct!";
}
function correct6(){
    document.querySelector('#ar6').textContent = "Correct!";
}

function wrong1(){
    document.querySelector('#aw1').textContent = "Wrong! The answer is newtons third law. While rockets do utilise bernoulli's principle, it is newtons third law that allows them to move.";
}
function wrong2(){
    document.querySelector('#aw2').textContent = "Wrong! The correct answer is F=ma";
}
function wrong3(){
    document.querySelector('#aw3').textContent = "Wrong! The answer is that they are shaped in a way to accelerate the hot gasses.";
}
function wrong4(){
    document.querySelector('#aw4').textContent = "Wrong! The answer is the fluid speeds up.";
}
function wrong5(){
    document.querySelector('#aw5').textContent = "Wrong! The answer is they use a special cooling technique.";
}
function wrong6(){
    document.querySelector('#aw6').textContent = "Wrong! The answer is a measure of how efficient a rocket engine is.";
}
