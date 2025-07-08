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
          <p>Anyone. You may join individually or form a team.</p>
        </div>

        <div>
          <h2 className="font-semibold text-crimson">How do I get started?</h2>
          <p>Download the starter kit from our GitHub repository. It includes baseline models, evaluation scripts, and example JSONL submissions. You may submit your outputs via Kaggle.</p>
        </div>

        <div>
          <h2 className="font-semibold text-crimson">What are the tracks?</h2>
          <p>Track 1 evaluates models using only internal reasoning. Track 2 allows agentic models to invoke external biomedical tools such as <a href="https://github.com/mims-harvard/ToolUniverse" className="text-blue-600 underline">ToolUniverse</a> during inference.</p>
        </div>

        <div>
          <h2 className="font-semibold text-crimson">What are the additional awards and support programs?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Winner Prizes ($20,000):</strong> Monetary awards will be distributed to the top-performing teams in both competition tracks.
            </li>
            <li>
              <strong>Travel Awards Program (up to $30,000):</strong> We will provide financial support for 15 to 20 early-career researchers to attend the CURE-Bench workshop at NeurIPS.
            </li>
            <li>
              <strong>Outreach and education support (up to $20,000):</strong> This includes the development of interactive Hugging Face spaces to host selected models for community use, unified visual design for the CURE-Bench website and materials, a dedicated Slack workspace for participant support, and Google Colab licenses for developing reproducible code walkthroughs and AI tutorials. These resources aim to support broad participation and sustained community engagement.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-crimson">Can I use GPT-4 or other APIs?</h2>
          <p>Yes, but submissions must follow the track guidelines. We will award API-based model and open-weights models in separate categories.</p>
        </div>

        <div>
          <h2 className="font-semibold text-crimson">What format should my submission follow?</h2>
          <p>Use the JSONL format provided in the starter kit. Each line must include: task ID, final answer, reasoning trace, and (Track 2) tool usage log. A local evaluation script is provided.</p>
        </div>

        <div>
          <h2 className="font-semibold text-crimson">When is the deadline?</h2>
          <p>Final submissions are due by <strong>October 15, 2025</strong> at 11:59 PM AoE (Anywhere on Earth).</p>
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
