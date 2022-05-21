export default {
  paginationValues(limit = 10, page = 0) {
    const realPage = page - 1 < 0 ? 0 : page - 1;
    const currentPage = page <= 0 ? 1 : page;
    const offset = realPage * limit;
    return { currentPage, offset };
  },

  paginatedData({ count, rows }, currentPage, limit) {
    const totalPage = Number(Math.ceil(count / limit));
    return { data: rows, currentPage, totalPage, totalCount: count };
  },
};
