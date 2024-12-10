import { Package } from "lucide-react";
import DataTable from "./table";

const analyticsData = [
  {
    month: "January",
    type: "3 month",
    count: "280",
    price: "3.000.000 so'm",
  },
  {
    month: "February",
    type: "3 month",
    count: "300",
    price: "3.000.000 so'm",
  },
  {
    month: "March",
    type: "3 month",
    count: "400",
    price: "3.000.000 so'm",
  },
  {
    month: "April",
    type: "3 month",
    count: "500",
    price: "3.000.000 so'm",
  },
  {
    month: "May",
    type: "3 month",
    count: "600",
    price: "3.000.000 so'm",
  },
  {
    month: "July",
    type: "3 month",
    count: "700",
    price: "3.000.000 so'm",
  },
  {
    month: "June",
    type: "3 month",
    count: "800",
    price: "3.000.000 so'm",
  },
  {
    month: "August",
    type: "3 month",
    count: "900",
    price: "3.000.000 so'm",
  },
];

const dropdownOptions = [
  { id: 1, icon: Package, label: "Premium 3" },
  { id: 2, icon: Package, label: "Premium 6" },
  { id: 3, icon: Package, label: "Premium 12" },
]

export function AnalyticsTableData() {
  const columns = [
    { key: "month", label: "MONTH" },
    { key: "type", label: "TYPE" },
    { key: "count", label: "COUNT" },
    { key: "price", label: "ALL SUM" },

  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <DataTable columns={columns} data={analyticsData || []} dropdownOptions={dropdownOptions} isDropdown={true} />
    </div>
  );
}
