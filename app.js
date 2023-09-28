
const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');

function addTask(task){
    const listItem = document.createElement('li')
    listItem.innerHTML = `<span>${task}</span><button>Delete</button>`;
    taskList.appendChild(listItem)
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const input = document.querySelector('#task-input');
    const task = input.value;
    addTask(task);
    input.value = ''
})

taskList.addEventListener('click', (event)=>{
    if(event.target.tagName === 'BUTTON'){
        const listItem = event.target.parentElement
        taskList.removeChild(listItem);
    }
})
// let persons = [];

// function createPerson(name) {
//     let person = {
//         id: Date.now(),
//         name: name
//     };

//     persons.push(person);

//     document.getElementById('person-form').reset();

//     displayPersons();
// }

// function displayPersons() {
//     document.getElementById('person-list').innerHTML = '';

//     for (let i = 0; i < persons.length; i++) {
//         let person = persons[i];

//         let listItem = document.createElement('li');
//         listItem.textContent = person.name;

//         let editButton = document.createElement('button');
//         editButton.textContent = 'Edit';
//         editButton.addEventListener('click', function() {
//             editPerson(person.id);
//         });

//         let deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.addEventListener('click', function() {
//             deletePerson(person.id);
//         });

//         listItem.appendChild(editButton);
//         listItem.appendChild(deleteButton);

//         document.getElementById('person-list').appendChild(listItem);
//     }
// }

// function editPerson(id) {
//     let newName = prompt('Enter a new name:');
//     if (newName) {
//         let person = persons.find(person => person.id === id);
//         if (person) {
//             person.name = newName;
//             displayPersons();
//         }
//     }
// }

// function deletePerson(id) {
//     let index = persons.findIndex(person => person.id === id);
//     if (index !== -1) {
//         persons.splice(index, 1);
//         displayPersons();
//     }
// }

// document.getElementById('person-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     let name = document.getElementById('name-input').value;
//     createPerson(name);
// });

// displayPersons();


// let form = document.getElementById("form");
// let input = document.getElementById("input");
// let msg = document.getElementById("msg");
// let posts = document.getElementById("posts");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("button clicked");

//   formValidation();
// });

// let formValidation = () => {
//   if (input.value === "") {
//     msg.innerHTML = "Post cannot be blank";
//     console.log("failure");
//   } else {
//     console.log("successs");
//     msg.innerHTML = "";
//     acceptData();
//   }
// };

// let data = {};

// let acceptData = () => {
//   data["text"] = input.value;
//   console.log(data);
//   createPost();
// };

// let createPost = () => {
//   posts.innerHTML += `
//   <div>
//     <p>${data.text}</p>
//     <span class="options">
//       <i onClick="editPost(this)" class="fas fa-edit"></i>
//       <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
//     </span>
//   </div>
//   `;
//   input.value = "";
// };

// let deletePost = (e) => {
//   e.parentElement.parentElement.remove();
// };
// <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>

// let editPost = (e) => {
//   input.value = e.parentElement.previousElementSibling.innerHTML;
//   e.parentElement.parentElement.remove();
// };

// <i onClick="editPost(this)" class="fas fa-edit"></i>
