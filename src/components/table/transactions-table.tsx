import DataTable from "./table";

const transactions = [
    {
      id: "01",
      username: "Javohir Keldiyev",
      paymentDate: "04 Sep 2019",
      duration: "3 Months",
      endDate: "04 Sep 2019",
      price: "150,000 so'm",
      discount: "0%",
    },
    {
      id: "02",
      username: "Javohir Keldiyev",
      paymentDate: "04 Sep 2019",
      duration: "6 Months",
      endDate: "04 Sep 2019",
      price: "270,000 so'm",
      discount: "10%",
    },
    {
      id: "03",
      username: "Javohir Keldiyev",
      paymentDate: "04 Sep 2019",
      duration: "12 Months",
      endDate: "04 Sep 2019",
      price: "480,000 so'm",
      discount: "20%",
    },
    {
      id: "04",
      username: "Javohir Keldiyev",
      paymentDate: "04 Sep 2019",
      duration: "6 Months",
      endDate: "04 Sep 2019",
      price: "270,000 so'm",
      discount: "10%",
    },
    {
      id: "05",
      username: "Javohir Keldiyev",
      paymentDate: "04 Sep 2019",
      duration: "12 Months",
      endDate: "04 Sep 2019",
      price: "480,000 so'm",
      discount: "20%",
    },
    {
      id: "06",
      username: "Javohir Keldiyev",
      paymentDate: "04 Sep 2019",
      duration: "6 Months",
      endDate: "04 Sep 2019",
      price: "270,000 so'm",
      discount: "10%",
    },
    {
      id: "07",
      username: "Javohir Keldiyev",
      paymentDate: "04 Sep 2019",
      duration: "12 Months",
      endDate: "04 Sep 2019",
      price: "480,000 so'm",
      discount: "20%",
    },
    {
      id: "08",
      username: "Javohir Keldiyev",
      paymentDate: "04 Sep 2019",
      duration: "3 Months",
      endDate: "04 Sep 2019",
      price: "150,000 so'm",
      discount: "0%",
    },
  ];
  
  export function TransactionsTable() {
    const columns = [
      { key: "id", label: "ID", render: (value: string) => value },
      { key: "username", label: "USERNAME" },
      { key: "paymentDate", label: "PAYMENT DATE" },
      { key: "duration", label: "DURATION" },
      { key: "endDate", label: "END DATE" },
      { key: "price", label: "PRICE" },
      { key: "discount", label: "DISCOUNT" },
  
    ];
  
    return (
      <div className="bg-white rounded-lg shadow p-4">
        <DataTable columns={columns} data={transactions || []} />
      </div>
    );
  }
  