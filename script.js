const noteArr = [];
const card = document.querySelector(".card");
function submitClicked(e) {
  const note = {
    title: e.target[0].value,
    body: e.target[1].value,
  };
  noteArr.push(note);
  display(noteArr);
}

function display(noteArr) {
  let str = "";

  noteArr.map((item, index) => {
    str =
      str +
      `<div class="bg-secondary mb-4"> <div class="card-header bg-success">
       ${item.title}  <button type="button" class="btn btn-warning" onclick = "deleteItem(${index})"><i class="fas fa-trash"></i></button>
  </div>
  <div class="card-body mt-4">
    <p class="card-text">${item.body}</p>
  </div>
  </div>
       `;
  });
  card.innerHTML = str;
}

function deleteItem(i) {
  noteArr.splice(i, 1);
  display(noteArr);
}

function editItem(i, e) {
  console.log(i, e);
}

function searchTitle(e) {
  let searchText = e.target.value;
  let newArray = noteArr.filter(
    (item) => item.title.includes(searchText) === true
  );
  display(newArray);
}
