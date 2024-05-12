function onClickName(e) {
  let inpHdr = document.getElementById("fname");
  if (inpHdr.value === "") {
    let sectag = document.getElementById("mainsection");
    let maintag = sectag.parentElement;

    let newPara = document.createElement("p");
    newPara.id = "errormsg";
    newPara.style.color = "red";
    newPara.innerHTML = "Name cannot be Empty.";
    maintag.insertBefore(newPara, sectag);
    e.preventDefault();
  }
}

function removeErrorMsg(e) {
  console.log(e);
  let inpHdr = document.getElementById("fname");
  if (inpHdr.value !== "") {
    let errTag = document.getElementById("errormsg");
    if (errTag !== null) {
      let parent = errTag.parentElement;
      parent.removeChild(errTag);
    }
  }
}
