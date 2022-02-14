import Image from 'next/image';

export default function User() {
  return (
    <>
      <section className="flex">
        <Image src={'/vercel.svg'} alt="avatar" height="70px" width="70px" />
        <div className="ml-5">
          <h1>The Octocat</h1>
          <a href="">@octocat</a>
          <p>Joined 25 Jan 2011</p>
        </div>
      </section>
      <section>
        <p>Lorem ipsum dolor sit atmet, consecteteur adipiscin elit. Donec odio. Quisque volutpat mattis eros.</p>
      </section>
      <section className="flex">
        <div>
          <h2>Repos</h2>
          <p>8</p>
        </div>
        <div>
          <h2>Followers</h2>
          <p>3938</p>
        </div>
        <div>
          <h2>Following</h2>
          <p>9</p>
        </div>
      </section>
      <section>
        <div>
          <Image src={'/icon-location.svg'} alt="location" height="20px" width="13.75px" />
          <a>San Francisco</a>
        </div>
        <div>
          <Image src={'/icon-website.svg'} alt="website" height="20px" width="20px" />
          <a href="https://github.blog">https://github.blog</a>
        </div>
        <div>
          <Image src={'/icon-twitter.svg'} alt="twitter" height="16.25px" width="20px" />
          <a href="">Not Available</a>
        </div>
        <div>
          <Image src={'/icon-company.svg'} alt="company" height="20px" width="20px" />
          <a href="">@github</a>
        </div>
      </section>
    </>
  );
}
