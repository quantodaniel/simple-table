import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should render correctly", () => {
    const { container } = render(<Header>header</Header>);
    expect(container).toBeInTheDocument();
  });
});
