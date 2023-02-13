const formEle = document.querySelector("form");
const tbodyEle = document.querySelector("tbody");
const tableEle = document.querySelector("table");
function onAddWebsite(e){
    e.preventDefault();
    const website = document.getElementById("website").value;
    const url = document.getElementById("url").value;
    tbodyEle.innerHTML += `
    <tr>
    <td>${url}</td>
    <td>${website}</td>
    <td><button class="deleteBtn">Delete</button></td>
    </tr>
    `;
}
function onDeleteRow(e){
   if(!e.target.classList.contains("deleteBtn")){
    return;
   }
const btn = e.target;
btn.closest("tr").remove();
}


formEle.addEventListener("submit", onAddWebsite);
tableEle.addEventListener("click",onDeleteRow);