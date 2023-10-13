import React, { useState, useEffect, Fragment } from "react";
import apiMethod from "../api/apiMethod";
import Content from "./content";
import { BsThreeDotsVertical, BsTrash, BsPencil } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import AddUser from "./AddUser";
const User = () => {
  const [users, setUsers] = useState("");
  // eslint-disable-next-line
  const [user, setUser] = useState("");
  // eslint-disable-next-line
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line
  const [isEdit, setisEdit] = useState(false);
  // eslint-disable-next-line
  const [isDel, setisDel] = useState({
    id: 0,
    status: false,
  });
  const column = [
    { name: "#no" },
    { name: "Username" },
    { name: "Firstname" },
    { name: "Lastname" },
  ];

  useEffect(() => {
    const getdata = async () => {
      const result = await apiMethod.findall();
      // console.log(result.data.data[0]);
      const data = result.data.data[0];
      setUsers(data);
    };
    getdata();
  }, [isOpen, isEdit, isDel]);

  return (
    <div>
      <Content title="User" fungsi={() => setIsOpen(true)}>
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="border-t border-gray-200">
              {column &&
                column.map((col) => (
                  <th className="py-2 pr-6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    <span className="lg:pl-2">{col.name}</span>
                  </th>
                ))}
              <th className="py-2 pr-6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {users &&
              users.map((dt, index) => (
                <tr key={dt.id}>
                  <td className="px-6 py-3 text-sm text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-900">
                    {dt.username}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-900">
                    {dt.first_name}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-900">
                    {dt.last_name}
                  </td>
                  <div className="w-full text-right">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          <BsThreeDotsVertical
                            className="ml-2 -mr-1 text-gray-700 hover:text-gray-400 sm:flex"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute w-56 mt-0 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg right-7 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <BsPencil
                                      className="w-5 h-5 mr-2 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <BsPencil
                                      className="w-5 h-5 mr-2 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Edit
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <BsTrash
                                      className="w-5 h-5 mr-2 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <BsTrash
                                      className="w-5 h-5 mr-2 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Delete
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </tr>
              ))}
          </tbody>
        </table>
      </Content>
      {isOpen ? (
        <AddUser show={isOpen} closeModal={() => setIsOpen(false)} />
      ) : (
        ""
      )}
    </div>
  );
};
export default User;
