import Navbar from "../components/Navbar";
export default function FAQ() {
  return (
   <>
  <Navbar />
    <main className="min-h-screen py-16 px-6 md:px-20 bg-white text-gray-800">
      <h1 className="text-4xl font-serif font-bold mb-10 text-crimson text-center">Frequently Asked Questions</h1>
      <div className="space-y-8 max-w-4xl mx-auto text-md md:text-lg font-sans">
        
        <div>
          <h2 className="font-semibold text-crimson">Who can participate?</h2>
          <p>Anyone. Participation is open to students, researchers, and industry professionals. You may join individually or form a team of any size.</p>
        </div>

        <div>
          <h2 className="font-semibold text-crimson">How do I get started?</h2>
          <p>Download the starter kit from our GitHub repository. It includes baseline models, evaluation scripts, and example JSONL submissions. You may submit your outputs via Kaggle.</p>
        </div>

        <div>
          <h2 className="font-semibold text-crimson">What are the tracks?</h2>
          <p>Track 1 evaluates models using only internal reasoning. Track 2 allows agentic models to invoke external biomedical tools such as PubMed, DrugBank, and UMLS during inference.</p>
        </div>

        <div>
          <h2 className="font-semibold text-crimson">Are there prizes?</h2>
          <p>Yes. We are offering over <strong>$20,000 in total awards</strong>, as well as NeurIPS travel support and competition track recognition during the workshop session.</p>
        </div>

        <div>
          <h2 className="font-semibold text-crimson">How are submissions evaluated?</h2>
          <p>Submissions are scored across six metrics: correctness, reasoning quality, factuality, robustness, efficiency, and tool usage (Track 2 only). See the evaluation section for details.</p>
        </div>

        <div>
          <h2 className="font-semibold text-crimson">Can I use GPT-4 or other APIs?</h2>
          <p>Yes, but submissions must follow the track guidelines. Track 1 prohibits API calls; Track 2 permits them as long as tool usage is logged and justified in the trace.</p>
        </div>

        <div>
          <h2 className="font-semibold text-crimson">What format should my submission follow?</h2>
          <p>Use the JSONL format provided in the starter kit. Each line must include: task ID, final answer, reasoning trace, and (Track 2) tool usage log. A local evaluation script is provided.</p>
        </div>

        <div>
          <h2 className="font-semibold text-crimson">When is the deadline?</h2>
          <p>Final submissions are due by <strong>October 1, 2025</strong> at 11:59 PM AoE (Anywhere on Earth).</p>
        </div>

        <div>
          <h2 className="font-semibold text-crimson">Who is organizing this?</h2>
          <p>CURE-Bench is organized by researchers at <strong>Harvard Medical School</strong>, <strong>MIT Lincoln Lab</strong>, and the <strong>Milken Institute</strong>.</p>
        </div>

      </div>
    </main>
	  </>
  );
}
