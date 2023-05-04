export const getAdjacentPages = (
  currentPage: number,
  totalPages: number,
  adjacent: number
): number[] => {
  let startPage = Math.max(1, currentPage - adjacent);
  let endPage = Math.min(totalPages, currentPage + adjacent);

  if (startPage === 1) {
    endPage = Math.min(totalPages, startPage + adjacent * 2);
  } else if (endPage === totalPages) {
    startPage = Math.max(1, endPage - adjacent * 2);
  }

  let pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
}
