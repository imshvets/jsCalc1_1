/**
 * Created by admin on 09.02.17.
 */

var number1 = "";
var number2 = "";
var global = "";
var result = "";
var znak = "";

var btn1 = document.getElementById("one");
var btn2 = document.getElementById("two");
var btn3 = document.getElementById("three");
var btn4 = document.getElementById("four");
var btn5 = document.getElementById("five");
var btn6 = document.getElementById("six");
var btn7 = document.getElementById("seven");
var btn8 = document.getElementById("eight");
var btn9 = document.getElementById("nine");
var btn0 = document.getElementById("zero");

var btnPlus = document.getElementById("plus");
var btnMinus = document.getElementById("minus");
var btnX = document.getElementById("multi");
var btnDev = document.getElementById("dev");

var btnIs = document.getElementById("is");
var btnKoma = document.getElementById("koma");
var btnC = document.getElementById("clearr");
var btnPlMin = document.getElementById("plusminus");


window.onload = function () {

  btn1.addEventListener("click", function () {add(1)}, false);
  btn2.addEventListener("click", function () {add(2)}, false);
  btn3.addEventListener("click", function () {add(3)}, false);
  btn4.addEventListener("click", function () {add(4)}, false);
  btn5.addEventListener("click", function () {add(5)}, false);
  btn6.addEventListener("click", function () {add(6)}, false);
  btn7.addEventListener("click", function () {add(7)}, false);
  btn8.addEventListener("click", function () {add(8)}, false);
  btn9.addEventListener("click", function () {add(9)}, false);
  btn0.addEventListener("click", function () {if (global != 0) add(0);}, false);

  btnKoma.addEventListener("click", function () {
    if (global.indexOf(".") == -1 && global == "") add("0.");
    else if (global.indexOf(".") == -1) add(".");
  }, false);

  btnPlus.addEventListener("click", function () {action(1)}, false);
  btnMinus.addEventListener("click", function () {action(2)}, false);
  btnX.addEventListener("click", function () {action(3)}, false);
  btnDev.addEventListener("click", function () {action(4)}, false);

  btnC.addEventListener("click", function () {clearr()}, false);
  btnPlMin.addEventListener("click", function () {plusminus()}, false);
  btnIs.addEventListener("click", function () {is()}, false);



}

function add(a) {
  global += a;
  fSize(global);
  document.getElementById("res").innerHTML = global;
}

function action(z) {
  if (znak != "" && z != znak && number1 != ""){
    is();
    znak = z;
    vivodznaka();
    return;

  }
  znak = z;
  if (number1 != ""){
    is();
    vivodznaka();
    return;
  }
  number1 = +global;
  global = "";
  vivodznaka();
}


function is() {
  number2 = +global;
  switch (znak){
    case 1:
      result = number1 + number2;
      break;
    case 2:
      result = number1 - number2;
      break;
    case 3:
      result = number1 * number2;
      break;
    case 4:
      if (number2 == 0) {
        clearr();
        document.getElementById("res").innerHTML = "ERROR: dev0";
        return;
      }
      else result = number1/number2;
      break;
  }
  global = "";
  number1 = result;
  document.getElementById("res").innerHTML = result;
  fSize("\"" + result + "\"");
}

function clearr() {
  znak = "";
  number1 = "";
  number2 = "";
  global = "";
  result = "";
  vivodznaka();
  document.getElementById("res").innerHTML = "0";
  document.getElementById("res").style.fontSize = "35px";

}

function plusminus() {
  if (result != "") {
    global = -result;
    znak = "";
    number1 = "";
  }
  else global = -global;
  document.getElementById("res").innerHTML = global;
}

function vivodznaka() {
  switch (znak){
    case 1:
      document.getElementById("sub").innerHTML = "+";
      break;
    case 2:
      document.getElementById("sub").innerHTML = "-";
      break;
    case 3:
      document.getElementById("sub").innerHTML = "*";
      break;
    case 4:
      document.getElementById("sub").innerHTML = "/";
      break;
    default:
      document.getElementById("sub").innerHTML = "";

  }
}

function fSize(a) {
  if (a.length > 10) document.getElementById("res").style.fontSize = 44 - a.length*1.2 + "px";
  else document.getElementById("res").style.fontSize = "35px";

}
