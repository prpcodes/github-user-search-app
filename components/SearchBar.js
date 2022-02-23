import Image from "next/image";
import { UserContext } from "../context/UserContext";

import { useContext, useState } from "react";

export default function SearchBar() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const { setUser } = useContext(UserContext);

  function handleSearch(username) {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }

  return (
    <form className="py-2 px-2 bg-blue-darker rounded-2xl flex justify-between w-full">
      <div className="m-auto">
        <Image
          src={"/icon-search.svg"}
          alt="Search Icon"
          width={20}
          height={20}
        />
      </div>
      <input
        className="bg-blue-darker "
        type="text"
        name="username"
        placeholder="Search GitHub username..."
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="bg-blue rounded-xl text-white h-12 w-20"
        onClick={(e) => {
          e.preventDefault();
          handleSearch(username);
        }}
        disabled={loading}
      >
        {loading ? "Loading ..." : "Search"}
      </button>
    </form>
  );
}
