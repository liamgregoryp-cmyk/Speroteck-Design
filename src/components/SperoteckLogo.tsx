import speroteckLogo from "@/assets/speroteck-logo.png";

const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  return (
    <img
      src={speroteckLogo}
      alt="Speroteck"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: "contain", transform: "scaleY(1.30)" }}
    />
  );
};

export default SperoteckLogo;
