//product 1

var btn = document.getElementById("no");
btn.disabled = true;
function Add(){
    var count = document.getElementById('item');
    var inc = count.innerHTML;
    var btn = document.getElementById("no");
    var price = 8;

    ++inc;
    console.log(inc);
    document.getElementById('item').innerHTML = inc;

    if(inc > 0){
        btn.disabled = false;
    }
    price = price*inc;
    document.getElementById("price").innerHTML = "Price: " + price + " PHP";

}
function Minus(){
    var count = document.getElementById('item');
    var inc = count.innerHTML;
    var btn = document.getElementById('no');
    var price = 8;

    --inc;
    console.log(inc);
    document.getElementById('item').innerHTML = inc;

    price = price*inc;
    document.getElementById("price").innerHTML = "Price: " + price + " PHP";

    if(inc == 1){
        btn.disabled = true;
    }
}

//product 2

var btn1 = document.getElementById("no1");
btn1.disabled = true;

function Add1(){
    var count = document.getElementById('item1');
    var inc = count.innerHTML;
    var btn1 = document.getElementById("no1");
    var price1 = 10;

    ++inc;
    console.log(inc);
    document.getElementById('item1').innerHTML = inc;

    if(inc > 0){
        btn1.disabled = false;
    }
    price1 = price1*inc;
    document.getElementById("price1").innerHTML = "Price: " + price1 + " PHP";

}
function Minus1(){
    var count = document.getElementById('item1');
    var inc = count.innerHTML;
    var btn1 = document.getElementById('no1');
    var price1 = 10;

    --inc;
    console.log(inc);
    document.getElementById('item1').innerHTML = inc;

    price1 = price1*inc;
    document.getElementById("price1").innerHTML = "Price: " + price1 + " PHP";

    if(inc == 1){
        btn1.disabled = true;
    }
}

//product 3

var btn2 = document.getElementById("no2");
btn2.disabled = true;

function Add2(){
    var count = document.getElementById('item2');
    var inc = count.innerHTML;
    var btn2 = document.getElementById("no2");
    var price2 = 25;

    ++inc;
    console.log(inc);
    document.getElementById('item2').innerHTML = inc;

    if(inc > 0){
        btn2.disabled = false;
    }
    price2 = price2*inc;
    document.getElementById("price2").innerHTML = "Price: " + price2 + " PHP";

}
function Minus2(){
    var count = document.getElementById('item2');
    var inc = count.innerHTML;
    var btn2 = document.getElementById('no2');
    var price2 = 25;

    --inc;
    console.log(inc);
    document.getElementById('item2').innerHTML = inc;

    price2 = price2*inc;
    document.getElementById("price2").innerHTML = "Price: " + price2 + " PHP";

    if(inc == 1){
        btn2.disabled = true;
    }
}

// product 4

var btn3 = document.getElementById("no3");
btn3.disabled = true;

function Add3(){
    var count = document.getElementById('item3');
    var inc = count.innerHTML;
    var btn3 = document.getElementById("no3");
    var price3 = 25;

    ++inc;
    console.log(inc);
    document.getElementById('item3').innerHTML = inc;

    if(inc > 0){
        btn3.disabled = false;
    }
    price3 = price3*inc;
    document.getElementById("price3").innerHTML = "Price: " + price3 + " PHP";

}
function Minus3(){
    var count = document.getElementById('item3');
    var inc = count.innerHTML;
    var btn3 = document.getElementById('no3');
    var price3 = 25;

    --inc;
    console.log(inc);
    document.getElementById('item3').innerHTML = inc;

    price3 = price3*inc;
    document.getElementById("price3").innerHTML = "Price: " + price3 + " PHP";

    if(inc == 1){
        btn3.disabled = true;
    }
}

//product 5

var btn4 = document.getElementById("no4");
btn4.disabled = true;

function Add4(){
    var count = document.getElementById('item4');
    var inc = count.innerHTML;
    var btn4 = document.getElementById("no4");
    var price4 = 13;

    ++inc;
    console.log(inc);
    document.getElementById('item4').innerHTML = inc;

    if(inc > 0){
        btn4.disabled = false;
    }
    price4 = price4*inc;
    document.getElementById("price4").innerHTML = "Price: " + price4 + " PHP";

}
function Minus4(){
    var count = document.getElementById('item4');
    var inc = count.innerHTML;
    var btn4 = document.getElementById('no4');
    var price4 = 13;

    --inc;
    console.log(inc);
    document.getElementById('item4').innerHTML = inc;

    price4 = price4*inc;
    document.getElementById("price4").innerHTML = "Price: " + price4 + " PHP";

    if(inc == 1){
        btn4.disabled = true;
    }
}

