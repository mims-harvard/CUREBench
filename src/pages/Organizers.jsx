import Navbar from "../components/Navbar";

const organizers = [
  {
    name: "Dr. Marinka Zitnik",
    title: "Associate Professor",
    affiliation: "Harvard Medical School & Broad Institute",
    bio: "Leader of Therapeutics Data Commons, AI4Science, NSF CAREER recipient",
    img: "people/zitnik.jpg",
    links: {
      lab: "https://zitniklab.hms.harvard.edu"
    }
  },
  {
    name: "Shanghua Gao",
    title: "Postdoctoral Researcher",
    affiliation: "Harvard University",
    bio: "Focus: AI agents, generative models, foundation models",
    img: "people/gao.jpg",
    links: {
      linkedin: "#",
      scholar: "#"
    }
  },
  {
    name: "Richard Zhu",
    title: "Undergraduate in Statistics & Concurrent Master's in CS",
    affiliation: "Harvard University",
    bio: "Focus: Agentic AI and geometric deep learning in structural biology",
    img: "people/zhu.jpg",
    links: {
      linkedin: "#",
      scholar: "#"
    }
  },
  {
    name: "Zhenglun Kong",
    title: "Postdoctoral Researcher",
    affiliation: "Harvard DBMI",
    bio: "ML Systems Rising Star (2024); ex-Microsoft/ARM/Samsung; single-cell genomics & AI agents",
    img: "people/kong.jpg",
    links: {
      linkedin: "#",
      scholar: "#"
    }
  },
  {
    name: "Xiaorui Su",
    title: "Postdoctoral Researcher",
    affiliation: "Harvard DBMI",
    bio: "Focus: KG-based agents for LLM factual reasoning in medical QA",
    img: "people/su.jpg",
    links: {
      linkedin: "#",
      scholar: "#"
    }
  },
  {
    name: "Dr. Curtis Ginder",
    title: "Clinical Fellow",
    affiliation: "Brigham and Women’s / MGH",
    bio: "MD/MBA (University of Chicago); postdoc at HMS; co-founder of TimeDoc Health",
    img: "people/ginder.jpg",
    links: {
      linkedin: "#",
      scholar: "#"
    }
  },
  {
    name: "Sufian Aldogom",
    title: "Research Affiliate",
    affiliation: "MIT CSAIL; NASA SARP Mentor; ex-Microsoft",
    bio: "Expert in AI engineering, platform development, systems design",
    img: "people/sufian.jpg",
    links: {
      linkedin: "#",
      scholar: "#"
    }
  },
  {
    name: "Dr. Ishita Das",
    title: "Director",
    affiliation: "Milken Institute SPARC Program",
    bio: "Focus: Science policy, philanthropy strategy, stakeholder engagement",
    img: "people/das.jpg",
    links: {
      linkedin: "#",
      scholar: "#"
    }
  },
  {
    name: "Dr. Taylor Evans",
    title: "Senior Associate",
    affiliation: "Milken Institute SPARC Program",
    bio: "Expert in rare diseases, diagnostics, and biomedical tech transfer",
    img: "people/evans.jpg",
    links: {
      linkedin: "#",
      scholar: "#"
    }
  },
  {
    name: "Dr. Theodoros Tsiligkaridis",
    title: "Senior Research Scientist",
    affiliation: "MIT Lincoln Laboratory",
    bio: "Expert in trustworthy AI, foundation models, healthcare informatics",
    img: "people/tsiligkaridis.jpg",
    links: {
      linkedin: "#",
      scholar: "#"
    }
  }
];

export default function Organizers() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16 px-6 md:px-20 bg-white text-gray-800">
        <h1 className="text-4xl font-serif font-bold mb-10 text-crimson text-center">
          Organizing Committee
        </h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {organizers.map((org, i) => (
            <div
              key={i}
              className={`bg-white border border-gray-200 rounded-xl shadow p-4 flex flex-col items-center text-center hover:shadow-md transition ${org.name.includes("Zitnik") ? 'sm:col-span-2 lg:col-span-3' : ''}`}
            >
              <img
                src={org.img}
                alt={org.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-crimson">{org.name}</h3>
              <p className="text-sm font-medium text-gray-700">{org.title}</p>
              <p className="text-sm text-gray-600">{org.affiliation}</p>
              <p className="text-sm mt-2 text-gray-700">{org.bio}</p>
              <div className="flex gap-3 mt-3 text-sm">
                {org.links.scholar && (
                  <a
                    href={org.links.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Scholar
                  </a>
                )}
                {org.links.lab && (
                  <a
                    href={org.links.lab}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Lab
                  </a>
                )}
                {org.links.linkedin && (
                  <a
                    href={org.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
