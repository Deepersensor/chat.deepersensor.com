import Image from "next/image";
import Link from "next/link";

const Navbar = () => (
  <nav className="glass flex items-center justify-between px-8 py-4 mb-8 sticky top-0 z-30 shadow-lg backdrop-blur-lg">
    <div className="flex items-center gap-3">
      <Link href="/">
        <Image src="/logo.png" alt="App Logo" width={40} height={40} className="rounded-full" />
      </Link>
      <span className="gradient-text text-2xl font-bold tracking-tight">DeepSensor AI</span>
    </div>
    <div className="flex gap-4 items-center">
      <Link href="/chat" className="btn-primary">Chat</Link>
      <Link href="/signin" className="text-white/80 hover:text-white font-medium">Sign In</Link>
      <Link href="/signup" className="text-white/80 hover:text-white font-medium">Sign Up</Link>
    </div>
  </nav>
);

export default Navbar;
