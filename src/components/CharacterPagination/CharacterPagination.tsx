import React, { FC, ReactElement } from "react";
import { getAdjacentPages } from "../../utils/getAdjacentPages";
import { Pagination, Row } from "react-bootstrap";

interface CharacterPaginationProps {
  pages: number,
  currentPage: number,
  handlePageChange: (page: number) => void
}

const CharacterPagination: FC<CharacterPaginationProps> = ({pages, currentPage, handlePageChange}) => {
  let items: ReactElement[] = [];
  const adjacentPages = getAdjacentPages(currentPage, pages, 2);

  adjacentPages.forEach((n) => {
    items.push(
      <Pagination.Item
        key={n}
        active={n === currentPage}
        onClick={() => handlePageChange(n)}
        title={`Go to page ${n}`}
      >{n}</Pagination.Item>
    );
  });

  return (
    <Row>
      <Pagination className="justify-content-md-center">
        <Pagination.First disabled={currentPage === 1} onClick={()=>handlePageChange(1)} title="First page" />
        <Pagination.Prev disabled={currentPage === 1} onClick={()=>handlePageChange(currentPage - 1)} title="Prev page" />
        {items}
        <Pagination.Next disabled={currentPage === pages} onClick={()=>handlePageChange(currentPage + 1)} title="Next page" />
        <Pagination.Last disabled={currentPage === pages} onClick={()=>handlePageChange(pages)} title="Last page" />
      </Pagination>
    </Row>
  )
};

export default CharacterPagination;
