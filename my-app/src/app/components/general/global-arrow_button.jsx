export default function GlobalArrowButton({ 
  children, 
  className = "", 
  arrowClassName = "",
  arrowIconClassName = "",
  textClassName = "",
  arrowSize = 20,
  variant = "default", // "default" (with arrow), "no-arrow" (without arrow), or "transparent" (transparent background with arrow)
  onClick 
}) {
  const showArrow = variant === "default" || variant === "transparent";
  
  // Base button classes
  const baseButtonClasses = "group h-[45px] px-3  rounded-xl font-sans text-base font-semibold transition-all duration-300 cursor-pointer flex items-center";
  
  // Variant-specific button classes
  const variantButtonClasses = {
    default: "bg-[var(--button-red)] hover:bg-white hover:text-[var(--button-red)] text-white hover:opacity-90 hover:shadow-2xl",
    "no-arrow": "bg-[var(--button-red)] hover:bg-white hover:text-[var(--button-red)] text-white hover:opacity-90 hover:shadow-2xl",
    transparent: " bg-transparent  text-black "
  };
  
  // Base arrow container classes (shared across all variants with arrow)
  const arrowContainerClasses = {
    default: "group rounded-lg p-1  flex items-center justify-center relative bg-white group-hover:bg-[var(--button-red)] group-hover:text-white",
    transparent: "group rounded-lg p-1  flex items-center justify-center relative  group-hover:bg-white bg-[var(--button-red)] group-hover:text-white",
  }
  
  // Base arrow icon classes (shared across all variants with arrow)
  const arrowIconClasses = {
    default: "text-[var(--button-red)] group-hover:text-white transition-transform duration-300 group-hover:rotate-45",
    transparent: "text-white group-hover:text-[var(--button-red)] transition-transform duration-300 group-hover:rotate-45",
  }
  const textclassname = variant === "transparent" ? "px-0 pr-2" : "px-2";
  
  // Reusable Arrow SVG component
  const ArrowIcon = () => (
    <svg
      width={arrowSize}
      height={arrowSize}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${arrowIconClasses[variant] || arrowIconClasses.default} ${arrowIconClassName}`}
    >
      <path
        d="M4 12L12 4M12 4H6M12 4V10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  return (
    <button
      onClick={onClick}
      className={`${baseButtonClasses} ${variantButtonClasses[variant] || variantButtonClasses.default} ${showArrow ? 'justify-between' : 'justify-center'} ${className}`}
    >
      <p className={`whitespace-nowrap  !font-medium w-fit ${textclassname} ${textClassName}`}>{children}</p>
      {showArrow && (
        <span className={`${arrowContainerClasses[variant] || arrowContainerClasses.default} ${arrowClassName}`}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
}

