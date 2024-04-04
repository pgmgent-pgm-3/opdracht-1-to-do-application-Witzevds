let submitButton$ = document.querySelector(".submit-button");
let deleteButton$ = document.querySelector(".bin");
let checkButton$ = document.querySelector(".check");
let editButton$ = document.querySelector(".edit");
let editDoneButton$ = document.querySelector(".edit-done");
let binDoneButton$ = document.querySelector(".bin-done");
let doneContainer$ = document.querySelector(".tasks-done");

if (submitButton$) {
  submitButton$.addEventListener("click", async () => {
    console.log("submit-item!");
  });
}
if (deleteButton$) {
  deleteButton$.addEventListener("click", () => {
    console.log("delete-item!");
  });
}

if (checkButton$) {
  checkButton$.addEventListener("click", () => {
    console.log("check-item!");
    // Voeg nieuwe HTML toe aan doneContainer$
    doneContainer$.insertAdjacentHTML("beforeend", "{{> done}}");
  });
}

if (editButton$) {
  editButton$.addEventListener("click", () => {
    console.log("edit-item!");
  });
}

if (editDoneButton$) {
  editDoneButton$.addEventListener("click", () => {
    console.log("edit-done!");
  });
}

if (binDoneButton$) {
  binDoneButton$.addEventListener("click", () => {
    console.log("bin-done!");
  });
}
