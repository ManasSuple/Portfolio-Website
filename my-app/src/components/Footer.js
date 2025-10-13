import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full font-medium text-lg dark:text-light max-sm:text-base">
      <Layout className="py-8 flex items-center justify-between max-lg:flex-col max-lg:py-6">
        <section className="flex flex-wrap items-center justify-between gap-4 pb-3 text-sm text-neutral-400 c-space">
          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
          <div className="flex gap-2">
            <p>Thank You</p>
          </div>
          <p>All rights reserved.</p>
        </section>
      </Layout>
    </footer>
  );
};

export default Footer;
