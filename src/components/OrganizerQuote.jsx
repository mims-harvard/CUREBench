export default function OrganizerQuote({ name, title, quote }) {
  return (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-800">
      <p className="mb-2">“{quote}”</p>
      <footer className="text-sm font-semibold mt-1">— {name}, <span className="text-gray-600">{title}</span></footer>
    </blockquote>
  );
}
