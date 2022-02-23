import Image from "next/image";
import { UserContext } from "../context/UserContext";

import { useContext } from "react";

export default function UserHeader() {
  const { user, octocat } = useContext(UserContext);

  return (
    <section className="flex">
      <Image
        src={user ? user.avatar_url : octocat.avatar_url}
        alt="avatar"
        height="70px"
        width="70px"
      />
      <div className="ml-5">
        <h1>{user ? user.name : octocat.name}</h1>
        <a href={user ? user.html_url : octocat.html_url}>
          @{user ? user.login : octocat.login}
        </a>
        <p>
          Joined{" "}
          {new Date(
            user ? user.created_at : octocat.created_at
          ).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </section>
  );
}
