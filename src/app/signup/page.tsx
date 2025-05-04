import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="glass p-8 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-6">
        <h2 className="gradient-text text-3xl font-bold text-center">Sign Up</h2>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="password" placeholder="Password" className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="password" placeholder="Confirm Password" className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button type="submit" className="btn-primary text-lg mt-2">Sign Up</button>
        </form>
        <p className="text-center text-white/70">
          Already have an account? <Link href="/signin" className="gradient-text font-semibold">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
