import Head from "next/head";
import Content from "src/components/atoms/Content";
import Header from "src/components/atoms/Header";
import Navbar from "src/components/organisms/Navbar";
import Sidebar from "src/components/organisms/Sidebar";
import Table from "src/components/organisms/Table";
import TableFilter from "src/components/organisms/TableFilter";
import TablePagination from "src/components/organisms/TablePagination";

type Customer = {
  id: string;
  name: string;
  location: string;
  phone: string;
  email: string;
};

const data: Customer[] = [
  {
    id: "1",
    name: "John Doe",
    location: "Berlin",
    phone: "+49 123 456 789",
    email: "",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>MaterData</title>
        <meta name="description" content="MaterData" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-1">
        <Sidebar />

        <section className="flex flex-col flex-1 p-6 gap-6">
          <Header>Customers</Header>

          <Content>
            <TableFilter />
            <Table />
            <TablePagination />
          </Content>
        </section>
      </main>
    </>
  );
}
