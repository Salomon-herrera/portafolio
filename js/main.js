//TypeWrite Effect
let myText = document.querySelector('#subtitle');
let words = ['Data Analisis', 'developer','RPA Automatizacion'];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function () {
        if(word.length > 0) {
            myText.innerHTML += word.shift();
        }else {
            deletingEffect();
            return false;
        }
        timer = setTimeout(loopTyping, 300);
    }
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function () {
        if(word.length > 0) {
            word.pop();
            myText.innerHTML = word.join("");
        }else {
            if (words.length > (i +1)) {
                i++;
            }else {
                i =0;
            }
            typingEffect();
            return false;
        }
        timer = setTimeout(loopDeleting, 200);
    }
    loopDeleting();
}

typingEffect();