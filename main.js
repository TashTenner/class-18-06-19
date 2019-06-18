window.onload = function() {
  console.log("Hello world");
  createBody();
};

function createBody() {
  // const body = document.getElementById("body");
  const body = document.querySelector("#body");
  const div = document.createElement("div");

  div.innerHTML = `
    <input type="text">
    <button>Add task</button>
    <h1>List</h1>
    <ul id="list"></ul>
  `;

  const button = div.querySelector("button");
  // button.addEventListener("click", onClick()); OJO que se ejecuta onClick
  button.addEventListener("click", onClick);

  body.prepend(div);
}

function onClick() {
  const input = document.querySelector("input");
  // console.log(input.value);
  const ul = document.getElementById("list");

  // ul.innerHTML = `
  //   <li> ${input.value} </li>
  // `;

  const li = document.createElement("li");
  // li.innerText = input.value;
  li.innerHTML = `
    ${input.value} <button>Delete</button>
  `;

  const button = li.querySelector("button");

  ul.appendChild(li);

  button.addEventListener("click", onDelete);

  input.value = "";
}

function onDelete(e) {
  const toDelete = e.target.parentNode;
  // console.log("deleted... ", e.target.parentNode);
  const ul = document.querySelector("#list");

  ul.removeChild(toDelete);
}
