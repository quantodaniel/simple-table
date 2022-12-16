import Head from "next/head";
import Header from "src/components/atoms/Header";
import Navbar from "src/components/organisms/Navbar";
import Sidebar from "src/components/organisms/Sidebar";
import Table from "src/components/organisms/Table";

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

      <main>
        <Sidebar />

        <section className="flex flex-col flex-1 p-6 gap-6">
          <Header>Customers</Header>

          <div className="bg-white flex flex-1">
            <div>filters</div>

            <Table />

            <div>
              <div>Showing 10 of 14.381 results</div>
              <div>pagination</div>
              <div>
                Items per page
                <select>
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
