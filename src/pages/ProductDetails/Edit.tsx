import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const Edit = () => {
  const [content, setContent] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };
  return (
    <>
      <Breadcrumb pageName="Edit Product" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Details
              </h3>
              <p className="font-small text-black dark:text-white">
                Title,short description,image...
              </p>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Product Name
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Sub Description
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                />
              </div>

              {/* Text Section */}
              <div>
                <label className="mb-3 block font-medium text-black dark:text-white">
                  Content
                </label>
                <div className="mb-6">
                  <label
                    htmlFor="content"
                    className="block text-lg font-medium mb-2"
                  ></label>
                  <ReactQuill
                    value={content}
                    onChange={handleContentChange}
                    placeholder="Write Something Here"
                    className="h-65"
                  />
                </div>
              </div>

              {/* Images Section */}
              <div>
                <label className="mb-3 mt-3 block font-medium text-black dark:text-white">
                  Images
                </label>
                <div className="flex justify-center items-center w-full">
                  <label
                    htmlFor="images"
                    className="flex flex-col justify-center items-center w-full h-75 border-2 border-gray-300 border-solid rounded-lg cursor-pointer bg-white hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col justify-center items-center pt-5 pb-6">
                      {/* New SVG Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        className="w-10 h-10 mb-3 text-gray-400"
                      >
                        <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L296 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-134.1 39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
                      </svg>

                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Drag and drop</span> a
                        file here or click
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (Max 800x400px)
                      </p>
                    </div>
                    <input
                      id="images"
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Preview Selected Files */}
                {images.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-lg font-medium">Selected Images</h4>
                    <ul className="list-disc pl-5 mt-2">
                      {images.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          {/* <!-- Textarea Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Properties
              </h3>
              <p className="font-small text-black dark:text-white">
                Additional functions and attributes...
              </p>
            </div>

            {/* Properties Grid Layout */}
            <div className="grid grid-cols-2 gap-4 p-6">
              {/* Product Code */}
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Product Code
                </label>
                <input
                  type="text"
                  placeholder="Product Code"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              {/* Product SKU */}
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Product SKU
                </label>
                <input
                  type="text"
                  placeholder="Product SKU"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Quantity
                </label>
                <input
                  type="text"
                  placeholder="0"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              {/* Category */}
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Category
                </label>

                <select
                  id="category"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                >
                  <option>Shirt</option>
                  <option>Pants</option>
                  <option>Accessories</option>
                </select>
              </div>

              {/* Color */}
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Color
                </label>

                <select
                  id="color"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                >
                  <option>Red</option>
                  <option>Green</option>
                  <option>Yellow</option>
                </select>
              </div>

              {/* Sizes */}
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Sizes
                </label>

                <select
                  id="sizes"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                >
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              </div>

              {/* Tags */}
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Tags
                </label>

                <select
                  id="tags"
                  className="w-full lg:w-[510px] rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                >
                  <option>Technology</option>
                  <option>Business</option>
                  <option>Textiles</option>
                </select>
              </div>

              {/* Gender */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Gender *
                </label>
                <div className="mt-2 space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">
                      Male
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">
                      Female
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="kids"
                      className="text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">
                      Kids
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            {/* <!-- Pricing Fields --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Pricing
                </h3>
                <p className="font-small text-black dark:text-white">
                  Price related inputs
                </p>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Regular Price
                  </label>
                  <input
                    type="text"
                    placeholder="$0.00"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Sales Price
                  </label>
                  <input
                    type="text"
                    placeholder="$0.00"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-0 px-2 w-30 h-10 rounded text-sm absolute right-0">
              Edit Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
