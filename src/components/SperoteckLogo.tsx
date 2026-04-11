const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  return (
    <img
      src="/speroteck-logo.png"
      alt="Speroteck logo"
      width={size}
      className={className}
      style={{ width: size, height: "auto", display: "block" }}
      draggable={false}
      decoding="async"
    />
  );
};

export default SperoteckLogo;
