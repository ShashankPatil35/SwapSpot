import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="bg-black text-[#004AAD] px-4 py-8">
      <div class="flex flex-col justify-between gap-8 md:flex-row md:pt-3 sm:px-4 lg:px-12 lg:justify-start lg:gap-44">
        <div class="mb-4 md:mb-0">
          <h1 class="text-3xl font-bold mt-4 md:mt-0">SwapSpot</h1>
          <p class="text-gray-400 mt-2">
          MARKET PLACE FOR ALL EXCHANGES.
          </p>
        </div>
        <div class="flex flex-row flex-wrap gap-12 mt-2 md:mt-0 lg:gap-20">
          <div class="mb-4 md:mb-0">
            <h2 class="text-lg font-bold">Links</h2>
            <ul class="mt-2 text-sm flex flex-col gap-4">
              <li>
                <a href="/" class="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/Aboutme" class="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" class="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div class="mb-4 md:mb-0 pr-2">
            <h2 class="text-lg font-bold">Social</h2>
            <ul class="mt-2 text-sm flex flex-col gap-4">
              <li>
                <a
                 
                  class="text-gray-400 hover:text-white"
                >
                  <i class="fa fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a
                  
                  class="text-gray-400 hover:text-white"
                >
                  <i class="fa fa-github"></i> GitHub
                </a>
              </li>
              <li>
                <a
                  
                  class="text-gray-400 hover:text-white"
                >
                  <i class="fa fa-discord"></i> Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="text-center mt-8 mb-2 lg:mt-16">
        <p class="text-[#004AAD] text-s">
          All rights reserved @ {currentYear}

        </p>
      </div>
    </footer>
  );
};

export default Footer;