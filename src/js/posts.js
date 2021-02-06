import postItem from "../html/tmp.html";
import { getDataPagination, CountPage } from "./paginator";

const counter = new CountPage();

const getDb = (n) =>
  Array.from(new Array(n)).map((el, idx) => ({
    id: idx + 1,
    value: "abracadabra",
  }));

const refs = {
  body: document.querySelector("body"),
};

const container =
  "<div id='container' style='display: flex; flex-wrap: wrap'></div>";
refs.body.insertAdjacentHTML("afterbegin", container);
const containBox = document.getElementById("container");

const db = getDb(30);

const renderItem = (id) =>
  containBox.insertAdjacentHTML(
    "beforeend",
    `<div>${postItem}<h3>${id}</h3></div>`
  );

// db.forEach(({ id }) => renderItem(id));

const renderGelelary = (page) => {
  const data = getDataPagination({ page, itemsNum: 4, total: db.length });

  const dbForRender = db.filter((el, idx) => idx +1 >= data.fromResult && idx + 1 <= data.toResult)
  dbForRender.forEach(({ id }) => renderItem(id));

  console.log('data :>> ', data);
};

renderGelelary(1);
document.querySelector("ul").addEventListener("click", (e) => {
    containBox.innerHTML = "";
    let page = counter.increment();

    renderGelelary(page)
})

