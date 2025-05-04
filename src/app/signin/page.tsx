import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526]">
      <div className="glass p-8 md:p-12 w-full max-w-md flex flex-col items-center shadow-2xl">
        <Image src="/logo.jpg" alt="Logo" width={64} height={64} className="mb-6" />
        <h1 className="text-3xl font-bold gradient-text mb-2">Sign In</h1>
        <p className="mb-8 text-center text-gray-400">Welcome back! Sign in to continue.</p>
        <form className="w-full flex flex-col gap-4">
          <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder:text-gray-300" />
          <input type="password" placeholder="Password" className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder:text-gray-300" />
          <button type="submit" className="btn-primary w-full mt-2">Sign In</button>
        </form>
        <div className="flex items-center my-6 w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          <span className="mx-4 text-gray-400">or</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-blue-400 to-transparent" />
        </div>
        <button className="w-full flex items-center justify-center gap-2 glass py-3 mb-3 hover:bg-white/20 transition">
          <svg width="20" height="20" fill="currentColor" className="text-gray-200"><path d="M19.6 10.23c0-.68-.06-1.36-.18-2.02H10v3.82h5.44a4.63 4.63 0 0 1-2.01 3.04v2.52h3.25c1.9-1.75 2.92-4.33 2.92-7.36z" fill="#4285F4"/><path d="M10 20c2.7 0 4.97-.9 6.63-2.44l-3.25-2.52c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.76-5.59-4.13H1.06v2.59A9.99 9.99 0 0 0 10 20z" fill="#34A853"/><path d="M4.41 12.87A5.99 5.99 0 0 1 4 10c0-.99.18-1.95.41-2.87V4.54H1.06A9.99 9.99 0 0 0 0 10c0 1.64.39 3.19 1.06 4.54l3.35-2.67z" fill="#FBBC05"/><path d="M10 3.96c1.47 0 2.8.51 3.84 1.5l2.88-2.88C14.97 1.09 12.7 0 10 0A9.99 9.99 0 0 0 1.06 4.54l3.35 2.59C5.2 5.72 7.4 3.96 10 3.96z" fill="#EA4335"/></svg>
          <span className="font-semibold text-gray-100">Sign in with GitHub</span>
        </button>
        <button className="w-full flex items-center justify-center gap-2 glass py-3 hover:bg-white/20 transition">
          <svg width="20" height="20" fill="none" className="text-gray-200"><circle cx="10" cy="10" r="9" stroke="#00c6ff" strokeWidth="2"/><path d="M6 10l2 2 4-4" stroke="#00c6ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="font-semibold text-gray-100">Sign in with Web3 Wallet</span>
        </button>
        <p className="mt-6 text-gray-400 text-sm">Don't have an account? <a href="/signup" className="gradient-text font-semibold">Sign up</a></p>
      </div>
    </div>
  );
}
