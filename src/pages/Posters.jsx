import Navbar from "../components/Navbar";
import internalReasoningPoster from "../poster/cure-bench_Poster.pdf";
import medPathAgentPoster from "../poster/MedPathAgent_CureBENCH_NeurIPS2025.pdf";
import curaivePoster from "../poster/CURE-Bench  - Agata Polejowska, Radboudumc (5).pdf";

const posters = [
  {
    title: "CURE-Bench-InternalReasoning",
    subtitle: "Prompt evolution for clinical decision-making tasks",
    authors:
      "Hongshun Ling, Zedong Lu, Fuliang Quan, Shi Wang, Qi Zhang – Huimei (Shanghai) Technology Co., Ltd.",
    track: "Internal Model Reasoning Track",
    venue: "CURE-Bench Workshop @ NeurIPS 2025",
    summary:
      "Huimei Technology’s entry for the internal model reasoning track. The poster presents an evolutionary prompt-optimization framework that maintains a pool of candidate system prompts, generates variants via reflection on model errors, and archives improved prompts based on validation batches. The optimized prompts significantly improve performance on CURE-Bench clinical treatment-planning questions, including both randomly sampled and hard error-focused subsets.",
    file: internalReasoningPoster,
  },
  {
    title: "MedPathAgent",
    subtitle: "Knowledge-graph augmented tool-use medical agent",
    authors: "MedPathAgent Team",
    track: "Agentic Tool-Augmented Reasoning Track",
    venue: "CURE-Bench Agent Track @ NeurIPS 2025",
    summary:
      "Introduces MedPathAgent, a biomedical question-answering agent that combines tool-augmented reasoning with knowledge-graph verified reasoning paths. The system links entities in questions to PrimeKG, induces a local subgraph, finds shortest reasoning paths, and ranks them with an LLM to select clinically relevant paths. These structured paths are then injected into a tool-using agent, improving grounded clinical reasoning compared with tool-only or KG-only baselines on CURE-Bench tasks.",
    file: medPathAgentPoster,
  },
  {
    title: "Curaive",
    subtitle:
      "Adaptive precision therapeutics decision support for CURE-Bench",
    authors: "Agata Polejowska – Radboudumc",
    track: "Agentic & Internal Reasoning Tracks",
    venue: "CURE-Bench Poster Session @ NeurIPS 2025",
    summary:
      "Presents curaive, a precision-therapeutic decision support system that delivers structured multi-section reports (patient profile, briefing package, analysis) for CURE-Bench cases. The agent uses adaptive case-tailored prompting, explicit uncertainty markers, and an “undeterminable” escape option, and integrates ToolUniverse/FDA tools for drug and indication information. The poster reports competitive private-leaderboard scores across multi-choice tasks on both the agentic and internal reasoning tracks.",
    file: curaivePoster,
  },
];

export default function Posters() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 text-gray-900 py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-crimson mb-4">
              Posters
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto font-sans">
              Browse and download posters shared by the CURE-Bench community.
            </p>
          </header>

          <section className="grid gap-8 md:grid-cols-2">
            {posters.map((poster) => (
              <article
                key={poster.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h2 className="text-xl md:text-2xl font-semibold leading-snug text-slate-900">
                        {poster.title}
                      </h2>
                      {poster.subtitle && (
                        <p className="text-sm md:text-base text-slate-700 mt-1">
                          {poster.subtitle}
                        </p>
                      )}
                    </div>
                    <span className="inline-flex items-center rounded-full bg-crimson text-white text-xs font-semibold px-3 py-1 whitespace-nowrap">
                      {poster.track}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 mb-3">
                    <span className="font-medium">Authors:</span>{" "}
                    {poster.authors}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-slate-500 mb-4">
                    {poster.venue}
                  </p>

                  <p className="text-sm md:text-[0.95rem] leading-relaxed text-slate-700">
                    {poster.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-6 py-4 rounded-b-2xl">
                  <span className="text-xs text-slate-500">
                    PDF · opens in a new tab
                  </span>
                  <a
                    href={poster.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-crimson text-white text-sm font-medium px-4 py-2 hover:bg-[#8c0d24] focus:outline-none focus:ring-2 focus:ring-crimson focus:ring-offset-2"
                  >
                    Download poster
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </section>

          <p className="mt-10 text-center text-xs text-slate-500 max-w-3xl mx-auto">
            If you would like your CURE-Bench poster to appear on this page,
            please contact the organizers with your PDF and track information.
          </p>
        </div>
      </main>
    </>
  );
}
