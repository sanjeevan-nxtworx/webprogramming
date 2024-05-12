function onClickedTextArea(e) {
  e.stopPropagation();
  console.log("On Clicked");
  console.log(e);
  let el = document.querySelector("#divmain");
  console.log(el.children);
  console.log(el.firstChild, typeof el.firstChild);

  console.log(el.firstChild.nextSibling, typeof el.firstChild.nextSibling);
  console.log(el.lastChild);
  console.log(el.lastChild.previousSibling);
  console.log(el.lastChild.previousSibling.previousSibling);
  console.log(el.lastChild.previousSibling.previousSibling.previousSibling);
}
function onMouseEnter() {
  console.log("On MouseEnter");
}
function onMouseLeave() {
  console.log("On MouseLeave");
}
function onMouseMove() {
  console.log("On MouseMove");
}

function onFocusDescription(e) {
  console.log("On Focus");
  console.log(e.target.value);
}

function myonSubmit(e) {
  e.preventDefault();
  console.log("on Submit");
  console.log(e.target.value);
  let areaEl = document.getElementById("desc");
  areaEl.classList.add("item-border");
  console.log(areaEl.classList);
  if (areaEl.value.trim().length < 40) {
    let errMsg = document.createElement("p");
    errMsg.innerHTML = "Invalid data in Description Field";
    errMsg.style.color = "red";
    errMsg.id = "errmsg";
    let formEl = document.querySelector("form");
    let buttonEl = document.getElementById("buttondiv");
    formEl.insertBefore(errMsg, buttonEl);
  } else {
    let errMsg = document.getElementById("errmsg");
    let parentEl = errMsg.parentElement;
    parentEl.removeChild(errMsg);
  }
}

function onFormLoad() {
  console.log("This is in On Form Load");
  let tareaEl = document.getElementById("desc");
  if (tareaEl !== null) {
    tareaEl.addEventListener("click", (event) => {
      onClickedTextArea(event);
    });
    tareaEl.addEventListener("focus", onFocusDescription);
  } else console.log("Text Area Element is NULL");
}
