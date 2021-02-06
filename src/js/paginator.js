import pagination from "pagination";

const paginator = new pagination.SearchPaginator({
  prelink: "/",
  current: 3,
  rowsPerPage: 8,
  totalResult: 500,
});

console.log(paginator.getPaginationData());

export const getDataPagination = ({ page, itemsNum, total }) => {
  const p = new pagination.SearchPaginator({
    prelink: "/",
    current: page,
    rowsPerPage: itemsNum,
    totalResult: total,
  });
  return p.getPaginationData();
};

export class CountPage {
  constructor() {
    this.page = 1;
    this.increment = this.increment.bind(this);
  }

  //   increment = () => {
  //     this.page = this.page + 1;
  //     return this.page;
  //   };
  
}
