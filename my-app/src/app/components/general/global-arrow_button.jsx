export default function GlobalArrowButton({ 
  children, 
  className = "", 
  arrowClassName = "",
  arrowIconClassName = "",
  textClassName = "",
  arrowSize = 25,
  onClick 
}) {
  return (
    <button
      onClick={onClick}
      className={`group bg-[var(--button-red)] h-[50px] px-2 rounded-xl shadow-lg text-white font-sans text-base font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-2xl hover:scale-105 flex items-center justify-between ${className}`}
    >
      <p className={`whitespace-nowrap px-3 ${textClassName}`}>{children}</p>
      <span className={`bg-white rounded-lg p-1 px-2 flex items-center justify-center relative ${arrowClassName}`}>
        <svg
          width={arrowSize}
          height={arrowSize}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`text-[var(--button-red)] transition-transform duration-300 group-hover:rotate-45 ${arrowIconClassName}`}
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

