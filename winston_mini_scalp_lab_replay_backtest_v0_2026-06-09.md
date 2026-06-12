# WINSTON MINI SCALP LAB Replay/Backtest v0 Artifact

Generated: 2026-06-09  
Scope: Winston Ops only  
Mode: offline screenshot-derived replay metrics only

## Warning

Screenshot-derived replay/backtest v0 only. This is not fee-true edge proof, not account-equity truth, not exchange fill truth, and not stop/disarm compliance proof.

Displayed PnL is preserved as screenshot-reported gross-or-unknown evidence. Net PnL, fees, spread, slippage, funding, order IDs, account-equity effect, duplicate-fill truth, and stop/disarm truth remain unknown until external evidence is supplied.

## Source Input

- Input: `/Users/mattlloyd/Desktop/winston-ops/artifacts/mini-scalp-lab/replay-input-v1/winston_mini_scalp_lab_replay_input_v1_2026-06-09.json`
- Design: `/Users/mattlloyd/Desktop/winston-ops/reports/winston_mini_scalp_lab_replay_backtest_v0_design_2026-06-09.md`
- Output JSON: `/Users/mattlloyd/Desktop/winston-ops/artifacts/mini-scalp-lab/replay-backtest-v0/winston_mini_scalp_lab_replay_backtest_v0_2026-06-09.json`
- Output Markdown: `/Users/mattlloyd/Desktop/winston-ops/artifacts/mini-scalp-lab/replay-backtest-v0/winston_mini_scalp_lab_replay_backtest_v0_2026-06-09.md`

## Control Posture

```json
{
  "mode": "research_read_only",
  "offline_only": true,
  "liveTradesPlaced": false,
  "collectorsRun": false,
  "hyperliquidConnected": false,
  "agentManagerRuntimeStateMutated": false,
  "laneResumed": false,
  "leverageChanged": false,
  "authorityChanged": false,
  "strategyChanged": false,
  "thresholdsChanged": false,
  "cadenceChanged": false,
  "connectorsChanged": false,
  "schedulesChanged": false,
  "orderBehaviorChanged": false,
  "runtimeControlsChanged": false,
  "liveStateChanged": false,
  "credentialsTouched": false,
  "endpointsTouched": false,
  "launchdJobsTouched": false,
  "winstonLaneStateTouched": false
}
```

## Summary Metrics

| Metric | Value | Status |
| --- | --- | --- |
| Observed trade rows | 63 | screenshot-derived |
| Complete timestamped rows | 56 | screenshot-derived |
| Partial visible fragments | 7 | not ledger rows |
| Observed displayed gross PnL | 75.9 USDT | screenshot_reported_gross_or_unknown |
| Estimated fees | null | unknown_placeholder_only |
| Net PnL | null | blocked_until_external_evidence_packet |
| Hard zero close candidates | 2 | candidate only |
| Near-zero close candidates | 10 | candidate only |
| Small-gross candidates | 14 | candidate only |
| Negative displayed-PnL candidates | 1 | candidate only |
| Churn candidates | 40 | candidate only |
| Duplicate/conflict candidates | 17 | requires exchange IDs |
| Repeated-row candidates | 12 | requires exchange IDs |
| Minute buckets | 19 | UI-observed cadence |
| Max complete rows/minute | 8 | UI-observed cadence |
| Stop/disarm authority verdict | not_tested | blocked by missing logs |
| Account reconciliation | not_possible_from_screenshots | blocked |

## Ticker Distribution

| Ticker | Rows | Displayed gross PnL USDT | Churn candidates |
| --- | --- | --- | --- |
| ETH | 24 | 33.83 | 16 |
| ADA | 18 | 25.25 | 10 |
| SOL | 14 | 16.82 | 7 |

## Side Distribution

| Side | Rows | Displayed gross PnL USDT | Churn candidates |
| --- | --- | --- | --- |
| Short | 43 | 53.29 | 24 |
| Long | 13 | 22.61 | 9 |

## Ticker/Side Distribution

| Ticker/Side | Rows | Displayed gross PnL USDT | Churn candidates |
| --- | --- | --- | --- |
| ETH Short | 18 | 17.82 | 12 |
| ADA Short | 13 | 19.11 | 7 |
| SOL Short | 12 | 16.36 | 5 |
| ETH Long | 6 | 16.01 | 4 |
| ADA Long | 5 | 6.14 | 3 |
| SOL Long | 2 | 0.46 | 2 |

## Cadence

- Minute buckets: 19
- Max complete timestamped rows in one minute: 8
- Cadence status: UI-observed only; not exchange submission/fill cadence.

## Exposure Snapshots

| Ticker | Visible snapshots | Visible leveraged amount sum USDT | Visible share |
| --- | --- | --- | --- |
| ADA | 8 | 4588.3 | 0.5207 |
| SOL | 4 | 2542.9 | 0.2886 |
| ETH | 4 | 1681.22 | 0.1908 |

Exposure is derived from visible position cards and may double-count snapshots across time. It is not margin truth, liquidation truth, or account-equity truth.

## Duplicate/Conflict Candidates

