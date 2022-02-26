const noteArr = [];
const list = document.querySelector(".list-group");
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
      `<li class="list-group-item"> ${index + 1} ${item.title} ${item.body}
      <button type="button" class="btn btn-primary" onclick = "deleteItem(${index})">Delete Note</button>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" 
      onclick = "openModal(${index})">
  View Note
</button>
       </li> `;
  });
  list.innerHTML = str;
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

function openModal(i) {
  let str = `<!-- Modal -->
  <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle"></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
  
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>`;
  document.querySelector(".heading").appendChild = str;
}
