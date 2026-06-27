(function () {
  "use strict";

  window.WV_TERMINAL_V031_FIXTURE = {
    prototype_id: "winston-vault-cinematic-hud-terminal-v0.3.1",
    accepted_baseline: {
      verdict: "ACCEPT_CINEMATIC_HUD_TERMINAL_V0_3_STATIC_PROTOTYPE",
      review_path: "/Users/mattlloyd/Desktop/agent-manager/state/deployment/winston_vault_cinematic_hud_terminal_v0_3_static_prototype_acceptance_2026-06-26.md",
      review_sha256: "d80bf5ff44cd02dfc411937a8a73b697de3c85dc289705de97c9c63cb23e1d7b"
    },
    generated_at: "2026-06-26T13:35:00-04:00",
    mode: "local_static_display_only",
    authority: {
      posture: "STATIC_FIXTURE_DISPLAY_ONLY / NO_TRADING_AUTHORITY",
      live_polling: false,
      api_calls: "none",
      provider_calls: "none",
      runtime_controls: "none",
      broker_execution: "none",
      deposit_controls: "none",
      state_mutation: false,
      readiness_promotion: "none",
      deploy: "none",
      capital_posture: "NO_DEPOSIT_REVIEW_ALLOWED / PAPER_ONLY / $0 / NOT_READY"
    },
    market_core: {
      label: "Market Core",
      pulse_state: "STATIC_FIXTURE_ACCEPTED_LIVE_CONTEXT",
      severity: "info",
      change_state: "accepted_evidence",
      staleness: "fresh",
      telemetry: [
        { id: "freshness", label: "BTC/ETH", value: "accepted/live", severity: "success", change_state: "accepted_evidence", staleness: "fresh" },
        { id: "risk", label: "Capital", value: "$0 / NOT_READY", severity: "critical", change_state: "blocker", staleness: "fresh" },
        { id: "evidence", label: "Evidence", value: "proof first", severity: "info", change_state: "accepted_evidence", staleness: "fresh" },
        { id: "capital", label: "Authority", value: "display only", severity: "critical", change_state: "blocker", staleness: "fresh" }
      ]
    },
    live_strip: [
      {
        symbol: "BTC",
        title: "BTC Live-State Restoration",
        state: "accepted/live",
        signal: "chart restoration + freshness deployment accepted",
        price_label: "display-only fixture",
        momentum: "low-vol context restored",
        severity: "success",
        change_state: "green_flip",
        staleness: "fresh",
        evidence: "terminal_kalshi_btc_eth_freshness_live_deployment_state_archive_2026-06-24.md"
      },
      {
        symbol: "ETH",
        title: "ETH Live-State Restoration",
        state: "accepted/live",
        signal: "paired freshness state accepted",
        price_label: "display-only fixture",
        momentum: "market-structure context restored",
        severity: "success",
        change_state: "new_data",
        staleness: "fresh",
        evidence: "terminal_kalshi_btc_eth_dashboard_live_deployment_state_archive_2026-06-24.md"
      }
    ],
    panels: {
      opportunity_lane: {
        title: "Winston Opportunity Lane",
        verdict: "ACCEPT_DESIGN_ONLY",
        severity: "success",
        change_state: "accepted_evidence",
        staleness: "fresh",
        rows: [
          { label: "Clean review lane", value: "accepted design-only", severity: "success", change_state: "accepted_evidence", staleness: "fresh" },
          { label: "Routing authority", value: "do_not_route_to_winston_execution", severity: "critical", change_state: "blocker", staleness: "fresh" },
          { label: "Next safe action", value: "review local evidence artifacts only", severity: "info", change_state: "unchanged", staleness: "fresh" }
        ]
      },
      vault_gate: {
        title: "Vault Capital / Readiness Gate",
        verdict: "NO_DEPOSIT_REVIEW_ALLOWED",
        severity: "critical",
        change_state: "blocker",
        staleness: "fresh",
        rows: [
          { label: "Posture", value: "PAPER_ONLY / $0", severity: "critical", change_state: "blocker", staleness: "fresh" },
          { label: "Readiness", value: "NOT_READY", severity: "critical", change_state: "blocker", staleness: "fresh" },
          { label: "Capital evidence rows", value: "0", severity: "critical", change_state: "unchanged", staleness: "fresh" },
          { label: "Sample count", value: "0/4", severity: "warning", change_state: "stale_warning", staleness: "stale" }
        ]
      },
      jobs_critical_path: {
        title: "July 2 Jobs Critical Path",
        verdict: "FROZEN_CRITICAL_PATH",
        severity: "warning",
        change_state: "stale_warning",
        staleness: "stale",
        rows: [
          { label: "Earliest review gate", value: "2026-07-02 10:00 ET", severity: "warning", change_state: "stale_warning", staleness: "stale" },
          { label: "Pre-60m row", value: "hard no-go until complete", severity: "critical", change_state: "blocker", staleness: "fresh" },
          { label: "Vault sample", value: "NO_SAMPLE_COMPLETE_YET", severity: "warning", change_state: "stale_warning", staleness: "stale" }
        ]
      },
      factor_risk: {
        title: "EF-RQ-001 Factor / Risk",
        verdict: "UNIVERSAL_FACTOR_RISK_PREVIEW_ACCEPTED",
        severity: "success",
        change_state: "accepted_evidence",
        staleness: "fresh",
        rows: [
          { label: "Universal factor/risk preview", value: "accepted", severity: "success", change_state: "accepted_evidence", staleness: "fresh" },
          { label: "BTC low-vol signal", value: "archive-only context / non-counting", severity: "warning", change_state: "stale_warning", staleness: "stale" },
          { label: "Winston routing", value: "do_not_route_to_winston_execution", severity: "critical", change_state: "blocker", staleness: "fresh" }
        ]
      },
      provider_state: {
        title: "EF-HERO Provider / Procurement",
        verdict: "PRE_PROCUREMENT_OUTREACH_IN_FLIGHT",
        severity: "warning",
        change_state: "new_data",
        staleness: "fresh",
        rows: [
          { label: "Issuer-page automation", value: "blocked", severity: "critical", change_state: "blocker", staleness: "fresh" },
          { label: "Licensed-provider path", value: "pre-procurement / outreach in flight", severity: "warning", change_state: "new_data", staleness: "fresh" },
          { label: "Alpha Vantage", value: "context-only, not EF-HERO source truth", severity: "warning", change_state: "stale_warning", staleness: "stale" },
          { label: "EODHD", value: "inconclusive / auth-blocked / no subscription", severity: "critical", change_state: "blocker", staleness: "fresh" }
        ]
      },
      quarantined_strategies: {
        title: "Quarantined Strategies",
        verdict: "PERMANENT_QUARANTINE_DOCUMENTATION_ACCEPTED",
        severity: "warning",
        change_state: "accepted_evidence",
        staleness: "fresh",
        rows: [
          { label: "Concretum", value: "quarantined / not clearable", severity: "warning", change_state: "accepted_evidence", staleness: "fresh" },
          { label: "Connors", value: "quarantined / manual resume unsafe", severity: "warning", change_state: "accepted_evidence", staleness: "fresh" },
          { label: "Dual Momentum", value: "quarantined / readiness contribution 0", severity: "warning", change_state: "accepted_evidence", staleness: "fresh" }
        ]
      }
    },
    proof_graph: {
      title: "Proof Graph Drawer",
      verdict: "EVIDENCE_CHAIN_DISPLAY_ONLY",
      severity: "info",
      change_state: "accepted_evidence",
      staleness: "fresh",
      nodes: [
        { label: "BTC/ETH freshness archive", state: "accepted/live", severity: "success", change_state: "accepted_evidence", staleness: "fresh" },
        { label: "Universal factor/risk preview", state: "accepted", severity: "success", change_state: "accepted_evidence", staleness: "fresh" },
        { label: "EF-HERO source truth", state: "blocked before source", severity: "critical", change_state: "blocker", staleness: "fresh" },
        { label: "Vault capital gate", state: "PAPER_ONLY / $0", severity: "critical", change_state: "blocker", staleness: "fresh" },
        { label: "July 2 Jobs path", state: "frozen critical path", severity: "warning", change_state: "stale_warning", staleness: "stale" }
      ]
    },
    signal_detail: {
      title: "Signal Detail Drawer",
      verdict: "DISPLAY_ONLY_SIGNAL_CONTEXT",
      severity: "info",
      change_state: "new_data",
      staleness: "fresh",
      rows: [
        { label: "Signal authority", value: "read-only chart/signal concept", severity: "info", change_state: "new_data", staleness: "fresh" },
        { label: "Execution", value: "none", severity: "critical", change_state: "blocker", staleness: "fresh" },
        { label: "Deposit readiness", value: "none / no promotion", severity: "critical", change_state: "blocker", staleness: "fresh" },
        { label: "State mutation", value: "forbidden", severity: "critical", change_state: "blocker", staleness: "fresh" }
      ]
    },
    alerts: [
      { lane: "Vault", message: "Real-capital posture remains NO_DEPOSIT_REVIEW_ALLOWED / PAPER_ONLY / $0 / NOT_READY.", severity: "critical", change_state: "blocker", staleness: "fresh" },
      { lane: "EF-HERO", message: "Issuer-page automation blocked; licensed-provider procurement path remains pre-procurement.", severity: "critical", change_state: "blocker", staleness: "fresh" },
      { lane: "Jobs", message: "July 2 Jobs path frozen as critical path until proof rows are complete.", severity: "warning", change_state: "stale_warning", staleness: "stale" },
      { lane: "Evidence", message: "BTC/ETH live-state restoration and freshness deployment accepted/live.", severity: "success", change_state: "accepted_evidence", staleness: "fresh" }
    ],
    news_lanes: {
      macro: [
        "Macro / global / rates: July 2 Jobs remains frozen critical path",
        "Vault macro sample count remains 0/4",
        "Rates path is display-only fixture context"
      ],
      crypto: [
        "Crypto / market structure: BTC freshness accepted/live",
        "ETH paired freshness accepted/live",
        "EF-RQ-001 BTC low-vol remains archive-only non-counting"
      ],
      internal: [
        "Internal: Winston clean opportunity review lane accepted design-only",
        "EF-HERO licensed-provider outreach in flight",
        "Quarantine documentation accepted; no resume authority"
      ]
    },
    animation_mapping: [
      { field: "change_state=green_flip|red_flip", animation: "one-shot vibration and directional glow", class_name: "change-green-flip / change-red-flip" },
      { field: "change_state=new_data", animation: "one-shot brighter flash then settle", class_name: "change-new-data" },
      { field: "severity=critical", animation: "stronger border plus one-shot emphasis", class_name: "severity-critical" },
      { field: "staleness=stale", animation: "amber breathing border and reduced opacity", class_name: "stale" },
      { field: "change_state=blocker", animation: "one-shot red-purple shimmer", class_name: "change-blocker" },
      { field: "change_state=accepted_evidence", animation: "one-shot cyan acceptance pulse", class_name: "change-accepted-evidence" },
      { field: "hover", animation: "subtle brightness and scale increase", class_name: "hover-lift" },
      { field: "prefers-reduced-motion", animation: "animations disabled; semantic colors retained", class_name: "reduced-motion" }
    ],
    agent_manager_review_prompt: "Review the local static Winston-Vault terminal v0.3.1 polish pass against the accepted v0.3 baseline. Confirm the mobile long-status clipping fix, improved mobile glance readability, semantic one-shot attention animation, nonblank animated core, no distracting blinking, preserved prefers-reduced-motion behavior, and unchanged static/display-only authority: no live polling, APIs, provider calls, runtime controls, broker/execution/deposit controls, Winston/Vault mutation, readiness promotion, trading authority, or deploy.",
    conductor_handoff: "Archive v0.3.1 as a local static visual polish pass only. Safe next action is Agent Manager review and static archive. Do not deploy, call providers, poll live data, add broker/order/deposit controls, mutate Winston/Vault state, or promote readiness.",
    archive_readiness: {
      status: "READY_FOR_STATIC_ARCHIVE_AFTER_SCREENSHOTS_AND_SMOKE",
      required_artifacts: [
        "index.html",
        "styles.css",
        "app.js",
        "fixtures/winston_vault_terminal_v0_3_1_fixture.js",
        "screenshots/winston-vault-terminal-v0-3-1-desktop.png",
        "screenshots/winston-vault-terminal-v0-3-1-mobile.png",
        "smoke_winston_vault_terminal_v0_3_1.cjs",
        "reports/terminal_winston_vault_cinematic_hud_terminal_v0_3_1_2026-06-26.md"
      ]
    }
  };
})();
