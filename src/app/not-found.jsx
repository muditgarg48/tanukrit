import Link from "next/link";
import Image from "next/image";
import { CONTENT } from "@/constants/content";

export const metadata = {
  title: `Page not found | ${CONTENT.navbar.logo}`,
};

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center bg-white">
      <Image src={CONTENT.navbar.logoSrc} alt={CONTENT.navbar.logo} className="h-16 w-auto" sizes="128px" />
      <h1 className="text-4xl md:text-5xl font-heading text-primary">This page has wandered off</h1>
      <p className="text-base text-gray-600 max-w-md">
        The link may be old or mistyped. Our hampers are still right where we left them.
      </p>
      <Link
        href="/"
        className="px-8 py-3 rounded-full font-medium bg-primary text-white hover:opacity-90 active:scale-95 transition-all duration-300"
      >
        Back to home
      </Link>
    </main>
  );
}
