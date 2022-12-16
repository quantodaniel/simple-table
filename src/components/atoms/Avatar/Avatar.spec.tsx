import { render } from "@testing-library/react";
import Avatar from "./Avatar";

describe("Avatar", () => {
  it("should render correctly", () => {
    const { container } = render(<Avatar name="Kyle Lesther" />);
    expect(container).toBeInTheDocument();
  });
});
