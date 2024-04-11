import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <img />
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <a href="/about-us">About Us</a>
      </nav>
    </header>
  );
}
