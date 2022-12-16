import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { useQuery } from "react-query";
import Avatar from "src/components/atoms/Avatar";
import ButtonIcon from "src/components/atoms/ButtonIcon";
import Content from "src/components/atoms/Content";
import Header from "src/components/atoms/Header";
import Table from "src/components/organisms/Table";
import { TableColumnProps } from "src/components/organisms/Table/Table";
import TableFilter from "src/components/organisms/TableFilter";
import TablePagination from "src/components/organisms/TablePagination";
import { Customer, CustomerResponse } from "src/interfaces";

const fetchCustomers = async (
  page: number,
  limit = 10
): Promise<CustomerResponse> => {
  const url = `https://dummyjson.com/users?skip=${page}&limit=${limit}`;
  const res = await fetch(url);
  return await res.json();
};

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentLimit, setCurrentLimit] = useState(10);

  const { isLoading, data } = useQuery(
    ["users", currentPage, currentLimit],
    () => fetchCustomers(currentPage, currentLimit),
    { keepPreviousData: true }
  );

  const columns: TableColumnProps<Customer>[] = [
    {
      key: "firstName",
      header: "Customer",
      render: (item) => {
        const userName = `${item.firstName} ${item.lastName}`;

        return (
          <div className="flex items-center gap-4">
            <Avatar name={userName} />
            <span className="font-medium">{userName}</span>
          </div>
        );
      },
    },
    {
      key: "address",
      header: "Location",
      render: (item) => <>{item.address.city}</>,
    },
    {
      key: "phone",
      header: "Phone",
      render: (item) => <>{item.phone}</>,
    },
    {
      key: "email",
      header: "E-mail",
      render: (item) => <>{item.email}</>,
    },
    {
      key: "actions",
      header: "Actions",
      render: (item) => <ButtonIcon>...</ButtonIcon>,
    },
  ];

  return (
    <>
      <Header>Customers</Header>

      <Content>
        {isLoading && <p className="p-10">Loading...</p>}

        {!isLoading && (
          <>
            <TableFilter>
              <ButtonIcon variant="primary" startIcon={<MdAddCircle />}>
                Add customer
              </ButtonIcon>
            </TableFilter>

            <Table<Customer>
              data={data.users}
              columns={columns}
              onSelect={() => {}}
              onSelectAll={() => {}}
            />

            <TablePagination
              limit={data.limit}
              skip={data.skip}
              total={data.total}
              setCurrentPage={setCurrentPage}
              setCurrentLimit={setCurrentLimit}
            />
          </>
        )}
      </Content>
    </>
  );
}
