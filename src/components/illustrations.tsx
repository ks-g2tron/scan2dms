export function ScannerIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Scanner body */}
      <rect x="80" y="120" width="240" height="140" rx="12" fill="#1e3a5f" />
      <rect x="96" y="136" width="208" height="80" rx="6" fill="white" opacity="0.15" />
      {/* Document on scanner */}
      <rect x="120" y="60" width="120" height="160" rx="4" fill="white" />
      <rect x="136" y="80" width="88" height="6" rx="3" fill="#3b82f6" opacity="0.6" />
      <rect x="136" y="96" width="72" height="4" rx="2" fill="#1e3a5f" opacity="0.2" />
      <rect x="136" y="108" width="80" height="4" rx="2" fill="#1e3a5f" opacity="0.2" />
      <rect x="136" y="120" width="60" height="4" rx="2" fill="#1e3a5f" opacity="0.2" />
      <rect x="136" y="140" width="88" height="6" rx="3" fill="#3b82f6" opacity="0.4" />
      <rect x="136" y="156" width="76" height="4" rx="2" fill="#1e3a5f" opacity="0.2" />
      <rect x="136" y="168" width="64" height="4" rx="2" fill="#1e3a5f" opacity="0.2" />
      {/* Scan line */}
      <rect x="112" y="145" width="136" height="2" rx="1" fill="#3b82f6" opacity="0.8" />
      {/* Scanner feed slot */}
      <rect x="100" y="118" width="200" height="8" rx="4" fill="#1e3a5f" />
      <rect x="120" y="119" width="160" height="6" rx="3" fill="white" opacity="0.08" />
      {/* Control panel */}
      <rect x="270" y="170" width="36" height="36" rx="8" fill="#3b82f6" />
      <rect x="280" y="180" width="16" height="16" rx="4" fill="white" opacity="0.3" />
      {/* Digital arrows going to cloud */}
      <circle cx="320" cy="80" r="32" fill="#3b82f6" opacity="0.12" />
      <path d="M308 86 C308 70 316 64 320 64 C324 64 332 70 332 86" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
      <rect x="306" y="82" width="28" height="8" rx="4" fill="#3b82f6" opacity="0.3" />
      {/* Connection dots */}
      <circle cx="260" cy="100" r="3" fill="#3b82f6" opacity="0.5" />
      <circle cx="280" cy="90" r="3" fill="#3b82f6" opacity="0.5" />
      <circle cx="300" cy="85" r="3" fill="#3b82f6" opacity="0.5" />
      {/* Base shadow */}
      <ellipse cx="200" cy="272" rx="130" ry="8" fill="#1e3a5f" opacity="0.08" />
    </svg>
  );
}

export function TeamIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Center person */}
      <circle cx="200" cy="110" r="28" fill="#1e3a5f" />
      <circle cx="200" cy="100" r="16" fill="white" opacity="0.2" />
      <rect x="170" y="145" width="60" height="72" rx="12" fill="#1e3a5f" />
      {/* Left person */}
      <circle cx="110" cy="130" r="22" fill="#3b82f6" />
      <circle cx="110" cy="122" r="12" fill="white" opacity="0.25" />
      <rect x="86" y="158" width="48" height="60" rx="10" fill="#3b82f6" />
      {/* Right person */}
      <circle cx="290" cy="130" r="22" fill="#3b82f6" />
      <circle cx="290" cy="122" r="12" fill="white" opacity="0.25" />
      <rect x="266" y="158" width="48" height="60" rx="10" fill="#3b82f6" />
      {/* Connection lines */}
      <line x1="140" y1="150" x2="170" y2="150" stroke="#1e3a5f" strokeWidth="2" opacity="0.2" strokeDasharray="4 3" />
      <line x1="230" y1="150" x2="260" y2="150" stroke="#1e3a5f" strokeWidth="2" opacity="0.2" strokeDasharray="4 3" />
      {/* Network nodes */}
      <circle cx="160" cy="80" r="4" fill="#3b82f6" opacity="0.3" />
      <circle cx="240" cy="80" r="4" fill="#3b82f6" opacity="0.3" />
      <circle cx="200" cy="60" r="4" fill="#3b82f6" opacity="0.3" />
      <line x1="164" y1="80" x2="196" y2="62" stroke="#3b82f6" strokeWidth="1" opacity="0.2" />
      <line x1="236" y1="80" x2="204" y2="62" stroke="#3b82f6" strokeWidth="1" opacity="0.2" />
      {/* Base shadow */}
      <ellipse cx="200" cy="232" rx="120" ry="6" fill="#1e3a5f" opacity="0.08" />
    </svg>
  );
}

