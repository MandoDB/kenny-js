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

    var kenny = document.getElementById('kenny');
    switch (key) {
        case 'up':
            var t = parseInt(kenny.style.top);
            if (t <= 0) return
            t = t - 10;
            kenny.style.top = t + 'px'
            break;
        case 'down':
            var b = parseInt(kenny.style.top);
            if (b >= 470) return
            b = b + 10;
            kenny.style.top = b + 'px'
            break;
        case 'left':
            var l = parseInt(kenny.style.left);
            if (l <= 60) {
                kennyDie();
                return;
            }
            l = l - 10;
            kenny.style.left = l + 'px'
            break;
        case 'right':
            var r = parseInt(kenny.style.left);
            if (r >= 470) return
            r = r + 10;
            kenny.style.left = r + 'px'
            break;
        default:
            return;
    }
}