// // question 1

// const table = document.querySelector("table");

// console.log(table)
//  async function fetchUsers() {
//     try{


//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json()

//     data.forEach(element => {
//         table.innerHTML += ` 
//         <tr>
//             <td class="border-b hover:bg-stone-100 text-sm pl-3 border-r text-stone-600 py-1">${element.name}</td>
//             <td class="border-b hover:bg-stone-100 text-sm pl-3 border-r text-stone-600 py-1">${element.username}</td>
//             <td class="border-b hover:bg-stone-100 text-sm pl-3 border-r text-stone-600 py-1">${element.email}</td>
//             <td class="border-b hover:bg-stone-100 pl-3 border-r text-stone-600 py-1 text-xs flex flex-col space-y-1">
//                 <span> <span class="font-semibold"> street: </span>  ${element.address.street}</span>
//                 <span> <span class="font-semibold"> suite:  </span> ${element.address.suite}</span>
//                 <span> <span class="font-semibold"> city:   </span>${element.address.city}</span>
//                 <span> <span class="font-semibold"> zipcode: </span>  ${element.address.zipcode}</span>
//             </td>
//         </tr>`
//     })
// }
// catch(error){
//     console.log(error)
// }
//  }
//  fetchUsers()


//  //question 2
// async function postData(url = "", data = {}) {
//    try{
//     const res = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         }, 
//         body: JSON.stringify(data)
//     })
//     const result = await res.json();
//     console.log("success", result);
// }
// catch(error){
//     console.log(error)
// }
// }

// postData("https://jsonplaceholder.typicode.com/posts", {
//     title: "CEO",
//     body: "Owner of Kidify",
//     userId: 1
// })


// //questio 3

// async function filtering() {
//     try{
//         const res = await fetch("https://randomuser.me/api/?results=20")
//         const data = await res.json()
//         let i = 0
//        let ages =  []
//        ages = data.results.map(data => data.dob.age)
//       console.log(ages)
//       let smallAges =  ages.filter(age => age > 20)
//       console.log(smallAges)
//     }
//     catch(error){
//         console.log(error)
//     }
// };
// filtering()


// //question 4

// async function throwError() {
//     try{
//         const res = await fetch("https://randomuser.me/api/name")
//         const data = await  res.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// throwError()


// //question 5
// async function fetchdata(params) {
//     fetch("https://randomuser.me///question 5
// async function fetchdata(params) {
//     fetch("https://randomuser.me/api/?results=20")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
// }
// fetchdata()api/?results=20")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
// }
// fetchdata()


// //question 6

// function updateUserData(id, user){
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'PUT',
//         headers:{
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(user)

//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// }
// updateUserData(1, {name:"john", age:50, })

// //question 7
// function promissAll(){
//     const api1 = fetch('https://jsonplaceholder.typicode.com/users');
//     const api2 = fetch('https://randomuser.me/api/?results=20');

//     Promise.all([api1, api2])
//     .then(response => Promise.all(response.map(res => res.json())))
//     .then(data => {
//         const [user, ages] = data;
//         console.log(user)
//         console.log(ages)

//      const combine =   user.map( id => {
//         for(let i = 0; i < ages.lenght; i++){
//             const singleAge = ages.find(age => age.results[i] === id.id)
//             return {...user, userName: singleAge ? singleAge.resut.name : 'unknown'}

//         }
//         });
//         console.log(combine)
//     })
// }
// promissAll()


// //question 8

// function deleteUser(userId){
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
//         method: 'DELETE'
//     })
//     .then(res =>  {
//         if (res.ok){
//             console.log("success")
//         }else{
//             console.log("unsuccessful")
//         }
//     })
//     .catch(error => console.log(error));
    
// }
// deleteUser(4)

// //question 9

// const fetchBtn = document.getElementById("fetch");
// let list = document.getElementById("list")
// fetchBtn.addEventListener("click", () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(function(data){
            
//             list.innerHTML += `<li class="w-fit px-5 hover:bg-stone-200 py-2">${data.name}</li>
//     `
//         })
//     })
//     .catch(error => console.log(error))
// })

//question 10
async function makeApiRequest() {
    const inputValue = document.getElementById('userInput').value;

    if (!inputValue) {
        alert('Please enter a value.');
        return;
    }

    try {
        const response = await fetch(`https://api.example.com/data?query=${inputValue}`);
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();

        document.getElementById('result').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching API:', error);
        document.getElementById('result').innerText = 'An error occurred. Please try again.';
    }
}
