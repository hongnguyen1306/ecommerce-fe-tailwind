import React from "react";

const Header = () => {
  return (
    <>
      {/* <!-- container --> */}
      <div class="container mx-40 px-10">
        <nav class="flex items-center flex-column">
          {/* <!-- logo --> */}
          <div class="w-32 md:w-1/2 z-20">
            <img src="./image/logo.png " alt="website logo" className="w-36" />
          </div>
          {/* <!-- links --> */}
          <ul
            id="menu"
            class="invisible md:visible fixed
            z-20
            top-0
            left-0
            flex flex-column
            justify-center
            items-center
          bg-gray-900
            bg-opacity-90
            md:bg-transparent
            md: transform -translate-x-full
            md:flex-row
            md:justify-center
            md:static"
          >
            <li class="m-10 md:m-5">
              <a
                href="#"
                class="hover:text-red-500
                        transition
                        duration-500
                        ease-in;"
              >
                Home
              </a>
            </li>
            <li class="m-10 md:m-5">
              <a
                href="#"
                class="hover:text-red-500
                          transition
                          duration-500
                          ease-in;"
              >
                Collection
              </a>
            </li>
            <li class="m-10 md:m-5">
              <a
                href="#"
                class="hover:text-red-500
                        transition
                        duration-500
                        ease-in;"
              >
                Style
              </a>
            </li>
          </ul>
          <ul
            id="menu"
            class="invisible md:visible fixed
            z-20
            top-0
            left-0
            flex flex-col
            justify-center
            items-center
          bg-gray-900
            bg-opacity-90
            md:bg-transparent
            md:h-auto
            md:flex-row
            md:justify-center
            md:static"
          >
            <li class="m-10 md:m-5">
              <a
                href="#"
                class="hover:text-red-500
                        transition
                        duration-500
                        ease-in;"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </a>
            </li>
            <li class="m-10 md:m-5">
              <a
                href="#"
                class="hover:text-red-500
                          transition
                          duration-500
                          ease-in;"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </a>
            </li>
            <li class="m-10 md:m-5">
              <a
                href="#"
                class="hover:text-red-500
                        transition
                        duration-500
                        ease-in;"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </a>
            </li>
          </ul>
          {/* <!-- menu button --> */}
          <div id="menu-button" class="z-20 md:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
