:root {
  --bg: #020617;
  --bg-alt: #05091f;
  --accent: #4f46e5;
  --accent-soft: rgba(79, 70, 229, 0.3);
  --accent2: #ec4899;
  --text: #e5e7eb;
  --muted: #9ca3af;
  --danger: #f97373;
  --success: #22c55e;
  --glass: rgba(15, 23, 42, 0.7);
  --border: rgba(148, 163, 184, 0.25);
  --radius-lg: 18px;
  --radius-md: 12px;
  --radius-sm: 8px;
  --shadow-soft: 0 18px 45px rgba(15, 23, 42, 0.9);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  color: var(--text);
  background: radial-gradient(circle at top, #0f172a 0, #020617 55%, #000 100%);
  overflow-x: hidden;
}

/* Orb canvas background */
#orbCanvas {
  position: fixed;
  inset: 0;
  z-index: 0;
  background: radial-gradient(circle at top, #020617 0, #000 70%);
}

/* App shell */
.app-shell {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  backdrop-filter: blur(18px);
  background: linear-gradient(
    to right,
    rgba(15, 23, 42, 0.9),
    rgba(15, 23, 42, 0.7)
  );
  border-bottom: 1px solid rgba(148, 163, 184, 0.3);
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.brand-logo {
  font-size: 1.4rem;
  color: var(--accent2);
}

.brand-name {
  font-size: 1.1rem;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  transition: color 0.2s, background 0.2s;
}

.nav-links a:hover {
  color: var(--text);
  background: rgba(15, 23, 42, 0.9);
}

.nav-right {
  display: flex;
  gap: 0.75rem;
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.4rem;
}

/* Buttons */
.btn {
  border-radius: 999px;
  border: 1px solid transparent;
  padding: 0.45rem 1.1rem;
  font-size: 0.9rem;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.1s;
}

.btn.primary {
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  color: white;
  box-shadow: 0 0 18px rgba(79, 70, 229, 0.6);
}

.btn.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 24px rgba(79, 70, 229, 0.9);
}

.btn.ghost {
  background: transparent;
  color: var(--text);
  border-color: rgba(148, 163, 184, 0.5);
}

.btn.ghost:hover {
  background: rgba(15, 23, 42, 0.9);
}

.btn.tiny {
  padding: 0.25rem 0.7rem;
  font-size: 0.75rem;
}

/* Main layout */
main#app {
  flex: 1;
  padding: 1.5rem 2rem 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Pages */
.page {
  display: none;
  animation: fadeIn 0.4s ease-out;
}

.page.active {
  display: block;
}

/* Hero */
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.1fr);
  gap: 2rem;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
}

.hero-text h1 {
  font-family: "Orbitron", sans-serif;
  font-size: 2.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.hero-subtitle {
  font-size: 1.05rem;
  color: var(--muted);
  max-width: 28rem;
}

.hero-subtitle span {
  color: var(--accent2);
}

.hero-actions {
  margin-top: 1.25rem;
  display: flex;
  gap: 0.75rem;
}

.hero-badges {
  margin-top: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: rgba(15, 23, 42, 0.9);
  color: var(--muted);
}

.hero-visual {
  display: flex;
  align-items: stretch;
}

.hero-card {
  width: 100%;
}

/* Glass cards */
.glass-card {
  background: radial-gradient(circle at top left, rgba(79, 70, 229, 0.12), transparent 55%),
    radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.12), transparent 55%),
    var(--glass);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
  padding: 1.25rem 1.4rem;
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(79, 70, 229, 0.2),
    rgba(236, 72, 153, 0.2)
  );
  opacity: 0;
  mix-blend-mode: screen;
  pointer-events: none;
  transition: opacity 0.3s;
}

.glass-card:hover::before {
  opacity: 0.25;
}

/* Hero dashboard */
.hero-dashboard {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 1rem;
}

.hero-server {
  background: rgba(15, 23, 42, 0.9);
  border-radius: var(--radius-md);
  padding: 0.9rem;
  border: 1px solid rgba(148, 163, 184, 0.4);
}

.server-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-bottom: 0.6rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  display: inline-block;
  margin-right: 0.4rem;
}

.status-dot.online {
  background: var(--success);
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.8);
}

.tag {
  font-size: 0.7rem;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  background: rgba(79, 70, 229, 0.2);
  border: 1px solid rgba(79, 70, 229, 0.6);
}

