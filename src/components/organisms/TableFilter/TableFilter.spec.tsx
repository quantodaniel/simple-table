import { render } from "@testing-library/react";
import TableFilter from "./TableFilter";

describe("TableFilter", () => {
  it("should render correctly", () => {
    const { container } = render(<TableFilter />);
    expect(container).toBeInTheDocument();
  });
});
