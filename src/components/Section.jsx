export default function Section({ title, children, dark = false }) {
  return (
    <section className={`w-full py-20 px-6 md:px-20 ${dark ? 'bg-crimson/5 text-gray-800' : 'bg-white text-gray-800'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8 text-crimson">
          {title}
        </h2>
        <div className="space-y-4 text-md md:text-lg font-sans">
          {children}
        </div>
      </div>
    </section>
  );
}
