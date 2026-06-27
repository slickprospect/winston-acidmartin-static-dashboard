(function () {
  "use strict";

  const fixture = window.WV_TERMINAL_V031_FIXTURE || window.WV_TERMINAL_V03_FIXTURE;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const $ = (id) => document.getElementById(id);
  const escapeHtml = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

  function semanticClass(item) {
    const classes = [];
    if (item.severity) classes.push(`severity-${item.severity}`);
    if (item.staleness === "stale") classes.push("stale");
    if (item.change_state) classes.push(`change-${item.change_state.replaceAll("_", "-")}`);
    return classes.join(" ");
  }

  function breakableText(value) {
    return escapeHtml(value).replaceAll("_", "_<wbr>").replaceAll("/", "/<wbr>").replaceAll("-", "-<wbr>");
  }

  function statusPill(item) {
    return `<span class="semantic status-badge ${semanticClass(item)}">${breakableText(item.value || item.state || item.verdict || item.severity)}</span>`;
  }

  function panelHeader(panel, eyebrow) {
    return `
      <header class="panel-head">
        <div>
          <p class="kicker">${escapeHtml(eyebrow)}</p>
          <h2>${escapeHtml(panel.title)}</h2>
        </div>
        ${statusPill(panel)}
      </header>
    `;
  }

  function renderRows(rows) {
    return `<div class="hud-rows">
      ${rows.map((row) => `
        <article class="hud-row ${semanticClass(row)}">
          <span>${escapeHtml(row.label)}</span>
          <strong>${breakableText(row.value)}</strong>
        </article>
      `).join("")}
    </div>`;
  }

  function renderNewsLane(id, lane, speedClass) {
    const items = fixture.news_lanes[lane];
    const doubled = [...items, ...items];
    $(id).innerHTML = `
      <div class="lane-label">${escapeHtml(lane)}</div>
      <div class="lane-track ${speedClass}">
        ${doubled.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
    `;
  }

  function renderLiveStrip() {
    $("liveStateStrip").innerHTML = `
      <header class="panel-head">
        <div>
          <p class="kicker">BTC / ETH Live-State Strip</p>
          <h2>Accepted Display Context</h2>
        </div>
        <span class="semantic status-badge severity-success change-accepted-evidence">LIVE_<wbr>ACCEPTED</span>
      </header>
      <div class="asset-grid">
        ${fixture.live_strip.map((asset) => `
          <article class="asset-card ${semanticClass(asset)}">
            <div class="asset-symbol">${escapeHtml(asset.symbol)}</div>
            <div>
              <strong>${breakableText(asset.state)}</strong>
              <p>${escapeHtml(asset.signal)}</p>
              <small>${escapeHtml(asset.evidence)}</small>
            </div>
          </article>
        `).join("")}
      </div>
    `;
  }

  function renderGenericPanel(id, key, eyebrow) {
    const panel = fixture.panels[key];
    $(id).innerHTML = `${panelHeader(panel, eyebrow)}${renderRows(panel.rows)}`;
  }

  function renderMarketCore() {
    $("fixtureTimestamp").textContent = fixture.generated_at;
    $("corePulseState").innerHTML = breakableText(fixture.market_core.pulse_state);
    const nodes = fixture.market_core.telemetry;
    $("nodeFreshness").innerHTML = `<span>${escapeHtml(nodes[0].label)}</span><strong>${escapeHtml(nodes[0].value)}</strong>`;
    $("nodeRisk").innerHTML = `<span>${escapeHtml(nodes[1].label)}</span><strong>${breakableText(nodes[1].value)}</strong>`;
    $("nodeEvidence").innerHTML = `<span>${escapeHtml(nodes[2].label)}</span><strong>${escapeHtml(nodes[2].value)}</strong>`;
    $("nodeCapital").innerHTML = `<span>${escapeHtml(nodes[3].label)}</span><strong>${escapeHtml(nodes[3].value)}</strong>`;
    ["nodeFreshness", "nodeRisk", "nodeEvidence", "nodeCapital"].forEach((id, index) => {
      $(id).className = `radial-node node-${["a", "b", "c", "d"][index]} ${semanticClass(nodes[index])}`;
    });
  }

  function renderAlerts() {
    $("alertQueue").innerHTML = `
      <header class="panel-head">
        <div>
          <p class="kicker">Alert Queue</p>
          <h2>Review Only</h2>
        </div>
        <span class="semantic status-badge severity-critical change-blocker">${fixture.alerts.length} ACTIVE</span>
      </header>
      <div class="alert-list">
        ${fixture.alerts.map((alert) => `
          <article class="alert-item ${semanticClass(alert)}">
            <span>${escapeHtml(alert.lane)}</span>
            <strong>${breakableText(alert.message)}</strong>
          </article>
        `).join("")}
      </div>
    `;
  }

  function renderProofGraph() {
    const graph = fixture.proof_graph;
    $("proofGraph").innerHTML = `
      ${panelHeader(graph, "Proof Graph Drawer")}
      <div class="proof-chain">
        ${graph.nodes.map((node, index) => `
          <article class="proof-node ${semanticClass(node)}">
            <i>${String(index + 1).padStart(2, "0")}</i>
            <span>${escapeHtml(node.label)}</span>
            <strong>${breakableText(node.state)}</strong>
          </article>
        `).join("")}
      </div>
    `;
  }

  function renderSignalDrawer() {
    const drawer = fixture.signal_detail;
    $("signalDrawer").innerHTML = `${panelHeader(drawer, "Signal Detail Drawer")}${renderRows(drawer.rows)}`;
  }

  function renderAll() {
    renderMarketCore();
    renderNewsLane("macroNewsLane", "macro", "crawl-slow");
    renderNewsLane("cryptoNewsLane", "crypto", "crawl-medium");
    renderNewsLane("internalNewsLane", "internal", "crawl-fast");
    renderLiveStrip();
    renderGenericPanel("opportunityLane", "opportunity_lane", "Winston Lane");
    renderGenericPanel("vaultGate", "vault_gate", "Capital Gate");
    renderSignalDrawer();
    renderGenericPanel("jobsCriticalPath", "jobs_critical_path", "Critical Path");
    renderGenericPanel("factorRisk", "factor_risk", "EF-RQ-001");
    renderGenericPanel("providerState", "provider_state", "EF-HERO");
    renderGenericPanel("quarantinedStrategies", "quarantined_strategies", "Quarantine");
    renderAlerts();
    renderProofGraph();
    document.documentElement.dataset.ready = "true";
  }

  function initBackdrop() {
    const canvas = $("hudBackdrop");
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let frame = 0;

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function draw() {
      frame += reducedMotion ? 0 : 1;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#030711";
      ctx.fillRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = Math.max(310, height * 0.42);
      const drift = reducedMotion ? 0 : Math.sin(frame / 190) * 10;
      const coreGlow = reducedMotion ? 0.2 : 0.18 + Math.sin(frame / 95) * 0.04;

      ctx.save();
      ctx.globalAlpha = 0.54;
      for (let r = 160; r < Math.max(width, height); r += 120) {
        ctx.strokeStyle = r % 240 === 0 ? "rgba(107,231,255,0.09)" : "rgba(126,98,255,0.06)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx + drift, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.globalAlpha = 0.34;
      ctx.strokeStyle = "rgba(107,231,255,0.13)";
      for (let x = -80; x < width + 80; x += 72) {
        ctx.beginPath();
        ctx.moveTo(x + (frame % 72), 0);
        ctx.lineTo(x - width * 0.18 + (frame % 72), height);
        ctx.stroke();
      }

      ctx.globalAlpha = 0.34;
      ctx.strokeStyle = "rgba(255,255,255,0.045)";
      for (let y = 0; y < height; y += 36) {
        ctx.beginPath();
        ctx.moveTo(0, y + ((frame / 3) % 36));
        ctx.lineTo(width, y + ((frame / 3) % 36));
        ctx.stroke();
      }
      ctx.globalAlpha = coreGlow;
      const gradient = ctx.createRadialGradient(cx + drift, cy, 24, cx + drift, cy, Math.min(width, height) * 0.36);
      gradient.addColorStop(0, "rgba(107,231,255,0.34)");
      gradient.addColorStop(0.42, "rgba(126,98,255,0.16)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx + drift, cy, Math.min(width, height) * 0.36, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      if (!reducedMotion) window.requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });
  }

  renderAll();
  initBackdrop();
})();
