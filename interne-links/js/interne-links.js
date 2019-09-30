var graka = document.getElementById("grakaContent");
var cpu = document.getElementById("cpuContent");
var netzteil = document.getElementById("netzteilContent");
var ram = document.getElementById("ramContent");
var festplatte = document.getElementById("festplatteContent");
var mainboard = document.getElementById("mainboardContent");
var gehause = document.getElementById("gehauseContent");
var button1 = document.getElementById ("cpuButton");
var button2 = document.getElementById ("grakaButton");
var button3 = document.getElementById ("netzteilButton");
var button4 = document.getElementById ("ramButton");
var button5 = document.getElementById ("festplatteButton");
var button6 = document.getElementById ("mainboardButton");
var button7 = document.getElementById ("gehauseButton");

function closeALL() {
 cpu.classList.remove("open");
 graka.classList.remove("open");
 netzteil.classList.remove("open");
 ram.classList.remove("open");
 festplatte.classList.remove("open");
 mainboard.classList.remove("open");
 gehause.classList.remove("open");
 button1.classList.remove("active");
 button2.classList.remove("active");
 button3.classList.remove("active");
 button4.classList.remove("active");
 button5.classList.remove("active");
 button6.classList.remove("active");
 button7.classList.remove("active");
}


button1.onclick = function() {

 if(cpu.classList.contains("open")){
   cpu.classList.remove("open");
   button1.classList.remove("active");

 } else {
   closeALL();
   cpu.classList.add("open");
   button1.classList.add("active");
 }

};

button2.onclick = function() {

 if(graka.classList.contains("open")){
   graka.classList.remove("open");
   button2.classList.remove("active");
 } else {
   closeALL();
   graka.classList.add("open");
   button2.classList.add("active");
 }

};


button3.onclick = function() {

 if(netzteil.classList.contains("open")){
   netzteil.classList.remove("open");
   button3.classList.remove("active");
 } else {
   closeALL();
   netzteil.classList.add("open");
   button3.classList.add("active");
 }

};

button4.onclick = function() {

 if(ram.classList.contains("open")){
   ram.classList.remove("open");
   button4.classList.remove("active");
 } else {
   closeALL();
   ram.classList.add("open");
   button4.classList.add("active");
 }

};

button5.onclick = function() {

 if(festplatte.classList.contains("open")){
   festplatte.classList.remove("open");
   button5.classList.remove("active");
 } else {
   closeALL();
   festplatte.classList.add("open");
   button5.classList.add("active");
 }

};

button6.onclick = function() {

 if(mainboard.classList.contains("open")){
   mainboard.classList.remove("open");
   button6.classList.remove("active");
 } else {
   closeALL();
   mainboard.classList.add("open");
   button6.classList.add("active");
 }

};

button7.onclick = function() {

 if(gehause.classList.contains("open")){
   gehause.classList.remove("open");
   button7.classList.remove("active");
 } else {
   closeALL();
   gehause.classList.add("open");
   button7.classList.add("active");
 }

};
