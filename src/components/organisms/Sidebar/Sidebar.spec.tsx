import { render } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("should render correctly", () => {
    const { container } = render(<Sidebar />);
    expect(container).toBeInTheDocument();
  });
});
