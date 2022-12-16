import { render } from "@testing-library/react";
import TableInputFilter from "./TableInputFilter";

describe("TableInputFilter", () => {
  it("should render correctly", () => {
    const { container } = render(<TableInputFilter />);
    expect(container).toBeInTheDocument();
  });
});
