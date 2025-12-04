import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen bg-blue-950 text-white flex flex-col justify-center items-center text-center px-6 md:px-12">
      <div className="absolute inset-0 bg-molecules bg-cover bg-center opacity-10 animate-float"></div>

      <h1 className="text-5xl md:text-6xl font-serif font-bold z-10">
        CURE-Bench @ NeurIPS 2025
      </h1>

      <p className="mt-6 max-w-3xl text-lg md:text-xl font-sans z-10">
        Benchmarking AI reasoning for therapeutic decision-making at scale
      </p>

      <div className="mt-4 max-w-3xl text-sm md:text-base text-gray-200 z-10 leading-relaxed">
        <p>• <strong>Venue:</strong> San Diego Convention Center, San Diego, California, United States</p>
        <p>• <strong>Conference Dates:</strong> December 2 – 7, 2025</p>
        <p>• <strong>Workshop Schedule:</strong> Saturday, December 6, 2025, from 2:00 p.m. to 4:45 p.m. PST</p>
        <p>• <strong>Location:</strong> Upper Level Ballroom 6DE</p>
      </div>

      <div className="z-10 mt-6 flex flex-wrap justify-center gap-4">
        <a
          href="https://github.com/mims-harvard/CURE-Bench"
          target="_blank"
          rel="noreferrer"
        >
          <button className="px-4 py-2 rounded-xl bg-white text-blue-950 font-medium shadow hover:shadow-md transition">
            View Starter Kit
          </button>
        </a>
        <a
          href="https://www.kaggle.com/competitions/cure-bench"
          target="_blank"
          rel="noreferrer"
        >
          <button className="px-4 py-2 rounded-xl border border-white text-white font-medium hover:bg-white hover:text-blue-950 transition">
            Join on Kaggle
          </button>
        </a>
        <a
          href="https://forms.gle/T87fwenxwyPu7H7BA"
          target="_blank"
          rel="noreferrer"
        >
          <button className="px-4 py-2 rounded-xl border border-white text-white font-medium hover:bg-white hover:text-blue-950 transition">
            Submit your Therapeutic Questions
          </button>
        </a>
        <Link to="/posters">
          <button className="px-4 py-2 rounded-xl bg-crimson text-white font-medium shadow hover:shadow-md transition">
            View Posters
          </button>
        </Link>
      </div>
    </section>
  );
}
