//Create an empty array
let students = [];

//Prompt and store user input 5 times to HTML element
while (students.length < 5) {
//move through the array one position at a time    
let studentNumber = students.length + 1;
    let response = prompt(`What is the name of the student?`);
        students.push(response);
//Insert to HTML
document.getElementById("names").append (`The name of student ${studentNumber} is ${response}`);
//Break element apart into vertical list
    document.getElementById("names").innerHTML += ("</br>");
}
let alpha = students.sort();

//Repeat 5 times
for (let i = 1; i < 6; i++){
    document.getElementById("ordered_names").append (`The name of student ${i} is ${alpha[i-1]}`);
        document.getElementById("ordered_names").innerHTML += ("</br>");
};


