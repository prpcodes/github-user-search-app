import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="sm:max-w-sceen flex bg-white dark:bg-blue-darker rounded">
      <Image src={'/icon-search.svg'} alt="Search Icon" width={20} height={20} />
      <input className="bg-white dark:bg-blue-darker" defaultValue="Search GitHub username" />
      <button className="bg-blue rounded text-white p">Search</button>
    </div>
  );
}