// product 6

var btn5 = document.getElementById("no5");
btn5.disabled = true;

function Add5(){
    var count = document.getElementById('item5');
    var inc = count.innerHTML;
    var btn5 = document.getElementById("no5");
    var price5 = 6;

    ++inc;
    console.log(inc);
    document.getElementById('item5').innerHTML = inc;

    if(inc > 0){
        btn5.disabled = false;
    }
    price5 = price5*inc;
    document.getElementById("price5").innerHTML = "Price: " + price5 + " PHP";

}
function Minus5(){
    var count = document.getElementById('item5');
    var inc = count.innerHTML;
    var btn5 = document.getElementById('no5');
    var price5 = 6;

    --inc;
    console.log(inc);
    document.getElementById('item5').innerHTML = inc;

    price5 = price5*inc;
    document.getElementById("price5").innerHTML = "Price: " + price5 + " PHP";

    if(inc == 1){
        btn5.disabled = true;
    }
}

//product 7

var btn6 = document.getElementById("no6");
btn6.disabled = true;

function Add6(){
    var count = document.getElementById('item6');
    var inc = count.innerHTML;
    var btn6 = document.getElementById("no6");
    var price6 = 280;

    ++inc;
    console.log(inc);
    document.getElementById('item6').innerHTML = inc;

    if(inc > 0){
        btn6.disabled = false;
    }
    price6 = price6*inc;
    document.getElementById("price6").innerHTML = "Price per box: " + price6 + " PHP";

}
function Minus6(){
    var count = document.getElementById('item6');
    var inc = count.innerHTML;
    var btn6 = document.getElementById('no6');
    var price6 = 280;

    --inc;
    console.log(inc);
    document.getElementById('item6').innerHTML = inc;

    price6 = price6*inc;
    document.getElementById("price6").innerHTML = "Price per box: " + price6 + " PHP";

    if(inc == 1){
        btn6.disabled = true;
    }
}

//product 8

var btn7 = document.getElementById("no7");
btn7.disabled = true;

function Add7(){
    var count = document.getElementById('item7');
    var inc = count.innerHTML;
    var btn7 = document.getElementById("no7");
    var price7 = 200;

    ++inc;
    console.log(inc);
    document.getElementById('item7').innerHTML = inc;

    if(inc > 0){
        btn7.disabled = false;
    }
    price7 = price7*inc;
    document.getElementById("price7").innerHTML = "Price per box: " + price7 + " PHP";

}
function Minus7(){
    var count = document.getElementById('item7');
    var inc = count.innerHTML;
    var btn7 = document.getElementById('no7');
    var price7 = 200;

    --inc;
    console.log(inc);
    document.getElementById('item7').innerHTML = inc;

    price7 = price7*inc;
    document.getElementById("price7").innerHTML = "Price per box: " + price7 + " PHP";

    if(inc == 1){
        btn7.disabled = true;
    }
}

//product 9

var btn8 = document.getElementById("no8");
btn8.disabled = true;

function Add8(){
    var count = document.getElementById('item8');
    var inc = count.innerHTML;
    var btn8 = document.getElementById("no8");
    var price8 = 12;

    ++inc;
    console.log(inc);
    document.getElementById('item8').innerHTML = inc;

    if(inc > 0){
        btn8.disabled = false;
    }
    price8 = price8*inc;
    document.getElementById("price8").innerHTML = "Price: " + price8 + " PHP";

}
function Minus8(){
    var count = document.getElementById('item8');
    var inc = count.innerHTML;
    var btn8 = document.getElementById('no8');
    var price8 = 12;

    --inc;
    console.log(inc);
    document.getElementById('item8').innerHTML = inc;

    price8 = price8*inc;
    document.getElementById("price8").innerHTML = "Price: " + price8 + " PHP";

    if(inc == 1){
        btn8.disabled = true;
    }
}

//product 10

var btn9 = document.getElementById("no9");
btn9.disabled = true;

