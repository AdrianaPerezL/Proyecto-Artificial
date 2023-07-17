import React from "react";


export const Navbar = () => {
        return (
            <div className="">
              
              <nav
                class="fixed flex z-10 w-full items-center justify-between bg-dark-purple py-2 shadow-md bshadow-black/5 lg:flex-wrap lg:justify-start"
                data-te-navbar-ref
              >
                <div class="flex w-full flex-wrap items-center justify-between pl-1 pr-6 ">
                  <div className="flex items-center rounded px-6 py-4"></div>
                  <div class="relative flex items-center">
                    <div class="relative" data-te-dropdown-ref>
                      <a
                        class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                        href="#"
                        id="dropdownMenuButton2"
                        role="button"
                        data-te-dropdown-toggle-ref
                        aria-expanded="false"
                      >
                        
                      </a>
                      <ul
                        class="absolute left-auto right-0 z-[1000] float-left m-0 mt-2 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-bCasi text-left shadow-lg [&[data-te-dropdown-show]]:block"
                        aria-labelledby="dropdownMenuButton2"
                        data-te-dropdown-menu-ref
                      >

                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          );

}
