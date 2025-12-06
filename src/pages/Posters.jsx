import Navbar from "../components/Navbar";
import agataPoster from "../poster/Agata.pdf";
import beijingPoster from "../poster/BeijingLogicIntelligenceTechnology.pdf";
import constanzeCarePoster from "../poster/ConstanzeCare.pdf";
import internalReasoningPoster from "../poster/cure-bench_Poster.pdf";
import curaivePoster from "../poster/CURE-Bench  - Agata Polejowska, Radboudumc (5).pdf";
import cureAgentPoster from "../poster/CureAgent.pdf";
import datanetStudioPoster from "../poster/DatanetStudio.pdf";
import dmisPoster from "../poster/DMIS.pdf";
import hannahBansalPoster from "../poster/HannahBansal.pdf";
import huimeiTechPoster from "../poster/HuimeiTech.pdf";
import medAIPoster from "../poster/MedAI.pdf";
import medPathAgentPoster from "../poster/MedPathAgent_CureBENCH_NeurIPS2025.pdf";
import medXIAOHePoster from "../poster/MedXIAOHe.pdf";
import preceptorAIPoster from "../poster/PreceptorAI.pdf";
import raiseOdlPoster from "../poster/RAISE-ODL.pdf";
import uniBioIntelligencePoster from "../poster/UniBioIntelligence.pdf";
import ustwPoster from "../poster/USTW-QBRC.pdf";
import vimPoster from "../poster/VIM.pdf";
import yorkPoster from "../poster/YorkUniversity.pdf";

const defaultVenue = "CURE-Bench @ NeurIPS 2025";

