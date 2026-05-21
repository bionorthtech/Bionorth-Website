export default function BrandLogo({ size = 34, className = "" }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.jpg`}
      alt="BioNorth Tech logo"
      className={`brand-logo ${className}`.trim()}
      width={size}
      height={size}
    />
  );
}
