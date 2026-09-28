(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const REACTIONS = {
    1: "Okay. Manageable. 😌",
    2: "Still financially stable. 💸",
    3: "Starting to understand why florists exist. 💐",
    4: "This bouquet is gaining infrastructure. 🏗️",
    5: "Please remember I am one man. 🙋",
    6: "Opening Google Maps: “flower market near me” 🗺️",
    7: "This has become a procurement problem. 📦",
  };

  const MORE_REACTIONS = [
    "This is a bouquet with a logistics team. 🚚",
    "I am one man with one pair of hands. 🙌",
    "The bike does not have a flower trailer. 🚲",
    "We have left romance and entered wholesale. 📊",
    "At this point you are designing a garden. 🌿",
    "I have started a spreadsheet. It did not help. 📉",
    "Local florists have been notified. 📞",
    "This is no longer a gesture. This is infrastructure. 🏗️",
    "Please remember gravity is real. 🌍",
    "I will need a second opinion and a small truck. 🛻",
  ];

  const CHIPS = {
    caution: "⚠️ Read this. You can’t skip the joke.",
    greeting: "🌷 Error 404: Normal opener not found",
    how_are_you: "💬 Deploying social skills…",
    is_morning: "☀️ Final verification",
    night_followup: "🌙 Rollback unavailable",
    reveal: "🚨 Production readiness: absolutely not",
    flower_select: "🛒 Procurement in progress",
    flower_confirm: "📋 Supply chain review",
    bouquet: "💪 Frontend status: trying its best",
    date_question: "💌 Relationship status: pending API response",
    yes_path: "🎉 A statistically unlikely event",
    contact: "📱 Contact exchange",
    instagram: "💬 Please use Hinge",
    hinge_stay: "🫶 Attempting normal communication",
    talk_first: "🧠 Better judgment detected",
    rejection: "📁 Application closed",
    ended: "🏁 Simulation ended",
  };

  const FOOTERS = {
    caution: "🚫 Rollback unavailable. Editing also unavailable.",
    greeting: "📱 This process could have been a text message.",
    how_are_you: "💻 Works on my machine.",
    is_morning: "🫖 No rush. The server is emotionally prepared.",
    night_followup: "↩️ Rollback unavailable.",
    reveal: "⚠️ Warning: developer may be overcommitted to the bit.",
    flower_select: "💸 Server cost: ₹0.00. Dignity cost: undisclosed.",
    flower_confirm: "🧪 This interaction has not been unit tested.",
    bouquet: "",
    date_question: "📜 Terms & conditions: none of this was necessary.",
    yes_path: "Dignity remaining: 63%. 🫠",
    contact: "🎭 Loading personality…",
    instagram: "⏳ Estimated development time: longer than it should have been.",
    hinge_stay: "🎲 Success rate currently unknown.",
    talk_first: "🙏 He promises to stop communicating through web applications.",
    rejection: "🌸 Thank you for participating in this completely unnecessary experiment.",
    ended: "👋 You can close this tab.",
  };

  const TITLES = {
    caution: "One time only",
    greeting: "Hello",
    how_are_you: "How are you",
    is_morning: "Is it morning",
    night_followup: "What comes after night",
    reveal: "Good morning",
    flower_select: "Pick the flowers",
    flower_confirm: "Are you sure",
    bouquet: "Your bouquet",
    date_question: "Final round",
    yes_path: "System notice",
    contact: "Contact",
    instagram: "Send it on Hinge",
    hinge_stay: "Stay on Hinge",
    talk_first: "Let’s talk first",
    rejection: "Request declined",
    ended: "Ended",
  };

  const SCREEN_LABELS = {
    caution: "the caution",
    greeting: "the greeting",
    how_are_you: "how are you",
    is_morning: "is it morning",
    night_followup: "what comes after night",
    reveal: "the reveal",
    flower_select: "flower picking",
    flower_confirm: "flower confirmation",
    bouquet: "the bouquet",
    date_question: "the date question",
    yes_path: "the yes screen",
    contact: "the contact question",
    instagram: "the Hinge handoff",
    hinge_stay: "stay on Hinge",
    talk_first: "talk first",
    rejection: "the no",
    ended: "the end",
  };

  function stem() {
    return (
      '<path d="M40 116 C41 96 39 78 40 64" fill="none" stroke="#2f6a40" stroke-width="3.2" stroke-linecap="round"/>' +
      '<path d="M39 98 C28 92 22 86 27 79" fill="none" stroke="#3d8a50" stroke-width="2" stroke-linecap="round"/>' +
      '<ellipse cx="24" cy="82" rx="10" ry="4.4" fill="#67b56f" transform="rotate(-42 24 82)"/>' +
      '<path d="M41 90 C54 84 60 76 55 69" fill="none" stroke="#3d8a50" stroke-width="2" stroke-linecap="round"/>' +
      '<ellipse cx="58" cy="71" rx="10" ry="4.4" fill="#7ec884" transform="rotate(34 58 71)"/>'
    );
  }

  function svg(inner) {
    return '<svg viewBox="0 0 80 120" aria-hidden="true">' + inner + "</svg>";
  }

  function petals(count, rx, ry, fill, cy, stroke) {
    let out = "";
    for (let i = 0; i < count; i += 1) {
      out +=
        '<ellipse cx="40" cy="' +
        (cy - ry - 1) +
        '" rx="' +
        rx +
        '" ry="' +
        ry +
        '" fill="' +
        fill +
        '"' +
        (stroke ? ' stroke="' + stroke + '" stroke-width="0.8"' : "") +
        ' transform="rotate(' +
        (360 / count) * i +
        " 40 " +
        cy +
        ')"/>';
    }
    return out;
  }

  function disc(cy, radius, fill, innerRadius, inner) {
    let out = '<circle cx="40" cy="' + cy + '" r="' + radius + '" fill="' + fill + '"/>';
    if (innerRadius) {
      out += '<circle cx="40" cy="' + cy + '" r="' + innerRadius + '" fill="' + inner + '"/>';
    }
    return out;
  }

  function drawRadial(spec) {
    const cy = spec.cy || 36;
    return svg(
      stem() +
        petals(spec.count, spec.rx, spec.ry, spec.fill, cy, spec.stroke) +
        disc(cy, spec.cr, spec.center, spec.ir, spec.inner)
    );
  }

  function drawRose(colors) {
    return svg(
      stem() +
        '<ellipse cx="40" cy="36" rx="16" ry="15" fill="' + colors[0] + '"/>' +
        '<ellipse cx="30" cy="32" rx="9" ry="11" fill="' + colors[1] + '"/>' +
        '<ellipse cx="50" cy="31" rx="8" ry="10" fill="' + colors[2] + '"/>' +
        '<ellipse cx="40" cy="30" rx="7" ry="8" fill="' + colors[3] + '"/>' +
        '<circle cx="40" cy="36" r="3.2" fill="' + colors[4] + '"/>'
    );
  }

  function drawCup(colors) {
    return svg(
      stem() +
        '<path d="M40 58 C28 50 22 36 27 24 C32 34 36 40 40 42 C44 40 48 34 53 24 C58 36 52 50 40 58 Z" fill="' + colors[0] + '"/>' +
        '<path d="M40 58 C34 46 32 34 33 22 C36 32 38 40 40 44 Z" fill="' + colors[1] + '"/>' +
        '<path d="M40 58 C46 46 49 34 48 22 C45 32 42 40 40 44 Z" fill="' + colors[2] + '"/>'
    );
  }

  function drawLily(colors) {
    return svg(
      stem() +
        '<path d="M40 50 C30 40 22 28 28 16 C34 26 38 34 40 40 Z" fill="' + colors[0] + '"/>' +
        '<path d="M40 50 C50 40 58 28 52 16 C46 26 42 34 40 40 Z" fill="' + colors[1] + '"/>' +
        '<path d="M40 52 C32 36 26 30 22 20 C30 28 36 36 40 46 Z" fill="' + colors[2] + '"/>' +
        '<path d="M40 52 C48 36 54 30 58 20 C50 28 44 36 40 46 Z" fill="' + colors[3] + '"/>' +
        '<circle cx="36" cy="30" r="1.3" fill="' + colors[4] + '"/>' +
        '<circle cx="44" cy="28" r="1.3" fill="' + colors[4] + '"/>' +
        '<path d="M40 48 V24" fill="none" stroke="#d4a017" stroke-width="1.4" stroke-linecap="round"/>' +
        '<circle cx="40" cy="23" r="1.6" fill="#e0b02a"/>'
    );
  }

  function drawOrchid(colors) {
    return svg(
      stem() +
        '<ellipse cx="40" cy="28" rx="8" ry="12" fill="' + colors[0] + '" transform="rotate(-18 40 28)"/>' +
        '<ellipse cx="40" cy="28" rx="8" ry="12" fill="' + colors[1] + '" transform="rotate(18 40 28)"/>' +
        '<ellipse cx="28" cy="38" rx="7" ry="11" fill="' + colors[2] + '" transform="rotate(-40 28 38)"/>' +
        '<ellipse cx="52" cy="38" rx="7" ry="11" fill="' + colors[2] + '" transform="rotate(40 52 38)"/>' +
        '<ellipse cx="40" cy="44" rx="8" ry="10" fill="' + colors[3] + '"/>' +
        '<ellipse cx="40" cy="46" rx="3.5" ry="5" fill="' + colors[4] + '"/>' +
        '<circle cx="40" cy="30" r="2" fill="#f7e27a"/>'
    );
  }

  function drawPeony(colors) {
    return svg(
      stem() +
        '<circle cx="40" cy="36" r="16" fill="' + colors[0] + '"/>' +
        '<circle cx="30" cy="32" r="9" fill="' + colors[1] + '"/>' +
        '<circle cx="50" cy="30" r="9" fill="' + colors[2] + '"/>' +
        '<circle cx="34" cy="44" r="8" fill="' + colors[3] + '"/>' +
        '<circle cx="48" cy="43" r="8" fill="' + colors[1] + '"/>' +
        '<circle cx="40" cy="36" r="6" fill="' + colors[4] + '"/>'
    );
  }

  function drawSpike(colors, bells) {
    let dots = "";
    for (let i = 0; i < 8; i += 1) {
      const y = 16 + i * 6;
      const x = 40 + (i % 2 === 0 ? -6 : 6);
      const fill = colors[i % colors.length];
      dots += bells
        ? '<path d="M' + (x - 4) + " " + y + " C" + x + " " + (y + 8) + " " + (x + 4) + " " + y + " " + (x + 4) + " " + y + " C" + (x + 2) + " " + (y - 4) + " " + (x - 2) + " " + (y - 4) + " " + (x - 4) + " " + y + ' Z" fill="' + fill + '"/>'
        : '<ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + fill + '"/>';
    }
    return svg('<path d="M40 116 V14" fill="none" stroke="#3d8a50" stroke-width="2.4" stroke-linecap="round"/>' + dots);
  }

  function drawCluster(colors, tiny) {
    const spots = [
      [40, 26],
      [28, 34],
      [52, 32],
      [34, 44],
      [48, 46],
      [22, 46],
      [58, 44],
      [40, 36],
    ];
    const dots = spots
      .map(function (spot, index) {
        return (
          '<circle cx="' +
          spot[0] +
          '" cy="' +
          spot[1] +
          '" r="' +
          (tiny ? 3.1 : 6.5) +
          '" fill="' +
          colors[index % colors.length] +
          '"' +
          (tiny ? ' stroke="#ead5dc" stroke-width="0.6"' : "") +
          "/>"
        );
      })
      .join("");
    return svg((tiny ? '<path d="M40 116 V40" fill="none" stroke="#7d9a78" stroke-width="1.6"/>' : stem()) + dots);
  }

  function drawHibiscus(fill, throat) {
    return svg(
      stem() +
        petals(5, 8, 14, fill, 38) +
        disc(38, 5, throat) +
        '<path d="M40 38 v-16" stroke="' + throat + '" stroke-width="1.5"/>' +
        '<circle cx="40" cy="20" r="2.1" fill="#f2d34a"/>'
    );
  }

  function drawDaffodil(petal, trumpet) {
    return svg(
      stem() +
        petals(6, 5, 12, petal, 34) +
        '<ellipse cx="40" cy="36" rx="7" ry="8" fill="' + trumpet + '"/>' +
        '<ellipse cx="40" cy="34" rx="4" ry="4" fill="#fff6d2"/>'
    );
  }

  function drawCalla(spathe, spadix) {
    return svg(
      stem() +
        '<path d="M40 58 C18 48 16 22 40 14 C64 22 62 48 40 58 Z" fill="' + spathe + '"/>' +
        '<path d="M40 50 C34 40 33 28 40 22 C40 32 40 42 40 50 Z" fill="' + spadix + '"/>'
    );
  }

  function drawIris(up, down) {
    return svg(
      stem() +
        '<ellipse cx="40" cy="20" rx="7" ry="11" fill="' + up + '"/>' +
        '<ellipse cx="27" cy="26" rx="6" ry="10" fill="' + up + '" transform="rotate(-30 27 26)"/>' +
        '<ellipse cx="53" cy="26" rx="6" ry="10" fill="' + up + '" transform="rotate(30 53 26)"/>' +
        '<ellipse cx="40" cy="44" rx="8" ry="11" fill="' + down + '"/>' +
        '<ellipse cx="28" cy="40" rx="6" ry="9" fill="' + down + '" transform="rotate(18 28 40)"/>' +
        '<ellipse cx="52" cy="40" rx="6" ry="9" fill="' + down + '" transform="rotate(-18 52 40)"/>' +
        '<path d="M40 34 v8" stroke="#f2c14e" stroke-width="2" stroke-linecap="round"/>'
    );
  }

  function drawPoppy(fill, center) {
    return svg(stem() + petals(4, 11, 13, fill, 36) + disc(36, 5, center, 2.2, "#2a2418"));
  }

  function drawLotus(outer, inner) {
    let marks = "";
    for (let i = 0; i < 8; i += 1) {
      marks += '<ellipse cx="40" cy="20" rx="4.5" ry="13" fill="' + outer + '" transform="rotate(' + i * 45 + ' 40 40)"/>';
    }
    for (let i = 0; i < 6; i += 1) {
      marks += '<ellipse cx="40" cy="26" rx="3.6" ry="9" fill="' + inner + '" transform="rotate(' + (i * 60 + 15) + ' 40 40)"/>';
    }
    return svg(stem() + marks + disc(40, 4, "#f2d36b"));
  }

  function drawPansy(top, bottom, face) {
    return svg(
      stem() +
        '<ellipse cx="30" cy="28" rx="10" ry="12" fill="' + top + '" transform="rotate(-18 30 28)"/>' +
        '<ellipse cx="50" cy="28" rx="10" ry="12" fill="' + top + '" transform="rotate(18 50 28)"/>' +
        '<ellipse cx="40" cy="20" rx="8" ry="8" fill="' + top + '"/>' +
        '<ellipse cx="32" cy="42" rx="9" ry="10" fill="' + bottom + '"/>' +
        '<ellipse cx="48" cy="42" rx="9" ry="10" fill="' + bottom + '"/>' +
        '<circle cx="40" cy="36" r="3.2" fill="' + face + '"/>'
    );
  }

  function drawPinwheel(fill, throat) {
    let marks = "";
    for (let i = 0; i < 5; i += 1) {
      marks += '<ellipse cx="50" cy="28" rx="7" ry="13" fill="' + fill + '" transform="rotate(' + i * 72 + ' 40 38)"/>';
    }
    return svg(stem() + marks + disc(38, 4, throat));
  }

  function drawFunnel(fill, throat) {
    return svg(
      stem() +
        '<path d="M40 56 C18 48 14 28 22 18 C28 28 34 32 40 32 C46 32 52 28 58 18 C66 28 62 48 40 56 Z" fill="' + fill + '"/>' +
        '<circle cx="40" cy="34" r="5" fill="' + throat + '"/>' +
        '<circle cx="40" cy="34" r="2" fill="#fffaf6"/>'
    );
  }

  function drawProtea(bract, center) {
    return svg(stem() + petals(12, 3.2, 12, bract, 36) + '<ellipse cx="40" cy="36" rx="10" ry="8" fill="' + center + '"/>');
  }

  function drawBranch(color) {
    return svg(
      '<path d="M8 96 C28 74 46 58 74 28" fill="none" stroke="#6b4a3a" stroke-width="2.4" stroke-linecap="round"/>' +
        '<circle cx="26" cy="74" r="6" fill="' + color + '"/>' +
        '<circle cx="42" cy="58" r="6.4" fill="' + color + '"/>' +
        '<circle cx="56" cy="44" r="5.6" fill="' + color + '"/>' +
        '<circle cx="34" cy="46" r="4.6" fill="' + color + '"/>' +
        '<circle cx="64" cy="34" r="4.2" fill="#fffaf6" stroke="' + color + '"/>'
    );
  }

  function drawWisteria(color) {
    let drops = '<path d="M14 24 H66" stroke="#3d8a50" stroke-width="2.2" stroke-linecap="round"/>';
    for (let i = 0; i < 5; i += 1) {
      const x = 22 + i * 9;
      const y = 36 + (i % 2) * 8;
      drops += '<ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="12" fill="' + color + '"/>';
      drops += '<ellipse cx="' + x + '" cy="' + (y + 14) + '" rx="3" ry="7" fill="' + color + '" opacity="0.85"/>';
    }
    return svg(drops);
  }

  function drawBird() {
    return svg(
      '<path d="M38 116 V52" stroke="#2f6a40" stroke-width="3" fill="none" stroke-linecap="round"/>' +
        '<path d="M34 74 Q16 42 46 26 Q34 50 40 74 Z" fill="#2f8f62"/>' +
        '<path d="M42 54 C60 36 74 28 78 34 C64 40 52 50 46 60 Z" fill="#f08a2a"/>' +
        '<path d="M46 50 C64 40 74 42 72 50 C60 48 50 54 46 60 Z" fill="#2f6ad0"/>' +
        '<path d="M44 46 L70 32" stroke="#f2c14e" stroke-width="2" stroke-linecap="round"/>'
    );
  }

  function drawFern() {
    let leaves = '<path d="M40 116 V18" stroke="#2f6a40" stroke-width="2" fill="none"/>';
    for (let i = 0; i < 7; i += 1) {
      const y = 28 + i * 10;
      leaves += '<ellipse cx="28" cy="' + y + '" rx="10" ry="3.2" fill="#3d8a50" transform="rotate(-28 28 ' + y + ')"/>';
      leaves += '<ellipse cx="52" cy="' + (y + 4) + '" rx="10" ry="3.2" fill="#67b56f" transform="rotate(28 52 ' + (y + 4) + ')"/>';
    }
    return svg(leaves);
  }

  function drawEucalyptus() {
    let leaves = '<path d="M40 116 V16" stroke="#6d8f78" stroke-width="2" fill="none"/>';
    for (let i = 0; i < 5; i += 1) {
      const y = 30 + i * 14;
      leaves += '<ellipse cx="30" cy="' + y + '" rx="8" ry="4" fill="#9db8a2" transform="rotate(-40 30 ' + y + ')"/>';
      leaves += '<ellipse cx="50" cy="' + (y + 6) + '" rx="8" ry="4" fill="#b7cbb8" transform="rotate(40 50 ' + (y + 6) + ')"/>';
    }
    return svg(leaves);
  }

  function drawCauliflower() {
    const bumps = [
      [40, 26, 12],
      [27, 32, 8],
      [53, 31, 8],
      [33, 40, 7],
      [49, 41, 7],
      [40, 36, 6],
      [21, 40, 5],
      [59, 39, 5],
    ];
    const curd = bumps
      .map(function (bump) {
        return (
          '<circle cx="' + bump[0] + '" cy="' + bump[1] + '" r="' + bump[2] + '" fill="#f3f6ec"/>' +
          '<circle cx="' + (bump[0] - 2) + '" cy="' + (bump[1] - 2) + '" r="' + bump[2] * 0.35 + '" fill="#dfe8d4"/>'
        );
      })
      .join("");
    return svg(
      '<path d="M40 116 V56" fill="none" stroke="#3d8a50" stroke-width="3.2" stroke-linecap="round"/>' +
        '<ellipse cx="24" cy="54" rx="14" ry="6" fill="#6aaa55" transform="rotate(-32 24 54)"/>' +
        '<ellipse cx="56" cy="54" rx="14" ry="6" fill="#7dbe64" transform="rotate(30 56 54)"/>' +
        curd
    );
  }

  function renderFlower(spec) {
    if (spec.kind === "rose") return drawRose(spec.colors);
    if (spec.kind === "cup") return drawCup(spec.colors);
    if (spec.kind === "lily") return drawLily(spec.colors);
    if (spec.kind === "orchid") return drawOrchid(spec.colors);
    if (spec.kind === "peony") return drawPeony(spec.colors);
    if (spec.kind === "spike") return drawSpike(spec.colors, spec.bells);
    if (spec.kind === "cluster") return drawCluster(spec.colors, spec.tiny);
    if (spec.kind === "hibiscus") return drawHibiscus(spec.fill, spec.throat);
    if (spec.kind === "daffodil") return drawDaffodil(spec.fill, spec.throat);
    if (spec.kind === "calla") return drawCalla(spec.fill, spec.throat);
    if (spec.kind === "iris") return drawIris(spec.fill, spec.throat);
    if (spec.kind === "poppy") return drawPoppy(spec.fill, spec.throat);
    if (spec.kind === "lotus") return drawLotus(spec.fill, spec.throat);
    if (spec.kind === "pansy") return drawPansy(spec.fill, spec.throat, spec.face);
    if (spec.kind === "pinwheel") return drawPinwheel(spec.fill, spec.throat);
    if (spec.kind === "funnel") return drawFunnel(spec.fill, spec.throat);
    if (spec.kind === "protea") return drawProtea(spec.fill, spec.throat);
    if (spec.kind === "branch") return drawBranch(spec.fill);
    if (spec.kind === "wisteria") return drawWisteria(spec.fill);
    if (spec.kind === "bird") return drawBird();
    if (spec.kind === "fern") return drawFern();
    if (spec.kind === "cauliflower") return drawCauliflower();
    if (spec.kind === "eucalyptus") return drawEucalyptus();
    return drawRadial(spec);
  }

  const FLOWER_SPECS = [
    { id: "cauliflower", name: "Cauliflower", kind: "cauliflower" },
    { id: "rose", name: "Rose", kind: "rose", colors: ["#c4334e", "#e15b74", "#a82842", "#f4a0b0", "#f8d5dc"] },
    { id: "tulip", name: "Tulip", kind: "cup", colors: ["#ee6b8a", "#f7a0b8", "#d45278"] },
    { id: "sunflower", name: "Sunflower", kind: "radial", count: 14, rx: 5.2, ry: 11, fill: "#f0c04a", center: "#6b3e12", cr: 11, inner: "#8d5524", ir: 7 },
    { id: "daisy", name: "Daisy", kind: "radial", count: 10, rx: 5, ry: 12, fill: "#fffdf8", stroke: "#f0d3bf", center: "#f0c04a", cr: 7.5, inner: "#e0a020", ir: 4 },
    { id: "lily", name: "Lily", kind: "lily", colors: ["#f7f1e4", "#f3e2ea", "#fffaf4", "#f8e7ee", "#e07a90"] },
    { id: "orchid", name: "Orchid", kind: "orchid", colors: ["#e7d4f2", "#f6e9fb", "#d7b3e8", "#f4c2d8", "#c45c86"] },
    { id: "peony", name: "Peony", kind: "peony", colors: ["#e56b8a", "#f3a0b6", "#d45578", "#f7c0ce", "#fff0f3"] },
    { id: "babys-breath", name: "Baby’s breath", kind: "cluster", colors: ["#fffaf6", "#fff6f8"], tiny: true, small: true },
    { id: "carnation", name: "Carnation", kind: "radial", count: 16, rx: 4, ry: 10, fill: "#f08aa4", center: "#d45578", cr: 6, inner: "#fff0f3", ir: 3 },
    { id: "chrysanthemum", name: "Chrysanthemum", kind: "radial", count: 18, rx: 3.2, ry: 12, fill: "#f2b43a", center: "#e08a16", cr: 5, inner: "#fff1c9", ir: 2.4 },
    { id: "daffodil", name: "Daffodil", kind: "daffodil", fill: "#f6de6a", throat: "#f0a020" },
    { id: "iris", name: "Iris", kind: "iris", fill: "#6a5acd", throat: "#3e348c" },
    { id: "poppy", name: "Poppy", kind: "poppy", fill: "#e23b3b", throat: "#2a2418" },
    { id: "lavender", name: "Lavender", kind: "spike", colors: ["#b7a1e0", "#8d74c9", "#cbbcf0"], small: true },
    { id: "hydrangea", name: "Hydrangea", kind: "cluster", colors: ["#8eb6e8", "#b7d0f2", "#6f97d2", "#d5e6f8"] },
    { id: "marigold", name: "Marigold", kind: "radial", count: 14, rx: 4.4, ry: 10, fill: "#f28a1a", center: "#c45c10", cr: 6, inner: "#f8c14a", ir: 3 },
    { id: "hibiscus", name: "Hibiscus", kind: "hibiscus", fill: "#e23b6a", throat: "#8d1d3d" },
    { id: "cherry-blossom", name: "Cherry blossom", kind: "branch", fill: "#f4b7c8" },
    { id: "lotus", name: "Lotus", kind: "lotus", fill: "#f4c6d0", throat: "#fffaf6" },
    { id: "dahlia", name: "Dahlia", kind: "radial", count: 16, rx: 4.6, ry: 12, fill: "#d6336c", center: "#f2a0b8", cr: 6, inner: "#fff0f4", ir: 3 },
    { id: "magnolia", name: "Magnolia", kind: "cup", colors: ["#fffaf6", "#f7efe6", "#f3e4dc"] },
    { id: "camellia", name: "Camellia", kind: "peony", colors: ["#e25b78", "#f7b3c4", "#c43b5e", "#fde3ea", "#fff5f7"] },
    { id: "anemone", name: "Anemone", kind: "radial", count: 8, rx: 6, ry: 12, fill: "#f2f0f4", stroke: "#e4d5ea", center: "#2c2a33", cr: 6, inner: "#5a5470", ir: 3 },
    { id: "ranunculus", name: "Ranunculus", kind: "peony", colors: ["#f2a35a", "#f8cfa0", "#e07a32", "#fde7cc", "#fff6ea"] },
    { id: "violet", name: "Violet", kind: "pansy", fill: "#6b4bb5", throat: "#d7c6f2", face: "#f2d36b" },
    { id: "pansy", name: "Pansy", kind: "pansy", fill: "#f2d23a", throat: "#5b3d8a", face: "#2a2418" },
    { id: "bluebell", name: "Bluebell", kind: "spike", colors: ["#6aa0e8", "#8eb8f2", "#4d7ed4"], bells: true, small: true },
    { id: "calla-lily", name: "Calla lily", kind: "calla", fill: "#fffaf6", throat: "#f2c14e" },
    { id: "gerbera", name: "Gerbera", kind: "radial", count: 12, rx: 5.5, ry: 13, fill: "#f25b8a", center: "#6b3e12", cr: 7, inner: "#c47a3a", ir: 3.5 },
    { id: "protea", name: "Protea", kind: "protea", fill: "#e7a0b0", throat: "#f4d2c4" },
    { id: "jasmine", name: "Jasmine", kind: "cluster", colors: ["#fffaf6", "#fff6ea"], tiny: true, small: true },
    { id: "gardenia", name: "Gardenia", kind: "rose", colors: ["#fffaf6", "#f7f1ea", "#fffdf8", "#f3e6dc", "#fffaf6"] },
    { id: "zinnia", name: "Zinnia", kind: "radial", count: 12, rx: 5, ry: 11, fill: "#e85d4c", center: "#f2c14e", cr: 6, inner: "#c9842a", ir: 3 },
    { id: "cosmos", name: "Cosmos", kind: "radial", count: 8, rx: 4, ry: 13, fill: "#f2b6d0", center: "#f2d36b", cr: 4, inner: "#e07a32", ir: 2 },
    { id: "buttercup", name: "Buttercup", kind: "radial", count: 5, rx: 7, ry: 10, fill: "#f2d23a", center: "#e0a020", cr: 4, inner: "#fff1a8", ir: 2 },
    { id: "sweet-pea", name: "Sweet pea", kind: "orchid", colors: ["#f7b7d2", "#fff0f6", "#e48ab4", "#d46aa0", "#a33d6e"] },
    { id: "freesia", name: "Freesia", kind: "spike", colors: ["#fff3b0", "#f8d36a", "#fffaf0"], bells: true },
    { id: "hyacinth", name: "Hyacinth", kind: "spike", colors: ["#d98ad4", "#b45cb8", "#f0b6ea"] },
    { id: "lilac", name: "Lilac", kind: "cluster", colors: ["#c9a6e0", "#e4cef2", "#a67cc8", "#f6eefb"] },
    { id: "plumeria", name: "Plumeria", kind: "pinwheel", fill: "#fffaf6", throat: "#f2d36b" },
    { id: "aster", name: "Aster", kind: "radial", count: 20, rx: 2.4, ry: 11, fill: "#c47ad4", center: "#f2d36b", cr: 5, inner: "#e0a020", ir: 2.4 },
    { id: "cornflower", name: "Cornflower", kind: "radial", count: 10, rx: 4, ry: 12, fill: "#4d6ed4", center: "#2a3f8a", cr: 5, inner: "#8ea4f2", ir: 2.4 },
    { id: "forget-me-not", name: "Forget-me-not", kind: "cluster", colors: ["#7eb0f2", "#d6e6fb"], tiny: true, small: true },
    { id: "morning-glory", name: "Morning glory", kind: "funnel", fill: "#5b4bb5", throat: "#f2f0ff" },
    { id: "snapdragon", name: "Snapdragon", kind: "spike", colors: ["#f25b7a", "#f7a0b4", "#d6336c"], bells: true },
    { id: "gladiolus", name: "Gladiolus", kind: "spike", colors: ["#f28a6a", "#f2b43a", "#e25b4c"] },
    { id: "wisteria", name: "Wisteria", kind: "wisteria", fill: "#b48ad4" },
    { id: "edelweiss", name: "Edelweiss", kind: "radial", count: 8, rx: 4, ry: 10, fill: "#fffaf6", stroke: "#e7dcc8", center: "#f2e27a", cr: 5, inner: "#e0c84a", ir: 2.5 },
    { id: "bird-of-paradise", name: "Bird of paradise", kind: "bird" },
    { id: "foxglove", name: "Foxglove", kind: "spike", colors: ["#e07aa8", "#f2b6ce", "#c45c86"], bells: true },
    { id: "lily-of-the-valley", name: "Lily of the valley", kind: "spike", colors: ["#fffaf6", "#f4efe6"], bells: true, small: true },
    { id: "anthurium", name: "Anthurium", kind: "calla", fill: "#d6334c", throat: "#f2d36b" },
    { id: "lisianthus", name: "Lisianthus", kind: "rose", colors: ["#d7c6f2", "#f4eefb", "#b9a0e0", "#fffaf6", "#f7f1ea"] },
    { id: "alstroemeria", name: "Alstroemeria", kind: "lily", colors: ["#f7c6a8", "#f28a6a", "#fff0e6", "#e07a58", "#c45c3a"] },
    { id: "delphinium", name: "Delphinium", kind: "spike", colors: ["#4d6ed4", "#8ea4f2", "#2f4aa8"] },
    { id: "amaryllis", name: "Amaryllis", kind: "hibiscus", fill: "#d6334c", throat: "#f2d36b" },
    { id: "crocus", name: "Crocus", kind: "cup", colors: ["#c9a6e0", "#e4cef2", "#a67cc8"] },
    { id: "azalea", name: "Azalea", kind: "cluster", colors: ["#f25b8a", "#f7b3c8", "#d6336c"] },
    { id: "bougainvillea", name: "Bougainvillea", kind: "cluster", colors: ["#e23b6a", "#f28ab0", "#a31d4a"] },
    { id: "petunia", name: "Petunia", kind: "funnel", fill: "#c45cff", throat: "#2a1838" },
    { id: "geranium", name: "Geranium", kind: "cluster", colors: ["#e23b3b", "#f28a8a", "#a82828"] },
    { id: "coneflower", name: "Coneflower", kind: "radial", count: 10, rx: 4, ry: 13, fill: "#e07ab0", center: "#6b3e12", cr: 8, inner: "#c47a3a", ir: 4 },
    { id: "black-eyed-susan", name: "Black-eyed Susan", kind: "radial", count: 10, rx: 5, ry: 12, fill: "#f2c14e", center: "#2a2418", cr: 7, inner: "#5a4630", ir: 3.5 },
    { id: "yarrow", name: "Yarrow", kind: "cluster", colors: ["#fffaf6", "#f7e7a8"], tiny: true, small: true },
    { id: "queen-annes-lace", name: "Queen Anne’s lace", kind: "cluster", colors: ["#fffaf6", "#f7f1ea"], tiny: true, small: true },
    { id: "water-lily", name: "Water lily", kind: "lotus", fill: "#f7f1ea", throat: "#f4c6d0" },
    { id: "honeysuckle", name: "Honeysuckle", kind: "spike", colors: ["#f2d36b", "#fffaf6", "#f28a6a"], bells: true, small: true },
    { id: "stock", name: "Stock", kind: "spike", colors: ["#f7b7d2", "#fff0f6", "#e48ab4"] },
    { id: "heather", name: "Heather", kind: "spike", colors: ["#c47ad4", "#e4cef2"], small: true },
    { id: "thistle", name: "Thistle", kind: "protea", fill: "#8d74c9", throat: "#5b3d8a" },
    { id: "statice", name: "Statice", kind: "cluster", colors: ["#7e6ad4", "#f2d36b", "#fffaf6"], tiny: true, small: true },
    { id: "waxflower", name: "Waxflower", kind: "cluster", colors: ["#f7c6d4", "#fffaf6"], tiny: true, small: true },
    { id: "begonia", name: "Begonia", kind: "peony", colors: ["#f25b4c", "#f7b3a0", "#d6333a", "#fde0d4", "#fff4ee"] },
    { id: "calendula", name: "Calendula", kind: "radial", count: 12, rx: 4.5, ry: 10, fill: "#f2a01a", center: "#c45c10", cr: 5, inner: "#f8d36a", ir: 2.5 },
    { id: "camomile", name: "Chamomile", kind: "radial", count: 12, rx: 3.4, ry: 10, fill: "#fffaf6", stroke: "#f0e2c0", center: "#f2c14e", cr: 5, inner: "#e0a020", ir: 2.4 },
    { id: "freesia-pink", name: "Pink freesia", kind: "spike", colors: ["#f7b7d2", "#fff0f6"], bells: true },
    { id: "tulip-red", name: "Red tulip", kind: "cup", colors: ["#d6334c", "#f28a8a", "#a82838"] },
    { id: "rose-yellow", name: "Yellow rose", kind: "rose", colors: ["#f2c14e", "#f8e08a", "#e0a020", "#fff3c4", "#fffaf0"] },
    { id: "rose-white", name: "White rose", kind: "rose", colors: ["#fffaf6", "#f7f1ea", "#f3e6dc", "#fffdf8", "#f7efe8"] },
    { id: "sunflower-mini", name: "Mini sunflower", kind: "radial", count: 12, rx: 4, ry: 9, fill: "#f0c04a", center: "#6b3e12", cr: 8, inner: "#8d5524", ir: 4, small: true },
    { id: "eucalyptus", name: "Eucalyptus", kind: "eucalyptus", small: true },
    { id: "fern", name: "Fern", kind: "fern", small: true },
  ];

  const FLOWERS = FLOWER_SPECS.map(function (spec) {
    return {
      id: spec.id,
      name: spec.name,
      small: !!spec.small,
      svg: renderFlower(spec),
    };
  });

  const FLOWER_BY_ID = Object.fromEntries(FLOWERS.map((flower) => [flower.id, flower]));

  const state = {
    screen: "caution",
    selected: [],
    wrongTaps: {},
    confirmLine: "",
  };

  const chip = document.getElementById("chip");
  const stage = document.getElementById("stage");
  const foot = document.getElementById("foot");

  let timers = [];
  let flowerLogTimer = 0;
  let howTimer = 0;
  let leftLogged = false;
  let bouquetTween = null;

  function storageGet(key) {
    try {
      return sessionStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function storageSet(key, value) {
    try {
      sessionStorage.setItem(key, value);
    } catch (error) {
      /* In-app browsers can block storage. The site still runs. */
    }
  }

  const device = window.matchMedia("(max-width: 800px)").matches ? "phone" : "computer";
  const sheet = JSON.parse(storageGet("gm-sheet") || "[]");
  const tries = JSON.parse(storageGet("gm-tries") || "{}");
  const openedBefore = sheet.length > 0;

  function noteTry(screen, value) {
    if (!tries[screen]) tries[screen] = [];
    tries[screen].push(value);
    storageSet("gm-tries", JSON.stringify(tries));
  }

  function formatAnswer(label, value, screen) {
    const tried = screen && tries[screen] && tries[screen].length ? tries[screen] : null;
    return label + " → " + value + (tried ? " (also tried " + tried.join(", ") + ")" : "");
  }

  function publish(latest, beacon) {
    const topic = (window.SITE_CONFIG && window.SITE_CONFIG.ntfyTopic ? window.SITE_CONFIG.ntfyTopic : "").trim();
    if (!topic) return;
    const lines = [latest];
    if (sheet.length) {
      lines.push("");
      lines.push("So far");
      sheet.forEach(function (line) {
        lines.push(line);
      });
    }
    const body = lines.join("\n");
    const url = "https://ntfy.sh/" + encodeURIComponent(topic);
    if (beacon && navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
      return;
    }
    fetch(url, {
      method: "POST",
      body: body,
      keepalive: true,
      referrerPolicy: "no-referrer",
    }).catch(function () {});
  }

  function answer(label, value, screen) {
    const line = formatAnswer(label, value, screen);
    sheet.push(line);
    storageSet("gm-sheet", JSON.stringify(sheet));
    if (screen && tries[screen]) {
      delete tries[screen];
      storageSet("gm-tries", JSON.stringify(tries));
    }
    publish(line);
  }

  function later(fn, ms) {
    const id = setTimeout(fn, ms);
    timers.push(id);
    return id;
  }

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
    clearTimeout(howTimer);
    if (bouquetTween) {
      bouquetTween.kill();
      bouquetTween = null;
    }
  }

  function flowerNames() {
    return state.selected.map((id) => FLOWER_BY_ID[id].name);
  }

  function go(screen) {
    state.screen = screen;
    render();
  }

  function focusHeading() {
    const heading = stage.querySelector("h1");
    if (!heading) return;
    heading.tabIndex = -1;
    heading.focus();
  }

  function choiceButton(action, value, label, extraClass) {
    return (
      '<button type="button" class="choice' +
      (extraClass ? " " + extraClass : "") +
      '" data-action="' +
      action +
      '" data-value="' +
      value +
      '">' +
      label +
      "</button>"
    );
  }

  function ctaButton(action, label) {
    return '<button type="button" class="cta" data-action="' + action + '">' + label + "</button>";
  }

  const FLOWER_EMOJI = {
    cauliflower: "🥦",
    rose: "🌹",
    tulip: "🌷",
    sunflower: "🌻",
    daisy: "🌼",
    lily: "🪷",
    orchid: "🌸",
    peony: "🌺",
    "babys-breath": "💮",
    carnation: "💐",
    chrysanthemum: "🏵️",
    daffodil: "🌼",
    iris: "💜",
    poppy: "🌺",
    lavender: "💜",
    hydrangea: "💠",
    marigold: "🧡",
    hibiscus: "🌺",
    "cherry-blossom": "🌸",
    lotus: "🪷",
    dahlia: "🏵️",
    magnolia: "🤍",
    camellia: "🌸",
    anemone: "💮",
    ranunculus: "🧡",
    violet: "💜",
    pansy: "💛",
    bluebell: "💙",
    "calla-lily": "🤍",
    gerbera: "🌺",
    protea: "🌺",
    jasmine: "🤍",
    gardenia: "🤍",
    zinnia: "🧡",
    cosmos: "🌸",
    buttercup: "💛",
    "sweet-pea": "💗",
    freesia: "💛",
    hyacinth: "💜",
    lilac: "💜",
    plumeria: "🤍",
    aster: "🌸",
    cornflower: "💙",
    "forget-me-not": "💙",
    "morning-glory": "💜",
    snapdragon: "💗",
    gladiolus: "🧡",
    wisteria: "💜",
    edelweiss: "🤍",
    "bird-of-paradise": "🦜",
    foxglove: "💗",
    "lily-of-the-valley": "🤍",
    anthurium: "❤️",
    lisianthus: "💜",
    alstroemeria: "🌷",
    delphinium: "💙",
    amaryllis: "❤️",
    crocus: "💜",
    azalea: "💗",
    bougainvillea: "🌺",
    petunia: "💜",
    geranium: "❤️",
    coneflower: "🌸",
    "black-eyed-susan": "🌻",
    yarrow: "🤍",
    "queen-annes-lace": "🤍",
    "water-lily": "🪷",
    honeysuckle: "💛",
    stock: "💗",
    heather: "💜",
    thistle: "💜",
    statice: "💜",
    waxflower: "🌸",
    begonia: "🧡",
    calendula: "🧡",
    camomile: "🌼",
    "freesia-pink": "💗",
    "tulip-red": "🌷",
    "rose-yellow": "🌹",
    "rose-white": "🌹",
    "sunflower-mini": "🌻",
    eucalyptus: "🍃",
    fern: "🌿",
  };

  function flowerLabel(flower) {
    return (FLOWER_EMOJI[flower.id] || "🌸") + " " + flower.name;
  }

  function flowerArt(id) {
    const flower = FLOWER_BY_ID[id];
    return '<span class="flower-art">' + flower.svg + "</span>";
  }

  function views() {
    return {
      caution: function () {
        return (
          '<article class="screen">' +
          '<p class="kicker">Before anything else ⚠️</p>' +
          '<div class="caution" role="note">' +
          '<p class="caution-kicker">Caution</p>' +
          '<h1 class="caution-title">This is a one-time thing.</h1>' +
          "<p>You can’t edit your response. There is no back button, no undo, and no “wait, I misclicked.” Rollback was attempted. It failed on purpose.</p>" +
          "</div>" +
          '<div class="options">' +
          choiceButton("accept-terms", "agree", "I agree", "cta") +
          choiceButton("accept-terms", "no-choice", "Do I have the option to disagree? NO") +
          "</div></article>"
        );
      },
      greeting: function () {
        return (
          '<article class="screen">' +
          '<p class="kicker">Step 1 👋</p>' +
          "<h1>Please respond to the greeting.</h1>" +
          '<p class="answer-hint" hidden>Hint: the correct answer is Hello.</p>' +
          '<div class="options">' +
          choiceButton("greet", "Hello", "Hello 👋") +
          choiceButton("greet", "Hi", "Hi 🙋") +
          choiceButton("greet", "Hey", "Hey ✌️") +
          choiceButton("greet", "Who are you?", "Who are you? 🕵️") +
          choiceButton("greet", "Why is this a website?", "Why is this a website? 💻") +
          "</div>" +
          '<p class="notice" id="notice" role="status"></p>' +
          "</article>"
        );
      },
      how_are_you: function () {
        return (
          '<article class="screen">' +
          '<p class="kicker">Step 2 💬</p>' +
          "<h1>Excellent. Now, how are you?</h1>" +
          '<p class="answer-hint" hidden>Hint: the correct answer is Good.</p>' +
          '<p class="progress">normal human interaction loading… 34% ⏳</p>' +
          '<div class="options" id="options">' +
          choiceButton("mood", "Good", "Good 😊") +
          choiceButton("mood", "Existing", "Existing 🧍") +
          choiceButton("mood", "Functioning", "Functioning 🤖") +
          choiceButton("mood", "Depends who’s asking", "Depends who’s asking 👀") +
          choiceButton("mood", "Emotionally loading…", "Emotionally loading… 💭") +
          choiceButton("mood", "Ask me after coffee", "Ask me after coffee ☕") +
          "</div>" +
          '<p class="notice" id="notice" role="status"></p>' +
          "</article>"
        );
      },
      is_morning: function () {
        return (
          '<article class="screen">' +
          '<p class="kicker">Step 3 ☀️</p>' +
          "<h1>Final verification question: is it morning?</h1>" +
          '<p class="answer-hint" id="morning-hint" hidden>Hint: the correct answer is Yes.</p>' +
          '<div class="options">' +
          choiceButton("morning", "yes", "Yes ☀️") +
          choiceButton("morning", "no", "No 🌙") +
          "</div>" +
          '<p class="notice" id="notice" role="status"></p>' +
          "</article>"
        );
      },
      night_followup: function () {
        return (
          '<article class="screen">' +
          "<h1>Interesting. What comes after night? 🌙</h1>" +
          '<p class="answer-hint" hidden>Hint: the correct answer is Morning.</p>' +
          '<div class="options" id="options">' +
          choiceButton("after-night", "morning", "Morning 😔🌅") +
          "</div>" +
          '<p class="notice" id="notice" role="status"></p>' +
          "</article>"
        );
      },
      reveal: function () {
        return (
          '<article class="screen">' +
          '<h1 class="reveal-title">' +
          '<span class="word">HELLO</span>' +
          '<span class="word">GOOD</span>' +
          '<span class="word">MORNING</span>' +
          "</h1>" +
          '<div class="reveal-after" id="reveal-after"' +
          (reduceMotion ? "" : " hidden") +
          ">" +
          "<p class=\"lead\">There. 😌</p>" +
          "<p class=\"lead\">Took me an entire website to send the same message properly. 💻</p>" +
          "<p class=\"lead\">Efficiency was never the goal. 🎯</p>" +
          ctaButton("to-flowers", "Continue this questionable decision → 🌸") +
          "</div></article>"
        );
      },
      flower_select: function () {
        const cards = FLOWERS.map((flower) => {
          const pressed = state.selected.includes(flower.id);
          return (
            '<button type="button" class="flower-card" data-action="flower" data-value="' +
            flower.id +
            '" aria-pressed="' +
            (pressed ? "true" : "false") +
            '">' +
            flowerArt(flower.id) +
            "<span>" +
            flowerLabel(flower) +
            "</span></button>"
          );
        }).join("");
        const count = state.selected.length;
        return (
          '<article class="screen">' +
          '<p class="lead">🌷 You said the way to win you over is picking the right flowers.</p>' +
          '<p class="lead">🤷 Unfortunately, I have no idea what “right” means.</p>' +
          '<p class="lead">📤 So we’re outsourcing this decision to you.</p>' +
          "<h1>Pick your favourites.</h1>" +
          '<p class="hint">🌸 Choose responsibly. I may have to find these in real life.</p>' +
          '<div class="flower-grid" role="group" aria-label="Flowers">' +
          cards +
          "</div>" +
          '<div class="dock">' +
          '<p class="reaction" id="reaction" role="status">' +
          reactionText(count) +
          "</p>" +
          '<p class="stats">' +
          "<span>🌷 Flowers selected: <strong id=\"count\">" +
          count +
          "</strong></span>" +
          "<span>😬 Developer confidence: <strong id=\"confidence\">" +
          confidenceFor(count) +
          "%</strong></span>" +
          "<span>💸 Budget status: <strong id=\"budget\">" +
          budgetFor(count) +
          "</strong></span></p>" +
          '<button type="button" class="cta" id="flower-next" data-action="flowers-done"' +
          (count ? "" : ' aria-disabled="true"') +
          ">These ones → 💐</button></div></article>"
        );
      },
      flower_confirm: function () {
        const minis = state.selected.map((id) => flowerArt(id)).join("");
        return (
          '<article class="screen">' +
          "<h1>Are you sure that’s all? 🤔</h1>" +
          '<div class="mini-row" aria-hidden="true">' +
          minis +
          "</div>" +
          '<div class="options" id="options">' +
          choiceButton("confirm-flowers", "enough", "Yes, that’s enough 😌") +
          choiceButton(
            "confirm-flowers",
            "dont",
            "Please don’t add more, I don’t know where you’re getting these from 😭"
          ) +
          "</div>" +
          '<p class="verdict" id="confirm-line" hidden></p>' +
          "</article>"
        );
      },
      bouquet: function () {
        const blooms = state.selected
          .map((id, index) => {
            const flower = FLOWER_BY_ID[id];
            const place = bouquetSlot(index, state.selected.length, flower.small);
            return (
              '<div class="bloom" style="--sx:' +
              place.sx +
              ";--sy:" +
              place.sy +
              ";--sr:" +
              place.sr +
              ";--tx:" +
              place.tx +
              ";--ty:" +
              place.ty +
              ";--tr:" +
              place.tr +
              ";--scale:" +
              place.scale +
              ";--z:" +
              place.z +
              ";--top:" +
              place.top +
              ";--delay:" +
              place.delay +
              '">' +
              flower.svg +
              "</div>"
            );
          })
          .join("");
        return (
          '<article class="screen">' +
          '<h1 class="loading-line" id="bouquet-heading">collecting flowers… 🌷</h1>' +
          '<div class="bouquet-stage" id="bouquet" style="height:' +
          bouquetHeight(state.selected.length) +
          '">' +
          '<div class="wrap" aria-hidden="true"><svg viewBox="0 0 220 100">' +
          '<path d="M18 24 C58 8 72 62 110 90 C148 62 162 8 202 24 L168 30 C150 58 132 78 110 84 C88 78 70 58 52 30 Z" fill="#f6e6d8" stroke="#e2cbb8" stroke-width="2"/>' +
          '<path d="M90 68 h40 l-5 14 h-30 z" fill="#8d3a48"/>' +
          "</svg></div>" +
          blooms +
          "</div>" +
          '<div class="bouquet-copy" id="bouquet-copy" hidden>' +
          "<p class=\"meta\">🎯 Estimated accuracy: 12%</p>" +
          "<p class=\"meta\">💪 Effort: unnecessarily high</p>" +
          ctaButton("to-date", "There’s one final thing → ✨") +
          "</div></article>"
        );
      },
      date_question: function () {
        return (
          '<article class="screen">' +
          '<div class="sheet">' +
          '<div class="sheet-top"><span class="stamp">Final round 🏁</span><p class="ref">Form GM-01 📋</p></div>' +
          '<p class="applicant">Applicant: the guy who built this instead of sending a normal double text 💻</p>' +
          '<h1 class="calm">Would you consider going out with him sometime?</h1>' +
          '<div class="options">' +
          choiceButton("date", "yes", "Yeah, maybe :) 🌼") +
          choiceButton("date", "talk", "Let’s talk first 💬") +
          choiceButton("date", "no", "No, but I respect the engineering effort 😭🛠️") +
          "</div></div></article>"
        );
      },
      yes_path: function () {
        return (
          '<article class="screen">' +
          '<p class="system">System notice 🚨</p>' +
          "<h1>A statistically unlikely event has occurred. 🎉</h1>" +
          '<p class="lead">Management is trying very hard to remain calm. 😌</p>' +
          ctaButton("to-contact", "Proceed to contact exchange 💌") +
          "</article>"
        );
      },
      contact: function () {
        return (
          '<article class="screen">' +
          "<h1 class=\"calm\">Can he get your Instagram? 📱</h1>" +
          '<div class="options">' +
          choiceButton("contact", "sure", "Sure 😊") +
          choiceButton("contact", "hinge", "Let’s stay on Hinge for now 💬") +
          "</div></article>"
        );
      },
      instagram: function () {
        return (
          '<article class="screen">' +
          "<h1>Excellent. 🎉</h1>" +
          '<p class="lead">Please send it on Hinge because storing personal data here would require me to read privacy documentation and I refuse. 📄</p>' +
          '<p class="hint">🗄️ Also this website has zero databases because apparently I do have some judgment.</p>' +
          "</article>"
        );
      },
      hinge_stay: function () {
        return (
          '<article class="screen">' +
          "<h1>Completely fair. 👍</h1>" +
          '<p class="lead">He will now attempt to communicate like a normal person. 💬</p>' +
          '<p class="hint">🎲 Success rate currently unknown.</p>' +
          "</article>"
        );
      },
      talk_first: function () {
        return (
          '<article class="screen">' +
          "<h1>Extremely reasonable response. 🧠</h1>" +
          '<p class="lead">You have demonstrated better judgment than the developer of this website. 👏</p>' +
          '<p class="lead">Please return to Hinge. 💬</p>' +
          '<p class="hint">🙏 He promises to stop communicating through web applications.</p>' +
          ctaButton("end", "Return to civilization 🌍") +
          "</article>"
        );
      },
      rejection: function () {
        return (
          '<article class="screen">' +
          "<h1>Request declined. 📁</h1>" +
          '<p class="lead">No worries. The application has been closed with dignity mostly intact. 😌</p>' +
          '<p class="lead">The bouquet will now be distributed among the engineering team. 💐</p>' +
          '<p class="hint">🌸 Thank you for participating in this completely unnecessary experiment.</p>' +
          ctaButton("end", "End simulation 🏁") +
          "</article>"
        );
      },
      ended: function () {
        const line =
          state.ending === "talk"
            ? "Go back to Hinge. This website has done its one job. 💬"
            : "You can close this tab. 👋";
        return (
          '<article class="screen">' +
          "<h1>" +
          (state.ending === "talk" ? "Return to civilization. 🌍" : "Simulation ended. 🏁") +
          "</h1>" +
          '<p class="lead">' +
          line +
          "</p></article>"
        );
      },
    };
  }

  function confidenceFor(count) {
    const preset = [100, 88, 74, 58, 41, 28, 17, 9, 3];
    if (count < preset.length) return preset[count];
    return 1;
  }

  function budgetFor(count) {
    const preset = [
      "untouched",
      "fine",
      "stable",
      "watchful",
      "tight",
      "nervous",
      "concerning",
      "concerning",
      "a formal incident",
    ];
    if (count < preset.length) return preset[count];
    if (count < 14) return "a formal incident";
    if (count < 22) return "catastrophic";
    return "please close the tab and spare the market";
  }

  function reactionText(count) {
    if (count === 0) return "None yet. The budget is thrilled. 💸";
    if (count === FLOWERS.length) return "You have misunderstood the concept of “pick”. 🤯";
    if (REACTIONS[count]) return REACTIONS[count];
    return MORE_REACTIONS[Math.min(count - 8, MORE_REACTIONS.length - 1)];
  }

  function perRow(total) {
    if (total <= 4) return Math.max(total, 1);
    if (total <= 9) return 5;
    if (total <= 16) return 6;
    return 8;
  }

  function bouquetHeight(total) {
    const rows = Math.max(1, Math.ceil(total / perRow(total)));
    return Math.max(16, 8 + rows * 4.6) + "rem";
  }

  function bouquetSlot(index, total, small) {
    const cols = perRow(total);
    const row = Math.floor(index / cols);
    const col = index % cols;
    const inRow = Math.min(cols, total - row * cols);
    const mid = (inRow - 1) / 2;
    const dist = col - mid;
    const spacing = total > 16 ? 26 : total > 8 ? 32 : 40;
    const rows = Math.ceil(total / cols);
    const top = 8 + ((row + 0.4) * 70) / rows;
    const scale = small ? 0.55 : total > 16 ? 0.5 : total > 8 ? 0.64 : total > 5 ? 0.82 : 1;
    const startX = ((index * 53) % 180) - 90;
    return {
      sx: startX + "px",
      sy: -160 - (index % 4) * 22 + "px",
      sr: (index % 2 === 0 ? -16 : 14) + "deg",
      tx: dist * spacing + "px",
      ty: Math.abs(dist) * 5 + "px",
      tr: dist * 6 + "deg",
      scale: scale,
      z: 20 - row,
      top: top + "%",
      delay: reduceMotion ? "0s" : Math.min(index * 0.035, 0.5) + "s",
    };
  }

  function render() {
    clearTimers();
    const screen = state.screen;
    chip.textContent = CHIPS[screen] || "";
    foot.textContent = FOOTERS[screen] || "";
    foot.hidden = !FOOTERS[screen];
    stage.innerHTML = views()[screen]();
    document.title = TITLES[screen] || "Hello";
    focusHeading();
    if (screen === "reveal" && !reduceMotion) {
      later(function () {
        const after = document.getElementById("reveal-after");
        if (after && state.screen === "reveal") after.hidden = false;
      }, 1450);
    }
    if (screen === "bouquet") startBouquet();
    if (screen === "yes_path") burst();
  }

  function cssNum(el, name) {
    return parseFloat(el.style.getPropertyValue(name)) || 0;
  }

  function gatherBouquet(bouquet) {
    if (!bouquet || typeof gsap !== "object") {
      if (bouquet) bouquet.classList.add("gathered");
      return 1600;
    }
    const wrap = bouquet.querySelector(".wrap");
    const items = Array.from(bouquet.querySelectorAll(".bloom"))
      .map(function (el) {
        return {
          el: el,
          sx: cssNum(el, "--sx"),
          sy: cssNum(el, "--sy"),
          sr: cssNum(el, "--sr"),
          tx: cssNum(el, "--tx"),
          ty: cssNum(el, "--ty"),
          tr: cssNum(el, "--tr"),
          scale: cssNum(el, "--scale") || 1,
        };
      })
      .sort(function (a, b) {
        return Math.abs(a.tx) - Math.abs(b.tx);
      });
    bouquetTween = gsap.timeline();
    items.forEach(function (item, index) {
      bouquetTween.fromTo(
        item.el,
        {
          x: item.sx,
          y: item.sy,
          rotation: item.sr,
          scale: item.scale * 0.55,
          opacity: 0,
        },
        {
          x: item.tx,
          y: item.ty,
          rotation: item.tr,
          scale: item.scale,
          opacity: 1,
          duration: 1.05,
          ease: "back.out(1.5)",
        },
        index * 0.07
      );
    });
    if (wrap) {
      bouquetTween.to(wrap, { opacity: 1, duration: 0.7, ease: "power2.out" }, 0.15);
    }
    return Math.round((bouquetTween.duration() || 1.6) * 1000);
  }

  function startBouquet() {
    const lines = [
      "collecting flowers… 🌷",
      "pretending I know bouquet composition… 🎨",
      "checking if this looks romantic or like a school project… 🏫",
      "good enough. 😌",
    ];
    const heading = document.getElementById("bouquet-heading");
    const bouquet = document.getElementById("bouquet");
    const copy = document.getElementById("bouquet-copy");

    function showResult() {
      if (state.screen !== "bouquet") return;
      if (heading) {
        heading.textContent = "Your highly custom, questionably sourced bouquet. 💐";
        heading.classList.remove("loading-line");
      }
      if (copy) copy.hidden = false;
      focusHeading();
    }

    if (reduceMotion) {
      if (heading) heading.textContent = "good enough. 😌";
      if (bouquet) bouquet.classList.add("gathered");
      later(showResult, 300);
      return;
    }

    lines.forEach(function (text, index) {
      later(function () {
        if (state.screen !== "bouquet" || !heading) return;
        heading.textContent = text;
      }, index * 650);
    });
    later(function () {
      if (state.screen !== "bouquet") return;
      const motion = gatherBouquet(bouquet);
      later(showResult, motion + 180);
    }, 650);
  }

  function burst() {
    if (typeof confetti !== "function") return;
    confetti({
      particleCount: 70,
      spread: 62,
      startVelocity: 28,
      origin: { y: 0.62 },
      scalar: 0.85,
      ticks: 160,
      disableForReducedMotion: true,
      colors: ["#d94b67", "#f2c14e", "#7daf86", "#e7a0c4", "#f7e7c1", "#c9a0d4"],
    });
  }

  function wiggle(button) {
    if (reduceMotion || !button) return;
    button.classList.remove("wiggle");
    void button.offsetWidth;
    button.classList.add("wiggle");
  }

  function flee(button) {
    if (reduceMotion || !button || button.classList.contains("fleeing")) {
      wiggle(button);
      return;
    }
    const box = button.parentElement;
    if (!box) return;
    box.style.minHeight = box.offsetHeight + 28 + "px";
    const width = button.offsetWidth;
    const maxLeft = Math.max(0, box.clientWidth - width);
    const left = Math.round(Math.random() * maxLeft);
    const top = Math.max(0, button.offsetTop + Math.round(Math.random() * 36 - 8));
    button.style.position = "absolute";
    button.style.width = width + "px";
    button.style.left = left + "px";
    button.style.top = top + "px";
    button.classList.add("fleeing");
  }

  function showNotice(text) {
    const notice = document.getElementById("notice");
    if (notice) notice.textContent = text;
  }

  function markCorrect(value) {
    const correct = stage.querySelector('.choice[data-value="' + value + '"]');
    if (correct) correct.classList.add("choice-correct");
  }

  function showAnswerHint() {
    const hint = stage.querySelector(".answer-hint");
    if (hint) hint.hidden = false;
  }

  function onGreet(button) {
    const value = button.dataset.value;
    if (value === "Hello") {
      answer("Greeting", "Hello", "greeting");
      go("how_are_you");
      return;
    }
    state.wrongTaps[value] = (state.wrongTaps[value] || 0) + 1;
    noteTry("greeting", value);
    const serious = state.wrongTaps[value] > 1;
    showNotice(
      serious
        ? "🙅 Invalid response. Please use the officially approved greeting."
        : "🚫 Incorrect. The system has detected insufficient commitment to the bit."
    );
    if (serious) flee(button);
    else wiggle(button);
    markCorrect("Hello");
    showAnswerHint();
  }

  function onMood(button) {
    const value = button.dataset.value;
    if (value === "Good") {
      clearTimeout(howTimer);
      answer("How are you", "Good", "how_are_you");
      go("is_morning");
      return;
    }
    noteTry("how_are_you", value);
    wiggle(button);
    markCorrect("Good");
    showAnswerHint();
    showNotice("📋 That answer has been rejected by management.");
    clearTimeout(howTimer);
    howTimer = setTimeout(function () {
      if (state.screen !== "how_are_you") return;
      showNotice("😌 You are Good. Please continue.");
    }, 700);
  }

  function onMorning(button) {
    const value = button.dataset.value;
    if (value === "yes") {
      answer("Morning", "Yes", "morning");
      showNotice("✅ Correct.");
      const options = stage.querySelector(".options");
      if (options) options.hidden = true;
      later(function () {
        if (state.screen === "is_morning") go("reveal");
      }, reduceMotion ? 400 : 800);
      return;
    }
    const hint = document.getElementById("morning-hint");
    if (hint && hint.hidden) {
      hint.hidden = false;
      markCorrect("yes");
      noteTry("morning", "No");
      wiggle(button);
      return;
    }
    answer("Morning", "No", "morning");
    go("night_followup");
  }

  function onAfterNight() {
    answer("After night", "Morning");
    showNotice("🌙 See? We got there eventually.");
    const options = document.getElementById("options");
    if (options) options.hidden = true;
    later(function () {
      if (state.screen === "night_followup") go("reveal");
    }, reduceMotion ? 500 : 1100);
  }

  function syncFlowers(changedId) {
    const count = state.selected.length;
    const reaction = document.getElementById("reaction");
    const countEl = document.getElementById("count");
    const confidence = document.getElementById("confidence");
    const budget = document.getElementById("budget");
    const next = document.getElementById("flower-next");
    if (reaction) reaction.textContent = reactionText(count);
    if (countEl) countEl.textContent = String(count);
    if (confidence) confidence.textContent = confidenceFor(count) + "%";
    if (budget) budget.textContent = budgetFor(count);
    if (next) {
      if (count) next.removeAttribute("aria-disabled");
      else next.setAttribute("aria-disabled", "true");
    }
    stage.querySelectorAll(".flower-card").forEach(function (card) {
      card.setAttribute("aria-pressed", state.selected.includes(card.dataset.value) ? "true" : "false");
    });
  }

  function onFlower(button) {
    const id = button.dataset.value;
    if (!FLOWER_BY_ID[id]) return;
    const index = state.selected.indexOf(id);
    if (index === -1) state.selected.push(id);
    else state.selected.splice(index, 1);
    syncFlowers(id);
  }

  function onFlowersDone(button) {
    if (button.getAttribute("aria-disabled") === "true") {
      const reaction = document.getElementById("reaction");
      if (reaction) reaction.textContent = "🌷 Select at least one flower. An empty bouquet is just a vibe.";
      return;
    }
    clearTimeout(flowerLogTimer);
    go("flower_confirm");
  }

  function onConfirmFlowers(value) {
    const line =
      value === "enough"
        ? "😌 Suspiciously reasonable."
        : "📦 Finally, some concern for the supply chain.";
    answer(
      "Flowers",
      flowerNames().join(", ") + (value === "enough" ? " — that’s enough" : " — don’t add more")
    );
    const options = document.getElementById("options");
    const verdict = document.getElementById("confirm-line");
    if (options) options.hidden = true;
    if (verdict) {
      verdict.hidden = false;
      verdict.textContent = line;
    }
    later(function () {
      if (state.screen === "flower_confirm") go("bouquet");
    }, reduceMotion ? 400 : 1100);
  }

  function onDate(value) {
    const labels = {
      yes: "Yeah, maybe :)",
      talk: "Let’s talk first",
      no: "No, but I respect the effort",
    };
    answer("Date", labels[value]);
    if (value === "yes") go("yes_path");
    else if (value === "talk") go("talk_first");
    else go("rejection");
  }

  function onContact(value) {
    if (value === "sure") {
      answer("Contact", "Sure, send Instagram on Hinge");
      go("instagram");
      return;
    }
    answer("Contact", "Stay on Hinge");
    go("hinge_stay");
  }

  function onEnd() {
    state.ending = state.screen === "talk_first" ? "talk" : "no";
    answer(state.ending === "talk" ? "Talk first" : "No", state.ending === "talk" ? "Return to civilization" : "End simulation");
    go("ended");
  }

  stage.addEventListener("click", function (event) {
    const button = event.target.closest("button");
    if (!button || !stage.contains(button)) return;
    const action = button.dataset.action;
    if (action === "accept-terms") {
      answer("Caution", button.dataset.value === "agree" ? "I agree" : "No option to disagree");
      go("greeting");
    } else if (action === "greet") onGreet(button);
    else if (action === "mood") onMood(button);
    else if (action === "continue-good") {
      answer("How are you", "Good", "how_are_you");
      go("is_morning");
    } else if (action === "morning") onMorning(button);
    else if (action === "after-night") onAfterNight();
    else if (action === "to-flowers") {
      go("flower_select");
    } else if (action === "flower") onFlower(button);
    else if (action === "flowers-done") onFlowersDone(button);
    else if (action === "confirm-flowers") onConfirmFlowers(button.dataset.value);
    else if (action === "to-date") {
      go("date_question");
    } else if (action === "date") onDate(button.dataset.value);
    else if (action === "to-contact") {
      go("contact");
    } else if (action === "contact") onContact(button.dataset.value);
    else if (action === "end") onEnd();
  });

  function publishLeave() {
    let latest = "Left on " + (SCREEN_LABELS[state.screen] || state.screen);
    if (state.screen === "flower_select" || state.screen === "flower_confirm") {
      const names = flowerNames();
      if (names.length) latest += " · " + names.join(", ");
    }
    publish(latest, true);
  }

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      if (leftLogged) return;
      leftLogged = true;
      publishLeave();
    } else {
      leftLogged = false;
    }
  });

  window.addEventListener("pagehide", function () {
    if (leftLogged) return;
    leftLogged = true;
    publishLeave();
  });

  publish((openedBefore ? "Opened again" : "Opened the site") + " · " + device);
  render();
})();
