/* This example requires Tailwind CSS v2.0+ */
import {
  Children,
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import MenuItem from "./menu-item";
import Image from "next/image";
import Fuse from "fuse.js";

import CardSearchItem from "../search/card-search-item";
import useDebounce from "../../hooks/use-debounce";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNameNameNames(...classNameNames: String[]) {
  return classNameNames.filter(Boolean).join(" ");
}

const searchHandler = (list: menu[], string: string) => {
  const found = list.filter((element) => {
    return element.title.toLowerCase().includes(string.toLowerCase());
  });
  // let listMenu: menu[] = [];
  // console.log(typeof found);
  // if (typeof found === "object") {
  //   console.log("found");
  //   const foundItem: menu = found as menu;
  //   listMenu.concat(foundItem);
  //   console.log(found);
  //   console.log(listMenu);
  // }
  return found;
};

const menuItemList: menu[] = [
  {
    title: "Dashboard",
    to: "/dashboard",
    description:
      "This page will give some detail about all document of this dashboard website",
    children: [],
  },
  {
    title: "Users",
    to: "/users",
    description:
      "This page will give some detail about all document of this dashboard website",
    children: [],
  },
  {
    title: "Utils",
    to: "/utils",
    description:
      "This page will give some detail about all document of this dashboard website",
    children: [],
  },
  {
    title: "Menu",
    to: "/menu",
    description:
      "This page will give some detail about all document of this dashboard website",
    children: [],
  },
  {
    title: "Catalogue",
    to: "/catalogue",
    description:
      "This page will give some detail about all document of this dashboard website",
    children: [],
  },
];

interface menu {
  title: string;
  to: string;
  description: string;
  children: menu[];
}
const getMenuItemList = () => {
  return menuItemList as menu[];
};

const componentsItemSearch = (listMenu: menu[]) => {
  return listMenu.map((menu, index) => {
    return (
      <CardSearchItem
        key={"menu-search-" + (index + 1).toString()}
        title={menu.title}
        description={menu.description}
      />
    );
  });
};

const Sidebar: React.FC = ({ children }) => {
  const initialListMenu = getMenuItemList();
  const [listMenu, setListMenu] = useState<menu[]>(initialListMenu);
  const [searchIsFocus, setSearchIsFocus] = useState(false);

  const searchRef = useRef<HTMLInputElement | null>(null);
  const searchString = searchRef.current?.value ?? "";

  const debouncedSearchTerm = useDebounce(searchString, 500);

  // const searchItem = useCallback(() => {
  //   const tempResultSearch = searchHandler(initialListMenu, searchString ?? "");
  //   setListMenu(tempResultSearch);
  // }, [searchHandler, searchString]);

  useEffect(() => {
    // searchItem();
    const tempResultSearch = searchHandler(
      initialListMenu,
      debouncedSearchTerm
    );

    console.log(tempResultSearch);
    setListMenu([...tempResultSearch]);
  }, [debouncedSearchTerm]);

  // useCallback(() => {
  //   // resultSearch = searchHandler(listMenu, searchString ?? "");
  //   console.log("searchString: " + searchString);
  // }, [searchRef.current]);

  return (
    <div className="shadow bg-base-200 drawer drawer-mobile h-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="flex flex-col drawer-content">
        <div className="w-full navbar bg-base-300 fixed md:static">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-square btn-ghost drawer-button lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            {/* <span>Search item...</span> */}
            <form id="form-search">
              <input
                type="text"
                placeholder="Search Item ..."
                className="outline-none bg-transparent border-0"
                onFocus={(e) => setSearchIsFocus(true)}
                onBlur={(e) => setSearchIsFocus(false)}
                ref={searchRef}
              />
            </form>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu horizontal">
              <li>
                <a className="rounded-btn">Item 1</a>
              </li>
              <li>
                <a className="rounded-btn">Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col px-4 pt-20 md:p-6 drawer-content">
          {/* {searchIsFocus
            ? searchString!.length > 0
              ? componentsItemSearch(resultSearch)
              : componentsItemSearch(listMenu)
            : children} */}
          {searchIsFocus && componentsItemSearch(listMenu)}
          {!searchIsFocus && children}
          {/* {componentsItemSearch(listMenu)} */}
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          className="drawer-overlay text-black"
        ></label>

        <ul className="menu py-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <div className="flex flex-col justify-center align-items divide-y divide-gray-500 px-4">
            <img
              className={`h-100 py-4`}
              src="/vercel.svg"
              alt="Vercel Logo"
              width={120}
              height={70}
            />
            <hr />
          </div>

          <label className="text-xs m-2">Dashboard Menu</label>
          {initialListMenu.map((menu, index) => {
            return (
              <MenuItem
                key={menu.title.toLowerCase() + index}
                to={menu.to}
                title={menu.title}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export { Sidebar };
