import { render } from "@testing-library/react";
import Content from "./Content";

describe("Content", () => {
  it("should render correctly", () => {
    const { container } = render(<Content>test</Content>);
    expect(container).toBeInTheDocument();
  });
});