const posters = [
  {
    title: "CURE-Bench Internal Reasoning",
    authors:
      "Hongshun Ling, Zedong Lu, Fuliang Quan, Shi Wang, Qi Zhang - Huimei (Shanghai) Technology Co., Ltd.",
    track: "Internal Model Reasoning Track",
    venue: defaultVenue,
    summary:
      "Prompt evolution framework for clinical decision-making tasks on CURE-Bench.",
    file: internalReasoningPoster,
    preview: internalReasoningPoster,
  },
  {
    title: "MedPathAgent",
    authors: "MedPathAgent Team",
    track: "Agentic Tool-Augmented Reasoning Track",
    venue: defaultVenue,
    summary:
      "Knowledge-graph augmented tool-use medical agent for grounded clinical reasoning.",
    file: medPathAgentPoster,
    preview: medPathAgentPoster,
  },
  {
    title: "Curaive",
    authors: "Agata Polejowska - Radboudumc",
    track: "Agentic and Internal Reasoning Tracks",
    venue: defaultVenue,
    summary:
      "Adaptive decision-support system producing structured reports for benchmark cases.",
    file: curaivePoster,
    preview: curaivePoster,
  },
  {
    title: "Curaive (Agata Poster)",
    authors: "Agata Polejowska - Radboudumc",
    track: "Agentic and Internal Reasoning Tracks",
    venue: defaultVenue,
    summary:
      "Three-section scaffolded prompting with a precision therapeutics focus.",
    file: agataPoster,
    preview: agataPoster,
  },
  {
    title: "Orchestrating Clinical Evidence",
    authors:
      "Yizhong Geng, Biao Qiu, Qiang Zhang, Tianmeng Pang, Wangyue Liu, Dejie Yang, Meng Xu - Beijing Logic Intelligence Technology and collaborators",
    track: "Agentic Tool-Augmented Reasoning Track",
    venue: defaultVenue,
    summary:
      "Multi-stage chain-of-verification workflow for grounded therapeutic reasoning.",
    file: beijingPoster,
    preview: beijingPoster,
  },
  {
    title: "Constanze Care",
    authors: "Constanze Care Team",
    track: "Internal Model Reasoning Track",
    venue: defaultVenue,
    summary:
      "Prenatal assistant benchmarking open-source models as alternatives to frontier systems.",
    file: constanzeCarePoster,
    preview: constanzeCarePoster,
  },
  {
    title: "CureAgent",
    authors: "CureAgent Team",
    track: "Agentic Tool-Augmented Reasoning Track",
    venue: defaultVenue,
    summary:
      "Multi-step agent addressing context utilization failure with tool grounding.",
    file: cureAgentPoster,
    preview: cureAgentPoster,
  },
  {
    title: "Datanet Studio",
    authors: "Datanet Studio Team",
    track: "Internal Model Reasoning Track",
    venue: defaultVenue,
    summary:
      "MedGemma evaluation across open-source medical reasoning models.",
    file: datanetStudioPoster,
    preview: datanetStudioPoster,
  },
  {
    title: "DMIS Structured Pipeline",
    authors: "DMIS Team",
    track: "Agentic Tool-Augmented Reasoning Track",
    venue: defaultVenue,
    summary:
      "Structured tool-augmented pipeline leveraging GPT-5 for clinical reasoning.",
    file: dmisPoster,
    preview: dmisPoster,
  },
  {
    title: "MedPathAgent (Hannah Bansal)",
    authors: "Hannah Bansal",
    track: "Agentic Tool-Augmented Reasoning Track",
    venue: defaultVenue,
    summary:
      "Knowledge-graph augmented agent emphasizing grounding for safe medical AI.",
    file: hannahBansalPoster,
    preview: hannahBansalPoster,
  },
  {
    title: "Huimei Tech",
    authors: "Huimei Tech Team",
    track: "Agentic Tool-Augmented Reasoning Track",
    venue: defaultVenue,
    summary:
      "Prompted decision-making using ToolUniverse for clinical safety and efficacy tasks.",
    file: huimeiTechPoster,
    preview: huimeiTechPoster,
  },
  {
    title: "MedAI Therapeutic Reasoning",
    authors: "MedAI Team",
    track: "Internal Model Reasoning Track",
    venue: defaultVenue,
    summary:
      "Therapeutic decision-making benchmarks with CURE-Bench clinical tasks.",
    file: medAIPoster,
    preview: medAIPoster,
  },
  {
    title: "CureFlow by MedXIAOHe",
    authors:
      "Jinghao Lin, Yuhang Wu, Zihan Wang, Boyuan Jiang, Chao Gao, Xiaozhong Ji",
    track: "Agentic Tool-Augmented Reasoning Track",
    venue: defaultVenue,
    summary:
      "Multi-layer CureFlow architecture with tool light-weighting and multi-agent planning.",
    file: medXIAOHePoster,
    preview: medXIAOHePoster,
  },
  {
    title: "CliniThink by Preceptor AI",
    authors:
      "Amrest Chinkamol, Natpatchara Pongjirapat, Krittaphas Chaisutyakorn, Naphat Sorn",
    track: "Agentic Tool-Augmented Reasoning Track",
    venue: defaultVenue,
    summary:
      "Multi-agent therapeutic reasoning with web search, tools, and model ensembling.",
    file: preceptorAIPoster,
    preview: preceptorAIPoster,
  },
  {
    title: "RAISE-ODL",
    authors: "RAISE-ODL Team",
    track: "Internal Model Reasoning Track",
    venue: defaultVenue,
    summary:
      "Poster preview for the offline decision logic submission.",
    file: raiseOdlPoster,
    preview: raiseOdlPoster,
  },
  {
    title: "Dynamic Weighting (UniBio Intelligence)",
    authors: "Vivek Kohar, Sahil Bodke",
    track: "Internal Model Reasoning Track",
    venue: defaultVenue,
    summary:
      "Dynamic weighting approach to improve model response accuracy.",
    file: uniBioIntelligencePoster,
    preview: uniBioIntelligencePoster,
  },
  {
    title: "CureAdapter (USTW-QBRC)",
    authors:
      "Vivian Zhang, Alex Wu, Smrithi Upadhyayula, Moises Narvaez, Sharvinee Ragunatha Rao, Zain Hussain, Vishal Gokani, Durga Kaveti, Guanghua Xiao, James Willig",
    track: "Internal Model Reasoning Track",
    venue: defaultVenue,
    summary:
      "Test-time adaptation strategy for therapeutic decision-making models.",
    file: ustwPoster,
    preview: ustwPoster,
  },
  {
    title: "VIM Track 1 Solution",
    authors: "Vladimir Manuilov, Ilya Makarov",
    track: "Internal Model Reasoning Track",
    venue: defaultVenue,
    summary:
      "8th place Track 1 solution focused on internal clinical reasoning.",
    file: vimPoster,
    preview: vimPoster,
  },
  {
    title: "York University Submission",
    authors: "York University Team",
    track: "Internal Model Reasoning Track",
    venue: defaultVenue,
    summary:
      "Comparative performance across GPT-5 and Gemini variants.",
    file: yorkPoster,
    preview: yorkPoster,
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
                    PDF preview - opens in a new tab
                  </span>
                  <a
                    href={poster.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-crimson text-white text-sm font-medium px-4 py-2 hover:bg-[#8c0d24] focus:outline-none focus:ring-2 focus:ring-crimson focus:ring-offset-2"
                  >
                    Download poster
                    <span aria-hidden="true">-&gt;</span>
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
