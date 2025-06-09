import Navbar from "../components/Navbar";

const advisers = [
	{
		name: "Marinka Zitnik",
		title: "Associate Professor",
		affiliation: "Harvard Medical School & Broad Institute",
		img: "people/zitnik.jpg",
		links: {
			page: "https://zitniklab.hms.harvard.edu/",
		},
	},
	{
		name: "Theodoros Tsiligkaridis",
		title: "Senior Research Scientist",
		affiliation: "MIT Lincoln Laboratory",
		img: "people/tsiligkaridis.jpg",
		links: {
			page: "https://sites.google.com/view/theo-t",
		},
	},
];

const coordinator = [
	{
		name: "Shanghua Gao",
		title: "Postdoctoral Researcher",
		affiliation: "Harvard University",
		img: "people/gao.jpg",
		links: {
			page: "https://shgao.site",
		},
	},
];

const technicalOrganizers = [
	{
		name: "Richard Zhu",
		title: "Undergraduate in Statistics & Concurrent Master's in CS",
		affiliation: "Harvard University",
		img: "people/zhu.jpg",
		links: {
			page: "https://www.linkedin.com/in/richard-zhu-4236901a7/",
		},
	},
	{
		name: "Sufian Aldogom",
		title: "Research Affiliate",
		affiliation: "MIT CSAIL - NASA SARP Mentor - Amazon Program Manager - ex-Microsoft",
		img: "people/sufian.jpg",
		links: {
			page: "https://www.csail.mit.edu/person/sufian-aldogom",
		},
	},
	{
		name: "Zhenglun Kong",
		title: "Postdoctoral Researcher",
		affiliation: "Harvard DBMI",
		img: "people/kong.jpg",
		links: {
			page: "https://zlkong.github.io/homepage/",
		},
	},
	{
		name: "Curtis Ginder",
		title: "Clinical Fellow",
		affiliation: "Brigham and Women's / MGH",
		img: "people/ginder.jpg",
		links: {
			page: "https://www.linkedin.com/in/curtisginder/",
		},
	},
	{
		name: "Xiaorui Su",
		title: "Postdoctoral Researcher",
		affiliation: "Harvard DBMI",
		img: "people/su.jpg",
		links: {
			page: "https://scholar.google.com/citations?hl=zh-CN&user=Awdn73MAAAAJ",
		},
	},
];

const organizationDissemination = [
	{
		name: "Ishita Das",
		title: "Director",
		affiliation: "Milken Institute SPARC Program",
		img: "people/das.jpg",
		links: {
			page: "https://milkeninstitute.org/experts/ishita-das-phd",
		},
	},
	{
		name: "Taylor Evans",
		title: "Senior Associate",
		affiliation: "Milken Institute SPARC Program",
		img: "people/evans.jpg",
		links: {
			page: "https://milkeninstitute.org/philanthropy/science-philanthropy-accelerator-research-and-collaboration-sparc/taylor-evans",
		},
	},
];

const PersonCard = ({ org }) => (
	<div className="bg-white border border-gray-200 rounded-xl shadow p-4 flex flex-col items-center text-center hover:shadow-md transition">
		<img
			src={org.img}
			alt={org.name}
			className="w-24 h-24 rounded-full object-cover mb-4"
		/>
		<h3 className="text-lg font-semibold text-crimson">{org.name}</h3>
		<p className="text-sm font-medium text-gray-700">{org.title}</p>
		<p className="text-sm text-gray-600">{org.affiliation}</p>
		{org.links.page && org.links.page !== "#" && (
			<div className="mt-3 text-sm">
				<a
					href={org.links.page}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-600 underline"
				>
					Page
				</a>
			</div>
		)}
	</div>
);

export default function Organizers() {
	return (
		<>
			<Navbar />
			<main className="min-h-screen py-16 px-6 md:px-20 bg-white text-gray-800">
				<h1 className="text-4xl font-serif font-bold mb-10 text-crimson text-center">
					Organizing Committee
				</h1>
				
				{/* Advisers Section */}
				<div className="mb-12">
					<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Advisers</h2>
					<div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
						{advisers.map((org, i) => (
							<PersonCard key={i} org={org} />
						))}
					</div>
				</div>

				{/* Coordinator Section */}
				<div className="mb-12">
					<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Coordinator</h2>
					<div className="grid gap-8 grid-cols-1 max-w-sm mx-auto">
						{coordinator.map((org, i) => (
							<PersonCard key={i} org={org} />
						))}
					</div>
				</div>

				{/* Technical Organizers Section */}
				<div className="mb-12">
					<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Technical Organizers</h2>
					<div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
						{technicalOrganizers.map((org, i) => (
							<PersonCard key={i} org={org} />
						))}
					</div>
				</div>

				{/* Organization & Dissemination Section */}
				<div className="mb-12">
					<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Organization & Dissemination</h2>
					<div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
						{organizationDissemination.map((org, i) => (
							<PersonCard key={i} org={org} />
						))}
					</div>
				</div>
			</main>
		</>
	);
}
