import React from "react";
import Link from "next/link";
import { Film } from "lucide-react";
import { Mail, Phone } from "lucide-react";

type Sns = {
  label: string;
};
export const Footer = () => {
  const snss: Sns[] = [
    { label: "Facebook" },
    { label: "Instagram" },
    { label: "Twitter" },
    { label: "Youtube" },
  ];

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-[1440px] h-70 py-10 px-20 bg-indigo-700 flex justify-between text-[#FAFAFA] text-sm leading-5">
        <>
          <div className="flex gap-2 mb-3">
            <Film size={20} />
            <p className="font-bold italic">Movie Z</p>
          </div>
          <p>© 2024 Movie Z. All Rights Reserved.</p>
        </>
        <div className="flex gap-24">
          <div className="flex flex-col gap-3">
            Contact Information
            <div className="flex gap-3 items-center">
              <Mail size={16} />
              <>
                <p className="font-medium">Email:</p>
                <p>support@movieZ.com</p>
              </>
            </div>
            <div className="flex gap-3 items-center mt-3">
              <Phone size={16} />
              <>
                <p className="font-medium">Phone:</p>
                <p>+976 (11) 123-4567</p>
              </>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            Follow us
            <p className="flex gap-3">
              {snss.map((sns) => (
                <Link key={sns.label} href="" className="font-medium">
                  {sns.label}
                </Link>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
