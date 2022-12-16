import { render } from "@testing-library/react";
import { MdOutlineHome } from "react-icons/md";
import SidebarLink from "./SidebarLink";

describe("SidebarLink", () => {
  it("should render correctly", () => {
    const { container } = render(
      <SidebarLink href="#">
        <MdOutlineHome />
      </SidebarLink>
    );
    expect(container).toBeInTheDocument();
  });
});
