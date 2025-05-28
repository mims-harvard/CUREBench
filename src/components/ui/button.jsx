export function Button({ children, onClick, className = "", variant = "solid" }) {
  const styles =
    variant === "outline"
      ? "border border-blue-700 text-blue-700 hover:bg-blue-100"
      : "bg-blue-700 text-white hover:bg-blue-800";

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-medium transition ${styles} ${className}`}
    >
      {children}
    </button>
  );
}
