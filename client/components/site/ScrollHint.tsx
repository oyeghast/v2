export default function ScrollHint() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-700/80 dark:text-slate-200/80">
      <span className="text-xs tracking-wider">Scroll</span>
      <svg className="mt-1 animate-bounce" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}
