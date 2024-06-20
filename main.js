//add a button that on click opens up a modal
//sam modal je neki div koji je hidden, display-none, kada se klikne- display: block.
const modalPopup = document.getElementById("modalPopup");
const firstPage = document.getElementById("firstPage");
const buttonMain = document.getElementById("buttonMain");
const exitButton = document.getElementById("exitButton");
const closeButton = document.getElementById("closeButton");
const saveChanges = document.getElementById("saveChanges");
const modalBackground = document.getElementById("modalBackground");

// function onCloseModal(){} --- hoisting will be applied same as line 12, just line 12 is an arrow function
// if declared as const no hoisting will be applied
const onCloseModal = () => {
  modalBackground.style.display = "none";
  modalPopup.style.display = "none";
};
const onOpenModal = () => {
  modalPopup.style.display = "block";
  modalBackground.style.display = "block";
};

modalBackground.addEventListener("click", onCloseModal);
closeButton.addEventListener("click", onCloseModal);
exitButton.addEventListener("click", onCloseModal);
buttonMain.addEventListener("click", onOpenModal);

/* using dialog **
buttonMain.addEventListener("click", () => {
  modalPopup.showModal();
});

closeButton.addEventListener("click", () => {
  modalPopup.close();
});
exitButton.addEventListener("click", () => {
  modalPopup.close();
});
*/
