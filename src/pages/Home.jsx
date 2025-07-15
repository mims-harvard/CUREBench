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
              effectiveness. We provide{" "}
              <a
                href="https://github.com/mims-harvard/ToolUniverse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crimson-600 underline hover:text-crimson-800 transition"
              >
                ToolUniverse
              </a>{" "}
              as the easy-to-use toolbox.
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
          drug labeling, safety, and regulatory challenges. These tasks simulate
          the complexity of pharmaceutical information processing, requiring
          structured reasoning and trace generation.
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
        <p className="text-md text-gray-700 mb-10">
          Built on top of{" "}
          <a
            href="https://zitniklab.hms.harvard.edu/TxAgent/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-crimson-600 underline hover:text-crimson-800 transition"
          >
            TxAgent's data generation system
          </a>
          , CURE-Bench introduces a modular, agentic system for generating
          thousands of therapeutic decision-making examples. This three-stage
          process ensures data diversity, traceability, and grounded biomedical
          logic. The pipeline leverages advanced AI agents to create realistic
          clinical scenarios that challenge models across multiple reasoning
          dimensions.
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
              knowledge — including multi-step inference with tool use.
            </p>
          </div>

          {/* ToolGen */}
          <div className="bg-white p-6 rounded-xl shadow border border-crimson/30 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-crimson mb-2">
              🧰 ToolGen
            </h3>
            <p className="text-sm text-gray-700">
              Generating agentic tools that can be invoked during reasoning,
              including databases, APIs, and retrieval systems for biomedical
              information.
            </p>
          </div>
        </div>
      </Section>
      <Section title="Evaluation Criteria">
        <p className="text-md text-gray-700 mb-10">
          Submissions to CURE-Bench are evaluated through a weighted aggregate
          of multiple metrics. Final rankings are determined by assigning
          predefined weights to each metric based on their importance, with the
          overall score computed as a weighted sum. Each submission must include
          reasoning traces, final answers, token usage, and model size/type
          information.
        </p>

        {/* Correctness Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-crimson-800 mb-3 flex items-center justify-center">
              <span className="text-2xl mr-3">✅</span>
              Correctness of Multi-Step Inference
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Evaluates reasoning model performance across 13 drug prescription
              and specialized treatment tasks.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                <span className="text-2xl mr-3">📊</span>
                Direct Performance
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Accuracy on standard multiple-choice questions requiring
                multi-step reasoning with a single correct answer.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                <span className="text-2xl mr-3">🔗</span>
                Accumulated Performance
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Performance on tasks with multiple intermediate steps. Final
                answer is correct only if all steps are correct.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                <span className="text-2xl mr-3">🧠</span>
                Open-Ended Reasoning
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Free-form reasoning without answer options. Measured by
                open-ended accuracy.
              </p>
            </div>
          </div>
        </div>

        {/* Robustness Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-crimson-800 mb-3 flex items-center justify-center">
              <span className="text-2xl mr-3">🛡️</span>
              Reasoning Robustness
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Evaluates stability and reliability when faced with input
              variations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🔄</span>
                Rephrasing Consistency
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Consistent answers across semantically equivalent but
                differently worded versions of the same question.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🎯</span>
                Option Order Robustness
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Correct answers when multiple-choice options are reordered,
                isolating reasoning from presentation bias.
              </p>
            </div>
          </div>
        </div>

        {/* Efficiency Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-crimson-800 mb-3 flex items-center justify-center">
              <span className="text-2xl mr-3">⚡</span>
              Reasoning Efficiency
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Measures computational cost and resource usage for generating
              reasoning traces and answers
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">💾</span>
                Token Usage
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Total tokens (input + output) consumed during inference.
                Submissions must report average tokens per example and model
                size/type.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🔧</span>
                Tool Usage (Track 2)
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Efficiency based on number of tools, variety of tools used, and
                correctness of tool usage.
              </p>
            </div>
          </div>
        </div>

        {/* Agentic Judge Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-crimson-800 mb-3 flex items-center justify-center">
              <span className="text-2xl mr-3">🤖</span>
              Agentic Judge
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Multiple collaborative agents evaluate reasoning traces to provide
              robust and objective assessments
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold text-indigo-800 mb-4 text-center flex items-center justify-center">
                <span className="text-2xl mr-3">🔍</span>
                Factuality Check
              </h4>
              <p className="text-gray-700 leading-relaxed text-center">
                Agents extract factual claims from reasoning traces and verifies
                claims using retrieval-augmented generation methods.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold text-red-800 mb-4 text-center flex items-center justify-center">
                <span className="text-2xl mr-3">👩‍⚕️</span>
                Clinical Relevance Check
              </h4>
              <p className="text-gray-700 leading-relaxed text-center">
                AI agents evaluate clinical reasoning quality, treatment
                appropriateness, and alignment with medical practice standards.
              </p>
            </div>
          </div>
        </div>

        {/* Human Expert Evaluation Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-crimson-800 mb-3 flex items-center justify-center">
              <span className="text-2xl mr-3">👥</span>
              Human Expert Evaluation
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Top-performing teams (Top 5-10) undergo clinical relevance
              assessment by domain experts. This serves as a validity check to
              identify and disqualify models that may engage in metric hacking.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 mb-8">
            <h4 className="text-lg font-semibold text-blue-800 mb-4 text-center">
              Expert Panel Composition
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👩‍⚕️</span>
                  <div>
                    <div className="font-semibold text-blue-800">
                      Clinicians
                    </div>
                    <div className="text-sm text-blue-600">
                      Harvard Medical School
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔬</span>
                  <div>
                    <div className="font-semibold text-blue-800">
                      Clinical Researchers
                    </div>
                    <div className="text-sm text-blue-600">
                      Across Specialties
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💊</span>
                  <div>
                    <div className="font-semibold text-blue-800">
                      Pharmacists
                    </div>
                    <div className="text-sm text-blue-600">
                      Therapeutic Expertise
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-blue-700 mt-4 text-center">
              In partnership with{" "}
              <a
                href="https://chanzuckerberg.com/science/programs-resources/rare-as-one/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 underline hover:text-blue-900 transition font-semibold"
              >
                Chan Zuckerberg Initiative Rare as One Program
              </a>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "🎯 Problem Resolution",
                desc: "Does the response directly and correctly address the clinical question?",
              },
              {
                title: "💡 Helpfulness",
                desc: "Is the explanation useful and informative in the clinical context?",
              },
              {
                title: "🏥 Clinical Consensus",
                desc: "Does the response align with current medical practice and standards?",
              },
              {
                title: "📋 Factual Accuracy",
                desc: "Are the claims correct, well-supported, and free from irrelevant content?",
              },
              {
                title: "✅ Completeness",
                desc: "Does the response omit information that would change the disease treatment plan?",
              },
              {
                title: "🔬 Scientific Validity",
                desc: "Is the reasoning chain coherent, grounded in biomedical evidence, and scientifically sound?",
              },
            ].map((criterion, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow hover:shadow-lg transition"
              >
                <h4 className="text-md font-semibold text-crimson mb-3">
                  {criterion.title}
                </h4>
                <p className="text-sm text-gray-700">{criterion.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section title="Competition Timeline" dark>
        <p className="text-md text-gray-700 mb-10 max-w-4xl">
          Below are the key milestones and dates for CURE-Bench. We recommend
          subscribing to our <a
            href="https://github.com/mims-harvard/CURE-Bench"
            target="_blank"
            rel="noopener noreferrer"
            className="text-crimson-600 underline hover:text-crimson-800 transition"
          >
            GitHub repository
          </a> for starter kit and submission
          updates.
        </p>

        <div className="flex flex-col space-y-6 border-l-4 border-crimson-300 pl-6">
          {[
            { date: "Jun 20", label: "🧪 Development Phase Begins" },
            { date: "Sep 25", label: "📊 Final Evaluation Phase Opens" },
            { date: "Oct 15", label: "🏁 Final Submissions Due" },
            { date: "Nov 1", label: "🏆 Winners Announced" },
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
        <p className="text-md text-gray-700 mb-10">
          You can participate individually or as a team. Submissions must follow
          our track-specific formats. Resources, data, and examples are provided
          in the Starter Kit.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <a
            href="https://github.com/mims-harvard/CURE-Bench"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 p-5 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <h4 className="text-lg font-bold text-crimson-800 mb-2">
              📁 Starter Kit
            </h4>
            <p className="text-sm text-gray-700">
              Includes dataset samples, baseline code, and submission
              guidelines. Get started with our GitHub repository.
            </p>
          </a>
          <a
            href="https://www.kaggle.com/competitions/cure-bench"
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
            href="https://github.com/mims-harvard/CUREBench/releases/tag/submission"
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

        <div className="bg-crimson-50 p-8 rounded-xl border border-crimson-200">
          <h4 className="text-xl font-semibold text-crimson-800 mb-4 text-center">
            Required Submission Components
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="text-sm text-gray-700 space-y-3">
              <li className="flex items-start">
                <span className="text-crimson mr-2">•</span>
                <div>
                  <strong>Reasoning traces:</strong> Multi-step reasoning
                  process for each question
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-crimson mr-2">•</span>
                <div>
                  <strong>Final answers:</strong> Complete responses to
                  therapeutic questions
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-crimson mr-2">•</span>
                <div>
                  <strong>Token usage:</strong> Average tokens per example and
                  total consumption
                </div>
              </li>
            </ul>
            <ul className="text-sm text-gray-700 space-y-3">
              <li className="flex items-start">
                <span className="text-crimson mr-2">•</span>
                <div>
                  <strong>Model information:</strong> Model size and type (or
                  API-based LLM details)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-crimson mr-2">•</span>
                <div>
                  <strong>Tool usage log (Track 2):</strong> Record of external
                  tool invocations
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Organizers and Partners" dark>
        <p className="mb-4">
          In collaboration with Harvard Medical School, Harvard University, MIT, the Kempner Institute, Brigham and Women's Hospital, the Chan Zuckerberg Initiative, the Milken Institute, and the Biswas Family Foundation,
          CURE-Bench provides a rigorous, reproducible competition framework for
          assessing the performance, robustness, and interpretability of
          reasoning models in high-stakes clinical applications. It will
          accelerate the development of therapeutic AI and foster collaboration
          between AI and therapeutics communities.
        </p>
      </Section>

      <Logos />
      <footer className="bg-gray-100 border-t border-gray-300 mt-20 p-6 text-center text-sm text-gray-600">
        © 2025 CURE-Bench. Organized by Harvard, MIT, and Milken Institute.
        Questions? Contact us at{" "}
        <a
          href="mailto:curebench@hms.harvard.edu"
          className="text-crimson-600 underline"
        >
          shanghua_gao@hms.harvard.edu
        </a>
        .
      </footer>
    </>
  );
}
