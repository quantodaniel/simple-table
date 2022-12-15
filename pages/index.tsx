import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
      <nav>
        <div>
          <Image src="/logo.svg" alt="MaterData" width={145} height={30} />
        </div>
        <div>
          <button>Notifications</button>
          <button>zuza@materimperium.com</button>
          <button>help</button>
          <button>settings</button>
          <button>menu</button>
        </div>
      </nav>
      <main>
        <aside>
          <div>
            <Link href="#">Dashboard</Link>
            <Link href="#">Statistics</Link>
            <Link href="#">Receipts</Link>
            <Link href="#">Offers</Link>
            <Link href="#">Profile</Link>
          </div>
        </aside>
        <section>
          <h1>Customers</h1>
          <div>
            <div>filters</div>
            <table>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Location</th>
                  <th>Phone</th>
                  <th>E-mail</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
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
