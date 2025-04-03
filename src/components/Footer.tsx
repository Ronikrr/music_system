import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex flex-col w-full p-5 lg:p-10 bg-gray-100 dark:bg-black">
      <div className="flex flex-wrap w-full h-full pt-10 ">
        <div className="w-full md:w-2/4 xl:w-1/4 mb-6">
          <h6 className="text-2xl font-bold mb-4">About Us</h6>
          <p className="max-w-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            labore corrupti, voluptatibus dolorum amet veniam culpa aperiam
            minus ea delectus.
          </p>
        </div>

        <div className="w-full md:w-2/4 xl:w-1/4 mb-6">
          <h6 className="text-2xl font-bold mb-4">Quick Links</h6>
          <div className="flex flex-col gap-2 text-gray-500">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="w-full md:w-2/4 xl:w-1/4 mb-6">
          <h6 className="text-2xl font-bold mb-4">Contact Us</h6>
          <address className="text-gray-500 not-italic mb-2">
            New Delhi, India - 10001
          </address>
          <div className="flex flex-col gap-2 text-gray-500">
            <Link href="mailto:ronikgorasiya@gmail.com">
              ronikgorasiya@gmail.com
            </Link>
            <Link href="tel:+911234567892">+91 123 456 7892</Link>
          </div>
        </div>

        <div className="w-full md:w-2/4 xl:w-1/4 mb-6">
          <h6 className="text-2xl font-bold mb-4">Follow Us</h6>
          <div className="flex flex-col gap-2 text-gray-500">
            <Link href="https://facebook.com" target="_blank">
              Facebook
            </Link>
            <Link href="https://instagram.com" target="_blank">
              Instagram
            </Link>
            <Link href="https://twitter.com" target="_blank">
              Twitter
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full text-center pb-5 pt-10 text-gray-500">
        &copy; 2025 Music School. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
