export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-body font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
      {children}
    </span>
  )
}
