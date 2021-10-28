import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="flex flex-row flex-wrap justify-between bg-black p-8">
        <Link href="/">
          <a className="inline-flex items-center mr-4 ">
            <span className="text-xl text-white font-bold">Chase Kim</span>
          </a>
        </Link>
        <div>
          <a
            className="inline-flex items-center mr-8"
            href="https://www.linkedin.com/in/littlejkim/"
          >
            <span className="text-xl text-white font-bold">resume</span>
          </a>
          <Link href="/about">
            <a className="inline-flex items-center">
              <span className="text-xl text-white font-bold">about me</span>
            </a>
          </Link>
        </div>
      </nav>
      <div className="border-b-2 bg-white mx-8"></div>
    </>
  );
}
