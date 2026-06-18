// Simple SPA routing
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll("[data-route]");
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

function showPage(hash) {
  const id = hash.replace("#", "") || "home";
  pages.forEach((p) => p.classList.remove("active"));
  const page = document.getElementById(id);
  if (page) page.classList.add("active");
}

window.addEventListener("hashchange", () => showPage(location.hash));
showPage(location.hash);

// Make nav links with data-route behave like SPA links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      location.hash = href;
    }
  });
});

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinksContainer = document.querySelector(".nav-links");
if (navToggle && navLinksContainer) {
  navToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("open");
  });
}

// Auth modal
const authModal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const authClose = document.getElementById("authClose");
const authTabButtons = document.querySelectorAll("[data-auth-tab]");
const authForms = document.querySelectorAll(".auth-form");

function openAuth(tab) {
  if (!authModal) return;
  authModal.classList.add("active");
  setAuthTab(tab);
}

function closeAuth() {
  if (!authModal) return;
  authModal.classList.remove("active");
}

function setAuthTab(tab) {
  authTabButtons.forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.authTab === tab)
  );
  authForms.forEach((form) =>
    form.classList.toggle("active", form.id === `${tab}Form`)
  );
}

if (loginBtn) loginBtn.addEventListener("click", () => openAuth("login"));
if (registerBtn) registerBtn.addEventListener("click", () => openAuth("register"));
if (authClose) authClose.addEventListener("click", closeAuth);
if (authModal) {
  authModal.addEventListener("click", (e) => {
    if (e.target === authModal) closeAuth();
  });
}
authTabButtons.forEach((btn) => {
  btn.addEventListener("click", () => setAuthTab(btn.dataset.authTab));
});

// Dummy auth form handlers
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Login form submitted (connect to your backend).");
  });
}
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Register form submitted (connect to your backend).");
  });
}

// FAQ toggle
document.querySelectorAll(".faq-item").forEach((item) => {
  const btn = item.querySelector(".faq-question");
  btn.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

// Pricing data
const pricingData = {
  mc: [
    {
      name: "Grass",
      ram: "4 GB",
      storage: "40 GB NVMe",
      slots: "20",
      price: "€5.99",
    },
    {
      name: "Nether",
      ram: "8 GB",
      storage: "80 GB NVMe",
      slots: "60",
      price: "€11.99",
    },
    {
      name: "End",
      ram: "16 GB",
      storage: "160 GB NVMe",
      slots: "Unlimited*",
      price: "€21.99",
    },
  ],
  rust: [
    {
      name: "Wasteland",
      ram: "8 GB",
      storage: "80 GB NVMe",
      slots: "50",
      price: "€14.99",
    },
    {
      name: "Outpost",
      ram: "16 GB",
      storage: "160 GB NVMe",
      slots: "150",
      price: "€26.99",
    },
  ],
  ark: [
    {
      name: "Island",
      ram: "10 GB",
      storage: "120 GB NVMe",
      slots: "40",
      price: "€18.99",
    },
    {
      name: "Cluster",
      ram: "20 GB",
      storage: "250 GB NVMe",
      slots: "100",
      price: "€32.99",
    },
  ],
  fivem: [
    {
      name: "Street",
      ram: "8 GB",
      storage: "80 GB NVMe",
      slots: "64",
      price: "€16.99",
    },
    {
      name: "City",
      ram: "16 GB",
      storage: "160 GB NVMe",
      slots: "128",
      price: "€27.99",
    },
  ],
  vps: [
    {
      name: "VPS-1",
      ram: "4 GB",
      storage: "60 GB NVMe",
      cpu: "2 vCores",
      price: "€7.99",
    },
    {
      name: "VPS-2",
      ram: "8 GB",
      storage: "120 GB NVMe",
      cpu: "4 vCores",
      price: "€13.99",
    },
    {
      name: "VPS-3",
      ram: "16 GB",
      storage: "240 GB NVMe",
      cpu: "6 vCores",
      price: "€24.99",
    },
  ],
  dedicated: [
    {
      name: "Bare-Metal 1",
      ram: "64 GB",
      storage: "2x 1 TB NVMe",
      cpu: "Ryzen 9 / i9",
      price: "€119.00",
    },
    {
      name: "Bare-Metal 2",
      ram: "128 GB",
      storage: "2x 2 TB NVMe",
      cpu: "Dual Xeon",
      price: "€189.00",
    },
  ],
};

const pricingGrid = document.getElementById("pricingGrid");
const pricingTabs = document.querySelectorAll(".pricing-tabs .tab-btn");

function renderPricing(type) {
  if (!pricingGrid) return;
  pricingGrid.innerHTML = "";
  const plans = pricingData[type] || [];
  plans.forEach((plan) => {
    const card = document.createElement("div");
    card.className = "glass-card";
    card.innerHTML = `
      <h3>${plan.name}</h3>
      <p style="font-size:0.8rem;color:#9ca3af;margin-bottom:0.6rem;">Perfect for small to large communities.</p>
      <ul style="list-style:none;padding:0;margin:0 0 0.6rem 0;font-size:0.8rem;color:#e5e7eb;">
        ${plan.ram ? `<li>RAM: ${plan.ram}</li>` : ""}
        ${plan.storage ? `<li>Storage: ${plan.storage}</li>` : ""}
        ${plan.slots ? `<li>Slots: ${plan.slots}</li>` : ""}
        ${plan.cpu ? `<li>CPU: ${plan.cpu}</li>` : ""}
      </ul>
      <p style="font-size:1.2rem;margin:0.4rem 0 0.7rem;"><strong>${plan.price}</strong> / month</p>
      <button class="btn primary">Order Now</button>
    `;
    pricingGrid.appendChild(card);
  });
}

pricingTabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    pricingTabs.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderPricing(btn.dataset.pricingTab);
  });
});