function Add9(){
    var count = document.getElementById('item9');
    var inc = count.innerHTML;
    var btn9 = document.getElementById("no9");
    var price9 = 12;

    ++inc;
    console.log(inc);
    document.getElementById('item9').innerHTML = inc;

    if(inc > 0){
        btn9.disabled = false;
    }
    price9 = price9*inc;
    document.getElementById("price9").innerHTML = "Price: " + price9 + " PHP";

}
function Minus9(){
    var count = document.getElementById('item9');
    var inc = count.innerHTML;
    var btn9 = document.getElementById('no9');
    var price9 = 12;

    --inc;
    console.log(inc);
    document.getElementById('item9').innerHTML = inc;

    price9 = price9*inc;
    document.getElementById("price9").innerHTML = "Price: " + price9 + " PHP";

    if(inc == 1){
        btn9.disabled = true;
    }
}

//product 11

var btn11 = document.getElementById("no11");
btn11.disabled = true;

function Add11(){
    var count = document.getElementById('item11');
    var inc = count.innerHTML;
    var btn11 = document.getElementById("no11");
    var price11 = 24;

    ++inc;
    console.log(inc);
    document.getElementById('item11').innerHTML = inc;

    if(inc > 0){
        btn11.disabled = false;
    }
    price11 = price11*inc;
    document.getElementById("price11").innerHTML = "Price: " + price11 + " PHP";

}
function Minus11(){
    var count = document.getElementById('item11');
    var inc = count.innerHTML;
    var btn11 = document.getElementById('no11');
    var price11 = 24;

    --inc;
    console.log(inc);
    document.getElementById('item11').innerHTML = inc;

    price11 = price11*inc;
    document.getElementById("price11").innerHTML = "Price: " + price11 + " PHP";

    if(inc == 1){
        btn11.disabled = true;
    }
}

//product 12

var btn12 = document.getElementById("no12");
btn12.disabled = true;

function Add12(){
    var count = document.getElementById('item12');
    var inc = count.innerHTML;
    var btn12 = document.getElementById("no12");
    var price12 = 13;

    ++inc;
    console.log(inc);
    document.getElementById('item12').innerHTML = inc;

    if(inc > 0){
        btn12.disabled = false;
    }
    price12 = price12*inc;
    document.getElementById("price12").innerHTML = "Price: " + price12 + " PHP";

}
function Minus12(){
    var count = document.getElementById('item12');
    var inc = count.innerHTML;
    var btn12 = document.getElementById('no12');
    var price12 = 13;

    --inc;
    console.log(inc);
    document.getElementById('item12').innerHTML = inc;

    price12 = price12*inc;
    document.getElementById("price12").innerHTML = "Price: " + price12 + " PHP";

    if(inc == 1){
        btn12.disabled = true;
    }
}

// product 13

var btn13 = document.getElementById("no13");
btn13.disabled = true;

function Add13(){
    var count = document.getElementById('item13');
    var inc = count.innerHTML;
    var btn13 = document.getElementById("no13");
    var price13 = 13;

    ++inc;
    console.log(inc);
    document.getElementById('item13').innerHTML = inc;

    if(inc > 0){
        btn13.disabled = false;
    }
    price13 = price13*inc;
    document.getElementById("price13").innerHTML = "Price: " + price13 + " PHP";

}
function Minus13(){
    var count = document.getElementById('item13');
    var inc = count.innerHTML;
    var btn13 = document.getElementById('no13');
    var price13 = 13;

    --inc;
    console.log(inc);
    document.getElementById('item13').innerHTML = inc;

    price13 = price13*inc;
    document.getElementById("price13").innerHTML = "Price: " + price13 + " PHP";

    if(inc == 1){
        btn13.disabled = true;
    }
}

//produsct 14

var btn14= document.getElementById("no14");
btn14.disabled = true;

function Add14(){
    var count = document.getElementById('item14');
    var inc = count.innerHTML;
    var btn14 = document.getElementById("no14");
    var price14 = 13;

    ++inc;
    console.log(inc);
    document.getElementById('item14').innerHTML = inc;

    if(inc > 0){
        btn14.disabled = false;
    }
    price14 = price14*inc;
    document.getElementById("price14").innerHTML = "Price: " + price14 + " PHP";

}
function Minus14(){
    var count = document.getElementById('item14');
    var inc = count.innerHTML;
    var btn14 = document.getElementById('no14');
    var price14 = 13;

    --inc;
    console.log(inc);
    document.getElementById('item14').innerHTML = inc;

    price14 = price14*inc;
    document.getElementById("price14").innerHTML = "Price: " + price14 + " PHP";

    if(inc == 1){
        btn14.disabled = true;
    }
}