.metric {
  display: grid;
  grid-template-columns: 1fr 3fr auto;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  margin-bottom: 0.35rem;
}

.metric-bar {
  height: 6px;
  border-radius: 999px;
  background: rgba(30, 64, 175, 0.5);
  overflow: hidden;
}

.metric-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
}

.metric-value {
  font-variant-numeric: tabular-nums;
  color: var(--muted);
}

.server-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
  margin-top: 0.6rem;
}

.hero-skins h4 {
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.skin-row {
  display: flex;
  gap: 0.75rem;
}

.skin {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.7rem;
  color: var(--muted);
}

.skin-avatar {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(148, 163, 184, 0.6);
  box-shadow: 0 0 12px rgba(79, 70, 229, 0.7);
  margin-bottom: 0.25rem;
}

/* Placeholder skin backgrounds (replace with your own images) */
.skin1 {
  background-image: linear-gradient(135deg, #22c55e, #16a34a);
}
.skin2 {
  background-image: linear-gradient(135deg, #3b82f6, #1d4ed8);
}
.skin3 {
  background-image: linear-gradient(135deg, #f97316, #ea580c);
}

.hero-note {
  margin-top: 0.75rem;
  font-size: 0.8rem;
  color: var(--muted);
}

/* Sections */
.section {
  margin-bottom: 2.5rem;
}

.section-title {
  font-family: "Orbitron", sans-serif;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 0.4rem;
}

.section-subtitle {
  color: var(--muted);
  font-size: 0.9rem;
  margin-bottom: 1.2rem;
}

/* Grids */
.grid {
  display: grid;
  gap: 1.25rem;
}

.features-grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.games-grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.ptero-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.testimonials-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.status-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.kb-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.support-grid {
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.1fr);
}

.careers-grid,
.partners-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

/* Pricing */
.pricing-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}

.tab-btn {
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  background: rgba(15, 23, 42, 0.9);
  color: var(--muted);
  padding: 0.35rem 0.9rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}

.tab-btn.active {
  color: var(--text);
  border-color: var(--accent2);
  background: radial-gradient(circle at top, rgba(79, 70, 229, 0.4), rgba(15, 23, 42, 0.9));
}

/* Calculator */
.calculator-card {
  margin-top: 1rem;
}

.calc-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 1.5rem;
}

.calc-inputs label {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.9rem;
}

.calc-inputs span {
  display: block;
  margin-bottom: 0.25rem;
  color: var(--muted);
}

.calc-inputs input[type="range"] {
  width: 100%;
}

.calc-inputs select,
.calc-inputs input,
.calc-inputs textarea {
  width: 100%;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(148, 163, 184, 0.5);
  background: rgba(15, 23, 42, 0.9);
  color: var(--text);
  padding: 0.4rem 0.5rem;
  font-size: 0.85rem;
}

.calc-result {
  border-radius: var(--radius-md);
  border: 1px solid rgba(79, 70, 229, 0.6);
  background: radial-gradient(circle at top, rgba(79, 70, 229, 0.25), rgba(15, 23, 42, 0.95));
  padding: 1rem;
}

.calc-price {
  font-size: 1.6rem;
  margin: 0.4rem 0 0.6rem;
}

.calc-price span {
  color: var(--accent2);
  font-weight: 700;
}

.calc-note {
  font-size: 0.8rem;
  color: var(--muted);
  margin-bottom: 0.8rem;
}

/* Map */
.map-card {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 1rem;
}

.map {
  position: relative;
  border-radius: var(--radius-md);
  border: 1px solid rgba(148, 163, 184, 0.5);
  background: radial-gradient(circle at center, #020617, #000);
  height: 220px;
  overflow: hidden;
}

.map::before {
  content: "";
  position: absolute;
  inset: 15%;
  border-radius: 999px;
  border: 1px dashed rgba(148, 163, 184, 0.4);
}

.map-point {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: var(--accent);
  box-shadow: 0 0 18px rgba(79, 70, 229, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
}

.map-point.eu {
  top: 30%;
  left: 45%;
}
.map-point.na {
  top: 35%;
  left: 25%;
}
.map-point.sa {
  top: 60%;
  left: 30%;
}
.map-point.asia {
  top: 40%;
  left: 65%;
}
.map-point.oce {
  top: 65%;
  left: 75%;
}

.map-legend {
  font-size: 0.8rem;
  color: var(--muted);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.map-legend .dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-right: 0.4rem;
}

.map-legend .dot.eu {
  background: #22c55e;
}
.map-legend .dot.na {
  background: #3b82f6;
}
.map-legend .dot.sa {
  background: #f97316;
}
.map-legend .dot.asia {
  background: #eab308;
}
.map-legend .dot.oce {
  background: #ec4899;
}

/* Testimonials */
.testimonial p {
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
}

.testimonial-name {
  font-size: 0.8rem;
  color: var(--muted);
}

/* Status */
.status-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
}

.status-pill {
  border-radius: 999px;
  padding: 0.1rem 0.6rem;
  font-size: 0.7rem;
}

.status-ok {
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
}

.status-minor {
  background: rgba(234, 179, 8, 0.15);
  color: #facc15;
}

/* FAQ */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.faq-item {
  border-radius: var(--radius-md);
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: rgba(15, 23, 42, 0.9);
  overflow: hidden;
}

.faq-question {
  width: 100%;
  background: none;
  border: none;
  color: var(--text);
  padding: 0.7rem 0.9rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 0.85rem;
}

.faq-answer {
  padding: 0 0.9rem 0.7rem;
  font-size: 0.8rem;
  color: var(--muted);
  display: none;
}

.faq-item.open .faq-answer {
  display: block;
}

.faq-item.open .faq-toggle {
  transform: rotate(45deg);
}

/* Support / Contact */
.tickets-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
}

.tickets-table th,
.tickets-table td {
  padding: 0.4rem 0.5rem;
  border-bottom: 1px solid rgba(30, 64, 175, 0.5);
}

.contact-form label {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
}

.contact-form span {
  display: block;
  margin-bottom: 0.25rem;
  color: var(--muted);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(148, 163, 184, 0.5);
  background: rgba(15, 23, 42, 0.9);
  color: var(--text);
  padding: 0.4rem 0.5rem;
  font-size: 0.85rem;
}

.contact-status {
  font-size: 0.8rem;
  margin-top: 0.4rem;
}

/* Legal */
.legal-card {
  font-size: 0.85rem;
  color: var(--muted);
}

/* Footer */
.footer {
  padding: 1rem 2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--muted);
  border-top: 1px solid rgba(15, 23, 42, 0.9);
  background: radial-gradient(circle at top, rgba(15, 23, 42, 0.95), #020617);
}

.footer-right a {
  color: var(--muted);
  text-decoration: none;
  margin-left: 0.75rem;
}

.footer-right a:hover {
  color: var(--text);
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.85);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 20;
}

