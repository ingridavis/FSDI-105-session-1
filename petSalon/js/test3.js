var students=[
    {name:"Michael", ch:"cohort 11", photo:"https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png"},
    {name:"Mesaye", ch:"Cohort 5", photo:"https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png"},
    {name:"Colin", ch:"cohort 11", photo:"https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png"},
    {name:"Miguel", ch:"cohort 6", photo:"https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png"},
    {name:"Ingrid", ch:"cohort 7", photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGmr0ensRMK_eJTscn3JSLeF7PL1hUr1l96A&usqp=CAU"},
]

console.log(students.length);
console.log(students[2].name);
console.log(students[2].ch);
// adding a main
const main=document.getElementById('main-students');

var text2="";

// travel array to display all names
for(var i=0;i<students.length; i++){ // using "i" instead of a number in brackets
    
    text2+=`
    <div class="student">
        <img src="${students[i].photo}" alt="photo">
        <h2> ${students[i].name}</h2>
        <p>${students[i].ch}</p>
    </div>`;

}
//inject code into HTML on webpage
main.innerHTML=text2;