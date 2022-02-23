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
    <div className="sm:max-w-sceen flex bg-white dark:bg-blue-darker rounded">
      <Image
        src={"/icon-search.svg"}
        alt="Search Icon"
        width={20}
        height={20}
      />
      <input
        className="bg-white dark:bg-blue-darker"
        type="text"
        name="username"
        placeholder="Search GitHub username..."
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="bg-blue rounded text-white"
        onClick={(e) => {
          e.preventDefault();
          handleSearch(username);
        }}
        disabled={loading}
      >
        {loading ? "Loading ..." : "Search"}
      </button>
    </div>
  );
}
