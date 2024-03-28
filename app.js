// //Q25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// // Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// // Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// //Version that passes
// let alienColor:string = "green";
// if(alienColor == "green"){
//     console.log("You just earned 5 points")
// }
// //Version that fails
// alienColor = "red";
// if(alienColor == "green"){
//     console.log("You just earned 5 points")
// }
// //Q26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// // If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// // If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// // Write one version of this program that runs the if block and another that runs the else block.
// //version that runs the if block
// let alien_colour:string = "green";
// if(alien_colour == "green"){
//     console.log("You  just earned 5 points for shooting the alien")
// }
// else{
//     console.log("You just earn 10 points");
// }
// //version that runs the else block
// alien_colour = "yellow";
// if(alien_colour == "green"){
//     console.log("You  just earned 5 points for shooting the alien")
// }
// else{
//     console.log("You just earn 10 points");
// }
//Q27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//If the alien is green, print a message that the player earned 5 points.
//If the alien is yellow, print a message that the player earned 10 points.
//If the alien is red, print a message that the player earned 15 points.
// Write three versions of this program, making sure each message is printed for the appropriate color alien.
//green alien version
var alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points");
}
else if (alien_color == "red") {
    console.log("You earned 15 points");
}
else {
    console.log("You entered wrong color");
}
//yellow alien verson
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points");
}
else if (alien_color == "red") {
    console.log("You earned 15 points");
}
else {
    console.log("You entered wrong color");
}
//red alien version
alien_color = "red";
if (alien_color == "green") {
    console.log("You earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points");
}
else if (alien_color == "red") {
    console.log("You earned 15 points");
}
else {
    console.log("You entered wrong color");
}
//when we enter wrong color
alien_color = "black";
if (alien_color == "green") {
    console.log("You earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points");
}
else if (alien_color == "red") {
    console.log("You earned 15 points");
}
else {
    console.log("You entered wrong color");
}
