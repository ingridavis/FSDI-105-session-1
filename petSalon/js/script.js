console.log("loaded");

// object literal for the salon
const salon={
    name:"Scruffy to Fluffy",
    phone:"555-555-555",
    address:{
        city:"San Diego",
        street:"Main St",
        number:"111" 
    },
    pets:[]
}
console.log(salon);
let {name, phone, address:{city, street, number}}=salon;
console.log(city);


//document.getElementById('info').innerHTML="<p>"+name+"<b>"+city+"</b> </p>";  // selecting HTML element

document.getElementById("info").innerHTML=`
<p class="footer-info"> ${name} 
    <br>
    <b> ${city}, ${street} ${number} </b> 
    <br>
    ${phone}
    </p>
    `;

// object constructor for the pets
class Pet{
    constructor(name, age, type, breed, gender,service, ownersName, contactPhone, ownersEmail){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownersName=ownersName;
        this.contactPhone=contactPhone;
        this.ownersEmail=ownersEmail;
    }
}

const scooby=new Pet("Scooby", "50", "dog", "Dane", "male",  "full", "Shaggy", "555-556-8888", "shaggy@gmail.com");
console.log(scooby);

const scrappy= new Pet ("Scrappy", "5", "dog", "Dane", "male", "full", "Shaggy", "555-611-3222", "shaggy@gmail.com");
console.log(scrappy);

const Tango= new Pet ("Tango", "3", "dog", "Pitbull", "male", "ear cleaning", "Ingrid", "555-888-7777", "ingrid@gmail.com");
console.log(Tango);

const Cash= new Pet ("Cash", "1", "dog", "Bulldog", "female", "nails", "Ingrid", "555-888-7777",  "ingrid@gmail.com");
console.log(Cash);


// add pets to array

salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(Tango);
salon.pets.push(Cash);

 // displays number of elements or pets in the array
 console.log("There are " + salon.pets.length + " pets in the salon");
 
// display names of pets using for loop
for(let p=0; p<salon.pets.length; p++){
    console.log("Pet Name: " + salon.pets[p].name);
}

// get info from the inputs and save in variables using an ID 
var txtname=document.getElementById("petName");
var txtage=document.getElementById("petAge");
var txttype=document.getElementById("petType");
var txtbreed=document.getElementById("petBreed");
var txtgender=document.getElementById("petGender");
var txtservice=document.getElementById("petService");
var txtowner=document.getElementById("ownersName");
var txtphone=document.getElementById("contactPhone");
var txtemail=document.getElementById("ownersEmail");


// register function so when we click button
function register(){
    // If everything is correct, we create the pet object
    var thePet = new Pet(txtname.value, txtage.value, txttype.value,txtbreed.value, txtgender.value, txtservice.value, txtowner.value, txtphone.value, txtemail.value);

    // push the pet into the array
    salon.pets.push(thePet);
    console.log(salon.pets);
    // clear the inputs for user experience
    clear();
   // display(); //for directory.js
   displayTable(thePet); 
   
}

function clear(){
    txtname.value="";
    txtage.value="";
    txttype.value="";
    txtbreed.value="";
    txtgender.value="";
    txtservice.value="";
    txtowner.value="";
    txtphone.value="";
    txtemail.value="";
}

// Extra HW: display on the console - the oldest pet and the youngest pet.
// Add CSS to the form
//Graded HW is team tree practice

//Session 3 HW: Team treehouse
//Extra HW: display how many pets in HTML and automatically add a new pet
 
function displayTable(aPet){
    var tbody=document.getElementById('rowPet');
    var row = `<tr id ="${aPet.id}">
        <td>${aPet.name}</td>
        <td>${aPet.age}</td>
        <td>${aPet.type}</td>
        <td>${aPet.gender}</td>
        <td>${aPet.breed}</td>
        <td>${aPet.service}</td>
        <td>${aPet.ownersName}</td>
        <td>${aPet.contactPhone}</td>
        <td><button class="btn btn-danger" onclick="deletePet(${aPet.id})">Delete</button></td>
    
    `;
    tbody.innerHTML+=row;
}

displayTable(scooby);
displayTable(scrappy);
displayTable(Tango);
displayTable(Cash);

function deletePet(petID){
    //select element to delete
    var tr=$('#' +petID);
    var indexDelete; //important, know the position in array
    //travel array 
    for(var i=0; i<salon.pets.length; i++){
        var selected=salon.pets[i];
        if(selected.id===petID){
           indexDelete=i;
         }

    }    

    // delete from array
    salon.pets.splice(indexDelete,1);
    //delete pet from the HTML using remove function
    tr.remove();
}






