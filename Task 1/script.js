/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
createTable();

function createTable() {
  const createTable = document.createElement("table");
  document.getElementById("output").append(createTable);
  const tBody = document.createElement("tbody");
  const tHead = document.createElement("thead");
  createTable.append(tHead, tBody);

  const tr = document.createElement("tr");
  tHead.append(tr);

  const thLb = document.createElement("th");
  const thG = document.createElement("th");
  const thOz = document.createElement("th");
  thLb.textContent = "Svarai";
  thG.textContent = "Gramai";
  thOz.textContent = "Uncijos";

  tr.append(thLb, thG, thOz);
}

document.querySelector("form").addEventListener("submit", count);
function count(event) {
  event.preventDefault();

  let input = Number(document.querySelector("input").value);
  let lbResult = input * 2.2046;
  let gResult = input / 0.001;
  let ozResult = input * 35.274;
  const tbody = document.querySelector("tbody");
  const tr = document.createElement("tr");
  const tdLb = document.createElement("td");
  const tdG = document.createElement("td");
  const tdOz = document.createElement("td");
  tbody.append(tr);
  tr.append(tdLb, tdG, tdOz);
  tdLb.textContent = lbResult;
  tdG.textContent = gResult;
  tdOz.textContent = ozResult;
}
