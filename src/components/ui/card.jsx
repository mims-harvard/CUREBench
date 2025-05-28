export function Card({ children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow p-4">
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`text-sm ${className}`}>{children}</div>;
}
