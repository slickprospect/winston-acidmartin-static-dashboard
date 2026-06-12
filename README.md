# Winston Static Research Dashboard

Created: 2026-06-08

This bundle is a fixture-backed Winston public research dashboard candidate for a future `winston.acidmartin.com` launch. Mini Scalp Lab is a research module inside Winston. The bundle is static HTML/CSS/JS and opens locally without installing dependencies.

It is demo/research-only. It does not connect to live news, Hyperliquid, Agent Manager, Winston runtime roots, collectors, connectors, schedules, order systems, arm/disarm controls, autopilot, lane state, thresholds, strategy settings, or trading authority.

## Contents

- `index.html`: static prototype entrypoint.
- `styles.css`: mobile-first dark dashboard styling.
- `fixture-data.js`: local mock data used by the renderer.
- `replay-input-v1.js`: browser-loadable wrapper around the copied replay input fixture.
- `replay-backtest-v0.js`: browser-loadable wrapper around the copied replay/backtest v0 fixture.
- `mini_scalp_lane_pair_memory_guard_dashboard_telemetry_contract_v0_2026-06-11.json`: copied research-only Pair Memory Guards telemetry contract.
- `winston_mini_scalp_lab_replay_input_v1_2026-06-09.json`: copied offline `winston.mini_scalp_lab.replay_input.v1` fixture.
- `winston_mini_scalp_lab_replay_backtest_v0_2026-06-09.json`: copied offline `winston.mini_scalp_lab.replay_backtest.v0` fixture.
- `winston_mini_scalp_lab_replay_backtest_v0_2026-06-09.md`: copied offline replay/backtest v0 report.
- `app.js`: small client-side renderer for cards, charts, gates, lists, and source labels.
- `source-index.json`: fixture source inventory.
- `freshness-report.json`: fixture freshness report and live-source limitations.
- `manifest.json`: bundle manifest.

## Public Demo Improvements

The dashboard now presents Winston as a polished operator/research product instead of a raw prototype:

- Top-of-screen static market headline ticker with clear source labels and a no-live-news warning.
- First-screen Winston command deck covering Winston status, Mini Scalp Lab replay/backtest v0, Pair Memory Guards, churn/fee-burn warnings, and demo relaunch state.
- Bloomberg-style dense cards, tighter first-viewport hierarchy, and mobile-first operator styling inspired by the saved Winston mobile dashboard screenshots.
- Cycle-level net edge table showing gross edge, fee/slippage/funding drag, and net edge by fixture cycle.
- Fee drag/churn meter with retained-edge, fee-burn, and churn-pressure bars.
- Demo readiness gates and future `winston.acidmartin.com` deployment notes.

## Static Headline Ticker

The headline rail is fixture-backed in `fixture-data.js` under `marketHeadlines`. It uses local static items with labels such as `WINSTON`, `MSL`, `GUARDS`, `RISK`, and `OPS`.

No live news API, RSS feed, web fetch, exchange connector, or runtime root is connected. Future live/news wiring must happen in a separate approved task and must preserve source labeling, freshness, and research-only boundaries.

## Fixture Schema Validation

`app.js` now runs a client-side fixture schema validator over displayed modules. Each module must carry:

- `mode`
- `timestamp`
- `source`
- `freshness`
- `classification` as `research-only`, `mock`, or `live-read-only`

The evidence/source drawer reports validated module count, missing metadata warnings, stale/missing freshness states, and classification counts. If a future fixture card omits source metadata, the card source line and drawer both surface a warning. Current public-demo additions are static `research-only` fixtures.

## Evidence Drawer

The compact drawer below the header lists schema status, source metadata warnings, freshness/staleness status, fixture source cards, the copied offline `winston.mini_scalp_lab.replay_input.v1` source, and the copied offline `winston.mini_scalp_lab.replay_backtest.v0` source.

The replay fixtures are loaded only from local bundle copies. They are not wired to Winston Ops, Agent Manager, Hyperliquid, collectors, runtime controls, or live orders.

## Offline Replay Input Panels

The dashboard renders the copied replay input as screenshot-derived fixture evidence:

