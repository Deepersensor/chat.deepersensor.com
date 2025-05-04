import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] gap-12">
      <section className="flex flex-col items-center gap-6 text-center">
        <Image src="/logo.jpg" alt="App Logo" width={80} height={80} className="drop-shadow-xl" />
        <h1 className="gradient-text text-5xl font-extrabold tracking-tight">Welcome to DeepSensor AI</h1>
        <p className="text-lg text-white/80 max-w-xl">
          The next-generation AI chat platform. Experience beautiful, seamless, and powerful conversations with state-of-the-art models. <br />
          <span className="gradient-text font-semibold">Smarter. Prettier. Faster.</span>
        </p>
        <div className="flex gap-4 mt-4">
          <Link href="/chat" className="btn-primary text-lg">Start Chatting</Link>
          <Link href="/signup" className="btn-primary text-lg bg-white/10 border border-white/20 text-white hover:bg-white/20">Sign Up</Link>
        </div>
      </section>
      <section className="glass p-8 rounded-2xl shadow-xl max-w-3xl w-full flex flex-col gap-6">
        <h2 className="gradient-text text-2xl font-bold">Why DeepSensor?</h2>
        <ul className="grid sm:grid-cols-3 gap-6 text-center">
          <li className="glass p-4 rounded-xl">
            <span className="gradient-text text-xl font-bold">✨ Stunning UI</span>
            <p className="text-white/80 mt-2">Modern, glassy, and beautiful design everywhere.</p>
          </li>
          <li className="glass p-4 rounded-xl">
            <span className="gradient-text text-xl font-bold">🤖 Powerful AI</span>
            <p className="text-white/80 mt-2">Chat with the latest models, always up-to-date.</p>
          </li>
          <li className="glass p-4 rounded-xl">
            <span className="gradient-text text-xl font-bold">🕒 Chat History</span>
            <p className="text-white/80 mt-2">Never lose your conversations, always accessible.</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
