var i = 0;
var txts = [];
var speed = 50;

function typeWriter(skillIndex) { //make txt a parameter
    let codeElement = document.getElementsByClassName('skillCode')[skillIndex];
    if (i < txts[skillIndex].length && i > -1) {
        if (txts[skillIndex].charAt(i) == '_') {
            codeElement.innerHTML += '<br>';
            i++;
            typeWriter(skillIndex);
        } else if (txts[skillIndex].charAt(i) == '@') {
            codeElement.innerHTML += '&nbsp';
            i++;
            typeWriter(skillIndex);
        } else if (txts[skillIndex].charAt(i) == ' ') {
            codeElement.innerHTML += txts[skillIndex].charAt(i);
            i++;
            typeWriter(skillIndex);
        }
        else {
            codeElement.innerHTML += txts[skillIndex].charAt(i);
            i++;
            setTimeout(function () { typeWriter(skillIndex) }, speed);
        }
    }
}

function resetTypeWriter(skillIndex) {
    var codeElement = document.getElementsByClassName('skillCode')[skillIndex];
    codeElement.innerHTML = '';
    i = -1; //stop typing
}

let skillBackgrounds = document.getElementsByClassName('skillBackground');
let skillCodes = document.getElementsByClassName('skillCode');
for (let skillIndex = 0; skillIndex < skillBackgrounds.length; skillIndex++) {

    let codeElement = skillCodes[skillIndex];
    let backgroundElement = skillBackgrounds[skillIndex];
    let beforeElement = document.createElement("div");

    let code = codeElement.innerHTML.toString();
    let codeArray = code.split(' ');
    let fillteredCodeArray = codeArray.filter(function (x) {
        return (x != '<!--' && x != '-->\n');
    });
    txts.push(fillteredCodeArray.join(' '));
    codeElement.innerHTML = '';

    beforeElement.style = "ontent: \'\'; position: absolute; background-size: cover; filter: opacity(100%) drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.2)); transition: all ease 0.5s";

    let width = backgroundElement.computedStyleMap().get('width');
    let height = backgroundElement.computedStyleMap().get('height');
    if (width == 'auto' || height == 'auto') {
        beforeElement.style.width = '200px';
        beforeElement.style.height = '200px';
    } else {
        beforeElement.style.width = backgroundElement.computedStyleMap().get('width');
        beforeElement.style.height = backgroundElement.computedStyleMap().get('height');
    }
    beforeElement.style.backgroundImage = codeElement.computedStyleMap().get('background-image');

    backgroundElement.before(beforeElement);

    backgroundElement.addEventListener("mouseover", function () {
        i = 0;
        beforeElement.style.filter = "opacity(50%) drop-shadow(0px 20px 5px rgba(0, 0, 0, 0.2))";
        beforeElement.style.transform = "translateY(-10px)";
        codeElement.style.transform = "translateY(-10px)";
        setTimeout(function () { typeWriter(skillIndex) }, 500);
    });
    backgroundElement.addEventListener("mouseout", function () {
        i = 0;
        beforeElement.style.filter = "opacity(100%) drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.2))";
        beforeElement.style.transform = "translateY(10px)";
        codeElement.style.transform = "translateY(10px)";
        resetTypeWriter(skillIndex);
    });
}




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.padding = '0px';
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = '40px';
        }
    });
}