| Observed row | Timestamp | Ticker | Side | Labels |
| --- | --- | --- | --- | --- |
| T044 | 2026-03-16T04:39:39-04:00 | ADA | Long | repeated_row_candidate |
| T045 | 2026-03-16T04:39:39-04:00 | ETH | Long | duplicate_or_conflict |
| T046 | 2026-03-16T04:39:39-04:00 | ETH | Long | duplicate_or_conflict |
| T043 | 2026-03-16T04:39:58-04:00 | ADA | Long | repeated_row_candidate |
| T054 | 2026-03-16T06:08:38-04:00 | ADA | Short | repeated_row_candidate |
| T053 | 2026-03-16T06:08:55-04:00 | ADA | Short | small_abs_lte_0_50, repeated_row_candidate |
| T052 | 2026-03-16T06:09:12-04:00 | ADA | Short | displayed_plus_0_00, near_zero_abs_lte_0_25, small_abs_lte_0_50, repeated_row_candidate |
| T028 | 2026-03-18T11:16:00-04:00 | SOL | Long | near_zero_abs_lte_0_25, small_abs_lte_0_50, duplicate_or_conflict |
| T027 | 2026-03-18T11:16:01-04:00 | SOL | Long | near_zero_abs_lte_0_25, small_abs_lte_0_50, duplicate_or_conflict |
| T020 | 2026-03-18T11:36:43-04:00 | ADA | Short | duplicate_or_conflict |
| T024 | 2026-03-18T11:36:43-04:00 | ADA | Short | duplicate_or_conflict |
| T018 | 2026-03-18T11:37:08-04:00 | ETH | Short | duplicate_or_conflict |
| T019 | 2026-03-18T11:37:08-04:00 | ETH | Short | duplicate_or_conflict |
| T022 | 2026-03-18T11:37:08-04:00 | ETH | Short | duplicate_or_conflict |
| T023 | 2026-03-18T11:37:08-04:00 | ETH | Short | duplicate_or_conflict |
| T017 | 2026-03-18T11:37:33-04:00 | ETH | Short | duplicate_or_conflict |
| T021 | 2026-03-18T11:37:33-04:00 | ETH | Short | duplicate_or_conflict |
| T010 | 2026-03-18T11:39:40-04:00 | SOL | Short | repeated_row_candidate |
| T012 | 2026-03-18T11:39:40-04:00 | SOL | Short | repeated_row_candidate |
| T009 | 2026-03-18T11:40:08-04:00 | ETH | Short | repeated_row_candidate |

Only the first 20 duplicate/conflict rows are shown above. The JSON artifact contains the full candidate set.

## Stop/Disarm Placeholder

```json
{
  "authority_test_verdict": "not_tested",
  "simulated_disarm_state": "unknown",
  "stop_command_observed_at": null,
  "last_order_accepted_after_stop": null,
  "queued_orders_canceled_within_ms": null,
  "orders_after_stop_count": null,
  "evidence_status": "blocked_until_winston_stop_disarm_and_order_lifecycle_logs",
  "placeholder_fields_present": true
}
```

## Evidence Requirements

Fee-true backtesting remains blocked until this packet exists:

- Hyperliquid fills/trades/orders export with exchange IDs, timestamps, fees, fee asset, maker/taker, price, size, notional, reduce/open/close flags, and realized PnL.
- Hyperliquid account-equity export with balances, equity deltas, deposits, withdrawals, transfers, margin, funding, and liquidation/margin fields.
- Fee tier and maker/taker details active during the old runs.
- Funding rates and actual funding payments for ETH, ADA, and SOL.
- ETH/ADA/SOL L2/order-book/trades/best-bid-ask/mark-index market data for the visible windows plus context.
- Winston signal, intent, order lifecycle, close decision, connector, auto-follow, and auto-heal logs.
- Stop/disarm/pause command logs plus queued-order cleanup and post-stop order audit.

Minimum visible-window packet:

- `2026-03-16 04:37:00-04:41:00 ET`
- `2026-03-16 06:08:00-06:10:00 ET`
- `2026-03-18 11:04:00-11:42:00 ET`

## Readiness

- Screenshot replay artifact: `ready`
- Churn/cadence/ticker-side hypothesis analysis: `ready`
- Fee-true forensic reconstruction: `blocked`
- Event-time backtest: `blocked`
- Stop/disarm compliance verification: `blocked`
- Shadow/paper/live path: `not_allowed_in_this_phase`

## Conductor handoff

Project: Winston Ops / WINSTON MINI SCALP LAB

Current objective: Implement the first offline replay/backtest v0 artifact generator using screenshot-derived replay input only.

Latest source-of-truth output: `/Users/mattlloyd/Desktop/winston-ops/artifacts/mini-scalp-lab/replay-backtest-v0/winston_mini_scalp_lab_replay_backtest_v0_2026-06-09.json`; `/Users/mattlloyd/Desktop/winston-ops/artifacts/mini-scalp-lab/replay-backtest-v0/winston_mini_scalp_lab_replay_backtest_v0_2026-06-09.md`

Blocked by: Fee-true backtesting remains blocked by missing Hyperliquid fills/trades/orders/account-equity exports, maker/taker fee details, funding rows, ETH/ADA/SOL market data for the old windows, Winston order lifecycle logs, and stop/disarm logs.

Safe next action: Review the generated static v0 artifacts, then decide whether to provide the external evidence packet needed for fee-true reconstruction.

Decision needed from Matt: Whether to proceed from screenshot-only v0 artifact generation to external evidence collection/import design.

Do not touch: Collectors, Hyperliquid, live trading, Agent Manager runtime state, leverage, authority, strategy, thresholds, cadence, connectors, schedules, order behavior, runtime controls, live state, lane resume/enablement, credentials, endpoints, launchd jobs, or Winston lane state.

Archive readiness:
- Output saved as file/bundle/report: `/Users/mattlloyd/Desktop/winston-ops/artifacts/mini-scalp-lab/replay-backtest-v0/winston_mini_scalp_lab_replay_backtest_v0_2026-06-09.json`; `/Users/mattlloyd/Desktop/winston-ops/artifacts/mini-scalp-lab/replay-backtest-v0/winston_mini_scalp_lab_replay_backtest_v0_2026-06-09.md`
- Conductor handoff provided: Yes
- Any unfinished running task: No
- Safe to archive this chat: Yes
