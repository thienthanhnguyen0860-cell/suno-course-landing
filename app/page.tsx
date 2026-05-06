"use client";

import Navbar from "./components/Navbar";
import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const lead = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      createdAt: new Date().toISOString(),
    };

    const oldLeads = JSON.parse(localStorage.getItem("suno_leads") || "[]");

    localStorage.setItem(
      "suno_leads",
      JSON.stringify([...oldLeads, lead])
    );

    setSubmitted(true);

    e.currentTarget.reset();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section id="top" className="relative px-6 pt-36 pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#9333ea55,transparent_30%),radial-gradient(circle_at_80%_20%,#06b6d455,transparent_30%),radial-gradient(circle_at_50%_80%,#ec489955,transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/70 backdrop-blur">
              AI Music Creator Course
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Viết nhạc & bán nhạc bằng{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
                Suno AI
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Học cách viết lyric, tạo prompt Suno, generate bài hát và đóng
              gói thành sản phẩm âm nhạc số.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#lead"
                className="rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 px-8 py-4 text-center font-bold text-black transition hover:scale-105"
              >
                Đăng ký khóa học
              </a>

              <a
                href="#workflow"
                className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-center font-bold transition hover:bg-white/10"
              >
                Xem workflow
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {[
                ["100+", "Prompt mẫu"],
                ["30+", "Lyric template"],
                ["5+", "Template bán nhạc"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-2xl font-black text-transparent">
                    {num}
                  </p>

                  <p className="mt-1 text-xs text-white/55">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-cyan-400/30 blur-3xl" />

            <img
              src="/hero-dashboard.png"
              alt="AI Music Dashboard"
              className="relative w-full rounded-[2rem] border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
<section id="workflow" className="px-6 py-28">
  <div className="mx-auto max-w-7xl">
    <h2 className="text-4xl font-black md:text-6xl">
      Workflow từ ý tưởng đến bài hát
    </h2>

    <p className="mt-4 max-w-2xl text-white/60">
      Bấm vào từng bước để xem chi tiết cách tạo nhạc, prompt và đóng gói sản phẩm.
    </p>

    <div className="mt-14 grid grid-flow-col auto-cols-[280px] gap-5 overflow-x-auto pb-6 lg:grid-flow-row lg:grid-cols-4 lg:overflow-visible">
      {[
        {
          step: "01",
          title: "Chọn niche âm nhạc",
          desc: "Xác định bạn muốn làm nhạc cho ai: TikTok, YouTube, game, thiền, quảng cáo, phim ngắn hoặc bán beat.",
          result: "Kết quả: có một thị trường rõ ràng để nhắm tới.",
          icon: "🎵",
        },
        {
          step: "02",
          title: "Viết idea bài hát",
          desc: "Tạo concept bài hát gồm cảm xúc, câu chuyện, bối cảnh và thông điệp chính.",
          result: "Kết quả: có ý tưởng đủ rõ để viết lyric.",
          icon: "💡",
        },
        {
          step: "03",
          title: "Tạo lyric structure",
          desc: "Sắp xếp lời theo intro, verse, chorus, bridge để bài hát nghe tự nhiên hơn.",
          result: "Kết quả: có khung lời bài hát dễ đưa vào Suno.",
          icon: "✍️",
        },
        {
          step: "04",
          title: "Viết prompt Suno",
          desc: "Mô tả genre, mood, vocal, tempo, instrument và cảm xúc để Suno tạo đúng phong cách.",
          result: "Kết quả: có prompt mạnh để generate bài hát.",
          icon: "🤖",
        },
        {
          step: "05",
          title: "Generate nhiều version",
          desc: "Tạo nhiều phiên bản khác nhau để so sánh hook, vocal, mood và chất lượng tổng thể.",
          result: "Kết quả: có nhiều lựa chọn tốt hơn.",
          icon: "🚀",
        },
        {
          step: "06",
          title: "Chọn bản tốt nhất",
          desc: "Nghe lại, chọn bản có hook mạnh, vocal rõ, mood đúng và dễ dùng cho mục tiêu bán hàng.",
          result: "Kết quả: chọn được bản nhạc chính.",
          icon: "🎧",
        },
        {
          step: "07",
          title: "Đóng gói sản phẩm",
          desc: "Chuẩn bị audio, cover, lyric, prompt, mô tả sản phẩm và file bonus.",
          result: "Kết quả: có music pack có thể bán.",
          icon: "📦",
        },
        {
          step: "08",
          title: "Bán bằng landing page",
          desc: "Đưa sản phẩm lên landing page, thêm pricing, FAQ, CTA và form đăng ký.",
          result: "Kết quả: có trang bán nhạc chuyên nghiệp.",
          icon: "💰",
        },
      ].map((item) => (
        <details
          key={item.step}
          className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-pink-400/40 hover:bg-white/10"
        >
          <summary className="cursor-pointer list-none">
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 text-lg font-black text-black">
                {item.step}
              </div>

              <div className="text-3xl">{item.icon}</div>
            </div>

            <h3 className="mt-6 text-xl font-black">{item.title}</h3>

            <p className="mt-3 text-sm text-white/60">
              Bấm để xem chi tiết
            </p>
          </summary>

          <div className="mt-5 border-t border-white/10 pt-5">
            <p className="leading-7 text-white/70">{item.desc}</p>

            <p className="mt-4 rounded-2xl bg-white/5 p-4 text-sm text-cyan-200">
              {item.result}
            </p>
          </div>
        </details>
      ))}
    </div>
  </div>
</section>
      {/* BENEFITS */}
      <section id="benefits" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black md:text-6xl">
            Sau khóa học bạn sẽ có gì?
          </h2>

          <img
            src="/music-cover.png"
            alt="Music Cover"
            className="mt-10 w-full rounded-[2rem] border border-white/10"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              "Biết viết lyric theo mood & genre",
              "Biết tạo prompt Suno chuyên nghiệp",
              "Generate nhiều version bài hát",
              "Xây catalog nhạc cá nhân",
              "Đóng gói prompt & lyric pack",
              "Tạo landing page bán nhạc",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-10"
              >
                <div className="mb-5 text-3xl">✨</div>

                <p className="text-lg font-semibold text-white/85">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-black md:text-6xl">
              Chọn gói phù hợp
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "499k",
                features: [
                  "Video bài học",
                  "Prompt mẫu",
                  "Lyric template",
                ],
              },
              {
                name: "Creator",
                price: "999k",
                features: [
                  "Workflow nâng cao",
                  "Landing page template",
                  "Music pack system",
                ],
                hot: true,
              },
              {
                name: "Pro",
                price: "1.990k",
                features: [
                  "Review project",
                  "Private support",
                  "Premium assets",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[2rem] border p-8 ${
                  plan.hot
                    ? "border-pink-400 bg-pink-400/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <h3 className="text-2xl font-black">{plan.name}</h3>

                <p className="mt-6 bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-5xl font-black text-transparent">
                  {plan.price}
                </p>

                <ul className="mt-8 space-y-4 text-white/70">
                  {plan.features.map((feature) => (
                    <li key={feature}>✅ {feature}</li>
                  ))}
                </ul>

                <a
                  href="#lead"
                  className="mt-10 block rounded-full bg-white px-6 py-4 text-center font-bold text-black"
                >
                  Đăng ký ngay
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="faq" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black md:text-6xl">
            Học viên nói gì?
          </h2>

          <img
            src="/creator-studio.png"
            alt="Creator Studio"
            className="mt-10 w-full rounded-[2rem] border border-white/10"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              "Mình đã tạo được demo bài hát đầu tiên chỉ sau vài ngày.",
              "Workflow prompt cực dễ áp dụng.",
              "Landing page template rất hữu ích để bán sản phẩm nhạc.",
            ].map((text) => (
              <div
                key={text}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
              >
                <p className="text-white/75">“{text}”</p>

                <p className="mt-6 font-bold">Creator Student</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="benefits" className="px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black md:text-6xl">FAQ</h2>

          <div className="mt-10 space-y-4">
            {[
              [
                "Có cần biết nhạc lý không?",
                "Không bắt buộc.",
              ],
              [
                "Có cần API key không?",
                "Không cần.",
              ],
              [
                "Deploy miễn phí được không?",
                "Có thể dùng Vercel.",
              ],
            ].map(([q, a]) => (
              <details
                key={q}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <summary className="cursor-pointer font-bold">
                  {q}
                </summary>

                <p className="mt-4 text-white/70">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="lead" className="px-6 py-28">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <h2 className="text-4xl font-black">
            Nhận bài học miễn phí
          </h2>

          <p className="mt-4 text-white/70">
            Điền thông tin để nhận workflow viết nhạc bằng Suno.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              name="name"
              required
              placeholder="Tên của bạn"
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none"
            />

            <input
              name="email"
              required
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none"
            />

            <input
              name="phone"
              placeholder="Số điện thoại hoặc Zalo"
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none"
            />

            <button className="w-full rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 px-6 py-4 font-bold text-black">
              Gửi đăng ký
            </button>
          </form>

          {submitted && (
            <p className="mt-5 rounded-xl bg-green-400/10 p-4 text-green-300">
              Đã lưu đăng ký vào localStorage.
            </p>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/50">
        <p>© 2026 SunoCreator. AI Music Creator Landing Page.</p>

        <p className="mt-2">
          Build bằng Next.js + Tailwind + localStorage.
        </p>
      </footer>
    </main>
  );
}