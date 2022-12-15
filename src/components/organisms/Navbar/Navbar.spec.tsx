import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("should render correctly", () => {
    const { container } = render(<Navbar />);
    expect(container).toBeInTheDocument();
  });
});
