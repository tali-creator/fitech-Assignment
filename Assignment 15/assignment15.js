// question 1

const table = document.querySelector("table");

console.log(table)
 async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()

    data.forEach(element => {
        table.innerHTML += ` 
        <tr>
            <td class="border-b hover:bg-stone-100 text-sm pl-3 border-r text-stone-600 py-1">${element.name}</td>
            <td class="border-b hover:bg-stone-100 text-sm pl-3 border-r text-stone-600 py-1">${element.username}</td>
            <td class="border-b hover:bg-stone-100 text-sm pl-3 border-r text-stone-600 py-1">${element.email}</td>
            <td class="border-b hover:bg-stone-100 pl-3 border-r text-stone-600 py-1 text-xs flex flex-col space-y-1">
                <span> <span class="font-semibold"> street: </span>  ${element.address.street}</span>
                <span> <span class="font-semibold"> suite:  </span> ${element.address.suite}</span>
                <span> <span class="font-semibold"> city:   </span>${element.address.city}</span>
                <span> <span class="font-semibold"> zipcode: </span>  ${element.address.zipcode}</span>
            </td>
        </tr>`
    });
 }
 fetchUsers()