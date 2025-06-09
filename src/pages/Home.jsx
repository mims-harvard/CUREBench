import Hero from "../components/Hero";
import Section from "../components/Section";
import Logos from "../components/Logos";
import OrganizerQuote from "../components/OrganizerQuote";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section title="CURE-Bench Overview">
        <p className="mb-4">
          Precision therapeutics require models that can reason over complex
          relationships between patients, diseases, and drugs. Large language
          models and large reasoning models, especially when combined with
          external tool use and multi-agent coordination, have demonstrated the
          potential to perform structured, multi-step reasoning in clinical
          settings. However, existing benchmarks (mostly QA benchmarks) do not
          evaluate these capabilities in the context of real-world therapeutic
          decision-making.
        </p>
        <p>
          We present CURE-Bench, a competition and benchmark for evaluating AI
          models in drug decision-making and treatment planning. CURE-Bench
          includes clinically grounded tasks such as recommending treatments,
          assessing drug safety and efficacy, designing treatment plans, and
          identifying repurposing opportunities for diseases with limited
          therapeutic options.
        </p>
      </Section>

      <Section title="Scientific Impact" dark>
        <p className="mb-4">
          Organized by Harvard Medical School, MIT, and the Milken Institute,
          CURE-Bench provides a rigorous, reproducible competition framework for
          assessing the performance, robustness, and interpretability of
          reasoning models in high-stakes clinical applications. It will
          accelerate the development of therapeutic AI and foster collaboration
          between AI and therapeutics communities.
        </p>
      </Section>

      <Logos />
      <Section title="Competition Tracks" dark>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Track 1 */}
          <div className="border border-crimson-300 p-6 rounded-xl bg-white shadow">
            <h3 className="text-xl font-serif font-semibold text-crimson-800 mb-2">
              Track 1: Internal Model Reasoning
            </h3>
            <p className="text-sm text-gray-700">
              In Track 1, models must reason using only their internal
              parameters — no external tools, APIs, or retrieval. This track is
              ideal for evaluating standalone models like LLaMA or DeepSeek-R1.
            </p>
            <ul className="mt-4 list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Must generate both answer and reasoning trace</li>
              <li>No access to internet or external structured databases</li>
            </ul>
          </div>

          {/* Track 2 */}
          <div className="border border-crimson-300 p-6 rounded-xl bg-white shadow">
            <h3 className="text-xl font-serif font-semibold text-crimson-800 mb-2">
              Track 2: Agentic Tool-Augmented Reasoning
            </h3>
            <p className="text-sm text-gray-700">
              In Track 2, models act as agents that can invoke biomedical tools
              (e.g., FDA, OpenTargets, PubMed) during reasoning. This track
              evaluates integration, orchestration, and tool usage
              effectiveness. We provide <a
                href="https://github.com/mims-harvard/ToolUniverse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crimson-600 underline hover:text-crimson-800 transition"
              >
                ToolUniverse
              </a> as the easy-to-use toolbox.
            </p>
            <ul className="mt-4 list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>
                Must include reasoning trace with tool call log + final answer
              </li>
              <li>Encouraged to use multi-agent pipelines</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section title="Therapeutic Reasoning Tasks">
        <p className="text-md text-gray-700 mb-6">
          CURE-Bench features 12 real-world biomedical reasoning tasks spanning
          drug labeling, safety, and regulatory challenges. These tasks simulate the
          complexity of pharmaceutical information processing, requiring structured reasoning
          and trace generation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card format for each task */}
          {[
            {
              title: "Treatment Recommendation",
              desc: "Questions regarding specialized treatment recommendations considering patient populations.",
            },
            {
              title: "Adverse Event",
              desc: "Predicting potential adverse events and side effects based on drug properties and patient factors.",
            },
            {
              title: "Drug Overview",
              desc: "Package label principal display panel and comprehensive drug description.",
            },
            {
              title: "Drug Ingredients",
              desc: "Product data elements and active/inactive ingredient analysis.",
            },
            {
              title: "Drug Warnings and Safety",
              desc: "Boxed warnings, contraindications, adverse reactions, and drug interactions.",
            },
            {
              title: "Drug Dependence and Abuse",
              desc: "Drug abuse potential, dependence, controlled substance classification, and overdosage.",
            },
            {
              title: "Dosage and Administration",
              desc: "Indications, usage, administration, dosage forms, strengths, and instructions.",
            },
            {
              title: "Drug Use in Specific Populations",
              desc: "Usage in pregnancy, pediatric, geriatric populations, and nursing mothers.",
            },
            {
              title: "Pharmacology",
              desc: "Clinical pharmacology, mechanism of action, pharmacodynamics, and pharmacokinetics.",
            },
            {
              title: "Clinical Information",
              desc: "Clinical studies and trial data analysis.",
            },
            {
              title: "Nonclinical Toxicology",
              desc: "Toxicology, carcinogenesis, mutagenesis, fertility impairment, and animal studies.",
            },
            {
              title: "Patient-Focused Information",
              desc: "Patient medication guides, package inserts, and patient information.",
            },
          ].map((task, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-crimson-800 mb-2">
                {task.title}
              </h4>
              <p className="text-sm text-gray-700">{task.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Agentic Dataset Generation Pipeline" dark>
        <p className="text-md text-gray-700 mb-10 max-w-4xl">
          CURE-Bench introduces a modular, agentic pipeline for generating
          thousands of therapeutic decision-making examples. This three-stage
          process ensures data diversity, traceability, and grounded biomedical
          logic.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* QuestionGen */}
          <div className="bg-white p-6 rounded-xl shadow border border-crimson/30 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-crimson mb-2">
              🧠 QuestionGen
            </h3>
            <p className="text-sm text-gray-700">
              Generates clinically plausible queries, spanning treatment,
              safety, and reasoning challenges across specialties.
            </p>
          </div>

          {/* TraceGen */}
          <div className="bg-white p-6 rounded-xl shadow border border-crimson/30 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-crimson mb-2">
              🧬 TraceGen
            </h3>
            <p className="text-sm text-gray-700">
              Produces structured reasoning traces grounded in biomedical
              knowledge — including multi-step causal inference.
            </p>
          </div>

          {/* ToolGen */}
          <div className="bg-white p-6 rounded-xl shadow border border-crimson/30 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-crimson mb-2">
              🧰 ToolGen
            </h3>
            <p className="text-sm text-gray-700">
              Simulates tool-based inference (e.g. DrugBank, PubMed, UMLS) using
              API-accessible biomedical utilities.
            </p>
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-500 max-w-4xl mx-auto text-center">
          The final dataset includes over <strong>2,965</strong> examples,{" "}
          <strong>1.3M+ reasoning steps</strong>, and <strong>211 tools</strong>{" "}
          across <strong>12 therapeutic tasks</strong>.
        </p>
      </Section>
      <Section title="Evaluation Criteria">
        <p className="text-md text-gray-700 mb-8 max-w-4xl">
          Submissions to CURE-Bench are evaluated across six dimensions. Our
          evaluation process is designed to assess reasoning depth, factual
          grounding, and the ability to operate in realistic biomedical
          settings.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Each metric card */}
          {[
            {
              title: "✅ Correctness",
              desc: "Final answer matches gold-standard label provided by biomedical experts.",
            },
            {
              title: "🧠 Reasoning Quality",
              desc: "Trace is logically coherent, complete, and aligns with medical best practices.",
            },
            {
              title: "📚 Factuality",
              desc: "All facts used in reasoning trace are grounded in biomedical databases or evidence.",
            },
            {
              title: "⚙️ Efficiency",
              desc: "Submission is concise; tool-based agents use minimal calls and return useful info only.",
            },
            {
              title: "🔁 Robustness",
              desc: "Model performs consistently across input variations and task types.",
            },
            {
              title: "🧰 Tool Usage (Track 2)",
              desc: "Agents use tools when appropriate, invoking the correct type and interpreting results well.",
            },
          ].map((m, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl border border-gray-200 shadow hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-crimson mb-2">
                {m.title}
              </h4>
              <p className="text-sm text-gray-700">{m.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-gray-600 text-center max-w-3xl mx-auto">
          Some submissions may also be reviewed by clinical experts during the
          final evaluation phase.
        </p>
      </Section>
      <Section title="Competition Timeline" dark>
        <p className="text-md text-gray-700 mb-10 max-w-4xl">
          Below are the key milestones and dates for CURE-Bench. We recommend
          subscribing to our GitHub repository for starter kit and submission
          updates.
        </p>

        <div className="flex flex-col space-y-6 border-l-4 border-crimson-300 pl-6">
          {[
            {
              date: "Apr 30",
              label: "🔓 Website and Competition Portal Launch",
            },
            { date: "May 20", label: "🧰 Starter Kit Release" },
            { date: "Jun 15", label: "🧪 Development Phase Begins" },
            { date: "Sep 25", label: "📊 Final Evaluation Phase Opens" },
            { date: "Oct 1", label: "🏁 Final Submissions Due" },
            { date: "Oct 30", label: "🏆 Winners Announced at NeurIPS" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-3 md:items-center"
            >
              <div className="text-crimson font-semibold w-20">{item.date}</div>
              <div className="text-sm text-gray-800">{item.label}</div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-600">
          All deadlines are 11:59 PM AoE (Anywhere on Earth).
        </p>
      </Section>

      <Section title="How to Participate">
        <p className="text-md text-gray-700 mb-10 max-w-4xl">
          You can participate individually or as a team. Submissions must follow
          our track-specific formats. Resources, data, and examples are provided
          in the Starter Kit.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <a
            href="https://github.com/gasvn/CURE-Bench"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 p-5 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <h4 className="text-lg font-bold text-crimson-800 mb-2">
              📁 Starter Kit
            </h4>
            <p className="text-sm text-gray-700">
              Includes dataset samples, baseline code (GPT-4o, DeepSeek, LLaMA),
              and scoring scripts.
            </p>
          </a>
          <a
            href="https://www.kaggle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 p-5 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <h4 className="text-lg font-bold text-crimson-800 mb-2">
              📊 Submit on Kaggle
            </h4>
            <p className="text-sm text-gray-700">
              Upload your outputs via Kaggle — ranked live on a leaderboard with
              track filtering.
            </p>
          </a>
          <a
            href="/docs/format-guide.pdf"
            className="bg-white border border-gray-200 p-5 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <h4 className="text-lg font-bold text-crimson-800 mb-2">
              📄 Submission Format
            </h4>
            <p className="text-sm text-gray-700">
              Review JSONL output structure and trace specification (trace,
              answer, tool calls).
            </p>
          </a>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-crimson/30 text-sm text-gray-800 space-y-3">
          <h4 className="text-lg font-semibold text-crimson mb-2">
            Submission Expectations
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Track 1:</strong> Answer + internal reasoning trace only.
              No tool outputs allowed.
            </li>
            <li>
              <strong>Track 2:</strong> Answer + tool invocation log + reasoning
              trace (multi-agent trace encouraged).
            </li>
            <li>
              <strong>Output format:</strong> JSONL file (one line per task).
              Starter Kit includes templates.
            </li>
            <li>
              <strong>Evaluation:</strong> Use provided script locally to score
              before submitting.
            </li>
          </ul>
        </div>
      </Section>
      <footer className="bg-gray-100 border-t border-gray-300 mt-20 p-6 text-center text-sm text-gray-600">
        © 2025 CURE-Bench. Organized by Harvard, MIT, and Milken Institute.
        Questions? Contact us at{" "}
        <a
          href="mailto:curebench@hms.harvard.edu"
          className="text-crimson-600 underline"
        >
          curebench@hms.harvard.edu
        </a>
        .
      </footer>
    </>
  );
}
