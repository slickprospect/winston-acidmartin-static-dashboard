(function () {
  const data = window.WINSTON_MINI_SCALP_FIXTURE;
  const replay = window.WINSTON_MINI_SCALP_REPLAY_INPUT_V1;
  const backtest = window.WINSTON_MINI_SCALP_REPLAY_BACKTEST_V0;
  const replayFile = "./winston_mini_scalp_lab_replay_input_v1_2026-06-09.json";
  const backtestFile = "./winston_mini_scalp_lab_replay_backtest_v0_2026-06-09.json";
  const root = document.querySelector("#app");

  const toneClass = (tone) => tone ? ` tone-${tone}` : "";
  const statusClass = (status) => status ? ` status-${status.toLowerCase()}` : "";
  const REQUIRED_SOURCE_FIELDS = ["mode", "timestamp", "source", "freshness", "classification"];
  const VALID_CLASSIFICATIONS = new Set(["research-only", "mock", "live-read-only"]);
  const STALE_STATES = new Set(["stale", "missing", "conflicting", "unknown"]);

  function esc(value) {
    return String(value ?? "")
      .replaceAll("Crackstone", "Winston")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function metaValue(item, field) {
    return item?.[field] || data.sourceDefaults?.[field] || "";
  }

  function missingMetadata(item) {
    return REQUIRED_SOURCE_FIELDS.filter(field => !item || !item[field]);
  }

  function replayMeta(label = "Replay input v1 offline fixture") {
    return {
      label,
      mode: "Offline Replay Input Fixture",
      timestamp: replay?.generated_at || data.futureIngestion.timestamp,
      source: replayFile,
      freshness: "fresh",
      classification: "research-only",
      artifactStatus: "screenshot-derived-offline-fixture"
    };
  }

  function backtestMeta(label = "Replay/backtest v0 offline fixture") {
    return {
      label,
      mode: "Offline Replay/Backtest v0 Fixture",
      timestamp: backtest?.generated_at || "2026-06-09T00:00:00-04:00",
      source: backtestFile,
      freshness: "fresh",
      classification: "research-only",
      artifactStatus: "screenshot-derived-backtest-fixture"
    };
  }

  function observationMeta(observation, label = "Screenshot observation") {
    const ref = observation?.source_screenshot_reference || {};
    const shot = ref.shot || observation?.source?.filename || "unknown screenshot";
    return {
      ...replayMeta(label),
      source: `${replayFile}#${observation?.source_row_id || observation?.observed_trade_row_id || observation?.observed_position_snapshot_id || observation?.observed_dashboard_state_id || observation?.churn_candidate_id || "row"}`,
      artifactStatus: `screenshot:${shot}`
    };
  }

  function screenshotRef(item) {
    const ref = item?.source_screenshot_reference || {};
    const source = item?.source || {};
    const parts = [
      ref.shot || source.filename || "unknown screenshot",
      ref.module,
      ref.window_text,
      ref.phone_clock_text && `phone ${ref.phone_clock_text}`
    ].filter(Boolean);
    return parts.join(" / ");
  }

  function moduleItem(id, label, item, type = "panel") {
    const missing = missingMetadata(item);
    const classification = metaValue(item, "classification");
    const freshness = metaValue(item, "freshness");
    return {
      id,
      label,
      type,
      item,
      missing,
      classification,
      freshness,
      invalidClassification: !VALID_CLASSIFICATIONS.has(classification),
      staleLike: STALE_STATES.has(String(freshness).toLowerCase())
    };
  }

  function collectDisplayedModules() {
    const modules = [
      moduleItem("top-status", "Top status bar", data.bundle, "header"),
      moduleItem("backtest-summary-lane", "Backtest summary lane", data.backtest),
      moduleItem("replay-curves-lane", "Replay curves lane", data.backtest),
      moduleItem("gross-to-net-lane", "Gross-to-net waterfall lane", data.backtest),
      moduleItem("allocation-donut", "Asset allocation donut", data.allocationMeta),
      moduleItem("exposure-heatmap", "Exposure heatmap", data.exposureHeatmapMeta),
      moduleItem("execution-quality", "Execution quality", data.execution),
      moduleItem("market-headlines", "Market headlines ticker", data.marketHeadlines, "headline-ticker"),
      moduleItem("command-deck", "First-screen command deck", data.commandDeck, "command-deck"),
      moduleItem("cycle-net-edge", "Cycle-level net edge", data.cycleNetEdge, "cycle-edge"),
      moduleItem("fee-drag-meter", "Fee drag / churn meter", data.feeDragMeter, "fee-drag"),
      moduleItem("demo-readiness-gates", "Demo readiness gates", data.demoReadinessGates, "demo-gates"),
      moduleItem("deployment-readiness", "winston.acidmartin.com readiness notes", data.deploymentReadiness, "deployment-notes"),
      moduleItem("market-regime", "Market regime", data.regime),
      moduleItem("system-health", "System health", data.health),
      moduleItem("auto-heal", "Auto-heal status", data.health),
      moduleItem("runtime-blockers", "No-trade blockers", data.runtime),
      moduleItem("runtime-disabled-states", "Disabled runtime states", data.runtime),
      moduleItem("future-replay-input", data.futureIngestion.contract, data.futureIngestion, "future-placeholder"),
      moduleItem("demo-relaunch-checklist", "Winston demo relaunch checklist", data.demoRelaunch, "demo-checklist")
    ];

    data.account.forEach((item, index) => modules.push(moduleItem(`account-${index}`, `Account: ${item.label}`, item, "metric")));
    data.gates.forEach((item, index) => modules.push(moduleItem(`gate-${index}`, `Gate: ${item.name}`, item, "gate")));
    data.positions.forEach((item, index) => modules.push(moduleItem(`position-${index}`, `Position: ${item.symbol}`, item, "position")));
    data.trades.forEach((item, index) => modules.push(moduleItem(`trade-${index}`, `Trade: ${item.id}`, item, "trade")));
    data.scanner.forEach((item, index) => modules.push(moduleItem(`scanner-${index}`, `Scanner: ${item.symbol}`, item, "scanner")));
    data.sources.forEach((item, index) => modules.push(moduleItem(`source-${index}`, `Source: ${item.id}`, item, "source")));
    if (replay?.entities) {
      modules.push(moduleItem("replay-input-summary", "Replay input v1 summary", replayMeta(), "replay"));
      modules.push(moduleItem("replay-observed-trades", "Observed trade rows", replayMeta("Observed trade rows"), "replay"));
      modules.push(moduleItem("replay-observed-positions", "Observed position snapshots", replayMeta("Observed position snapshots"), "replay"));
      modules.push(moduleItem("replay-dashboard-states", "Observed dashboard states", replayMeta("Observed dashboard states"), "replay"));
      modules.push(moduleItem("replay-evidence-gaps", "Evidence gaps", replayMeta("Evidence gaps"), "replay"));
      modules.push(moduleItem("replay-churn-candidates", "Churn candidates", replayMeta("Churn candidates"), "replay"));
      replay.entities.observed_trade_row?.forEach((item, index) => modules.push(moduleItem(`replay-trade-${index}`, `Observed trade: ${item.observed_trade_row_id}`, observationMeta(item, "Observed trade row"), "observation")));
      replay.entities.observed_position_snapshot?.forEach((item, index) => modules.push(moduleItem(`replay-position-${index}`, `Observed position: ${item.observed_position_snapshot_id}`, observationMeta(item, "Observed position snapshot"), "observation")));
      replay.entities.observed_dashboard_state?.forEach((item, index) => modules.push(moduleItem(`replay-state-${index}`, `Observed dashboard state: ${item.observed_dashboard_state_id}`, observationMeta(item, "Observed dashboard state"), "observation")));
      replay.entities.churn_candidate?.forEach((item, index) => modules.push(moduleItem(`replay-churn-${index}`, `Churn candidate: ${item.churn_candidate_id}`, observationMeta(item, "Churn candidate"), "observation")));
    }
    if (backtest) {
      modules.push(moduleItem("replay-backtest-v0", "Replay/backtest v0 panel", backtestMeta(), "replay-backtest"));
      modules.push(moduleItem("replay-backtest-v0-source", "Replay/backtest v0 copied source", backtestMeta("Copied replay/backtest v0 source"), "source"));
    }
    if (data.pairMemoryGuards) {
      modules.push(moduleItem("pair-memory-guards", "Pair Memory Guards panel", data.pairMemoryGuards, "pair-memory-guards"));
      data.pairMemoryGuards.candidates.forEach((item, index) => {
        modules.push(moduleItem(`pair-memory-guard-${index}`, `Pair Memory Guard: ${item.candidate_id}`, { ...data.pairMemoryGuards, ...item }, "pair-memory-guard-candidate"));
      });
    }
    return modules;
  }

  function validateFixtureSchema() {
    const modules = collectDisplayedModules();
    const missing = modules.filter(module => module.missing.length);
    const invalidClassifications = modules.filter(module => module.invalidClassification);
    const staleLike = modules.filter(module => module.staleLike);
    const counts = modules.reduce((memo, module) => {
      memo[module.classification] = (memo[module.classification] || 0) + 1;
      return memo;
    }, {});
    return {
      modules,
      missing,
      invalidClassifications,
      staleLike,
      counts,
      pass: missing.length === 0 && invalidClassifications.length === 0
    };
  }

  const validation = validateFixtureSchema();

  function classSlug(value) {
    return String(value || "unknown").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  }

  function sourceLine(item) {
    const mode = metaValue(item, "mode");
    const timestamp = metaValue(item, "timestamp");
    const source = metaValue(item, "source");
    const freshness = metaValue(item, "freshness");
    const classification = metaValue(item, "classification");
    const artifactStatus = item?.artifactStatus || data.sourceDefaults.artifactStatus;
    const missing = missingMetadata(item);
    return `
      <div class="source-line${missing.length ? " source-line-warning" : ""}" title="${esc(source)}">
        <span class="class-chip class-${classSlug(classification)}">${esc(classification)}</span>
        <span>${esc(mode)}</span>
        <span>${esc(freshness)}</span>
        <span>${esc(timestamp)}</span>
        <span>${esc(artifactStatus)}</span>
        <span>${esc(source)}</span>
        ${missing.length ? `<span class="source-warning">Missing ${esc(missing.join(", "))}</span>` : ""}
      </div>
    `;
  }

  function metricCard(item) {
    return `
      <article class="metric-card">
        <div class="metric-label">${esc(item.label)}</div>
        <div class="metric-value${toneClass(item.tone)}">${esc(item.value)}</div>
        ${item.subvalue ? `<div class="metric-sub">${esc(item.subvalue)}</div>` : ""}
        ${sourceLine(item)}
      </article>
    `;
  }

  function section(title, subtitle, body, extraClass = "") {
    return `
      <section class="panel ${extraClass}">
        <div class="section-head">
          <div>
            <h2>${esc(title)}</h2>
            ${subtitle ? `<p>${esc(subtitle)}</p>` : ""}
          </div>
        </div>
        ${body}
      </section>
    `;
  }

  function renderMarketTicker() {
    const ticker = data.marketHeadlines;
    const cells = ticker.items.map(item => `
      <span class="headline-item headline-${classSlug(item.severity)}">
        <b>${esc(item.sourceLabel)}</b>
        <em>${esc(item.topic)}</em>
        <span>${esc(item.headline)}</span>
      </span>
    `).join("");
    return `
      <aside class="headline-ticker" aria-label="Static market headlines">
        <div class="ticker-label">
          <strong>${esc(ticker.label)}</strong>
          <span>static fixture / no live news API</span>
        </div>
        <div class="ticker-rail">
          <div class="ticker-track">${cells}${cells}</div>
        </div>
        ${sourceLine(ticker)}
      </aside>
    `;
  }

  function renderCommandDeck() {
    const deck = data.commandDeck;
    const tiles = deck.tiles.map(tile => `
      <article class="command-tile command-${classSlug(tile.tone)}">
        <span>${esc(tile.label)}</span>
        <strong>${esc(tile.value)}</strong>
        <small>${esc(tile.detail)}</small>
      </article>
    `).join("");
    return `
      <section class="command-deck" aria-label="Winston first-screen command deck">
        <div class="command-copy">
          <p class="eyebrow">Public research console</p>
          <h2>Winston operator/research status</h2>
          <p>${esc(deck.summary)} Future host target: winston.acidmartin.com.</p>
        </div>
        <div class="command-grid">${tiles}</div>
        ${sourceLine(deck)}
      </section>
    `;
  }

  function sparkline(values, label, kind = "line") {
    const min = Math.min(...values);
    const max = Math.max(...values);
    const span = max - min || 1;
    const points = values.map((value, index) => {
      const x = (index / (values.length - 1)) * 100;
      const y = 46 - ((value - min) / span) * 38;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    }).join(" ");
    const fill = kind === "drawdown" ? "#fbbf2433" : "#34d39933";
    const stroke = kind === "drawdown" ? "#fbbf24" : "#34d399";
    return `
      <div class="chart-block" aria-label="${esc(label)}">
        <div class="chart-label">${esc(label)}</div>
        <svg viewBox="0 0 100 52" role="img">
          <polyline class="chart-fill" points="0,52 ${points} 100,52" fill="${fill}"></polyline>
          <polyline class="chart-line" points="${points}" fill="none" stroke="${stroke}" stroke-width="2.4" vector-effect="non-scaling-stroke"></polyline>
        </svg>
      </div>
    `;
  }

  function renderHeader() {
    const b = data.bundle;
    return `
      <header class="hero">
        <div class="top-row">
          <div>
            <p class="eyebrow">Fixture-backed public research demo</p>
            <h1>${esc(b.title)}</h1>
            <p class="subtitle">Bloomberg-style Winston research dashboard for Mini Scalp Lab replay/backtest v0, Pair Memory Guards, churn/fee-burn warnings, and demo relaunch gates.</p>
          </div>
          <div class="utility-icons" aria-hidden="true">
            <span>Static</span>
            <span>Research</span>
            <span>No live authority</span>
          </div>
        </div>
        <div class="banner">${esc(b.disclaimer)}</div>
        <div class="status-grid">
          <span class="pill cyan">${esc(b.mode)}</span>
          <span class="pill good">${esc(b.freshness)}</span>
          <span class="pill cyan">${esc(b.authority)}</span>
          <span class="pill warn">${esc(b.artifactStatus)}</span>
          <span class="pill neutral">Schema ${validation.pass ? "pass" : "warning"}</span>
          <span class="pill neutral">${esc(b.strategyVersion)}</span>
        </div>
        <div class="hero-source">${sourceLine(b)}</div>
        <nav class="tabs" aria-label="Prototype sections">
          ${["Portfolio", "Backtest", "Risk", "Transactions", "Runtime", "Sources"].map((tab, i) => `<a href="#${tab.toLowerCase()}" class="${i === 0 ? "active" : ""}">${tab}</a>`).join("")}
        </nav>
      </header>
    `;
  }

  function renderEvidenceDrawer() {
    const missingRows = validation.missing.map(module => `
      <li><strong>${esc(module.label)}</strong><span>Missing ${esc(module.missing.join(", "))}</span></li>
    `).join("");
    const invalidRows = validation.invalidClassifications.map(module => `
      <li><strong>${esc(module.label)}</strong><span>Invalid classification ${esc(module.classification || "blank")}</span></li>
    `).join("");
    const staleRows = validation.staleLike.map(module => `
      <li><strong>${esc(module.label)}</strong><span>${esc(module.freshness)}</span></li>
    `).join("");
    const classRows = ["research-only", "mock", "live-read-only"].map(key => `
      <div class="drawer-stat">
        <span>${esc(key)}</span>
        <strong>${esc(validation.counts[key] || 0)}</strong>
      </div>
    `).join("");
    const sourceRows = data.sources.map(source => `
      <article class="source-card compact-source">
        <strong>${esc(source.id)}</strong>
        <span>${esc(source.type)} / rank ${esc(source.rank)} / ${esc(source.freshness)}</span>
        <code>${esc(source.path)}</code>
        <p>${esc(source.note)}</p>
        ${sourceLine(source)}
      </article>
    `).join("");
    const placeholder = data.futureIngestion;
    const expected = placeholder.expectedShape.map(field => `<span>${esc(field)}</span>`).join("");

    return `
      <section id="sources" class="evidence-shell">
        <details class="evidence-drawer">
          <summary>
            <span>Evidence/source drawer</span>
            <b>${validation.pass ? "Schema pass" : "Schema warnings"}</b>
            <small>${validation.modules.length} modules / ${validation.missing.length} missing metadata</small>
          </summary>
          <div class="drawer-body">
            <div class="drawer-stats">
              <div class="drawer-stat"><span>Validated modules</span><strong>${esc(validation.modules.length)}</strong></div>
              <div class="drawer-stat"><span>Missing source metadata</span><strong class="${validation.missing.length ? "tone-warn" : "tone-good"}">${esc(validation.missing.length)}</strong></div>
              <div class="drawer-stat"><span>Stale/missing status</span><strong class="${validation.staleLike.length ? "tone-warn" : "tone-good"}">${esc(validation.staleLike.length)}</strong></div>
              ${classRows}
            </div>
            <div class="warning-panel ${validation.missing.length || validation.invalidClassifications.length ? "warning-active" : "warning-clear"}">
              <h3>Source metadata warnings</h3>
              ${validation.missing.length || validation.invalidClassifications.length ? `<ul class="warning-list">${missingRows}${invalidRows}</ul>` : `<p>No displayed module is missing mode, timestamp, source, freshness, or classification metadata.</p>`}
            </div>
            <div class="warning-panel warning-watch">
              <h3>Freshness/staleness status</h3>
              ${staleRows ? `<ul class="warning-list">${staleRows}</ul>` : `<p>All active fixture modules report fresh status. Replay input v1 is loaded from the copied offline JSON fixture.</p>`}
            </div>
            <div class="future-placeholder">
              <div>
                <h3>${esc(placeholder.contract)}</h3>
                <p>${esc(placeholder.guardrail)}</p>
                ${sourceLine(placeholder)}
              </div>
              <div class="field-tags">${expected}</div>
            </div>
            <div class="source-grid">${sourceRows}</div>
          </div>
        </details>
      </section>
    `;
  }

  function renderDemoRelaunchChecklist() {
    const rows = data.demoRelaunch.items.map(item => `
      <article class="check-card check-${classSlug(item.status)}">
        <div class="check-top">
          <strong>${esc(item.label)}</strong>
          <span class="${toneClass(item.tone).trim()}">${esc(item.status)}</span>
        </div>
        <p>${esc(item.detail)}</p>
      </article>
    `).join("");
    return section("Winston Demo Relaunch Checklist", "Static site comeback checklist. Demo/research-only; no deployment, DNS, live roots, controls, connectors, or order authority.", `
      <div class="relaunch-lede">
        <strong>Winston demo site return path</strong>
        <span>${esc(data.demoRelaunch.summary)}</span>
      </div>
      <div class="check-grid">${rows}</div>
      <div class="disabled-note">Future winston.acidmartin.com deployment is only a planning option. This panel does not deploy, configure DNS, connect live roots, or touch runtime/order systems.</div>
      ${sourceLine(data.demoRelaunch)}
    `, "important relaunch-panel");
  }

  function renderDemoReadinessGates() {
    const gates = data.demoReadinessGates;
    const rows = gates.gates.map(gate => `
      <article class="readiness-gate gate-${classSlug(gate.status)}">
        <div class="gate-top">
          <strong>${esc(gate.gate)}</strong>
          <span class="${toneClass(gate.tone).trim()}">${esc(gate.status)}</span>
        </div>
        <p>${esc(gate.detail)}</p>
      </article>
    `).join("");
    return section("Demo Readiness Gates", "Public demo gate stack for Winston. Passing gates do not authorize live systems or deployment.", `
      <div class="readiness-grid">${rows}</div>
      <div class="disabled-note">Gate status is static research/demo readiness only. It does not deploy, configure DNS, arm runtime, alter strategies, or connect trading systems.</div>
      ${sourceLine(gates)}
    `, "important readiness-panel");
  }

  function renderDeploymentReadiness() {
    const d = data.deploymentReadiness;
    const notes = d.notes.map(note => `<li>${esc(note)}</li>`).join("");
    return section("winston.acidmartin.com Deployment Readiness", "Planning notes only. This bundle was not deployed and DNS was not configured.", `
      <div class="deployment-callout">
        <div>
          <span>Target future subdomain</span>
          <strong>${esc(d.targetDomain)}</strong>
        </div>
        <div>
          <span>Status</span>
          <strong class="tone-warn">${esc(d.status)}</strong>
        </div>
      </div>
      <ul class="deployment-list">${notes}</ul>
      <div class="disabled-note">Bounded next step is a static hosting/DNS plan review in a separate deployment thread after approval.</div>
      ${sourceLine(d)}
    `, "readonly-panel deployment-panel");
  }

  function renderAccount() {
    return `<div id="portfolio" class="metric-grid">${data.account.map(metricCard).join("")}</div>`;
  }

  function renderGates() {
    const rows = data.gates.map(gate => `
      <article class="gate-card${statusClass(gate.status)}">
        <div class="gate-top">
          <strong>${esc(gate.name)}</strong>
          <span>${esc(gate.status)}</span>
        </div>
        <dl>
          <div><dt>Metric</dt><dd>${esc(gate.metric)}</dd></div>
          <div><dt>Threshold</dt><dd>${esc(gate.threshold)}</dd></div>
          <div><dt>Safe next</dt><dd>${esc(gate.action)}</dd></div>
          <div><dt>Matt decision</dt><dd>${esc(gate.decision)}</dd></div>
        </dl>
        ${sourceLine(gate)}
      </article>
    `).join("");
    return section("Go/No-Go Research Gates", "Research readiness only. These gates do not authorize trading.", `<div class="gate-grid">${rows}</div>`, "important");
  }

  function renderBacktest() {
    const b = data.backtest;
    const stats = b.summary.map(item => `
      <div class="stat-row">
        <span>${esc(item.label)}</span>
        <strong class="${toneClass(item.tone).trim()}">${esc(item.value)}</strong>
      </div>
    `).join("");
    const waterfall = b.attribution.map(item => `
      <div class="waterfall-row">
        <span>${esc(item.label)}</span>
        <div class="waterfall-track"><i class="${toneClass(item.tone).trim()}" style="width:${Math.min(100, Math.abs(item.value) / 2.1)}%"></i></div>
        <strong class="${toneClass(item.tone).trim()}">${item.value >= 0 ? "+" : ""}$${Math.abs(item.value).toFixed(2)}</strong>
      </div>
    `).join("");
    const histogram = b.histogram.map(item => `
      <div class="hist-row">
        <span>${esc(item.bucket)}</span>
        <i style="width:${item.count * 5}%"></i>
        <strong>${esc(item.count)}</strong>
      </div>
    `).join("");
    return section("Mini Scalp Lab Backtest Window", "Bounded fixture run with live-current readings separated as read-only evidence.", `
      <div id="backtest" class="backtest-grid">
        <article class="lane lane-backtest">
          <h3>Backtest lane</h3>
          <p class="lane-meta">${esc(b.runId)}</p>
          <p>${esc(b.window)}</p>
          <p>${esc(b.granularity)}</p>
          <p>${esc(b.assumptions)}</p>
          <div class="stat-grid">${stats}</div>
          ${sourceLine(b)}
        </article>
        <article class="lane lane-replay">
          <h3>Replay and curves</h3>
          ${sparkline(b.equityCurve, "Equity curve")}
          ${sparkline(b.drawdownCurve, "Drawdown curve", "drawdown")}
          <div class="histogram">${histogram}</div>
          ${sourceLine(b)}
        </article>
        <article class="lane lane-readonly">
          <h3>Gross-to-net waterfall</h3>
          <div class="waterfall">${waterfall}</div>
          <div class="disabled-note">Live/current readings in this prototype are fixture read-only snapshots. No order controls are present.</div>
          ${sourceLine(b)}
        </article>
      </div>
    `);
  }

  function renderCycleNetEdge() {
    const c = data.cycleNetEdge;
    const rows = c.cycles.map(row => {
      const drag = Math.abs(row.fees + row.slippage + row.funding);
      const dragWidth = Math.min(100, drag * 4);
      const netTone = row.net >= 1 ? "good" : row.net < 0 ? "bad" : "warn";
      return `
        <article class="cycle-row cycle-${classSlug(netTone)}">
          <div class="cycle-id">
            <strong>${esc(row.cycle)}</strong>
            <span>${esc(row.symbol)} / ${esc(row.state)}</span>
          </div>
          <div class="cycle-bars">
            <div><span>Gross</span><i class="tone-good" style="width:${Math.min(100, Math.abs(row.gross) * 3)}%"></i><b>${row.gross >= 0 ? "+" : "-"}$${Math.abs(row.gross).toFixed(2)}</b></div>
            <div><span>Drag</span><i class="tone-warn" style="width:${dragWidth}%"></i><b>-$${drag.toFixed(2)}</b></div>
            <div><span>Net</span><i class="tone-${netTone}" style="width:${Math.min(100, Math.abs(row.net) * 3)}%"></i><b class="tone-${netTone}">${row.net >= 0 ? "+" : "-"}$${Math.abs(row.net).toFixed(2)}</b></div>
          </div>
        </article>
      `;
    }).join("");
    return section("Cycle-Level Net Edge", "Gross, fee/slippage/funding drag, and net edge by static reconstruction cycle. Not exchange truth.", `
      <div class="cycle-list">${rows}</div>
      <div class="disabled-note">${esc(c.caveat)}</div>
      ${sourceLine(c)}
    `, "research-terminal");
  }

  function renderFeeDragMeter() {
    const f = data.feeDragMeter;
    const dragTotal = f.feesPaid + f.spreadCost + f.slippageCost + f.fundingCost;
    const netPercent = Math.max(0, Math.min(100, (f.netEdge / f.grossEdge) * 100));
    const feePercent = Math.max(0, Math.min(100, f.feeBurnPercent));
    const churnPercent = Math.max(0, Math.min(100, f.churnScore));
    const rows = [
      ["Gross edge", `+$${f.grossEdge.toFixed(2)}`, "good"],
      ["Total drag", `-$${dragTotal.toFixed(2)}`, "warn"],
      ["Net edge", `+$${f.netEdge.toFixed(2)}`, "good"],
      ["Fee burn", `${f.feeBurnPercent.toFixed(1)}%`, "warn"],
      ["Churn score", `${f.churnScore.toFixed(1)}%`, "warn"]
    ].map(([label, value, tone]) => `<div class="status-row"><span>${esc(label)}</span><strong class="tone-${tone}">${esc(value)}</strong></div>`).join("");
    return section("Fee Drag / Churn Meter", "Research warning panel for the cost stack that can erase small scalp edge.", `
      <div class="fee-drag-grid">
        <article class="meter-card">
          <div class="meter-head"><span>Net retained</span><strong>${netPercent.toFixed(1)}%</strong></div>
          <div class="meter-track"><i class="tone-good" style="width:${netPercent}%"></i></div>
          <div class="meter-head"><span>Fee burn</span><strong class="tone-warn">${feePercent.toFixed(1)}%</strong></div>
          <div class="meter-track"><i class="tone-warn" style="width:${feePercent}%"></i></div>
          <div class="meter-head"><span>Churn pressure</span><strong class="tone-bad">${churnPercent.toFixed(1)}%</strong></div>
          <div class="meter-track"><i class="tone-bad" style="width:${churnPercent}%"></i></div>
        </article>
        <article class="subpanel">
          ${rows}
          <div class="disabled-note">${esc(f.warning)}</div>
        </article>
      </div>
      ${sourceLine(f)}
    `, "important fee-drag-panel");
  }

  function renderPositions() {
    const cards = data.positions.map(pos => `
      <article class="position-card risk-${esc(pos.risk)}">
        <div class="position-head">
          <div>
            <h3>${esc(pos.symbol)}</h3>
            <span class="pill small ${pos.side === "Short" ? "warn" : "good"}">${esc(pos.side)}</span>
            <span class="pill small cyan">${esc(pos.mode)}</span>
          </div>
          <strong class="${pos.pnl.startsWith("-") ? "tone-bad" : "tone-good"}">${esc(pos.pnl)} <small>${esc(pos.pnlPercent)}</small></strong>
        </div>
        <div class="position-grid">
          <div><span>Quantity</span><strong>${esc(pos.quantity)}</strong></div>
          <div><span>Notional</span><strong>${esc(pos.notional)}</strong></div>
          <div><span>Margin</span><strong>${esc(pos.margin)}</strong></div>
          <div><span>Leverage</span><strong>${esc(pos.leverage)}</strong></div>
          <div><span>Entry</span><strong>${esc(pos.entry)}</strong></div>
          <div><span>Mark</span><strong>${esc(pos.mark)}</strong></div>
          <div><span>Liquidation</span><strong class="tone-warn">${esc(pos.liquidation)}</strong></div>
          <div><span>Liq distance</span><strong class="tone-warn">${esc(pos.liqDistance)}</strong></div>
          <div><span>Stop</span><strong>${esc(pos.stop)}</strong></div>
          <div><span>Target</span><strong>${esc(pos.target)}</strong></div>
          <div><span>Stop authority</span><strong class="${pos.stopAuthority.includes("unknown") || pos.stopAuthority.includes("simulated") ? "tone-warn" : "tone-good"}">${esc(pos.stopAuthority)}</strong></div>
          <div><span>Exposure</span><strong>${esc(pos.exposure)}</strong></div>
        </div>
        ${sourceLine(pos)}
      </article>
    `).join("");
    return section("Positions and Liquidation Distance", "Per-symbol cards keep mode, stop authority, freshness, and source visible.", `<div class="cards-stack">${cards}</div>`);
  }

  function renderTrades() {
    const rows = data.trades.map(trade => `
      <article class="trade-row">
        <div class="trade-main">
          <div>
            <strong>${esc(trade.symbol)}</strong>
            <span>${esc(trade.side)} / ${esc(trade.mode)}</span>
          </div>
          <b class="${trade.net.startsWith("-") ? "tone-bad" : "tone-good"}">${esc(trade.net)}</b>
        </div>
        <div class="trade-details">
          <span>PnL ${esc(trade.pnl)}</span>
          <span>${esc(trade.size)}</span>
          <span>${esc(trade.notional)}</span>
          <span>${esc(trade.leverage)}</span>
          <span>${esc(trade.price)}</span>
          <span>${esc(trade.slippage)}</span>
          <span>Fee ${esc(trade.fee)}</span>
        </div>
        <div class="flag-row">
          ${trade.flags.length ? trade.flags.map(flag => `<span class="flag">${esc(flag)}</span>`).join("") : `<span class="flag muted">no detector flag</span>`}
        </div>
        ${sourceLine(trade)}
      </article>
    `).join("");
    return section("Recent, Closed, and Simulated Trades", "Includes duplicate close, near-zero close, high-fee, and high-slippage flags.", `<div id="transactions" class="trade-list">${rows}</div>`);
  }

  function badgeList(items, emptyLabel = "no flags") {
    const list = Array.isArray(items) ? items : Object.entries(items || {}).filter(([, value]) => value).map(([key]) => key);
    return list.length ? list.map(item => `<span class="flag">${esc(item)}</span>`).join("") : `<span class="flag muted">${esc(emptyLabel)}</span>`;
  }

  function formatObservedPnl(value) {
    if (value === null || value === undefined || value === "") return "unknown";
    const number = Number(value);
    if (!Number.isFinite(number)) return String(value);
    return `${number >= 0 ? "+" : "-"}$${Math.abs(number).toFixed(2)}`;
  }

  function rawValue(value) {
    if (value === null || value === undefined || value === "") return "unknown";
    return String(value);
  }

  function renderReplaySummary() {
    if (!replay?.entities) return "";
    const counts = replay.entity_counts || {};
    const posture = replay.controls_posture || {};
    const validationChecks = replay.validation?.checks || [];
    const failed = replay.validation?.failed_checks || [];
    const countCards = [
      { label: "Observed trades", value: counts.observed_trade_row || 0 },
      { label: "Position snapshots", value: counts.observed_position_snapshot || 0 },
      { label: "Dashboard states", value: counts.observed_dashboard_state || 0 },
      { label: "Evidence gaps", value: counts.evidence_gap || 0, tone: "warn" },
      { label: "Churn candidates", value: counts.churn_candidate || 0, tone: "warn" },
      { label: "Source screenshots", value: validationChecks.find(check => check.name === "source screenshot count")?.detail || "mapped", tone: "neutral" }
    ].map(item => metricCard({ ...replayMeta(), ...item, subvalue: "screenshot-derived / not net-PnL verified" })).join("");
    const postureRows = Object.entries(posture).map(([key, value]) => `
      <div class="status-row"><span>${esc(key)}</span><strong class="${value === false ? "tone-good" : "tone-warn"}">${esc(value)}</strong></div>
    `).join("");
    return section("Offline Replay Input v1", "Copied static fixture. Screenshot-derived observations only; displayed PnL is not fee-true or net-PnL verified.", `
      <div class="metric-grid compact">${countCards}</div>
      <article class="subpanel replay-disclaimer">
        <h3>Offline controls posture</h3>
        ${postureRows}
        <div class="disabled-note">The copied replay input says collectors were not run, Hyperliquid was not connected, and no live/runtime authority was changed.</div>
        ${failed.length ? `<div class="source-warning">Replay validation failed checks: ${esc(failed.join(", "))}</div>` : `<div class="source-line"><span class="class-chip class-research-only">research-only</span><span>artifact validation</span><span>passed</span><span>${esc(replay.generated_at)}</span><span>screenshot-derived-offline-fixture</span><span>${esc(replayFile)}</span></div>`}
      </article>
    `, "replay-panel");
  }

  function renderReplayBacktestV0() {
    if (!backtest) return "";
    const input = backtest.input_summary || {};
    const metrics = backtest.metrics || {};
    const policy = backtest.source_policy || {};
    const feeTrueReady = policy.fee_true_backtest_ready === true ? "ready" : "blocked";
    const cards = [
      { label: "Observed rows", value: input.observed_trade_rows || 0, subvalue: "screenshot-derived" },
      { label: "Complete timestamped", value: input.complete_timestamped_trade_rows || 0, subvalue: `${input.partial_visible_fragments || 0} partial fragments` },
      { label: "Screenshot gross PnL", value: `${rawValue(metrics.observed_displayed_gross_pnl_usdt)} USDT`, subvalue: metrics.observed_displayed_gross_pnl_status, tone: "warn" },
      { label: "Churn candidates", value: metrics.churn_candidate_count || 0, subvalue: "candidate only", tone: "warn" },
      { label: "Hard-zero candidates", value: metrics.zero_close_count || 0, subvalue: "displayed +0.00", tone: "warn" },
      { label: "Near-zero / small-gross", value: `${metrics.near_zero_close_count || 0} / ${metrics.small_gross_count || 0}`, subvalue: "candidate only", tone: "warn" },
      { label: "Duplicate/conflict", value: metrics.duplicate_conflict_candidate_count || 0, subvalue: "requires exchange IDs", tone: "warn" },
      { label: "Max rows/min", value: metrics.max_complete_rows_per_minute || 0, subvalue: `${metrics.minute_bucket_count || 0} minute buckets` },
      { label: "Stop/disarm status", value: metrics.stop_disarm_authority_verdict || "not_tested", subvalue: "not compliance proof", tone: "bad" },
      { label: "Fee-true readiness", value: feeTrueReady, subvalue: metrics.net_pnl_status || "blocked", tone: "bad" }
    ].map(item => metricCard({ ...backtestMeta(), ...item })).join("");
    const tickerRows = (backtest.distributions?.ticker_counts || []).map(row => `
      <div class="status-row">
        <span>${esc(row.key)}</span>
        <strong>${esc(row.observed_trade_count)} rows / ${esc(row.observed_displayed_gross_pnl_usdt)} USDT / ${esc(row.churn_candidate_count)} churn</strong>
      </div>
    `).join("");
    const postureRows = Object.entries(backtest.controls_posture || {}).slice(0, 10).map(([key, value]) => `
      <div class="status-row"><span>${esc(key)}</span><strong class="${value === false ? "tone-good" : "tone-warn"}">${esc(value)}</strong></div>
    `).join("");
    return section("Replay/Backtest v0", "Mini Scalp Lab module inside Winston. Screenshot-derived v0 metrics only; not fee-true, not net PnL proof, and no live trading authority.", `
      <div class="metric-grid compact">${cards}</div>
      <div class="two-col replay-v0-detail">
        <article class="subpanel">
          <h3>Ticker distribution</h3>
          ${tickerRows}
          <div class="disabled-note">${esc(backtest.warning)}</div>
          ${sourceLine(backtestMeta("Replay/backtest v0 metrics"))}
        </article>
        <article class="subpanel">
          <h3>Controls posture</h3>
          ${postureRows}
          <div class="disabled-note">Static/demo/research-only. No live roots, collectors, connectors, runtime state, lane state, orders, or authority changes.</div>
          ${sourceLine(backtestMeta("Replay/backtest v0 controls posture"))}
        </article>
      </div>
    `, "important replay-panel");
  }

  function renderPairMemoryGuards() {
    const guard = data.pairMemoryGuards;
    if (!guard) return "";
    const guardrailLabels = guard.guardrailLabels.map(label => `<span class="flag guardrail-flag">${esc(label)}</span>`).join("");
    const sourceArtifacts = guard.sourceArtifacts.map(path => `<code>${esc(path)}</code>`).join("");
    const candidateCards = guard.candidates.map(candidate => {
      const gaps = candidate.telemetry_gap_reason.map(item => `<span>${esc(item)}</span>`).join("");
      const metrics = [
        ["Research status", candidate.researchStatus],
        ["Evidence confidence", candidate.confidence],
        ["False-block risk", candidate.false_block_risk],
        ["Validation corpus", candidate.validation_corpus_id || guard.validationCorpusId],
        ["Good scalps preserved", `${candidate.goodScalpsPreserved} (${candidate.goodScalpPreservationRate})`],
        ["Churn cycles blocked", candidate.churnCyclesBlocked],
        ["Fees reduced", candidate.feesReduced],
        ["PMX strict risk", candidate.pmxStrictFalseBlockRisk],
        ["Research-only status", candidate.research_only_status]
      ].map(([label, value]) => `
        <div class="pair-metric">
          <span>${esc(label)}</span>
          <strong>${esc(value)}</strong>
        </div>
      `).join("");
      const states = [
        candidate.pair_memory_state,
        candidate.near_zero_cluster_state,
        candidate.toxic_pair_state,
        candidate.book_guard_state,
        candidate.l2_join_quality_state
      ].map(value => `<span class="flag muted">${esc(value)}</span>`).join("");
      return `
        <article class="pair-card pair-risk-${classSlug(candidate.false_block_risk)} ${candidate.candidate_status === "demoted_comparator" ? "pair-demoted" : ""}">
          <div class="pair-card-head">
            <div>
              <h3>${esc(candidate.displayName)}</h3>
              <code>${esc(candidate.candidate_id)}</code>
            </div>
            <span>${esc(candidate.candidate_status)}</span>
          </div>
          <div class="pair-metric-grid">${metrics}</div>
          <div class="flag-row">${states}</div>
          <div class="telemetry-gaps">
            <strong>Missing telemetry blockers</strong>
            <div class="field-tags">${gaps}</div>
          </div>
          <div class="screenshot-ref">
            Evidence: ${esc(candidate.evidence_source.corpus_id)} / ${esc(candidate.evidence_source.window_id)} / ${esc(candidate.evidence_source.row_id)}
          </div>
          ${sourceLine({ ...guard, ...candidate })}
        </article>
      `;
    }).join("");
    const missingRows = guard.missingTelemetryBlockers.map(item => `<span>${esc(item)}</span>`).join("");
    return section("Pair Memory Guards", guard.subtitle, `
      <div class="pair-guardrails">${guardrailLabels}</div>
      <div class="pair-candidate-grid">${candidateCards}</div>
      <div class="two-col pair-support">
        <article class="subpanel">
          <h3>Missing telemetry before demo/runtime consideration</h3>
          <div class="field-tags">${missingRows}</div>
          <div class="disabled-note">This panel is static research display only. It does not create blockers, thresholds, cooldowns, throttles, vetoes, live roots, lane state, or order behavior.</div>
          ${sourceLine(guard)}
        </article>
        <article class="subpanel">
          <h3>Evidence sources</h3>
          <div class="source-stack">${sourceArtifacts}</div>
          <div class="disabled-note">Every candidate row carries research_only_status; missing status would be treated as missing_required_telemetry by the contract.</div>
          ${sourceLine(guard)}
        </article>
      </div>
    `, "important pair-memory-panel");
  }

  function renderObservedTrades() {
    if (!replay?.entities?.observed_trade_row) return "";
    const rows = replay.entities.observed_trade_row.map(row => {
      const fields = row.observed_fields || {};
      const unknown = row.unknown_accounting || {};
      const pnl = formatObservedPnl(fields.displayed_pnl_usdt);
      return `
        <article class="observed-row">
          <div class="trade-main">
            <div>
              <strong>${esc(row.observed_trade_row_id)} ${esc(fields.ticker_text || "unknown ticker")}</strong>
              <span>${esc(fields.side_text)} / ${esc(fields.leverage_text)} / ${esc(fields.complete_status)}</span>
            </div>
            <b class="${String(pnl).startsWith("-") ? "tone-bad" : "tone-good"}">${esc(pnl)}</b>
          </div>
          <div class="trade-details">
            <span>Size ${esc(rawValue(fields.size_base_text))}</span>
            <span>USDT ${esc(rawValue(fields.size_usdt_displayed))}</span>
            <span>Price ${esc(rawValue(fields.price_text))}</span>
            <span>Auto-follow ${esc(rawValue(fields.auto_follow_text))}</span>
            <span>Time ${esc(row.timestamp?.raw_text || "unknown")}</span>
          </div>
          <div class="flag-row">
            ${badgeList(row.flags)}
            <span class="flag muted">net ${esc(unknown.net_pnl_status || "unknown_from_screenshot")}</span>
            <span class="flag muted">fees ${esc(unknown.fees_status || "unknown_from_screenshot")}</span>
            <span class="flag muted">not fee-true</span>
          </div>
          <div class="screenshot-ref">Screenshot source: ${esc(screenshotRef(row))}</div>
          ${sourceLine(observationMeta(row, "Observed trade row"))}
        </article>
      `;
    }).join("");
    return section("Observed Trade Rows", "All rows are screenshot-derived. Displayed PnL is gross/unknown and must not be treated as fee-true net edge.", `<div class="observed-list">${rows}</div>`, "replay-panel");
  }

  function renderObservedPositions() {
    if (!replay?.entities?.observed_position_snapshot) return "";
    const rows = replay.entities.observed_position_snapshot.map(row => {
      const fields = row.observed_fields || {};
      const unknown = row.unknown_accounting || {};
      return `
        <article class="position-card observed-position">
          <div class="position-head">
            <div>
              <h3>${esc(row.observed_position_snapshot_id)} ${esc(fields.ticker_text)}</h3>
              <span class="pill small ${fields.side_text === "Sell" ? "warn" : "good"}">${esc(fields.side_text)}</span>
              <span class="pill small cyan">screenshot-derived</span>
            </div>
            <strong class="${Number(fields.displayed_unrealized_pnl_usdt) < 0 ? "tone-bad" : "tone-good"}">${esc(formatObservedPnl(fields.displayed_unrealized_pnl_usdt))}<small>${esc(rawValue(fields.displayed_unrealized_pnl_pct_text))}</small></strong>
          </div>
          <div class="position-grid">
            <div><span>Quantity</span><strong>${esc(rawValue(fields.quantity_text))}</strong></div>
            <div><span>Leverage</span><strong>${esc(rawValue(fields.leverage_text))}</strong></div>
            <div><span>Entry</span><strong>${esc(rawValue(fields.entry_price_text))}</strong></div>
            <div><span>Mark</span><strong>${esc(rawValue(fields.mark_price_text))}</strong></div>
            <div><span>UI liq</span><strong class="tone-warn">${esc(rawValue(fields.ui_liq_price_text))}</strong></div>
            <div><span>Stop loss</span><strong>${esc(rawValue(fields.stop_loss_text))}</strong></div>
            <div><span>Profit target</span><strong>${esc(rawValue(fields.profit_target_text))}</strong></div>
            <div><span>Margin</span><strong>${esc(rawValue(fields.margin_usdt_text))}</strong></div>
            <div><span>Net PnL</span><strong class="tone-warn">${esc(unknown.net_pnl_status || "unknown")}</strong></div>
            <div><span>Fee truth</span><strong class="tone-warn">${esc(unknown.fees_status || "unknown")}</strong></div>
          </div>
          <div class="screenshot-ref">Screenshot source: ${esc(screenshotRef(row))}</div>
          ${sourceLine(observationMeta(row, "Observed position snapshot"))}
        </article>
      `;
    }).join("");
    return section("Observed Position Snapshots", "Open position cards copied from screenshots. UI liquidation/stop values do not prove exchange liquidation, stop authority, or net accounting truth.", `<div class="cards-stack">${rows}</div>`, "replay-panel");
  }

  function renderObservedDashboardStates() {
    if (!replay?.entities?.observed_dashboard_state) return "";
    const rows = replay.entities.observed_dashboard_state.map(row => {
      const parsed = Object.entries(row.parsed_reading_best_effort || {}).map(([key, value]) => `<span>${esc(key)} ${esc(value)}</span>`).join("");
      return `
        <article class="observed-row">
          <div class="trade-main">
            <div>
              <strong>${esc(row.observed_dashboard_state_id)} ${esc(row.category)}</strong>
              <span>${esc(row.timestamp?.precision || "screenshot context")}</span>
            </div>
          </div>
          <p>${esc(row.reading_text)}</p>
          <div class="trade-details">${parsed}</div>
          <div class="flag-row">
            <span class="flag muted">${esc(row.caveat)}</span>
            <span class="flag muted">ledger ${esc(row.unknown_accounting?.ledger_truth_status || "unknown_from_screenshot")}</span>
          </div>
          <div class="screenshot-ref">Screenshot source: ${esc(screenshotRef(row))}</div>
          ${sourceLine(observationMeta(row, "Observed dashboard state"))}
        </article>
      `;
    }).join("");
    return section("Observed Dashboard States", "Dashboard/control/allocation/account readings are UI observations, not account ledger packets.", `<div class="observed-list two-col-list">${rows}</div>`, "replay-panel");
  }

  function renderEvidenceGaps() {
    if (!replay?.entities?.evidence_gap) return "";
    const rows = replay.entities.evidence_gap.map(gap => `
      <article class="gate-card status-watch">
        <div class="gate-top">
          <strong>${esc(gap.evidence_gap_id)} ${esc(gap.category)}</strong>
          <span>${esc(gap.status)}</span>
        </div>
        <dl>
          <div><dt>Gap</dt><dd>${esc(gap.summary)}</dd></div>
          <div><dt>Schema need</dt><dd>${esc(gap.schema_need)}</dd></div>
          <div><dt>Replay v1 status</dt><dd>${gap.unresolved_in_replay_input_v1 ? "unresolved in replay input v1" : "resolved"}</dd></div>
        </dl>
        ${sourceLine(replayMeta("Evidence gap ledger row"))}
      </article>
    `).join("");
    return section("Replay Evidence Gaps", "These gaps block fee-true/net-PnL reconstruction and edge verdicts from screenshots.", `<div class="gate-grid">${rows}</div>`, "important replay-panel");
  }

  function renderChurnCandidates() {
    if (!replay?.entities?.churn_candidate) return "";
    const filterButtons = [
      ["all", "All"],
      ["displayed_plus_0_00", "Hard zero"],
      ["near_zero_abs_lte_0_25", "Near-zero"],
      ["small_abs_lte_0_50", "Small-gross"],
      ["negative_displayed_pnl", "Negative"],
      ["duplicate_or_conflict", "Duplicate/conflict"],
      ["repeated_row_candidate", "Repeated-row"]
    ].map(([filter, label], index) => `<button class="filter-button${index === 0 ? " active" : ""}" type="button" data-churn-filter="${esc(filter)}">${esc(label)}</button>`).join("");
    const rows = replay.entities.churn_candidate.map(candidate => {
      const types = candidate.candidate_types || [];
      const rationale = (candidate.rationale || []).map(item => `<span>${esc(item)}</span>`).join("");
      return `
        <article class="observed-row churn-row" data-candidate-types="${esc(types.join(" "))}">
          <div class="trade-main">
            <div>
              <strong>${esc(candidate.churn_candidate_id)} / ${esc(candidate.observed_trade_row_id)}</strong>
              <span>${esc(candidate.evidence_strength)}</span>
            </div>
            <b class="${Number(candidate.displayed_pnl_usdt) < 0 ? "tone-bad" : "tone-warn"}">${esc(formatObservedPnl(candidate.displayed_pnl_usdt))}</b>
          </div>
          <div class="flag-row">${badgeList(types, "candidate")}</div>
          <div class="trade-details">
            <span>duplicate truth ${esc(candidate.duplicate_fill_truth_status)}</span>
            <span>fee loss ${esc(candidate.fee_loss_truth_status)}</span>
            <span>net edge ${esc(candidate.net_edge_truth_status)}</span>
          </div>
          <div class="field-tags">${rationale}</div>
          <div class="screenshot-ref">Screenshot source: ${esc(candidate.source?.filename || "unknown screenshot")} / ${esc(candidate.source?.source_artifact_id || "unknown source id")}</div>
          ${sourceLine(observationMeta(candidate, "Churn candidate"))}
        </article>
      `;
    }).join("");
    return section("Churn Candidates", "Filter screenshot-only churn candidates. Candidate flags do not prove duplicate fills, fee losses, or net edge.", `
      <div class="filter-bar" aria-label="Churn candidate filters">${filterButtons}</div>
      <div class="filter-count" id="churn-filter-count">${esc(replay.entities.churn_candidate.length)} candidates shown</div>
      <div class="observed-list two-col-list churn-list">${rows}</div>
    `, "replay-panel");
  }

  function renderAllocation() {
    let offset = 0;
    const donutParts = data.allocation.map(item => {
      const dash = `${item.value} ${100 - item.value}`;
      const circle = `<circle r="15.9" cx="18" cy="18" fill="transparent" stroke="${item.color}" stroke-width="6" stroke-dasharray="${dash}" stroke-dashoffset="${-offset}" />`;
      offset += item.value;
      return circle;
    }).join("");
    const legend = data.allocation.map(item => `
      <div class="legend-row"><i style="background:${item.color}"></i><span>${esc(item.label)}</span><strong>${item.value.toFixed(1)}%</strong></div>
    `).join("");
    const heat = data.exposureHeatmap.map(item => `
      <div class="heat-cell heat-${esc(item.tone)}">
        <strong>${esc(item.symbol)}</strong>
        <span>${esc(item.side)}</span>
        <b>${esc(item.exposure)}</b>
        <small>Liq ${esc(item.liq)}</small>
      </div>
    `).join("");
    return section("Asset Allocation and Exposure Heatmap", "Fixture allocation versus current exposure and liquidation-distance pressure.", `
      <div id="risk" class="allocation-grid">
        <article class="donut-card">
          <svg viewBox="0 0 36 36" class="donut" role="img" aria-label="Fixture asset allocation">
            ${donutParts}
            <text x="18" y="17.5" text-anchor="middle">72%</text>
            <text x="18" y="22" text-anchor="middle">allocated</text>
          </svg>
          <div class="legend">${legend}</div>
          ${sourceLine(data.allocationMeta)}
        </article>
        <article>
          <div class="heatmap">${heat}</div>
          ${sourceLine(data.exposureHeatmapMeta)}
        </article>
      </div>
    `);
  }

  function renderExecution() {
    const e = data.execution;
    const rows = e.stats.map(item => metricCard({ ...e, ...item })).join("");
    return section("Execution Quality and Fee Burn", "Simulated fill expense versus expected entry, plus churn pressure.", `<div class="metric-grid compact">${rows}</div>${sourceLine(e)}`);
  }

  function renderHealth() {
    const system = data.health.system.map(item => `<div class="status-row"><span>${esc(item.label)}</span><strong class="${toneClass(item.tone).trim()}">${esc(item.value)}</strong></div>`).join("");
    const autoHeal = data.health.autoHeal.map(item => `<div class="status-row"><span>${esc(item.label)}</span><strong class="${toneClass(item.tone).trim()}">${esc(item.value)}</strong></div>`).join("");
    return section("System Health and Auto-Heal Status", "Health is fixture-only. No collectors or runtime systems were queried.", `
      <div class="two-col">
        <article class="subpanel"><h3>System health</h3>${system}${sourceLine(data.health)}</article>
        <article class="subpanel"><h3>Auto-heal status</h3>${autoHeal}${sourceLine(data.health)}</article>
      </div>
    `);
  }

  function renderRuntime() {
    const rows = data.runtime.blockers.map(item => `<div class="status-row"><span>${esc(item.label)}</span><strong class="${toneClass(item.tone).trim()}">${esc(item.value)}</strong></div>`).join("");
    const disabled = data.runtime.disabledStates.map(state => `<button class="display-only" disabled>${esc(state)}</button>`).join("");
    return section("No-Trade Blockers and Runtime State, Read-Only", "Runtime states are disabled display evidence, not live controls.", `
      <div id="runtime" class="runtime-grid">
        <article class="subpanel">${rows}${sourceLine(data.runtime)}</article>
        <article class="subpanel">
          <h3>Disabled/display-only states</h3>
          <div class="disabled-grid">${disabled}</div>
          <div class="disabled-note">Dashboard cannot arm, disarm, change autopilot, change thresholds, place orders, or mutate runtime state.</div>
          ${sourceLine(data.runtime)}
        </article>
      </div>
    `, "readonly-panel");
  }

  function renderScanner() {
    const rows = data.scanner.map(item => `
      <article class="scanner-row">
        <div class="score">${esc(item.score)}</div>
        <div>
          <div class="scanner-head"><strong>${esc(item.symbol)}</strong><span>${esc(item.regime)}</span></div>
          <div class="trade-details">
            <span>Spread ${esc(item.spread)}</span>
            <span>Liquidity ${esc(item.liquidity)}</span>
            <span>Funding ${esc(item.funding)}</span>
            <span>Vol ${esc(item.volatility)}</span>
            <span>Signals ${esc(item.signals)}</span>
            <span>Rejects ${esc(item.rejects)}</span>
            <span>Churn ${esc(item.churn)}</span>
            <span>Slip ${esc(item.slip)}</span>
          </div>
          <p>${esc(item.reason)}</p>
          ${sourceLine(item)}
        </div>
      </article>
    `).join("");
    return section("Ticker Scanner", "Candidate ranking is fixture-only and inclusion/exclusion is research context.", `<div class="scanner-list">${rows}</div>`);
  }

  function renderRegime() {
    const fields = data.regime.fields.map(item => `<div class="status-row"><span>${esc(item.label)}</span><strong class="${toneClass(item.tone).trim()}">${esc(item.value)}</strong></div>`).join("");
    return section("Market Regime", "Fixture regime summary for scalp-fit context.", `<article class="subpanel">${fields}${sourceLine(data.regime)}</article>`);
  }

  function setupChurnFilters() {
    const buttons = Array.from(document.querySelectorAll("[data-churn-filter]"));
    const rows = Array.from(document.querySelectorAll(".churn-row"));
    const count = document.querySelector("#churn-filter-count");
    if (!buttons.length || !rows.length) return;
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.dataset.churnFilter;
        buttons.forEach(item => item.classList.toggle("active", item === button));
        let shown = 0;
        rows.forEach(row => {
          const visible = filter === "all" || row.dataset.candidateTypes.split(" ").includes(filter);
          row.hidden = !visible;
          if (visible) shown += 1;
        });
        if (count) count.textContent = `${shown} candidates shown`;
      });
    });
  }

  root.innerHTML = [
    renderMarketTicker(),
    renderHeader(),
    renderCommandDeck(),
    renderEvidenceDrawer(),
    renderDemoRelaunchChecklist(),
    renderDemoReadinessGates(),
    renderAccount(),
    renderGates(),
    renderBacktest(),
    renderCycleNetEdge(),
    renderReplaySummary(),
    renderReplayBacktestV0(),
    renderPairMemoryGuards(),
    renderObservedTrades(),
    renderObservedPositions(),
    renderObservedDashboardStates(),
    renderEvidenceGaps(),
    renderChurnCandidates(),
    renderPositions(),
    renderTrades(),
    renderAllocation(),
    renderFeeDragMeter(),
    renderExecution(),
    renderScanner(),
    renderRegime(),
    renderHealth(),
    renderRuntime(),
    renderDeploymentReadiness()
  ].join("");
  setupChurnFilters();
})();
