import { logOutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const handleLogOut = async () =>{
    const logout = await logOutAccount();
    const router = useRouter();
    if (logout) router.push('/')
  }
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">
          {user?.name[0] || "n/a"}
        </p>
      </div>
      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate  text-gray-700 font-semibold">
          {user?.name || 'N/A'}
        </h1>
        <p className="text-14 truncate font-normal text-gray-400">
          {user.email}
        </p>
      </div>
      <div className="footer_image">
        <Image src='icons/logout.svg' fill alt="logout" onClick={handleLogOut} />
      </div>
    </footer>
  );
};

export default Footer;
