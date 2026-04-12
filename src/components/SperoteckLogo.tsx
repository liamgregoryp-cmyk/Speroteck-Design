import speroteckLogo from "@/assets/speroteck-logo.png";

const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  return (
    <img
      src={speroteckLogo}
      alt="Speroteck"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: "contain", transform: "scaleX(1.10)" }}
    />
  );
};

export default SperoteckLogo;
