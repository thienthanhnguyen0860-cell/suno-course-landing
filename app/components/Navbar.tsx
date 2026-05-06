export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-xl font-black">
          Suno<span className="text-purple-400">Creator</span>
        </div>

        <nav className="hidden gap-8 text-sm text-white/70 md:flex">
          <a href="#">Trang chủ</a>
          <a href="#">Workflow</a>
          <a href="#">Lộ trình</a>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
        </nav>

        <button className="rounded-full bg-white px-5 py-2 text-sm font-bold text-black">
          Đăng ký
        </button>
      </div>
    </header>
  );
}