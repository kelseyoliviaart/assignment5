var food = "pizza" ;
var snacks= [ "pizza", "chips", "donuts"] ;
console.log(snacks[0]);
console.log(snacks[1]);
console.log(snacks.length);
console.log(food.length);
/* arrays are really good for image galleries-make a list of images
ex: var images= ["landscape.jpg", "plane.jpg", "schoolphoto.jpg"]
*/
var person={
    name: "max",
    phone: "1-800-mga-babe",
    height: 160
}
console.log(person.name);

//you have to add the "" symbols if mixing numbers and characters, but dont need to use the quotes 
//if all characters are the same type: eg: all numbers like in the height line.
var images=[{imagename:"landscape.jpg", width:200}, {imagename:"plane.jpg", width:200},{imagename:"schoolphoto.jpg", width:200}];
console.log(images[0]);
images[0].imagename;
images[1].width;

var likespizza= true
//true and false you dont need "" bc its a boolean
if (likespizza) {
    alert("then i like you")
} else { alert("you don't like pizza i don't like you")}

var likespizza=false
if (likespizza) {
    alert("then i like you")
} else { alert("you don't like pizza i don't like you")}


//function-is a result of what happens when you click on something, or scroll, etc-an action
var doyoulikepizza= function (answer) {
    alert(answer)
}
doyoulikepizza("i love pizza")

var add= function (number1, number2) {
    console.log(number1 + number2)
}
add(3,5)

var subtract=function(number1,number2) {
    console.log(number1 - number2)
}
subtract(5,2)