// Initial pricing
renderPricing("mc");

// Pricing calculator
const calcGame = document.getElementById("calcGame");
const calcRam = document.getElementById("calcRam");
const calcStorage = document.getElementById("calcStorage");
const calcSlots = document.getElementById("calcSlots");
const calcRamValue = document.getElementById("calcRamValue");
const calcStorageValue = document.getElementById("calcStorageValue");
const calcSlotsValue = document.getElementById("calcSlotsValue");
const calcPrice = document.getElementById("calcPrice");

function updateCalcLabels() {
  if (calcRamValue) calcRamValue.textContent = `${calcRam.value} GB`;
  if (calcStorageValue) calcStorageValue.textContent = `${calcStorage.value} GB`;
  if (calcSlotsValue) calcSlotsValue.textContent = calcSlots.value;
}

function calculatePrice() {
  if (!calcPrice) return;
  const base = {
    minecraft: 3.0,
    rust: 4.0,
    ark: 4.5,
    fivem: 4.0,
    vps: 2.5,
    dedicated: 1.8,
  }[calcGame.value];

  const ram = Number(calcRam.value);
  const storage = Number(calcStorage.value);
  const slots = Number(calcSlots.value);

  // Simple formula
  let price =
    base +
    ram * 0.7 +
    storage * 0.03 +
    slots * 0.05;

  if (calcGame.value === "dedicated") {
    price = 80 + ram * 0.5 + storage * 0.02 + slots * 0.1;
  }

  calcPrice.textContent = `€${price.toFixed(2)}`;
}

if (calcGame && calcRam && calcStorage && calcSlots) {
  [calcGame, calcRam, calcStorage, calcSlots].forEach((el) => {
    el.addEventListener("input", () => {
      updateCalcLabels();
      calculatePrice();
    });
  });
  updateCalcLabels();
  calculatePrice();
}

// Contact form (front-end only)
const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");

if (contactForm && contactStatus) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !subject || !message) {
      contactStatus.textContent = "Please fill in all fields.";
      contactStatus.style.color = "#f97373";
      return;
    }

    // Example: send to your backend or external form service
    // fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, subject, message }) })

    contactStatus.textContent =
      "Message sent! Connect this form to your backend to actually deliver emails.";
    contactStatus.style.color = "#4ade80";
    contactForm.reset();
  });
}

// Animated glowing orbs background with mouse repulsion (~3cm visual radius)
const canvas = document.getElementById("orbCanvas");
const ctx = canvas.getContext("2d");
let orbs = [];
let mouse = { x: null, y: null };

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

class Orb {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = 2 + Math.random() * 4; // ~0.1cm visual size on most screens
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.baseAlpha = 0.2 + Math.random() * 0.4;
    this.color =
      Math.random() > 0.5
        ? "rgba(79, 70, 229,"
        : "rgba(236, 72, 153,";
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wrap around edges
    if (this.x < -50) this.x = canvas.width + 50;
    if (this.x > canvas.width + 50) this.x = -50;
    if (this.y < -50) this.y = canvas.height + 50;
    if (this.y > canvas.height + 50) this.y = -50;

    // Mouse repulsion (~3cm visual radius ~ 120px)
    if (mouse.x !== null && mouse.y !== null) {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = 120;
      if (dist < radius) {
        const force = (radius - dist) / radius;
        const angle = Math.atan2(dy, dx);
        this.x += Math.cos(angle) * force * 4;
        this.y += Math.sin(angle) * force * 4;
      }
    }
  }

  draw() {
    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.radius * 4
    );
    gradient.addColorStop(0, `${this.color} ${this.baseAlpha + 0.2})`);
    gradient.addColorStop(1, `${this.color} 0)`);

    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(this.x, this.y, this.radius * 4, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initOrbs() {
  orbs = [];
  const count = Math.floor((canvas.width * canvas.height) / 25000);
  for (let i = 0; i < count; i++) {
    orbs.push(new Orb());
  }
}
initOrbs();
window.addEventListener("resize", initOrbs);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  orbs.forEach((orb) => {
    orb.update();
    orb.draw();
  });
  requestAnimationFrame(animate);
}
animate();
