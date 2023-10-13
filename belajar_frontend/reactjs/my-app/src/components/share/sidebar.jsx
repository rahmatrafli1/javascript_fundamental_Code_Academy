import { MdCottage, MdGroup, MdShopTwo, MdCategory } from "react-icons/md";
import { BiSolidCalculator } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../logo.svg";

const SideBar = () => {
  const pathname = useLocation();
  const listMenu = [
    { to: "/", path: "/", name: "Home", icon: <MdCottage /> },
    {
      to: "fungsikomponen",
      path: "/fungsikomponen",
      name: "FunctionComp",
      icon: <MdGroup />,
    },
    {
      to: "listproduct",
      path: "/listproduct",
      name: "Listproduct",
      icon: <MdShopTwo />,
    },
    {
      to: "user",
      path: "/user",
      name: "User",
      icon: <MdShopTwo />,
    },
    {
      to: "parent",
      path: "/parent",
      name: "ParentChild",
      icon: <MdCategory />,
    },
    {
      to: "calculator",
      path: "/calculator",
      name: "Calculator",
      icon: <BiSolidCalculator />,
    },
  ];

  return (
    <div className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <img className="w-32 h-auto" src={Logo} alt="company" />
      </div>

      <div className="flex flex-col">
        {listMenu &&
          listMenu.map((mn) => (
            <Link key={mn.to} to={`${mn.to}`}>
              <div
                className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                  pathname === "/"
                    ? "bg-blue-100 text-blue-500"
                    : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
                }`}
              >
                <div className="mr-2">{mn.icon}</div>
                <p>{mn.name}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

SideBar.displayName = "SideBar";

export default SideBar;
