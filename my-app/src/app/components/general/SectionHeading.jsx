export default function SectionHeading({ 
  subtitle, 
  title,
  subtitleClassName = "",
  titleClassName = "",
  subtitleTextColor = "!text-[var(--button-red)]"
}) {
  return (
    <>
      {subtitle && (
        <h5 className={`${subtitleTextColor} text-base sm:text-lg md:text-xl font-plus-jakarta-sans font-medium  ${subtitleClassName}`}>
          {subtitle}
        </h5>
      )}
      {title && (
        <h2 className={`font-stix  py-3  leading-12 text-[var(--foreground)] ${titleClassName}`}>
          {title}
        </h2>
      )}
    </>
  );
}

