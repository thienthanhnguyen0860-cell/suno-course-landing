"use client";

export default function Navbar() {
  function scrollToSection(id: string) {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button onClick={() => scrollToSection("top")} className="text-xl font-black">
          Suno<span className="text-purple-400">Creator</span>
        </button>

        <nav className="hidden gap-8 text-sm text-white/70 md:flex">
          <button onClick={() => scrollToSection("top")} className="hover:text-white">
            Trang chủ
          </button>
          <button onClick={() => scrollToSection("workflow")} className="hover:text-white">
            Workflow
          </button>
          <button onClick={() => scrollToSection("benefits")} className="hover:text-white">
            Lộ trình
          </button>
          <button onClick={() => scrollToSection("pricing")} className="hover:text-white">
            Pricing
          </button>
          <button onClick={() => scrollToSection("faq")} className="hover:text-white">
            FAQ
          </button>
        </nav>

        <button
          onClick={() => scrollToSection("lead")}
          className="rounded-full bg-white px-5 py-2 text-sm font-bold text-black"
        >
          Đăng ký
        </button>
      </div>
    </header>
  );
}