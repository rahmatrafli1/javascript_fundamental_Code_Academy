import React, { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import apiMethod from "../api/apiMethod";

const AddUser = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [pesan, setPesan] = useState("");

  const handlingRegistration = async (data) => {
    const result = await apiMethod.create(data);
    setPesan(result.data.message);
  };

  const registerOptions = {
    username: { required: "Username wajib diisi!" },
    password: {
      required: "Password wajib diisi!",
      minLength: {
        value: 8,
        message: "Password harus lebih dari 8 karakter!",
      },
    },
    firstname: { required: "Nama Depan wajib diisi!" },
    lastname: { required: "Nama Belakang wajib diisi!" },
  };
  return (
    <div>
      <Transition appear show={props.show} as={Fragment}>
        <Dialog as="div" className="relative z-10" static onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 "></div>
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add User
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(handlingRegistration)}>
                      <div className="w-full max-w-xl px-3 py-6 m-auto mt-6 bg-white">
                        <div className="grid max-w-xl grid-cols-1 gap-4 m-auto">
                          <div className="col-span-1">
                            <input
                              type="text"
                              name="username"
                              {...register(
                                "username",
                                registerOptions.username
                              )}
                              className="w-full p-3 border-2 border-gray-400 border-solid rounded-lg md:text-md"
                              placeholder="Username"
                            />
                            <small className="text-red-600">
                              {errors?.username && errors.username.message}
                            </small>
                          </div>
                          <div className="col-span-1">
                            <input
                              type="password"
                              name="password"
                              {...register(
                                "password",
                                registerOptions.password
                              )}
                              className="w-full p-3 border-2 border-gray-400 border-solid rounded-lg md:text-md"
                              placeholder="Password"
                            />
                            <small className="text-red-600">
                              {errors?.password && errors.password.message}
                            </small>
                          </div>
                          <div className="col-span-1">
                            <input
                              type="text"
                              name="firstname"
                              {...register(
                                "firstname",
                                registerOptions.firstname
                              )}
                              className="w-full p-3 border-2 border-gray-400 border-solid rounded-lg md:text-md"
                              placeholder="Nama Depan"
                            />
                            <small className="text-red-600">
                              {errors?.firstname && errors.firstname.message}
                            </small>
                          </div>
                          <div className="col-span-1">
                            <input
                              type="text"
                              name="lastname"
                              {...register(
                                "lastname",
                                registerOptions.lastname
                              )}
                              className="w-full p-3 border-2 border-gray-400 border-solid rounded-lg md:text-md"
                              placeholder="Nama Belakang"
                            />
                            <small className="text-red-600">
                              {errors?.lastname && errors.lastname.message}
                            </small>
                          </div>
                          <div className="col-span-1 font-bold text-green-900">
                            {pesan}
                          </div>
                          <div className="flex-row mt-4 space-x-4 text-right">
                            <button
                              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              type="submit"
                            >
                              Submit
                            </button>
                            <button
                              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blredue-500 focus-visible:ring-offset-2"
                              type="button"
                              onClick={() => props.closeModal()}
                            >
                              Tutup
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AddUser;
