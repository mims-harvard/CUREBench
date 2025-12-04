import Navbar from "../components/Navbar";
import internalReasoningPoster from "../poster/cure-bench_Poster.pdf";
import medPathAgentPoster from "../poster/MedPathAgent_CureBENCH_NeurIPS2025.pdf";
import curaivePoster from "../poster/CURE-Bench  - Agata Polejowska, Radboudumc (5).pdf";

const posters = [
  {
    title: "CURE-Bench — Internal Reasoning",
    authors:
      "Hongshun Ling, Zedong Lu, Fuliang Quan, Shi Wang, Qi Zhang — Huimei (Shanghai) Technology Co., Ltd.",
    track: "Internal Model Reasoning Track",
    venue: "CURE-Bench Workshop @ NeurIPS 2025",
    summary:
      "Prompt evolution framework for clinical decision-making tasks on CURE-Bench.",
    file: internalReasoningPoster,
    preview: internalReasoningPoster,
  },
  {
    title: "MedPathAgent",
    authors: "MedPathAgent Team",
    track: "Agentic Tool-Augmented Reasoning Track",
    venue: "CURE-Bench Agent Track @ NeurIPS 2025",
    summary:
      "Knowledge-graph augmented tool-use medical agent for grounded clinical reasoning.",
    file: medPathAgentPoster,
    preview: medPathAgentPoster,
  },
  {
    title: "Curaive",
    authors: "Agata Polejowska — Radboudumc",
    track: "Agentic & Internal Reasoning Tracks",
    venue: "CURE-Bench Poster Session @ NeurIPS 2025",
    summary:
      "Adaptive decision-support system producing structured reports for benchmark cases.",
    file: curaivePoster,
    preview: curaivePoster,
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
              Browse the posters and open the PDFs directly. Previews show the first page of each poster.
            </p>
          </header>

          <section className="grid gap-8 md:grid-cols-2">
            {posters.map((poster) => (
              <article
                key={poster.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden"
              >
                <div className="h-72 bg-gray-50 border-b border-slate-200">
                  <object
                    data={`${poster.preview}#page=1&view=FitH`}
                    type="application/pdf"
                    className="w-full h-full"
                  >
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                      PDF preview unavailable. Use the download button below.
                    </div>
                  </object>
                </div>

                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h2 className="text-xl md:text-2xl font-semibold leading-snug text-slate-900">
                        {poster.title}
                      </h2>
                      <p className="text-sm text-slate-700 mt-1">{poster.summary}</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-crimson text-white text-xs font-semibold px-3 py-1 whitespace-nowrap">
                      {poster.track}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 mb-3">
                    <span className="font-medium">Authors:</span>{" "}
                    {poster.authors}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">
                    {poster.venue}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-6 py-4 rounded-b-2xl">
                  <span className="text-xs text-slate-500">
                    PDF preview — opens in a new tab
                  </span>
                  <a
                    href={poster.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-crimson text-white text-sm font-medium px-4 py-2 hover:bg-[#8c0d24] focus:outline-none focus:ring-2 focus:ring-crimson focus:ring-offset-2"
                  >
                    Download poster
                    <span aria-hidden="true">⤓</span>
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
