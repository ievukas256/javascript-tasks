/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  fetch(ENDPOINT)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      renderData(data);
    });
  createTable();
  function createTable() {
    const createTable = document.createElement("table");
    document.getElementById("output").append(createTable);
    document.getElementById("message").innerHTML = "";
    const tBody = document.createElement("tbody");
    const tHead = document.createElement("thead");
    createTable.append(tHead, tBody);

    const tr = document.createElement("tr");
    tHead.append(tr);

    const thLogin = document.createElement("th");
    const thAvatar = document.createElement("th");
    thLogin.textContent = "Login";
    thAvatar.textContent = "Avatar URL";

    tr.append(thLogin, thAvatar);
  }

  function renderData(users) {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    users.forEach((user) => {
      const tr = document.createElement("tr");
      const tdLogin = document.createElement("td");
      const tdAvatar = document.createElement("td");

      tdLogin.textContent = user.login;
      tdAvatar.textContent = user.avatar_url;

      tbody.append(tr);
      tr.append(tdLogin, tdAvatar);
    });
  }
});
