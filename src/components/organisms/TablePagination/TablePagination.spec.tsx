import { render } from "@testing-library/react";
import TablePagination from "./TablePagination";

describe("TablePagination", () => {
  it("should render correctly", () => {
    const { container } = render(
      <TablePagination
        limit={10}
        total={100}
        page={0}
        setCurrentPage={() => {}}
        setCurrentLimit={() => {}}
      />
    );
    expect(container).toBeInTheDocument();
  });
});
