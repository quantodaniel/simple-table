import { render } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Pagination limit={10} page={0} setCurrentPage={() => {}} total={100} />
    );
    expect(container).toBeInTheDocument();
  });
});
