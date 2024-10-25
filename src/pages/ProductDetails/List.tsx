import { Product } from '../../types/product';
import ProductOne from '../../images/product/product-01.png';
import ProductTwo from '../../images/product/product-02.png';
import ProductThree from '../../images/product/product-03.png';
import ProductFour from '../../images/product/product-04.png';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const productData: Product[] = [
  {
    image: ProductOne,
    name: 'Apple Watch',
    category: 'Electronics',
    price: 296,
    sold: 22,
    profit: 45,
    status: 'Available',
    createdDate: '2024-10-01',
  },
  {
    image: ProductTwo,
    name: 'Macbook Pro M1',
    category: 'Electronics',
    price: 546,
    sold: 12,
    profit: 125,
    status: 'Out of Stock',
    createdDate: '2024-09-25',
  },
  {
    image: ProductThree,
    name: 'Dell Inspiron 15',
    category: 'Electronics',
    price: 443,
    sold: 64,
    profit: 247,
    status: 'Available',
    createdDate: '2024-09-20',
  },
  {
    image: ProductFour,
    name: 'HP Probook 450',
    category: 'Electronics',
    price: 499,
    sold: 72,
    profit: 103,
    status: 'Out of Stock',
    createdDate: '2024-09-15',
  },
];

const List = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Products List
        </h4>
      </div>

      {/* Header row */}
      <div className="grid grid-cols-12 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Sl. No.</p>
        </div>
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Image & Product Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex justify-center">
          <p className="font-medium">Category</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">Price</p>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <p className="font-medium">Status</p>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <p className="font-medium">Created Date</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">Actions</p>
        </div>
      </div>

      {/* Product rows */}
      {productData.map((product, key) => (
        <div
          className="grid grid-cols-12 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{key + 1}</p>
          </div>
          <div className="col-span-3 flex items-center">
            <div className="flex gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <img src={product.image} alt="Product" />
              </div>
              <p className="text-sm text-black dark:text-white">
                {product.name}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex justify-center">
            <p className="text-sm text-black dark:text-white">
              {product.category}
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <p className="text-sm text-black dark:text-white">
              ${product.price}
            </p>
          </div>
          <div className="col-span-2 flex items-center justify-center">
            <p className="text-sm text-black dark:text-white">
              {product.status}
            </p>
          </div>
          <div className="col-span-2 flex items-center justify-center">
            <p className="text-sm text-black dark:text-white">
              {product.createdDate}
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-center gap-2">
            <button className="text-blue-500 hover:text-blue-700">
              <FaEdit />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
