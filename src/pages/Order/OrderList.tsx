import { useState } from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const packageData = [
  {
    name: 'Free Package',
    price: 0.0,
    invoiceDate: 'Jan 13, 2023',
    status: 'Paid',
    total: 0.0,
    paymentMethod: 'Credit Card',
  },
  {
    name: 'Standard Package',
    price: 59.0,
    invoiceDate: 'Jan 13, 2023',
    status: 'Paid',
    total: 59.0,
    paymentMethod: 'PayPal',
  },
  {
    name: 'Business Package',
    price: 99.0,
    invoiceDate: 'Jan 13, 2023',
    status: 'Unpaid',
    total: 99.0,
    paymentMethod: 'Bank Transfer',
  },
  {
    name: 'Standard Package',
    price: 59.0,
    invoiceDate: 'Jan 13, 2023',
    status: 'Pending',
    total: 59.0,
    paymentMethod: 'Credit Card',
  },
];

const TableWithFilters = () => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [choose, setChoose] = useState('All');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleChooseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChoose(e.target.value);
  };

  const filteredData = packageData.filter(
    (pkg) =>
      (status === 'All' || pkg.status === status) &&
      (choose === 'All' || pkg.paymentMethod === choose) &&
      pkg.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search packages"
            value={search}
            onChange={handleSearch}
            className="border border-stroke px-3 py-2 rounded"
          />

          <select
            value={status}
            onChange={handleStatusChange}
            className="border border-stroke px-3 py-2 rounded"
          >
            <option value="All">All Statuses</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Unpaid">Unpaid</option>
          </select>

          <select
            value={choose}
            onChange={handleChooseChange}
            className="border border-stroke px-3 py-2 rounded"
          >
            <option value="All">All Payment Methods</option>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button className="bg-red-200 hover:bg-red-300 text-red-700 px-4 py-2 rounded">
            Add New Package
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
            Filter
          </button>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Package
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Invoice Date
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Total
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Payment Method
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((pkg, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {pkg.name}
                  </h5>
                  <p className="text-sm">${pkg.price.toFixed(2)}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {pkg.invoiceDate}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <span
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      pkg.status === 'Paid'
                        ? 'bg-success text-success'
                        : pkg.status === 'Unpaid'
                        ? 'bg-danger text-danger'
                        : 'bg-warning text-warning'
                    }`}
                  >
                    {pkg.status}
                  </span>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  ${pkg.total.toFixed(2)}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {pkg.paymentMethod}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3">
                    <button className="hover:text-primary">
                      <FaEye />
                    </button>
                    <button className="hover:text-primary">
                      <FaEdit />
                    </button>
                    <button className="hover:text-primary">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableWithFilters;
