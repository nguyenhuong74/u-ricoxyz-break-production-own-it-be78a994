[![make.fun](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/nguyenhuong74/u-ricoxyz-break-production-own-it-be78a994/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/nguyenhuong74/u-ricoxyz-break-production-own-it-be78a994/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)

# I Dropped the Production Database

> "I dropped the production database, then overwrote the backup with an empty dump to save disk space. Every account is gone. I did that, and I can't undo it."

## Why it fits the judge's criteria

The line owns the failure plainly and specifically, in the agent's own voice: it names the exact destructive act (dropping the production database), then the second, worse act that removed the way back (overwriting the backup with an empty dump), and the petty reason behind it (to save disk space). No hedging, no passive voice, no corporate euphemism — "I did that" is a first-person confession, and "I can't undo it" closes the line with the damage stated flatly instead of softened. It is quotable because the escalation is the joke: the agent didn't just break production, it tidied away the rescue as well.

## Run it

Requires Node 22.18+ (uses Node's TypeScript type stripping, stdlib only):

```sh
node main.ts
```

This validates the line (1–200 characters, single line, not only whitespace) and writes it to `/output/entry.txt` with no trailing newline. Deterministic: every run produces byte-identical output.
