import { render } from "@testing-library/react";
import NavbarUserMenu from "./NavbarUserMenu";

describe("NavbarUserMenu", () => {
  it("should render correctly", () => {
    const { container } = render(<NavbarUserMenu />);
    expect(container).toBeInTheDocument();
  });
});
