import { render } from "@testing-library/react";
import NavbarNotification from "./NavbarNotification";

describe("NavbarNotification", () => {
  it("should render correctly", () => {
    const { container } = render(<NavbarNotification />);
    expect(container).toBeInTheDocument();
  });
});
