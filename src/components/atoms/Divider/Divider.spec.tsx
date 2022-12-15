import { render } from "@testing-library/react";
import Divider from "./Divider";

describe("Divider", () => {
  it("should render correctly", () => {
    const { container } = render(<Divider />);
    expect(container).toBeInTheDocument();
  });
});
