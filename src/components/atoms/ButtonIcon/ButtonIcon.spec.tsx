import { render, screen } from "@testing-library/react";
import ButtonIcon from "./ButtonIcon";

describe("ButtonIcon", () => {
  it("should render correctly", () => {
    render(<ButtonIcon>test</ButtonIcon>);
    expect(screen.getByTestId("btnicon")).toBeInTheDocument();
  });

  it("should render with notification badge", () => {
    render(<ButtonIcon hasNotification>test</ButtonIcon>);
    expect(screen.getByTestId("btnicon-notification")).toBeInTheDocument();
  });
});
