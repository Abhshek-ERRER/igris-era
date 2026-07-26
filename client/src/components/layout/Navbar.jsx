function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
      <h1 className="text-2xl font-bold tracking-wider text-cyan-400">
        IGRIS ERA
      </h1>

      <div className="flex items-center gap-6">
        <button className="text-gray-300 hover:text-cyan-400 transition">
          Home
        </button>

        <button className="text-gray-300 hover:text-cyan-400 transition">
          About
        </button>

        <button className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;