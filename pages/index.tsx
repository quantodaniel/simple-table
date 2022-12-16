import { useState } from "react";
import { useQuery } from "react-query";
import Content from "src/components/atoms/Content";
import Header from "src/components/atoms/Header";
import Table from "src/components/organisms/Table";
import TableFilter from "src/components/organisms/TableFilter";
import TablePagination from "src/components/organisms/TablePagination";
import { CustomerResponse } from "src/interfaces";

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

  return (
    <>
      <Header>Customers</Header>

      <Content>
        {isLoading && <p className="p-10">Loading...</p>}

        {!isLoading && (
          <>
            <TableFilter />
            <Table />
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
