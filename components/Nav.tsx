import Link from "next/link";
import { FC } from "react";

export const Nav: FC = () => {
  return (
    <nav className="border-b-pink-500 border-b p-6">
      <p className="text-4xl font-bold">Metaverse Marketplace</p>
      <div className="flex mt-4">
        <Link href="/">
          <a className="mr-4 text-pink-500">Home</a>
        </Link>
        <Link href="/create-item">
          <a className="mr-6 text-pink-500">Sell Digital Asset</a>
        </Link>
        <Link href="/my-assets">
          <a className="mr-6 text-pink-500">My Digital Assets</a>
        </Link>
        <Link href="/creator-dashboard">
          <a className="mr-6 text-pink-500">Creator Dashboard</a>
        </Link>
      </div>
    </nav>
  );
};
