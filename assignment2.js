//question 1
const divElm = document.getElementById("dynamic-box");
divElm.setAttribute("title", "Bootcamp image");
console.log(divElm);

//question 2
const keyPressed = document.querySelector(".user-input");
keyPressed.addEventListener("keydown", function (event) {
    console.log(event.target.value);
})

//question 3
const items = document.querySelectorAll(".item");
items[1].textContent = "Updated item 2";
console.log(items);

//question 4
const btn = document.getElementById("github-link");
btn.addEventListener("click", function (event) {
    event.target.textContent = "Button Clicked";
    console.log(event.target.textContent);
});

//question 5
const boxes = document.getElementsByClassName("box");
boxes[1].style.backgroundColor = "yellow";
console.log(boxes[0].textContent, boxes[1].textContent)

//question 6
const header = document.querySelector('.header');
header.textContent = "welcome to FITECH";
console.log(header.textContent);

//question 7
const div = document.getElementById("paragraph");
const paragraphs = div.getElementsByTagName("p");
paragraphs[0].textContent = "This is the Updated paragraph 1";
console.log(paragraphs[0].textContent)
console.log(paragraphs[1].textContent);

//question 8
const linkAtt = document.getElementById("gitHub-link");
const hrefValue = linkAtt.getAttribute("href");
console.log(hrefValue)

//question 9
const h1 = document.getElementById("welcome-message");
h1.textContent = "DOM Manipulation is Amazing!";
console.log(h1.textContent)

//question 10
const elem = document.getElementById("dynamic-Box");
elem.style.width = "200px"; elem.style.backgroundColor = "green";
console.log(elem.textContent);