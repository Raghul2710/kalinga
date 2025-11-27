export default function GlobalArrowButton({ 
  children, 
  className = "", 
  arrowClassName = "",
  arrowSize = 30,
  onClick 
}) {
  return (
    <button
      onClick={onClick}
      className={`group bg-[var(--button-red)] !w-[200px] h-[60px] px-2 rounded-2xl shadow-lg text-white font-sans text-base font-semibold whitespace-nowrap transition-all duration-300 hover:opacity-90 hover:shadow-2xl hover:scale-105 flex items-center gap-3 justify-between ${className}`}
    >
      <p className="ml-5">{children}</p>
      <span className={`bg-white rounded-lg p-2 px-3 flex items-center justify-center ${arrowClassName}`}>
        <svg
          width={arrowSize}
          height={arrowSize}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[var(--button-red)] transition-transform duration-300 group-hover:rotate-45"
        >
          <path
            d="M4 12L12 4M12 4H6M12 4V10"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}

