import React from "react";

const Content = (props) => {
  const { title, children, fungsi } = props;
  return (
    <div>
      <div className="relative grid px-4 py-4 bg-white border-b border-gray-200 shadow-sm col-1 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-bold leading-6 text-gray-900 uppercase sm:truncate">
            {title}
          </h1>
        </div>
        <div className="flex mt-4 sm:mt-0 sm:ml-4">
          <button
            onClick={() => fungsi()}
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-500 border border-transparent rounded-md order-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1"
          >
            Create
          </button>
        </div>
      </div>
      <div className="relative mt-8 sm:block">
        <div className="inline-block min-w-full align-middle border-b border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Content;
