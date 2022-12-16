import { render } from "@testing-library/react";
import TableRowActions from "./TableRowActions";

describe("TableRowActions", () => {
  it("should render correctly", () => {
    const { container } = render(
      <TableRowActions onEdit={() => {}} onDelete={() => {}} />
    );
    expect(container).toBeInTheDocument();
  });
});
