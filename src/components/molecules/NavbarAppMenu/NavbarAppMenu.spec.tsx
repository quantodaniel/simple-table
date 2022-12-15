import { render } from "@testing-library/react";
import NavbarAppMenu from "./NavbarAppMenu";

describe("NavbarAppMenu", () => {
  it("should render correctly", () => {
    const { container } = render(<NavbarAppMenu />);
    expect(container).toBeInTheDocument();
  });
});
