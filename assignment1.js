
// question 1
document.getElementById("my-link").addEventListener("click", function (e) {
    e.preventDefault();
    console.log("default behaviour prevented")
});
// question 2
const divElem = document.getElementById("buttonContainer");
const txtNode = ['Buttom 1', 'Button 2']
for (let i = 0; i < txtNode.length; i++) {
    const buttons = document.createElement("button");
    buttons.textContent = txtNode[i];
    divElem.appendChild(buttons)
} divElem.addEventListener('click', function (e) {
    console.log(`${e.target.textContent} clicked`)
});
// question 3
const addLiBtn = document.getElementById("addBtn");
const ul = document.getElementById("listItems");
let i = 1;
addLiBtn.addEventListener("click", function (e) {
    const li = document.createElement('li');
    const textNode = document.createTextNode(`li ${i++}`)
    li.appendChild(textNode)
    ul.appendChild(li);
    console.log(li.textContent)
})
ul.addEventListener("click", function (e) {
    console.log(e.target.textContent + " clicked")
});
// question 4
const forms = document.forms['focus-input'];
const formInput = forms.querySelector("input");
formInput.addEventListener("focus", function (e) {
    forms.innerHTML += `<p id="p" class="text-sm italic"> input Focused</p>`
    console.log("input Focused")
});

// question 5
document.addEventListener("DOMContentLoaded", function () {
    const child = document.getElementById("child");
    const parent = document.getElementById("parent");
    parent.addEventListener("click", function () {
        console.log("parent has been clicked")
    });
    child.addEventListener("click", function (e) {
        e.stopPropagation()
        console.log("Bubbling stopped; child clicked")
    });
});

// question 6
document.addEventListener("DOMContentLoaded", function () {
    const innerChild = document.getElementById("innerChild");
    const outerDiv = document.getElementById("outerDiv");
    outerDiv.addEventListener("click", function () {
        console.log("outerDiv has been clicked")
    });
    innerChild.addEventListener("click", function () {
        console.log(" inner child clicked")
    });
});

// question 7
const dropDown = document.getElementById("myDropdown");
dropDown.addEventListener("change", function (e) {
    console.log("selected value is: " + dropDown.value)
});
// question 8

const toggleBtn = document.querySelector("#toggle");
const input = document.querySelector("#input");
toggleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    input.disabled = !input.disabled;
    console.log("clicked")
});

// question 9
const toggleBttn = document.querySelector("#toggleInput");
const inputs = toggleBttn.querySelectorAll(".input1");
toggleBttn.addEventListener("submit", function (e) {
    e.preventDefault();
    const style = document.createElement("style");
    style.textContent = `input::placeholder {color: red;}`;
    document.head.appendChild(style);
    inputs.forEach(function (input) {
        if (input.value < 1) {
            input.placeholder = "input cannot be Empty"
        }
    })
});

// question 10
const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    emailInput.setCustomValidity("");
    if (!emailInput.validity.valid) {
        emailInput.setCustomValidity("Please enter a valid email address.");
    } if (!emailInput.checkValidity()) {
        emailInput.reportValidity();
    } else {
        console.log("Form submitted with valid email:", emailInput.value);
    }
});