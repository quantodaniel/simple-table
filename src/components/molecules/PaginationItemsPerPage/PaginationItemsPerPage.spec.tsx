import { render } from "@testing-library/react";
import PaginationItemsPerPage from "./PaginationItemsPerPage";

describe("PaginationItemsPerPage", () => {
  it("should render correctly", () => {
    const { container } = render(
      <PaginationItemsPerPage
        setCurrentLimit={() => {}}
        setCurrentPage={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
