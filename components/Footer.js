import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex items-center h-20 bg-gray-100 fixed bottom-0 w-full ">
      <Link href="/about">
        <a className="inline-flex items-center p-2 mr-4 ">
          <span className="text-xl text-black ">Footer</span>
        </a>
      </Link>
    </div>
  );
}
