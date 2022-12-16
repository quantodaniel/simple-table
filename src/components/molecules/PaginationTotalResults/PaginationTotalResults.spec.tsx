import { render } from "@testing-library/react";
import PaginationTotalResults from "./PaginationTotalResults";

describe("PaginationTotalResults", () => {
  it("should render correctly", () => {
    const { container } = render(
      <PaginationTotalResults limit={10} total={100} />
    );
    expect(container).toBeInTheDocument();
  });
});
