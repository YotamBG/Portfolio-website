var i = 0;
var txt = '__<!DOCTYPE html>__<html>__<body>__<h1>My First Heading</h1>_<p>My first paragraph.</p>__</body>__</html>';
var speed = 50;

function typeWriter() {
    console.log('in!');
    if (i < txt.length) {
        if(txt.charAt(i) == '_'){
            document.getElementsByClassName("htmlP")[0].innerHTML += '<br>'
        }else{
            document.getElementsByClassName("htmlP")[0].innerHTML += txt.charAt(i);
        }
        i++;
        setTimeout(typeWriter, speed);
    }
}

function resetTypeWriter(){
    console.log('out!');
    document.getElementsByClassName("htmlP")[0].innerHTML = '';
    i=0;
}

document.getElementsByClassName('htmlCode')[0].addEventListener("mouseenter", typeWriter);
document.getElementsByClassName('htmlCode')[0].addEventListener("mouseleave", resetTypeWriter);