window.WINSTON_MINI_SCALP_FIXTURE = {
  bundle: {
    id: "winston-mini-scalp-lab-2026-06-08.fixture.v1",
    title: "Winston",
    mode: "Mixed Fixture Evidence",
    strategyVersion: "mini-scalp-v0.3.fixture",
    symbolFilter: "ETH, SOL, ADA",
    generatedAt: "2026-06-08T17:42:00-04:00",
    latestSource: "fixture://winston-mini-scalp-lab/mock-research-bundle-v1",
    latestSourceTimestamp: "2026-06-08T17:40:00-04:00",
    timestamp: "2026-06-08T17:40:00-04:00",
    source: "fixture://winston-mini-scalp-lab/mock-research-bundle-v1",
    freshness: "fresh",
    classification: "research-only",
    artifactStatus: "mock-fixture",
    authority: "Read-only / no trading authority",
    disclaimer: "All values are static/demo/research-only fixtures. Mini Scalp Lab is a Winston research module; this prototype does not read live Winston roots and cannot trade."
  },
  sourceDefaults: {
    mode: "Fixture",
    source: "fixture://winston-mini-scalp-lab/mock-research-bundle-v1",
    timestamp: "2026-06-08T17:40:00-04:00",
    freshness: "fresh",
    classification: "mock",
    artifactStatus: "mock-fixture"
  },
  marketHeadlines: {
    mode: "Static Headline Fixture",
    source: "fixture://winston/static-market-headlines",
    timestamp: "2026-06-11T00:00:00-04:00",
    freshness: "fresh",
    classification: "research-only",
    artifactStatus: "static-headline-fixture-no-live-api",
    label: "Market Headlines",
    guardrail: "Fixture-backed news rail. No live news API, RSS feed, web fetch, exchange connector, or runtime root is connected.",
    items: [
      { sourceLabel: "WINSTON", topic: "Demo", headline: "Public research dashboard prepared for future winston.acidmartin.com static launch path.", severity: "info" },
      { sourceLabel: "MSL", topic: "Replay", headline: "Mini Scalp Lab replay/backtest v0 remains screenshot-derived and blocked from fee-true edge claims.", severity: "watch" },
      { sourceLabel: "GUARDS", topic: "Pair Memory", headline: "Near-zero and toxic pair-memory guards remain research-only with missing lifecycle telemetry.", severity: "watch" },
      { sourceLabel: "RISK", topic: "Churn", headline: "Fee drag and near-zero closes stay top demo warnings until exchange/order lifecycle evidence exists.", severity: "alert" },
      { sourceLabel: "OPS", topic: "Authority", headline: "Static bundle has no Hyperliquid, collectors, Agent Manager roots, arm/disarm controls, or order authority.", severity: "clear" }
    ]
  },
  commandDeck: {
    mode: "Public Demo Command Deck Fixture",
    source: "fixture://winston/public-demo-command-deck",
    timestamp: "2026-06-11T00:00:00-04:00",
    freshness: "fresh",
    classification: "research-only",
    artifactStatus: "static-command-deck",
    summary: "Winston public research/operator surface. Mini Scalp Lab is a research module; all numbers are static fixtures.",
    tiles: [
      { label: "Winston status", value: "Research demo", detail: "fixture-only / no runtime roots", tone: "good" },
      { label: "Mini Scalp Lab", value: "Replay/backtest v0", detail: "screenshot-derived evidence", tone: "warn" },
      { label: "Pair Memory Guards", value: "Research-only", detail: "no blocker authority", tone: "warn" },
      { label: "Churn / fee burn", value: "WATCH", detail: "21.9% fee burn; fee-true blocked", tone: "bad" },
      { label: "Demo relaunch", value: "Static ready", detail: "domain prep only; not deployed", tone: "good" }
    ]
  },
  cycleNetEdge: {
    mode: "Cycle-Level Edge Fixture",
    source: "fixture://winston/cycle-net-edge",
    timestamp: "2026-06-08T17:35:00-04:00",
    freshness: "fresh",
    classification: "research-only",
    artifactStatus: "backtest-derived-static-fixture",
    cycles: [
      { cycle: "C-101", symbol: "ETH", gross: 28.16, fees: -1.36, slippage: -0.54, funding: -0.18, net: 26.08, state: "clean winner" },
      { cycle: "C-102", symbol: "SOL", gross: 0.72, fees: -0.56, slippage: -0.12, funding: 0.00, net: 0.04, state: "fee-dominated" },
      { cycle: "C-103", symbol: "ADA", gross: -7.18, fees: -1.29, slippage: -0.55, funding: 0.00, net: -9.02, state: "adverse selection" },
      { cycle: "C-104", symbol: "ETH", gross: 0.51, fees: -0.61, slippage: -0.73, funding: 0.00, net: -0.83, state: "near-zero churn" },
      { cycle: "C-105", symbol: "SOL", gross: 14.05, fees: -1.20, slippage: -0.33, funding: 0.00, net: 12.52, state: "clean winner" }
    ],
    caveat: "Cycle rows are static reconstruction examples. They do not prove exchange fills, account ledger truth, or live edge."
  },
  feeDragMeter: {
    mode: "Fee Drag Fixture",
    source: "fixture://winston/fee-drag-churn-meter",
    timestamp: "2026-06-08T17:36:18-04:00",
    freshness: "fresh",
    classification: "research-only",
    artifactStatus: "backtest-derived-static-fixture",
    grossEdge: 190.46,
    feesPaid: 41.70,
    spreadCost: 12.84,
    slippageCost: 8.73,
    fundingCost: 3.05,
    netEdge: 131.08,
    churnScore: 31.4,
    feeBurnPercent: 21.9,
    warning: "Fee burn is above the preferred demo watch line and remains a warning until fee-true lifecycle telemetry is available."
  },
  demoReadinessGates: {
    mode: "Static Demo Readiness Gates",
    source: "fixture://winston/demo-readiness-gates",
    timestamp: "2026-06-11T00:00:00-04:00",
    freshness: "fresh",
    classification: "research-only",
    artifactStatus: "static-demo-readiness",
    gates: [
      { gate: "Static bundle integrity", status: "pass", detail: "HTML/CSS/JS and local fixtures render without network calls.", tone: "good" },
      { gate: "No live authority", status: "pass", detail: "No controls, connectors, credentials, orders, collectors, schedules, or runtime roots are wired.", tone: "good" },
      { gate: "Research caveats visible", status: "pass", detail: "Header, ticker, source drawer, and modules repeat fixture-only limits.", tone: "good" },
      { gate: "Fee-true edge claim", status: "blocked", detail: "Missing fills, fees, maker/taker, funding, equity, lifecycle logs, and exchange IDs.", tone: "bad" },
      { gate: "Public hosting", status: "future", detail: "winston.acidmartin.com needs separate static host, DNS, cache policy, and approval.", tone: "warn" }
    ]
  },
  deploymentReadiness: {
    mode: "Future Static Deployment Notes",
    source: "fixture://winston/deployment-readiness-notes",
    timestamp: "2026-06-11T00:00:00-04:00",
    freshness: "fresh",
    classification: "research-only",
    artifactStatus: "planning-notes-no-deploy",
    targetDomain: "winston.acidmartin.com",
    status: "planning only - not deployed",
    notes: [
      "Promote only static files from this dashboard bundle after approval.",
      "Keep all data fixture-backed and versioned; no live API keys, collectors, sockets, or runtime roots.",
      "Serve with immutable asset caching plus an index.html no-cache policy.",
      "Add a public launch banner stating research-only, no trading authority, and screenshot-derived limitations.",
      "Perform DNS/hosting changes in a separate bounded deployment thread after Matt approves."
    ]
  },
  account: [
    { label: "Account balance", value: "$12,842.16", mode: "Historical Screenshot Fixture", timestamp: "2026-06-08T17:39:31-04:00", source: "fixture://snapshot/account-read-only", freshness: "fresh", classification: "research-only", artifactStatus: "static-screenshot-fixture" },
    { label: "Today P&L", value: "+$184.22", subvalue: "+1.45%", tone: "good", mode: "Simulation", timestamp: "2026-06-08T17:37:12-04:00", source: "fixture://simulation/session-pnl", freshness: "fresh", classification: "mock", artifactStatus: "mock-fixture" },
    { label: "Open trades", value: "3", subvalue: "2 sim / 1 read-only", mode: "Mixed", timestamp: "2026-06-08T17:39:31-04:00", source: "fixture://positions/current-and-sim", freshness: "fresh", classification: "mock", artifactStatus: "mock-fixture" },
    { label: "Net after fees", value: "+$131.08", subvalue: "fees/slip/spread applied", tone: "good", mode: "Backtest", timestamp: "2026-06-08T17:35:00-04:00", source: "fixture://backtest/run-mini-scalp-v03", freshness: "fresh", classification: "research-only", artifactStatus: "mock-fixture" },
    { label: "Fee burn", value: "21.9%", subvalue: "$41.70 of gross", tone: "warn", mode: "Backtest", timestamp: "2026-06-08T17:35:00-04:00", source: "fixture://backtest/run-mini-scalp-v03", freshness: "fresh", classification: "research-only", artifactStatus: "mock-fixture" },
    { label: "Avg hold", value: "4m 18s", subvalue: "44 closed trades", mode: "Backtest", timestamp: "2026-06-08T17:35:00-04:00", source: "fixture://backtest/run-mini-scalp-v03", freshness: "fresh", classification: "research-only", artifactStatus: "mock-fixture" }
  ],
  backtest: {
    runId: "bt-mini-scalp-v03-20260608T2135Z",
    mode: "Backtest",
    source: "fixture://backtest/run-mini-scalp-v03",
    timestamp: "2026-06-08T17:35:00-04:00",
    freshness: "fresh",
    classification: "research-only",
    artifactStatus: "mock-fixture",
    window: "2026-06-03 09:30 ET -> 2026-06-08 16:00 ET",
    symbols: ["ETHUSDT", "SOLUSDT", "ADAUSDT"],
    granularity: "1m candles + fixture fill tape",
    assumptions: "Taker fee 4.5 bps, 2x max leverage assumption, stale intervals excluded",
    summary: [
      { label: "Gross P&L", value: "+$190.46", tone: "good" },
      { label: "Net P&L", value: "+$131.08", tone: "good" },
      { label: "Fees paid", value: "$41.70", tone: "warn" },
      { label: "Spread cost", value: "$12.84", tone: "warn" },
      { label: "Slippage cost", value: "$8.73", tone: "warn" },
      { label: "Funding", value: "-$3.05", tone: "bad" },
      { label: "Win rate", value: "59.1%", tone: "good" },
      { label: "Max drawdown", value: "-3.2%", tone: "warn" },
      { label: "Trades/hour", value: "2.7", tone: "neutral" },
      { label: "Zero-profit closes", value: "4", tone: "warn" }
    ],
    equityCurve: [10000, 10018, 10011, 10045, 10038, 10072, 10091, 10070, 10112, 10131],
    drawdownCurve: [0, -0.4, -1.1, -0.2, -0.7, -0.3, 0, -1.8, -0.5, -0.1],
    attribution: [
      { label: "Gross edge", value: 190.46, tone: "good" },
      { label: "Fees", value: -41.70, tone: "warn" },
      { label: "Spread", value: -12.84, tone: "warn" },
      { label: "Slippage", value: -8.73, tone: "warn" },
      { label: "Funding", value: -3.05, tone: "bad" },
      { label: "Net", value: 131.08, tone: "good" }
    ],
    histogram: [
      { bucket: "< -$20", count: 2 },
      { bucket: "-$20..0", count: 16 },
      { bucket: "$0..$5", count: 9 },
      { bucket: "$5..$20", count: 14 },
      { bucket: "> $20", count: 3 }
    ]
  },
  gates: [
    { name: "Data freshness", status: "pass", metric: "4m old", threshold: "< 15m", action: "Review fixture freshness model only.", decision: "None", mode: "Research Gate", timestamp: "2026-06-08T17:42:00-04:00", source: "fixture://freshness-report", freshness: "fresh", classification: "research-only", artifactStatus: "mock-fixture" },
    { name: "Net after fees", status: "pass", metric: "+$131.08", threshold: "> $0", action: "Inspect gross-to-net waterfall.", decision: "None", mode: "Research Gate", timestamp: "2026-06-08T17:35:00-04:00", source: "fixture://backtest/run-mini-scalp-v03", freshness: "fresh", classification: "research-only", artifactStatus: "mock-fixture" },
    { name: "Fee burn/churn", status: "watch", metric: "21.9%", threshold: "< 20%", action: "Flag high-churn symbols before any real artifact wiring.", decision: "Confirm acceptable research threshold.", mode: "Research Gate", timestamp: "2026-06-08T17:36:18-04:00", source: "fixture://execution-quality", freshness: "fresh", classification: "research-only", artifactStatus: "mock-fixture" },
    { name: "Duplicate close", status: "watch", metric: "2 candidates", threshold: "0", action: "Inspect detector rows.", decision: "Decide whether duplicate detector should become top gate.", mode: "Research Gate", timestamp: "2026-06-08T17:36:31-04:00", source: "fixture://trade-detector", freshness: "fresh", classification: "research-only", artifactStatus: "mock-fixture" },
    { name: "Stop authority", status: "fail", metric: "1 simulated-only", threshold: "configured", action: "Keep dashboard read-only; do not infer runtime authority.", decision: "Confirm how live read-only stop evidence should be sourced.", mode: "Research Gate", timestamp: "2026-06-08T17:39:31-04:00", source: "fixture://positions/current-and-sim", freshness: "fresh", classification: "research-only", artifactStatus: "mock-fixture" },
    { name: "Runtime state", status: "unknown", metric: "Fixture snapshot", threshold: "read-only source", action: "Wait for approved read-only artifact roots.", decision: "Matt to approve any future source roots.", mode: "Research Gate", timestamp: "2026-06-08T17:38:44-04:00", source: "fixture://runtime-state", freshness: "fresh", classification: "research-only", artifactStatus: "mock-fixture" }
  ],
  positions: [
    {
      symbol: "ETHUSDT Perp",
      side: "Long",
      mode: "Simulation",
      quantity: "1.284 ETH",
      notional: "$4,622.17",
      margin: "$2,311.09",
      leverage: "2.00x assumption",
      pnl: "+$96.34",
      pnlPercent: "+2.13%",
      entry: "$3,522.40",
      mark: "$3,599.42",
      liquidation: "$2,948.20",
      liqDistance: "$651.22 / 18.1%",
      stop: "$3,481.00",
      target: "$3,642.00",
      stopAuthority: "simulated-only",
      exposure: "36.0%",
      funding: "-0.0041% next",
      source: "fixture://positions/current-and-sim",
      timestamp: "2026-06-08T17:39:31-04:00",
      freshness: "fresh",
      classification: "mock",
      artifactStatus: "mock-fixture",
      risk: "watch"
    },
    {
      symbol: "SOLUSDT Perp",
      side: "Long",
      mode: "Backtest",
      quantity: "18.50 SOL",
      notional: "$2,896.21",
      margin: "$1,448.10",
      leverage: "2.00x assumption",
      pnl: "+$42.18",
      pnlPercent: "+1.48%",
      entry: "$154.22",
      mark: "$156.55",
      liquidation: "$126.70",
      liqDistance: "$29.85 / 19.1%",
      stop: "$152.80",
      target: "$159.20",
      stopAuthority: "configured in fixture",
      exposure: "22.6%",
      funding: "+0.0012% last",
      source: "fixture://backtest/run-mini-scalp-v03",
      timestamp: "2026-06-08T17:35:00-04:00",
      freshness: "fresh",
      classification: "research-only",
      artifactStatus: "mock-fixture",
      risk: "ok"
    },
    {
      symbol: "ADAUSDT Perp",
      side: "Short",
      mode: "Historical Screenshot Fixture",
      quantity: "5,820 ADA",
      notional: "$4,174.55",
      margin: "$2,087.28",
      leverage: "2.00x read-only",
      pnl: "-$18.22",
      pnlPercent: "-0.43%",
      entry: "$0.7148",
      mark: "$0.7179",
      liquidation: "$0.8420",
      liqDistance: "$0.1241 / 17.3%",
      stop: "unknown",
      target: "unknown",
      stopAuthority: "unknown from fixture",
      exposure: "32.5%",
      funding: "-0.0028% next",
      source: "fixture://snapshot/live-read-only-position",
      timestamp: "2026-06-08T17:39:31-04:00",
      freshness: "fresh",
      classification: "research-only",
      artifactStatus: "static-screenshot-fixture",
      risk: "warn"
    }
  ],
  trades: [
    { id: "trd-1017", symbol: "ETHUSDT", side: "Long close", mode: "Simulation", pnl: "+$28.16", net: "+$23.98", size: "0.420 ETH", notional: "$1,511.45", leverage: "2.0x", price: "$3,598.70", slippage: "1.8 bps", fee: "$1.36", timestamp: "2026-06-08T17:28:04-04:00", flags: ["fee watch"], source: "fixture://trade-tape/simulation", freshness: "fresh", classification: "mock", artifactStatus: "mock-fixture" },
    { id: "trd-1016", symbol: "SOLUSDT", side: "Long close", mode: "Replay", pnl: "+$0.72", net: "+$0.04", size: "4.0 SOL", notional: "$625.60", leverage: "2.0x", price: "$156.40", slippage: "2.1 bps", fee: "$0.56", timestamp: "2026-06-08T17:21:49-04:00", flags: ["zero/near-zero close", "fee-dominated"], source: "fixture://trade-detector", freshness: "fresh", classification: "mock", artifactStatus: "mock-fixture" },
    { id: "trd-1015", symbol: "ADAUSDT", side: "Short close", mode: "Historical Screenshot Fixture", pnl: "-$7.18", net: "-$9.02", size: "2,000 ADA", notional: "$1,435.80", leverage: "2.0x", price: "$0.7179", slippage: "3.6 bps", fee: "$1.29", timestamp: "2026-06-08T17:13:10-04:00", flags: ["high slippage"], source: "fixture://snapshot/live-read-only-fill", freshness: "fresh", classification: "research-only", artifactStatus: "static-screenshot-fixture" },
    { id: "trd-1014", symbol: "ETHUSDT", side: "Long close", mode: "Backtest", pnl: "+$0.51", net: "-$0.83", size: "0.188 ETH", notional: "$676.69", leverage: "2.0x", price: "$3,599.40", slippage: "1.2 bps", fee: "$0.61", timestamp: "2026-06-08T17:04:22-04:00", flags: ["zero/near-zero close", "fee-dominated"], source: "fixture://trade-detector", freshness: "fresh", classification: "research-only", artifactStatus: "mock-fixture" },
    { id: "trd-1013", symbol: "SOLUSDT", side: "Long close", mode: "Backtest", pnl: "+$14.05", net: "+$12.52", size: "8.5 SOL", notional: "$1,330.68", leverage: "2.0x", price: "$156.55", slippage: "0.9 bps", fee: "$1.20", timestamp: "2026-06-08T16:58:47-04:00", flags: [], source: "fixture://trade-tape/backtest", freshness: "fresh", classification: "research-only", artifactStatus: "mock-fixture" },
    { id: "trd-1012", symbol: "ETHUSDT", side: "Duplicate close candidate", mode: "Replay", pnl: "+$0.00", net: "-$1.44", size: "0.200 ETH", notional: "$719.88", leverage: "2.0x", price: "$3,599.42", slippage: "0.0 bps", fee: "$0.65", timestamp: "2026-06-08T16:57:02-04:00", flags: ["duplicate close candidate", "zero/near-zero close"], source: "fixture://trade-detector", freshness: "fresh", classification: "mock", artifactStatus: "mock-fixture" }
  ],
  allocation: [
    { label: "USDC reserve", value: 28.9, color: "#7dd3fc" },
    { label: "ETH long", value: 36.0, color: "#34d399" },
    { label: "SOL long", value: 22.6, color: "#a3e635" },
    { label: "ADA short", value: 12.5, color: "#fbbf24" }
  ],
  allocationMeta: {
    mode: "Mixed",
    source: "fixture://allocation",
    timestamp: "2026-06-08T17:40:00-04:00",
    freshness: "fresh",
    classification: "mock",
    artifactStatus: "mock-fixture"
  },
  exposureHeatmap: [
    { symbol: "ETH", side: "Long", exposure: "36.0%", liq: "18.1%", tone: "watch" },
    { symbol: "SOL", side: "Long", exposure: "22.6%", liq: "19.1%", tone: "ok" },
    { symbol: "ADA", side: "Short", exposure: "32.5%", liq: "17.3%", tone: "warn" },
    { symbol: "BTC", side: "Flat", exposure: "0.0%", liq: "n/a", tone: "neutral" },
    { symbol: "HYPE", side: "Excluded", exposure: "0.0%", liq: "n/a", tone: "neutral" }
  ],
  exposureHeatmapMeta: {
    mode: "Mixed",
    source: "fixture://exposure-heatmap",
    timestamp: "2026-06-08T17:40:00-04:00",
    freshness: "fresh",
    classification: "mock",
    artifactStatus: "mock-fixture"
  },
  execution: {
    mode: "Mixed",
    source: "fixture://execution-quality",
    timestamp: "2026-06-08T17:36:18-04:00",
    freshness: "fresh",
    classification: "mock",
    artifactStatus: "mock-fixture",
    stats: [
      { label: "Samples", value: "44" },
      { label: "Avg slippage", value: "1.9 bps", tone: "warn" },
      { label: "Median", value: "1.2 bps" },
      { label: "P95", value: "4.8 bps", tone: "warn" },
      { label: "P99", value: "6.2 bps", tone: "bad" },
      { label: "Reject/expire", value: "8.7%", tone: "warn" },
      { label: "Spread cost", value: "$12.84", tone: "warn" },
      { label: "Churn score", value: "31.4%", tone: "warn" }
    ]
  },
  health: {
    mode: "Fixture Health Snapshot",
    source: "fixture://health/system-and-autoheal",
    timestamp: "2026-06-08T17:38:44-04:00",
    freshness: "fresh",
    classification: "mock",
    artifactStatus: "mock-fixture",
    system: [
      { label: "Pipeline", value: "fixture-only green", tone: "good" },
      { label: "State freshness", value: "fresh fixture", tone: "good" },
      { label: "Exchange", value: "not connected", tone: "neutral" },
      { label: "Fill sync", value: "mock timestamp only", tone: "neutral" },
      { label: "Parser health", value: "static OK", tone: "good" },
      { label: "Source conflicts", value: "none in fixture", tone: "good" }
    ],
    autoHeal: [
      { label: "Last restart", value: "fixture: none today" },
      { label: "Last result", value: "not attempted" },
      { label: "Consecutive down", value: "0", tone: "good" },
      { label: "Attempted cycle", value: "false" },
      { label: "API 429 streak", value: "0", tone: "good" }
    ]
  },
  runtime: {
    mode: "Read-Only Runtime State",
    source: "fixture://runtime-state",
    timestamp: "2026-06-08T17:38:44-04:00",
    freshness: "fresh",
    classification: "mock",
    artifactStatus: "mock-fixture",
    blockers: [
      { label: "Top blocker", value: "Stop authority missing for ADA read-only snapshot", tone: "warn" },
      { label: "No-action streak", value: "17 scans", tone: "warn" },
      { label: "Auto-relax level", value: "0 (display-only)" },
      { label: "Scan budget", value: "45/60 fixture scans" },
      { label: "Top reject pair", value: "ADAUSDT: spread-cost outlier", tone: "warn" },
      { label: "Potential entries", value: "2 research candidates" },
      { label: "Tradeflow", value: "2.7 trades/hour" },
      { label: "Live go/no-go snapshot", value: "research WATCH, not execution permission", tone: "warn" }
    ],
    disabledStates: [
      "Autopilot: display-only OFF",
      "Arm state: display-only DISARMED",
      "Live trading armed: fixture false",
      "Auto-follow: display-only paused"
    ]
  },
  scanner: [
    { symbol: "ETH", score: 82, regime: "trend pullback", spread: "1.4 bps", liquidity: "high", funding: "-0.0041%", volatility: "medium", signals: 9, rejects: 2, churn: "watch", slip: "medium", reason: "Included: clean replay fills; fee burn watch.", mode: "Scanner Fixture", timestamp: "2026-06-08T17:40:00-04:00", source: "fixture://scanner/eth", freshness: "fresh", classification: "mock", artifactStatus: "mock-fixture" },
    { symbol: "SOL", score: 76, regime: "range breakout", spread: "1.8 bps", liquidity: "high", funding: "+0.0012%", volatility: "medium-high", signals: 7, rejects: 1, churn: "ok", slip: "low", reason: "Included: best net-after-fees sample.", mode: "Scanner Fixture", timestamp: "2026-06-08T17:40:00-04:00", source: "fixture://scanner/sol", freshness: "fresh", classification: "mock", artifactStatus: "mock-fixture" },
    { symbol: "ADA", score: 51, regime: "chop", spread: "3.2 bps", liquidity: "medium", funding: "-0.0028%", volatility: "low", signals: 6, rejects: 5, churn: "high", slip: "high", reason: "Excluded: stop authority unknown and spread outliers.", mode: "Scanner Fixture", timestamp: "2026-06-08T17:40:00-04:00", source: "fixture://scanner/ada", freshness: "fresh", classification: "mock", artifactStatus: "mock-fixture" },
    { symbol: "BTC", score: 48, regime: "compression", spread: "1.0 bps", liquidity: "high", funding: "-0.0010%", volatility: "low", signals: 2, rejects: 1, churn: "ok", slip: "low", reason: "Watchlist only: too few fixture signals.", mode: "Scanner Fixture", timestamp: "2026-06-08T17:40:00-04:00", source: "fixture://scanner/btc", freshness: "fresh", classification: "mock", artifactStatus: "mock-fixture" },
    { symbol: "HYPE", score: 37, regime: "unknown", spread: "4.7 bps", liquidity: "medium", funding: "+0.0075%", volatility: "high", signals: 1, rejects: 4, churn: "high", slip: "high", reason: "Excluded: churn and slippage pressure.", mode: "Scanner Fixture", timestamp: "2026-06-08T17:40:00-04:00", source: "fixture://scanner/hype", freshness: "fresh", classification: "mock", artifactStatus: "mock-fixture" }
  ],
  regime: {
    mode: "Backtest",
    source: "fixture://market-regime",
    timestamp: "2026-06-08T17:34:00-04:00",
    freshness: "fresh",
    classification: "research-only",
    artifactStatus: "mock-fixture",
    fields: [
      { label: "Volatility", value: "medium" },
      { label: "Trend/chop", value: "mixed trend pullback" },
      { label: "Funding", value: "slightly negative for ETH/ADA" },
      { label: "Spread", value: "watch on ADA/HYPE" },
      { label: "Liquidity", value: "adequate for ETH/SOL" },
      { label: "Session bucket", value: "US close" },
      { label: "Adverse selection", value: "elevated on ADA", tone: "warn" },
      { label: "Strategy fit", value: "neutral/watch", tone: "warn" }
    ]
  },
  pairMemoryGuards: {
    mode: "Offline Pair-Memory Guard Research Fixture",
    source: "./mini_scalp_lane_pair_memory_guard_dashboard_telemetry_contract_v0_2026-06-11.json",
    timestamp: "2026-06-11T00:00:00-04:00",
    freshness: "fresh",
    classification: "research-only",
    artifactStatus: "copied-telemetry-contract-fixture",
    title: "Pair Memory Guards",
    subtitle: "Offline research-only candidates from the Winston Mini Scalp Lane pair-memory guard spec. Not live, not a demo blocker, and no runtime authority.",
    specPath: "/Users/mattlloyd/Desktop/winston-ops/artifacts/mini-scalp-lab/pair-memory-guard-research-spec-v0/winston_mini_scalp_lane_pair_memory_guard_research_spec_v0_2026-06-11.md",
    contractPath: "./mini_scalp_lane_pair_memory_guard_dashboard_telemetry_contract_v0_2026-06-11.json",
    validationCorpusId: "expanded_prior23_plus_pmx7",
    guardrailLabels: [
      "not live",
      "not demo blocker",
      "no runtime authority",
      "research_only_no_runtime_binding"
    ],
    sourceArtifacts: [
      "/Users/mattlloyd/Desktop/winston-ops/artifacts/mini-scalp-lab/pair-memory-guard-research-spec-v0/winston_mini_scalp_lane_pair_memory_guard_research_spec_v0_2026-06-11.md",
      "/Users/mattlloyd/Desktop/winston-ops/artifacts/mini-scalp-lab/pair-memory-guard-research-spec-v0/mini_scalp_lane_pair_memory_guard_dashboard_telemetry_contract_v0_2026-06-11.json",
      "/Users/mattlloyd/Desktop/winston-ops/artifacts/mini-scalp-lab/market-reconstruction-v0/combined-offline-l2-pair-memory-oos-v0/winston_combined_offline_l2_pair_memory_oos_validation_v0_2026-06-11.md",
      "/Users/mattlloyd/Desktop/winston-ops/artifacts/mini-scalp-lab/market-reconstruction-v0/combined-offline-l2-pair-memory-oos-v0/combined_pair_memory_oos_summary_v0_2026-06-11.json"
    ],
    missingTelemetryBlockers: [
      "full account/order lifecycle",
      "maker/taker truth",
      "fee-tier truth",
      "runtime decision logs",
      "expected-edge logs",
      "skipped-entry counterfactuals",
      "funding/leverage/equity context",
      "broader non-overlapping OOS validation",
      "strict join quality for gap-flagged windows"
    ],
    candidates: [
      {
        candidate_id: "pair_near_zero_memory_plus_book_guard",
        displayName: "Near-zero memory plus book guard",
        candidate_status: "research_only_survivor",
        research_only_status: "research_only_no_runtime_binding",
        validation_corpus_id: "expanded_prior23_plus_pmx7",
        researchStatus: "research-only survivor",
        confidence: "medium",
        false_block_risk: "medium",
        pmxStrictFalseBlockRisk: "low",
        goodScalpsPreserved: "48 / 51",
        goodScalpPreservationRate: "94.1%",
        churnCyclesBlocked: "91",
        feesReduced: "$4.6466",
        book_guard_state: "book_context_available",
        l2_join_quality_state: "strict_joined",
        pair_memory_state: "memory_present_negative_pair_context",
        near_zero_cluster_state: "present",
        toxic_pair_state: "not_applicable",
        telemetry_gap_reason: [
          "expanded corpus false-block risk remains medium",
          "account/order lifecycle is unavailable",
          "maker/taker and fee-tier truth are unavailable",
          "runtime decision and expected-edge logs are unavailable",
          "gap-flagged PMX-005/006/007 rows are diagnostics only"
        ],
        evidence_source: {
          artifact_path: "/Users/mattlloyd/Desktop/winston-ops/artifacts/mini-scalp-lab/market-reconstruction-v0/combined-offline-l2-pair-memory-oos-v0/winston_combined_offline_l2_pair_memory_oos_validation_v0_2026-06-11.md",
          corpus_id: "expanded_prior23_plus_pmx7",
          window_id: "prior_23_saved + pmx_strict_7",
          row_id: "Candidate Performance / pair_near_zero_memory_plus_book_guard"
        }
      },
      {
        candidate_id: "pair_toxic_memory_plus_book_guard",
        displayName: "Toxic memory plus book guard",
        candidate_status: "research_only_survivor",
        research_only_status: "research_only_no_runtime_binding",
        validation_corpus_id: "expanded_prior23_plus_pmx7",
        researchStatus: "research-only survivor",
        confidence: "medium",
        false_block_risk: "medium",
        pmxStrictFalseBlockRisk: "low",
        goodScalpsPreserved: "46 / 51",
        goodScalpPreservationRate: "90.2%",
        churnCyclesBlocked: "99",
        feesReduced: "$5.5088",
        book_guard_state: "book_context_available",
        l2_join_quality_state: "strict_joined",
        pair_memory_state: "memory_present_negative_pair_context",
        near_zero_cluster_state: "not_applicable",
        toxic_pair_state: "present",
        telemetry_gap_reason: [
          "expanded corpus false-block risk remains medium",
          "account/order lifecycle is unavailable",
          "maker/taker and fee-tier truth are unavailable",
          "runtime decision and expected-edge logs are unavailable",
          "gap-flagged PMX-005/006/007 rows are diagnostics only"
        ],
        evidence_source: {
          artifact_path: "/Users/mattlloyd/Desktop/winston-ops/artifacts/mini-scalp-lab/market-reconstruction-v0/combined-offline-l2-pair-memory-oos-v0/winston_combined_offline_l2_pair_memory_oos_validation_v0_2026-06-11.md",
          corpus_id: "expanded_prior23_plus_pmx7",
          window_id: "prior_23_saved + pmx_strict_7",
          row_id: "Candidate Performance / pair_toxic_memory_plus_book_guard"
        }
      },
      {
        candidate_id: "pair_same_symbol_repetition_net_brake",
        displayName: "Same-symbol repetition net brake",
        candidate_status: "demoted_comparator",
        research_only_status: "demoted_research_comparator",
        validation_corpus_id: "expanded_prior23_plus_pmx7",
        researchStatus: "demoted research-only comparator",
        confidence: "low",
        false_block_risk: "high",
        pmxStrictFalseBlockRisk: "high",
        goodScalpsPreserved: "35 / 51",
        goodScalpPreservationRate: "68.6%",
        churnCyclesBlocked: "108",
        feesReduced: "$6.1970",
        book_guard_state: "not_evaluated",
        l2_join_quality_state: "strict_joined",
        pair_memory_state: "memory_present_negative_pair_context",
        near_zero_cluster_state: "not_applicable",
        toxic_pair_state: "not_applicable",
        telemetry_gap_reason: [
          "demoted after high expanded OOS false-block risk",
          "PMX-strict preservation fell to 55.6%",
          "not eligible as an active candidate or demo-mode input",
          "account/order lifecycle and runtime decision logs remain unavailable"
        ],
        evidence_source: {
          artifact_path: "/Users/mattlloyd/Desktop/winston-ops/artifacts/mini-scalp-lab/market-reconstruction-v0/combined-offline-l2-pair-memory-oos-v0/winston_combined_offline_l2_pair_memory_oos_validation_v0_2026-06-11.md",
          corpus_id: "expanded_prior23_plus_pmx7",
          window_id: "prior_23_saved + pmx_strict_7",
          row_id: "Candidate Performance / pair_same_symbol_repetition_net_brake"
        }
      }
    ]
  },
  sources: [
    { id: "mock-research-bundle-v1", type: "fixture_bundle", path: "fixture://winston-mini-scalp-lab/mock-research-bundle-v1", generatedAt: "2026-06-08T17:40:00-04:00", rank: 1, freshness: "fresh", note: "Local fixture only; no live artifact root.", mode: "Source Index", timestamp: "2026-06-08T17:40:00-04:00", source: "fixture://winston-mini-scalp-lab/mock-research-bundle-v1", classification: "mock", artifactStatus: "mock-fixture" },
    { id: "static-market-headlines", type: "headline_fixture", path: "fixture://winston/static-market-headlines", generatedAt: "2026-06-11T00:00:00-04:00", rank: 1, freshness: "fresh", note: "Static headline rail; no live news API, RSS feed, web fetch, connector, or runtime root.", mode: "Source Index", timestamp: "2026-06-11T00:00:00-04:00", source: "fixture://winston/static-market-headlines", classification: "research-only", artifactStatus: "static-headline-fixture-no-live-api" },
    { id: "public-demo-command-deck", type: "command_deck_fixture", path: "fixture://winston/public-demo-command-deck", generatedAt: "2026-06-11T00:00:00-04:00", rank: 1, freshness: "fresh", note: "First-screen hierarchy fixture for public research demo.", mode: "Source Index", timestamp: "2026-06-11T00:00:00-04:00", source: "fixture://winston/public-demo-command-deck", classification: "research-only", artifactStatus: "static-command-deck" },
    { id: "cycle-net-edge", type: "cycle_edge_fixture", path: "fixture://winston/cycle-net-edge", generatedAt: "2026-06-08T17:35:00-04:00", rank: 1, freshness: "fresh", note: "Cycle-level gross-to-net examples from static fixture only.", mode: "Source Index", timestamp: "2026-06-08T17:35:00-04:00", source: "fixture://winston/cycle-net-edge", classification: "research-only", artifactStatus: "backtest-derived-static-fixture" },
    { id: "fee-drag-churn-meter", type: "fee_drag_fixture", path: "fixture://winston/fee-drag-churn-meter", generatedAt: "2026-06-08T17:36:18-04:00", rank: 1, freshness: "fresh", note: "Static fee-drag/churn meter; not fee-true and not live.", mode: "Source Index", timestamp: "2026-06-08T17:36:18-04:00", source: "fixture://winston/fee-drag-churn-meter", classification: "research-only", artifactStatus: "backtest-derived-static-fixture" },
    { id: "demo-readiness-gates", type: "demo_gate_fixture", path: "fixture://winston/demo-readiness-gates", generatedAt: "2026-06-11T00:00:00-04:00", rank: 1, freshness: "fresh", note: "Static public demo readiness gates; no deployment action.", mode: "Source Index", timestamp: "2026-06-11T00:00:00-04:00", source: "fixture://winston/demo-readiness-gates", classification: "research-only", artifactStatus: "static-demo-readiness" },
    { id: "deployment-readiness-notes", type: "deployment_notes_fixture", path: "fixture://winston/deployment-readiness-notes", generatedAt: "2026-06-11T00:00:00-04:00", rank: 1, freshness: "fresh", note: "Planning notes for future winston.acidmartin.com static deployment only; DNS/hosting not configured.", mode: "Source Index", timestamp: "2026-06-11T00:00:00-04:00", source: "fixture://winston/deployment-readiness-notes", classification: "research-only", artifactStatus: "planning-notes-no-deploy" },
    { id: "run-mini-scalp-v03", type: "backtest_fixture", path: "fixture://backtest/run-mini-scalp-v03", generatedAt: "2026-06-08T17:35:00-04:00", rank: 1, freshness: "fresh", note: "Mock bounded backtest window.", mode: "Source Index", timestamp: "2026-06-08T17:35:00-04:00", source: "fixture://backtest/run-mini-scalp-v03", classification: "research-only", artifactStatus: "mock-fixture" },
    { id: "trade-detector", type: "detector_fixture", path: "fixture://trade-detector", generatedAt: "2026-06-08T17:36:31-04:00", rank: 1, freshness: "fresh", note: "Mock duplicate and zero-profit detector.", mode: "Source Index", timestamp: "2026-06-08T17:36:31-04:00", source: "fixture://trade-detector", classification: "mock", artifactStatus: "mock-fixture" },
    { id: "runtime-state", type: "runtime_fixture", path: "fixture://runtime-state", generatedAt: "2026-06-08T17:38:44-04:00", rank: 1, freshness: "fresh", note: "Display-only runtime state, not a control surface.", mode: "Source Index", timestamp: "2026-06-08T17:38:44-04:00", source: "fixture://runtime-state", classification: "mock", artifactStatus: "mock-fixture" },
    { id: "replay-input-v1-2026-06-09", type: "offline_replay_input_fixture", path: "./winston_mini_scalp_lab_replay_input_v1_2026-06-09.json", generatedAt: "2026-06-09T00:00:00-04:00", rank: 1, freshness: "fresh", note: "Copied offline screenshot-derived replay input. Not live/read-only root wiring.", mode: "Source Index", timestamp: "2026-06-09T00:00:00-04:00", source: "./winston_mini_scalp_lab_replay_input_v1_2026-06-09.json", classification: "research-only", artifactStatus: "offline-screenshot-fixture" },
    { id: "replay-backtest-v0-2026-06-09", type: "offline_replay_backtest_fixture", path: "./winston_mini_scalp_lab_replay_backtest_v0_2026-06-09.json", generatedAt: "2026-06-09T00:00:00-04:00", rank: 1, freshness: "fresh", note: "Copied offline screenshot-derived replay/backtest v0. Not fee-true, not net-PnL proof, and not live/root wiring.", mode: "Source Index", timestamp: "2026-06-09T00:00:00-04:00", source: "./winston_mini_scalp_lab_replay_backtest_v0_2026-06-09.json", classification: "research-only", artifactStatus: "offline-replay-backtest-fixture" },
    { id: "pair-memory-guard-contract-v0-2026-06-11", type: "offline_pair_memory_guard_contract_fixture", path: "./mini_scalp_lane_pair_memory_guard_dashboard_telemetry_contract_v0_2026-06-11.json", generatedAt: "2026-06-11T00:00:00-04:00", rank: 1, freshness: "fresh", note: "Copied research-only telemetry contract. Not live, not a demo blocker, no runtime authority, and no Winston Ops root wiring.", mode: "Source Index", timestamp: "2026-06-11T00:00:00-04:00", source: "./mini_scalp_lane_pair_memory_guard_dashboard_telemetry_contract_v0_2026-06-11.json", classification: "research-only", artifactStatus: "copied-telemetry-contract-fixture" },
    { id: "winston-demo-relaunch-checklist", type: "static_demo_checklist_fixture", path: "fixture://winston/demo-relaunch-checklist", generatedAt: "2026-06-09T00:00:00-04:00", rank: 1, freshness: "fresh", note: "Static relaunch checklist only. No deployment, DNS, live root, collector, connector, runtime, or order system is configured.", mode: "Source Index", timestamp: "2026-06-09T00:00:00-04:00", source: "fixture://winston/demo-relaunch-checklist", classification: "research-only", artifactStatus: "static-demo-checklist" }
  ],
  futureIngestion: {
    contract: "winston.mini_scalp_lab.replay_input.v1",
    mode: "Offline Replay Input Fixture",
    timestamp: "2026-06-09T00:00:00-04:00",
    source: "./winston_mini_scalp_lab_replay_input_v1_2026-06-09.json",
    freshness: "fresh",
    classification: "research-only",
    artifactStatus: "offline-screenshot-fixture",
    status: "copied-static-fixture-not-live-wired",
    expectedShape: [
      "run_id",
      "generated_at",
      "source_artifact",
      "symbol",
      "strategy_version",
      "replay_window",
      "fills",
      "bars",
      "fees",
      "slippage",
      "freshness_state"
    ],
    guardrail: "Offline fixture only. The prototype reads the copied JSON in this bundle and does not read Winston Ops roots, collectors, Hyperliquid, live orders, lane state, or runtime controls."
  },
  demoRelaunch: {
    mode: "Static Demo Relaunch Checklist",
    timestamp: "2026-06-09T00:00:00-04:00",
    source: "fixture://winston/demo-relaunch-checklist",
    freshness: "fresh",
    classification: "research-only",
    artifactStatus: "static-demo-checklist",
    summary: "Winston demo site return checklist. Static/demo/research-only; no deployment, DNS, live roots, or order authority.",
    items: [
      { label: "Local preview readiness", status: "ready", detail: "index.html opens locally; no install or dev server required.", tone: "good" },
      { label: "Static fixture inventory", status: "ready", detail: "Mock fixture, replay input v1, replay/backtest v0, source index, and freshness report are bundled.", tone: "good" },
      { label: "Replay/backtest v0 present", status: "ready", detail: "Copied JSON and Markdown report are static fixtures inside this bundle.", tone: "good" },
      { label: "Fee-true import", status: "blocked", detail: "Requires external fills, fees, funding, market data, and account-equity packet.", tone: "bad" },
      { label: "Live controls connected", status: "not connected", detail: "No live controls, arm/disarm, autopilot, thresholds, cadence, or runtime controls are wired.", tone: "good" },
      { label: "Hyperliquid connection", status: "not connected", detail: "No Hyperliquid connector, endpoint, credential, or live exchange root is used.", tone: "good" },
      { label: "Order authority", status: "none", detail: "Dashboard cannot place, modify, cancel, queue, or authorize orders.", tone: "good" },
      { label: "Stop/disarm evidence", status: "missing", detail: "Stop/disarm compliance proof remains blocked by missing lifecycle logs.", tone: "warn" },
      { label: "Future winston.acidmartin.com prerequisites", status: "future only", detail: "Needs separate hosting, DNS, static artifact promotion, cache/version policy, and approval. Not configured here.", tone: "warn" }
    ]
  }
};
