import { getAdjacentPages } from "./getAdjacentPages";

describe("getAdjacentPages", () => {
  it("returns correct pages for page 1", () => {
    const pages = getAdjacentPages(1, 10, 2);
    expect(pages).toEqual([1, 2, 3, 4, 5]);
  });

  it("returns correct pages for page 2", () => {
    const pages = getAdjacentPages(2, 10, 2);
    expect(pages).toEqual([1, 2, 3, 4, 5]);
  });

  it("returns correct pages for page 4", () => {
    const pages = getAdjacentPages(4, 10, 2);
    expect(pages).toEqual([2, 3, 4, 5, 6]);
  });

  it("returns correct pages for page 10", () => {
    const pages = getAdjacentPages(10, 10, 2);
    expect(pages).toEqual([6, 7, 8, 9, 10]);
  });
});
