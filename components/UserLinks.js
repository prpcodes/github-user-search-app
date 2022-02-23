import Image from "next/image";
import { UserContext } from "../context/UserContext";

import { useContext } from "react";

export default function UserLinks() {
  const { user, octocat } = useContext(UserContext);

  return (
    <section>
      <div>
        <Image
          src={"/icon-location.svg"}
          alt="location"
          height="20px"
          width="13.75px"
        />
        <p>{user ? user.location : octocat.location}</p>
      </div>
      <div>
        <Image
          src={"/icon-website.svg"}
          alt="website"
          height="20px"
          width="20px"
        />
        <a
          href={user ? (user.blog ? `https://${user.blog}` : "") : octocat.blog}
        >
          {user ? (user.blog ? user.blog : "Not Available") : octocat.blog}
        </a>
      </div>
      <div>
        <Image
          src={"/icon-twitter.svg"}
          alt="twitter"
          height="16.25px"
          width="20px"
        />
        <a
          href={`https://twitter.com/${
            user ? user.twitter_username : octocat.twitter_username
          }`}
        >
          {user
            ? user.twitter_username
              ? user.twitter_username
              : "Not Available"
            : octocat.twitter_username}
        </a>
      </div>
      <div>
        <Image
          src={"/icon-company.svg"}
          alt="company"
          height="20px"
          width="20px"
        />
        <p>
          {user
            ? user.company
              ? user.company
              : "Not Available"
            : octocat.company}
        </p>
      </div>
    </section>
  );
}
