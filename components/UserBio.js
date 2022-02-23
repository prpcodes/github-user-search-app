import Image from "next/image";
import { UserContext } from "../context/UserContext";

import { useContext } from "react";

export default function UserHeader() {
  const { user, octocat } = useContext(UserContext);

  return (
    <section>
      <p>{user ? user.bio : octocat.bio}</p>
    </section>
  );
}
