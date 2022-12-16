import { render } from "@testing-library/react";
import Table from "./Table";

describe("Table", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Table
        columns={[]}
        data={[]}
        onSelect={() => {}}
        onSelectAll={() => {}}
      />
    );
    expect(container).toBeInTheDocument();
  });
});
