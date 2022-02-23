import Image from "next/image";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import UserHeader from "./UserHeader";
import UserBio from "./UserBio";
import UserStats from "./UserStats";
import UserLinks from "./UserLinks";

export default function User() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <section className="mt-4 py-6 px-8 bg-blue-darker rounded-2xl">
      <UserHeader />
      <UserBio />
      <UserStats />
      <UserLinks />
    </section>
  );
}
