"use client";
import Footer from "@/components/Footer";
import { ITEMS, sidebarLinks } from "@/constants";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = ({ user }: SiderbarProps) => {
  const pathName = usePathname();
  console.log(user);
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 items-center flex cursor-pointer gap-2">
          <Image
            src="/icons/bank-logo.jpg"
            width={34}
            height={34}
            alt="bankio logo"
            className="size-[54px]  max-xl:size-14"
          />
          <h1 className="sidebar-logo flex">Bankio</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathName === item.route || pathName.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>

      <Footer user={user} />
    </section>
  );
};

export default SideBar;
