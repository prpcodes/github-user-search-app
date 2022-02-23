import Image from "next/image";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function User() {
  const user = useContext(UserContext);
  console.log(user);
  const octocat = {
    login: "octocat",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    html_url: "https://github.com/octocat",
    followers_url: "https://api.github.com/users/octocat/followers",
    following_url:
      "https://api.github.com/users/octocat/following{/other_user}",
    subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
    organizations_url: "https://api.github.com/users/octocat/orgs",
    repos_url: "https://api.github.com/users/octocat/repos",
    type: "User",
    site_admin: false,
    name: "The Octocat",
    company: "@github",
    blog: "https://github.blog",
    location: "San Francisco",
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 8,
    public_gists: 8,
    followers: 4995,
    following: 9,
    created_at: "2011-01-25T18:44:36Z",
  };
  return (
    <>
      <section className="flex">
        <Image
          src={user ? octocat.avatar_url : user.avatar_url}
          alt="avatar"
          height="70px"
          width="70px"
        />
        <div className="ml-5">
          <h1>{user ? octocat.name : user.name}</h1>
          <a href={user.html_url}>@{user.login}</a>
          <p>
            Joined{" "}
            {new Date(
              user ? octocat.created_at : user.created_at
            ).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>
      <section>
        <p>{user ? octocat.bio : user.bio}</p>
      </section>
      <section className="flex">
        <div>
          <h2>Repos</h2>
          <p>{user ? octocat.public_repos : user.public_repos}</p>
        </div>
        <div>
          <h2>Followers</h2>
          <p>{user ? octocat.followers : user.followers}</p>
        </div>
        <div>
          <h2>Following</h2>
          <p>{user ? octocat.following : user.following}</p>
        </div>
      </section>
      <section>
        <div>
          <Image
            src={"/icon-location.svg"}
            alt="location"
            height="20px"
            width="13.75px"
          />
          <a>{user ? octocat.location : user.location}</a>
        </div>
        <div>
          <Image
            src={"/icon-website.svg"}
            alt="website"
            height="20px"
            width="20px"
          />
          <a href={`https://${user ? octocat.blog : user.blog}`}>
            {user ? octocat.blog : user.blog}
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
              user ? octocat.twitter_username : user.twitter_username
            }`}
          >
            {user ? octocat.twitter_username : user.twitter_username}
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
              ? octocat.company
              : `@${user ? octocat.company : user.company}`}
          </p>
        </div>
      </section>
    </>
  );
}
