for (var i = 0; i<10; i++){
    console.log("Vlera e variables i eshte:"+i);
}

console.log("------------------------------------");

var person = {firstname:"Jon", lastname:"Zuka", age:15};
var text = "";
var z;

for(z in person){
    text += person[z];
}

console.log(text);
console.log("--------------------------------------")

var names = ['Jon','Anik', 'Enes', 'Adonis', 'Blendi', 'Gerti'];
var x;

for (x of names){
    document.write(x+"<br>");

}

var a = 0;
do {
    a += 1;
    console.log(a);
}
while (a<5);

console.log("--------------------------------------");

var b = 0;
while (b<3){
    b += 1;
}

console.log (b);

var d = [1,2,3,4,5]
for (var c = 0; c < d.length; c++){
    console.log(c);
}