.modal-overlay.active {
  display: flex;
}

.modal {
  background: var(--glass);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
  padding: 1.2rem 1.4rem;
  width: 320px;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 0.4rem;
  right: 0.6rem;
  background: none;
  border: none;
  color: var(--muted);
  font-size: 1.2rem;
  cursor: pointer;
}

.modal-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
}

.modal-tabs .tab-btn {
  flex: 1;
  text-align: center;
}

.modal-body {
  font-size: 0.85rem;
}

.auth-form {
  display: none;
}

.auth-form.active {
  display: block;
}

.auth-form label {
  display: block;
  margin-bottom: 0.7rem;
}

.auth-form span {
  display: block;
  margin-bottom: 0.25rem;
  color: var(--muted);
}

.auth-form input {
  width: 100%;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(148, 163, 184, 0.5);
  background: rgba(15, 23, 42, 0.9);
  color: var(--text);
  padding: 0.4rem 0.5rem;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 900px) {
  main#app {
    padding: 1.2rem 1.2rem 2.5rem;
  }

  .hero {
    grid-template-columns: minmax(0, 1fr);
  }

  .support-grid,
  .map-card,
  .calc-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .navbar {
    padding: 0.6rem 1.2rem;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 3.1rem;
    left: 0;
    right: 0;
    padding: 0.75rem 1.2rem 1rem;
    background: rgba(15, 23, 42, 0.98);
    flex-direction: column;
    gap: 0.4rem;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-toggle {
    display: block;
  }

  .nav-right {
    display: none;
  }

  .footer {
    padding-inline: 1.2rem;
    flex-direction: column;
    gap: 0.4rem;
  }
}
