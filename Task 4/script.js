/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

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
  const tBody = document.createElement("tbody");
  const tHead = document.createElement("thead");
  createTable.append(tHead, tBody);

  const tr = document.createElement("tr");
  tHead.append(tr);

  const thBrand = document.createElement("th");
  const thModels = document.createElement("th");
  thBrand.textContent = "Brand";
  thModels.textContent = "Models";

  tr.append(thBrand, thModels);
}

function renderData(cars) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  cars.forEach((car) => {
    const tr = document.createElement("tr");
    const tdBrand = document.createElement("td");
    const tdModels = document.createElement("td");

    tdBrand.textContent = car.brand;
    tdModels.textContent = car.models;

    tbody.append(tr);
    tr.append(tdBrand, tdModels);
  });
}