- Observed trade rows with uncertainty badges for unknown net PnL, fees, and fee-true status.
- Observed position snapshots with screenshot source references.
- Observed dashboard states with caveats and ledger-truth status.
- Evidence gaps blocking fee-true/net-PnL reconstruction.
- Churn candidates with filters for hard zero, near-zero, small-gross, negative, duplicate/conflict, and repeated-row candidates.

Every observed trade, position, dashboard state, and churn candidate row shows its source screenshot reference. Displayed PnL remains screenshot-reported gross/unknown and is not fee-true/net-PnL verified.

## Replay/Backtest v0 Panel

The Winston dashboard renders copied `winston.mini_scalp_lab.replay_backtest.v0` metrics for the Mini Scalp Lab module:

- Observed rows and complete timestamped rows.
- Screenshot-displayed gross PnL.
- Churn, hard-zero, near-zero, small-gross, and duplicate/conflict candidates.
- Max complete rows per minute.
- Stop/disarm status as `not_tested`.
- Fee-true readiness as `blocked`.

These metrics are screenshot-derived only. They are not fee-true, not net PnL proof, not exchange fill truth, not account-equity truth, and not stop/disarm compliance proof.

## Pair Memory Guards Panel

The dashboard includes a static, research-only Pair Memory Guards panel for:

- `pair_near_zero_memory_plus_book_guard`
- `pair_toxic_memory_plus_book_guard`
- `pair_same_symbol_repetition_net_brake` as a demoted comparator

Each candidate shows research status, evidence confidence, false-block risk, good scalps preserved, churn cycles blocked, fees reduced, missing telemetry blockers, and `research_only_status`. The panel is labeled not live, not a demo blocker, and no runtime authority. It does not create blockers, thresholds, cooldowns, throttles, vetoes, live roots, lane state, or order behavior.

## Demo Relaunch Checklist

The top of the dashboard includes a static Winston demo relaunch checklist covering local preview readiness, fixture inventory, replay/backtest v0 presence, fee-true import blockage, live-control disconnection, Hyperliquid disconnection, lack of order authority, missing stop/disarm evidence, and future `winston.acidmartin.com` prerequisites.

The checklist is informational only. It does not deploy, configure DNS, connect live roots, touch collectors, or alter runtime/order systems.

## Demo Readiness Gates

The public demo readiness panel separates what is ready from what remains blocked:

- Static bundle integrity: pass.
- No live authority: pass.
- Research caveats visible: pass.
- Fee-true edge claim: blocked.
- Public hosting: future-only.

These gates are dashboard evidence only. They do not authorize deployment or trading.

## Guardrails

- Fixture/mock/research-only data.
- No live Winston Ops artifact roots are wired.
- No collectors were run.
- No Agent Manager or Winston Ops state was mutated.
- No Hyperliquid connection is used.
- Disabled arm/disarm/autopilot states are display-only evidence badges.
- Pair Memory Guards are static research labels only; no runtime/demo blocker authority is implied.

## Preview

Open:

`/Users/mattlloyd/Desktop/dashboards/artifacts/dashboard-bundles/winston-mini-scalp-lab-2026-06-08/index.html`

No dev server is required.

Optional local static server from the bundle directory:

```bash
python3 -m http.server 8765
```

Then open:

`http://127.0.0.1:8765/`

## Future winston.acidmartin.com Deployment Checklist

Future deployment to `winston.acidmartin.com` is only a planning option. This bundle does not configure hosting, DNS, credentials, deployment jobs, live roots, or runtime integrations.

Before a public launch, complete a separate bounded deployment task:

- Confirm Matt approval for static-only public hosting.
- Promote only this static bundle or a reviewed successor bundle.
- Configure hosting and DNS outside this dashboard-prep task.
- Keep data fixture-backed and versioned; do not add API keys, sockets, collectors, or runtime roots.
- Serve assets with a cache/version policy and keep `index.html` easy to refresh.
- Re-run local visual QA on desktop and mobile viewports.
- Confirm the launch banner and source drawer still state research-only, fixture-only, no live authority, no Hyperliquid, and no order control.

## Fixture Limitations

All numeric values, positions, trades, source timestamps, detector flags, freshness states, replay observations, and runtime states are fixture values for dashboard layout and information architecture only. Screenshot-derived PnL must not be treated as net PnL, fee-true edge, account ledger truth, order truth, stop authority truth, or trading authority.
