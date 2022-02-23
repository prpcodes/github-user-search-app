import Image from "next/image";
import { UserContext } from "../context/UserContext";

import { useContext, useState } from "react";

export default function UserStats() {
  const { user, octocat } = useContext(UserContext);

  return (
    <section className="flex">
      <div>
        <h2>Repos</h2>
        <p>{user ? user.public_repos : octocat.public_repos}</p>
      </div>
      <div>
        <h2>Followers</h2>
        <p>{user ? user.followers : octocat.followers}</p>
      </div>
      <div>
        <h2>Following</h2>
        <p>{user ? user.following : octocat.following}</p>
      </div>
    </section>
  );
}
