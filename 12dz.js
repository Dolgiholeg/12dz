
let but1 = document.getElementById('but1')
let but2 = document.getElementById('but2')
let but3 = document.getElementById('but3')
function f1() {
    let di = document.getElementById('di').value;
    let tm = document.getElementById('tm').value;
    document.getElementById('out').innerHTML = di/tm;

}
but1.onclick = f1

function f2() {
    let money = document.getElementById('money').value;
    let price = document.getElementById('price').value;
    document.getElementById('out1').innerHTML = Math.floor(money/price);
    document.getElementById('out2').innerHTML = money - Math.floor(money/price)*price;

}
but2.onclick = f2

function f3() {
    let dollars = document.getElementById('dollars').value;
    let k = 0.92;
    document.getElementById('out3').innerHTML = dollars*k;

}
but3.onclick = f3