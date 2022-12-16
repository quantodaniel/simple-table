export interface TableColumnProps<T> {
  key: keyof T | "actions";
  header: string;
  render: (item: T) => React.ReactNode;
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumnProps<T>[];
  onSelect: (item: T) => void;
  onSelectAll: (items: T[]) => void;
}

function Table<T extends { id: number }>(props: TableProps<T>) {
  const { data, columns, onSelectAll, onSelect } = props;

  return (
    <table className="border-t border-slate-8 border-collapse  ">
      <thead>
        <tr>
          {onSelectAll && (
            <th className="w-11 text-end">
              <input type="checkbox" onChange={() => onSelectAll(data)} />
            </th>
          )}

          {columns.map((column) => (
            <th
              key={column.header}
              className="text-xs font-normal text-start p-4"
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={`tr_${item.id}`}
            className="border-y border-slate-8 hover:bg-slate-50"
            onClick={() => onSelect && onSelect(item)}
          >
            {onSelect && (
              <td className="text-end">
                <input type="checkbox" onChange={() => onSelect(item)} />
              </td>
            )}

            {columns.map((column) => (
              <td
                key={`td_${item.id}_${column.header}`}
                className="text-sm p-4"
              >
                {column.render(item)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