export function DirectoryIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Search bar */}
      <rect x="80" y="50" width="240" height="36" rx="18" fill="#1e3a5f" opacity="0.1" />
      <circle cx="106" cy="68" r="8" stroke="#1e3a5f" strokeWidth="2" fill="none" opacity="0.4" />
      <line x1="112" y1="74" x2="118" y2="80" stroke="#1e3a5f" strokeWidth="2" opacity="0.4" />
      <rect x="128" y="64" width="60" height="6" rx="3" fill="#1e3a5f" opacity="0.15" />
      {/* Grid of cards - row 1 */}
      <rect x="60" y="100" width="120" height="80" rx="8" fill="white" stroke="#3b82f6" strokeWidth="1.5" opacity="0.8" />
      <rect x="76" y="116" width="48" height="6" rx="3" fill="#1e3a5f" opacity="0.6" />
      <rect x="76" y="130" width="88" height="4" rx="2" fill="#1e3a5f" opacity="0.15" />
      <rect x="76" y="142" width="72" height="4" rx="2" fill="#1e3a5f" opacity="0.15" />
      <rect x="76" y="158" width="40" height="10" rx="5" fill="#3b82f6" opacity="0.2" />
      <rect x="220" y="100" width="120" height="80" rx="8" fill="white" stroke="#1e3a5f" strokeWidth="1" opacity="0.5" />
      <rect x="236" y="116" width="52" height="6" rx="3" fill="#1e3a5f" opacity="0.4" />
      <rect x="236" y="130" width="88" height="4" rx="2" fill="#1e3a5f" opacity="0.1" />
      <rect x="236" y="142" width="68" height="4" rx="2" fill="#1e3a5f" opacity="0.1" />
      <rect x="236" y="158" width="40" height="10" rx="5" fill="#3b82f6" opacity="0.15" />
      {/* Grid of cards - row 2 */}
      <rect x="60" y="196" width="120" height="80" rx="8" fill="white" stroke="#1e3a5f" strokeWidth="1" opacity="0.5" />
      <rect x="76" y="212" width="56" height="6" rx="3" fill="#1e3a5f" opacity="0.4" />
      <rect x="76" y="226" width="84" height="4" rx="2" fill="#1e3a5f" opacity="0.1" />
      <rect x="76" y="238" width="76" height="4" rx="2" fill="#1e3a5f" opacity="0.1" />
      <rect x="76" y="254" width="40" height="10" rx="5" fill="#3b82f6" opacity="0.15" />
      <rect x="220" y="196" width="120" height="80" rx="8" fill="white" stroke="#1e3a5f" strokeWidth="1" opacity="0.5" />
      <rect x="236" y="212" width="44" height="6" rx="3" fill="#1e3a5f" opacity="0.4" />
      <rect x="236" y="226" width="80" height="4" rx="2" fill="#1e3a5f" opacity="0.1" />
      <rect x="236" y="238" width="70" height="4" rx="2" fill="#1e3a5f" opacity="0.1" />
      <rect x="236" y="254" width="40" height="10" rx="5" fill="#3b82f6" opacity="0.15" />
    </svg>
  );
}

export function JoinIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Form/clipboard */}
      <rect x="140" y="40" width="160" height="200" rx="12" fill="#1e3a5f" />
      <rect x="152" y="52" width="136" height="176" rx="8" fill="white" />
      {/* Form fields */}
      <rect x="168" y="72" width="80" height="8" rx="4" fill="#1e3a5f" opacity="0.5" />
      <rect x="168" y="92" width="104" height="20" rx="4" fill="#1e3a5f" opacity="0.08" stroke="#3b82f6" strokeWidth="1" />
      <rect x="168" y="124" width="60" height="8" rx="4" fill="#1e3a5f" opacity="0.5" />
      <rect x="168" y="144" width="104" height="20" rx="4" fill="#1e3a5f" opacity="0.08" stroke="#3b82f6" strokeWidth="1" />
      <rect x="168" y="176" width="72" height="8" rx="4" fill="#1e3a5f" opacity="0.5" />
      <rect x="168" y="196" width="104" height="20" rx="4" fill="#1e3a5f" opacity="0.2" stroke="#1e3a5f" strokeWidth="1" />
      {/* Person */}
      <circle cx="90" cy="120" r="26" fill="#3b82f6" />
      <circle cx="90" cy="112" r="14" fill="white" opacity="0.25" />
      <rect x="68" y="152" width="44" height="56" rx="10" fill="#3b82f6" />
      {/* Arrow from person to form */}
      <path d="M118 140 L148 140" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="5 4" />
      <path d="M144 134 L152 140 L144 146" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
      {/* Checkmark badge */}
      <circle cx="310" cy="72" r="20" fill="#3b82f6" opacity="0.15" />
      <path d="M300 72 L307 79 L320 66" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Base shadow */}
      <ellipse cx="190" cy="260" rx="100" ry="6" fill="#1e3a5f" opacity="0.08" />
    </svg>
  );
}
