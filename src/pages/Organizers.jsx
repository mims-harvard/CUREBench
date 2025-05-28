import Navbar from "../components/Navbar";

export default function Organizers() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16 px-6 md:px-20 bg-white text-gray-800">
        <h1 className="text-4xl font-serif font-bold mb-10 text-crimson text-center">
          Organizing Committee
        </h1>
        <div className="space-y-6 max-w-4xl mx-auto text-md md:text-lg font-sans">
        
          <p>
            <strong>Shanghua Gao</strong><br />
            Postdoctoral Researcher, Harvard University<br />
            Focus: AI agents, generative models, foundation models
          </p>

          <p>
            <strong>Richard Zhu</strong><br />
            Undergraduate in Statistics and Concurrent Master’s in CS, Harvard University<br />
            Focus: Agentic AI and geometric deep learning in structural biology
          </p>

          <p>
            <strong>Zhenglun Kong</strong><br />
            Postdoctoral Researcher, Harvard DBMI<br />
            ML Systems Rising Star (2024); ex-Microsoft/ARM/Samsung; single-cell genomics & AI agents
          </p>

          <p>
            <strong>Xiaorui Su</strong><br />
            Postdoctoral Researcher, Harvard DBMI<br />
            Focus: KG-based agents for LLM factual reasoning in medical QA
          </p>

          <p>
            <strong>Dr. Curtis Ginder</strong><br />
            Clinical Fellow, Brigham and Women’s / MGH<br />
            MD/MBA (University of Chicago); postdoc at HMS; co-founder of TimeDoc Health
          </p>

          <p>
            <strong>Sufian Aldogom</strong><br />
            Research Affiliate, MIT CSAIL; NASA SARP Mentor; ex-Senior Lead at Microsoft<br />
            Expert in AI engineering, platform development, systems design
          </p>

          <p>
            <strong>Dr. Ishita Das</strong><br />
            Director, Milken Institute SPARC Program<br />
            Focus: Science policy, philanthropy strategy, stakeholder engagement
          </p>

          <p>
            <strong>Dr. Taylor Evans</strong><br />
            Senior Associate, Milken Institute SPARC Program<br />
            Expert in rare diseases, diagnostics, and biomedical tech transfer
          </p>

          <p>
            <strong>Dr. Theodoros Tsiligkaridis</strong><br />
            Senior Research Scientist, MIT Lincoln Laboratory<br />
            Expert in trustworthy AI, foundation models, healthcare informatics
          </p>

          <p>
            <strong>Dr. Marinka Zitnik</strong><br />
            Associate Professor, Harvard Medical School & Broad Institute<br />
            Leader of Therapeutics Data Commons, AI4Science, NSF CAREER recipient
          </p>

        </div>
      </main>
    </>
  );
}
