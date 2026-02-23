"use client";

import { useEffect, useRef, useCallback } from "react";

/* ─── Steak SVG shared across all 3 slices ─── */
function SteakSVG({ id }) {
  return (
    <svg
      viewBox="0 0 440 350"
      xmlns="http://www.w3.org/2000/svg"
      className="steak-vector"
    >
      <defs>
        <linearGradient id={`${id}-side`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8b6914" />
          <stop offset="100%" stopColor="#6b4e10" />
        </linearGradient>
        <linearGradient id={`${id}-grill`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a1a08" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1a0f05" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* 3D side/thickness */}
      <path
        d="M110,265 C75,250 45,220 38,185 L35,200 C42,235 72,262 108,278 C155,295 220,300 280,292 C340,282 375,258 390,228 L392,215 C378,248 342,270 282,280 C222,290 158,282 110,265 Z"
        fill={`url(#${id}-side)`}
      />
      {/* Fat border / seared crust */}
      <path
        d="M220,45 C280,38 348,50 388,95 C418,130 415,185 392,225 C368,262 325,282 275,288 C225,294 170,290 125,272 C78,252 42,222 38,180 C34,138 58,100 98,72 C138,48 180,42 220,45 Z"
        fill="#a07040"
      />
      {/* Inner cooked meat */}
      <path
        d="M220,72 C272,66 332,76 365,110 C392,138 390,180 378,212 C364,242 334,260 290,268 C248,274 200,272 160,258 C120,242 90,218 86,182 C82,148 100,118 130,98 C160,78 192,70 220,72 Z"
        fill="#5c3018"
      />
      {/* Darker seared surface */}
      <path
        d="M220,85 C265,80 318,88 348,118 C372,142 370,178 360,205 C348,232 322,248 284,254 C246,260 205,258 170,246 C135,232 108,212 105,182 C102,152 116,128 142,110 C168,92 196,84 220,85 Z"
        fill="#4a2512"
      />
      {/* Grill marks */}
      <line
        x1="120" y1="92" x2="320" y2="108"
        stroke={`url(#${id}-grill)`} strokeWidth="8" strokeLinecap="round"
      />
      <line
        x1="110" y1="135" x2="330" y2="148"
        stroke={`url(#${id}-grill)`} strokeWidth="8" strokeLinecap="round"
      />
      <line
        x1="105" y1="178" x2="340" y2="188"
        stroke={`url(#${id}-grill)`} strokeWidth="8" strokeLinecap="round"
      />
      <line
        x1="115" y1="218" x2="325" y2="230"
        stroke={`url(#${id}-grill)`} strokeWidth="7" strokeLinecap="round"
      />
      {/* Fat marbling */}
      <path
        d="M190,120 C208,135 218,160 222,190 C225,215 238,235 258,248"
        stroke="#c9a06e" strokeWidth="5" fill="none" opacity="0.5"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M222,190 C242,178 268,182 290,195"
        stroke="#c9a06e" strokeWidth="4" fill="none" opacity="0.4"
        strokeLinecap="round"
      />
      <path
        d="M222,190 C210,205 208,225 215,242"
        stroke="#c9a06e" strokeWidth="3.5" fill="none" opacity="0.35"
        strokeLinecap="round"
      />
      <path
        d="M155,148 C172,138 185,125 190,120"
        stroke="#c9a06e" strokeWidth="3" fill="none" opacity="0.35"
        strokeLinecap="round"
      />
      <path
        d="M295,135 C305,155 300,180 290,195"
        stroke="#c9a06e" strokeWidth="3" fill="none" opacity="0.3"
        strokeLinecap="round"
      />
      {/* Warm sear highlights */}
      <ellipse cx="195" cy="155" rx="35" ry="22" fill="#6b3a1a" opacity="0.4" />
      <ellipse cx="290" cy="170" rx="28" ry="18" fill="#7a4422" opacity="0.3" />
      <ellipse cx="165" cy="200" rx="20" ry="14" fill="#6b3a1a" opacity="0.2" />
    </svg>
  );
}

/* ─── Knife SVG ─── */
function KnifeSVG() {
  return (
    <svg
      viewBox="0 0 40 350"
      xmlns="http://www.w3.org/2000/svg"
      className="knife-svg"
    >
      <defs>
        <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#bbb" />
          <stop offset="25%" stopColor="#e8e8e8" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="75%" stopColor="#ddd" />
          <stop offset="100%" stopColor="#aaa" />
        </linearGradient>
        <linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2c1810" />
          <stop offset="30%" stopColor="#4a2e1c" />
          <stop offset="70%" stopColor="#3d2415" />
          <stop offset="100%" stopColor="#1e100a" />
        </linearGradient>
      </defs>
      <path d="M20,0 L25,5 L26,200 L20,210 L14,200 L15,5 Z" fill="url(#bladeGrad)" />
      <line x1="20" y1="5" x2="20" y2="205" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
      <rect x="12" y="200" width="16" height="12" rx="2" fill="#999" />
      <rect x="13" y="212" width="14" height="120" rx="4" fill="url(#handleGrad)" />
      <circle cx="20" cy="235" r="2.5" fill="#c0a060" stroke="#8a7040" strokeWidth="0.5" />
      <circle cx="20" cy="270" r="2.5" fill="#c0a060" stroke="#8a7040" strokeWidth="0.5" />
      <circle cx="20" cy="305" r="2.5" fill="#c0a060" stroke="#8a7040" strokeWidth="0.5" />
    </svg>
  );
}

/* ─── Particle data ─── */
const particles = [
  { x: "10%", y: "20%", duration: "6s", delay: "0s" },
  { x: "85%", y: "15%", duration: "8s", delay: "1s" },
  { x: "20%", y: "70%", duration: "7s", delay: "2s" },
  { x: "75%", y: "80%", duration: "9s", delay: "0.5s" },
  { x: "50%", y: "30%", duration: "5s", delay: "3s" },
  { x: "30%", y: "55%", duration: "7s", delay: "1.5s" },
  { x: "90%", y: "50%", duration: "6s", delay: "2.5s" },
];

/* ─── Steam data ─── */
const steamWisps = [
  { offset: "-30px", delay: "0s" },
  { offset: "0px", delay: "0.8s" },
  { offset: "25px", delay: "1.6s" },
  { offset: "-15px", delay: "2.4s" },
];

/* ─── Slice data ─── */
const slices = [
  { id: "s1", label: "MENU" },
  { id: "s2", label: "ORDER" },
  { id: "s3", label: "TEAM" },
];

export default function Home() {
  const knifeRef = useRef(null);
  const heroRef = useRef(null);
  const plateGlowRef = useRef(null);

  /* Reset knife animation on mouse leave */
  const handleMouseLeave = useCallback(() => {
    const knife = knifeRef.current;
    if (!knife) return;
    knife.style.animation = "none";
    knife.offsetHeight; // trigger reflow
    knife.style.animation = "";
  }, []);

  /* Slice click handler */
  const handleSliceClick = useCallback((label) => {
    const section = label.toLowerCase().trim();
    console.log(`Navigating to: ${section}`);
    // e.g. router.push(`/${section}`)
  }, []);

  /* Subtle parallax on hero mouse-move */
  useEffect(() => {
    const hero = heroRef.current;
    const glow = plateGlowRef.current;
    if (!hero || !glow) return;

    const handleMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      glow.style.transform = `translate(${x}px, ${y}px)`;
    };

    hero.addEventListener("mousemove", handleMove);
    return () => hero.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar" id="navbar">
        <div className="nav-brand">
          <span className="brand-the">THE</span>
          <span className="brand-cut">CUT</span>
        </div>
        <div className="nav-tagline">PREMIUM STEAKHOUSE</div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="hero" ref={heroRef}>


        {/* Steak interactive area */}
        <div
          className="steak-stage"
          id="steak-stage"
          onMouseLeave={handleMouseLeave}
        >
          {/* Plate / glow behind steak */}
          <div className="plate-glow" ref={plateGlowRef} />

          {/* Steam rising */}
          <div className="steam-group">
            {steamWisps.map((s, i) => (
              <div
                key={i}
                className="steam-wisp"
                style={{ "--offset": s.offset, "--delay": s.delay }}
              />
            ))}
          </div>

          {/* The knife */}
          <div className="knife" id="knife" ref={knifeRef}>
            <KnifeSVG />
          </div>

          {/* STEAK: 3 slices */}
          <div className="steak-container" id="steak-container">
            {slices.map((slice, i) => (
              <div
                key={slice.id}
                className={`steak-slice slice-${i + 1}`}
                id={`slice-${i + 1}`}
                onClick={() => handleSliceClick(slice.label)}
                style={{ cursor: "pointer" }}
              >
                <div className="steak-graphic">
                  <SteakSVG id={slice.id} />
                </div>
                <div className="slice-card">
                  <span className="card-label">{slice.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Cut lines (flash during slice) */}
          <div className="cut-line cut-line-1" />
          <div className="cut-line cut-line-2" />
        </div>

        {/* Instruction text */}
        <p className="hero-hint" id="hero-hint">
          <span className="hint-icon">🔪</span>
          HOVER TO SLICE
        </p>

        {/* Decorative side elements */}
        <div className="side-decor left-decor">
          <div className="decor-line" />
          <span className="decor-year">EST. 2024</span>
          <div className="decor-line" />
        </div>
        <div className="side-decor right-decor">
          <div className="decor-line" />
          <span className="decor-text">AGED 28 DAYS</span>
          <div className="decor-line" />
        </div>
      </section>
    </>
  );
}
