/**
 * Created by sstienface on 07/10/2018.
 */
document.getElementById("buttons").addEventListener("click", someFunction);
document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 38:
            event.target.id = "up"
            someFunction(event)
            break;
        case 39:
            event.target.id = "right"
            someFunction(event)
            break;
        case 40:
            event.target.id = "down";
            someFunction(event)
            break;
        case 37:
            event.target.id = "left"
            someFunction(event)
            break;

    }
}

var die = 1;


function kennyDie() {
    var kenny = document.getElementById('kenny');
    kenny.style.top = "200px";
    kenny.style.left = "200px";
    alert('Kenny is dead ! Count : ' + die++)
}

function someFunction(event) {
    const key = event.target.id;
    var posX = document.getElementById('no-kenny-land').offsetLeft;
    var kenny = document.getElementById('kenny');
    var viewportW = document.getElementById('viewport').offsetWidth,
        viewportH = document.getElementById('viewport').offsetHeight
    console.log(viewportH)
    switch (key) {
        case 'up':
            var t = parseInt(kenny.style.top);
            if (t <= 0) return
            t = t - 10;
            kenny.style.top = t + 'px'
            break;
        case 'down':
            var b = parseInt(kenny.style.top);
            if (b >= (viewportH - 40)) return
            b = b + 10;
            kenny.style.top = b + 'px'
            break;
        case 'left':
            var l = parseInt(kenny.style.left);
            if (posX == 0) {
                if (l <= (posX + 50)) {
                    kennyDie()
                    return;
                } else {
                    l = l - 10;
                    kenny.style.left = l + 'px'
                }
            } else {
                if (l <= 0) return;
                l = l - 10;
                kenny.style.left = l + 'px'
            }

            break;
        case 'right':
            var r = parseInt(kenny.style.left);
            if (posX != 0) {
                if (r >= posX) {
                    kennyDie()
                    return;
                } else {
                    r = r + 10;
                    kenny.style.left = r + 'px'
                }
            } else {
                if (r >= (viewportW - 40)) return
                r = r + 10;
                kenny.style.left = r + 'px'
            }
            break;
        default:
            return;
    }
}

document.getElementById("switch-side").addEventListener("click", switchSide);

function switchSide() {
    var kenny = document.getElementById('kenny');
    kenny.style.top = "200px";
    kenny.style.left = "200px";
    var noKennyLand = document.getElementById('no-kenny-land');
        if (noKennyLand.style.marginLeft == "auto") {
            noKennyLand.style.marginLeft = "0px";
            noKennyLand.style.marginRight = "auto";
        } else {
            noKennyLand.style.marginRight = "0px";
            noKennyLand.style.marginLeft = "auto";
        }
}