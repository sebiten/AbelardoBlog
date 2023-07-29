import Link from "next/link";
import React from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 pt-8 mt-16 pb-6">
      <div className="container mx-auto px-4">
        <hr className="my-6 border-gray-700" />
        <div
          className="flex justify-center text-gray-400 gap-4"
        >
          <Link href="https://www.linkedin.com/in/sebdevspace/">
            <FaLinkedinIn className="text-xl grayscale hover:text-blue-500" />
          </Link>
          © 2023 por Sebastian Burgos. All rights reserved.
          <Link href="https://github.com/sebiten">
            <FaGithubAlt className="text-xl text-gray-500 hover:text-gray-400" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
