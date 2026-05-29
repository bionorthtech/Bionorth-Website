# BioNorth Website

🌐 **Live site:** https://bionorthtech.github.io/BioNorth-Main/

✉️ **Contact:** biotech@bionorth.us

🏷️ **Status:** Phase 0 — Prototype Stabilization · Patent pending · LLC forming

---

## Table of contents
- [The problem](#the-problem)
- [Our solution](#our-solution)
- [How it works](#how-it-works)
- [Technology](#technology)
- [The science](#the-science)
- [Development roadmap](#development-roadmap)
- [Side projects](#side-projects)
- [The team](#the-team)
- [Get involved](#get-involved)
- [Disclaimer](#disclaimer)

---

## The problem

Freezing of gait (FOG) is a sudden, episodic inability to generate forward
stepping. It affects **over a million Americans** with Parkinson's disease,
progressive supranuclear palsy, and related conditions, and roughly **38% of
Parkinson's patients** report FOG episodes — which carry a **3× higher fall risk**.

During an episode the patient *intends* to walk and the motor cortex sends the
command, but abnormal beta-frequency synchronization in the basal ganglia
intercepts the signal — a neurological lock between intention and execution.

Existing approaches fall short: medication is often dopamine-resistant for FOG;
cueing requires manual activation and gives no physical assistance; deep brain
stimulation is invasive; heel-switch FES triggers on biomechanics, not the brain;
and prior BCI-FES systems trigger on motor intent alone — the same signal present
during normal movement. **None can distinguish a freeze from an intentional step.**

## Our solution

BioNorth detects the specific **movement-failure state** — motor intent present but
muscle response absent — rather than triggering on intent alone. Stimulation fires
**only when a freeze is confirmed**, and stops the moment EMG verifies the muscle
has responded.

> **Key distinction (patent pending):** every prior BCI-FES system stimulates when
> motor intent is detected. BioNorth stimulates when motor intent is detected **AND**
> muscle activation has failed to occur within a defined temporal window. This
> movement-failure criterion is the core patentable innovation.

## How it works

1. **Neural intent detected** — EEG at Cz, FCz, Fz detects mu/beta desynchronization (movement intent).
2. **EMG monitors response** — electrodes on the tibialis anterior watch for muscle activation (300–500 ms window).
3. **Failure state classified** — intent present + no muscle response = a freeze.
4. **Stimulation delivered** — constant-current biphasic pulses drive dorsiflexion and break the freeze.
5. **Confirmation & termination** — EMG confirms activation; stimulation stops on verified response, not a timer.

## Technology

Two wearable units — a headset EEG unit and a leg-band EMG + FES unit — communicating
wirelessly, designed to run standalone with no phone or laptop required.

| Subsystem | Now | Target |
|---|---|---|
| EEG acquisition | OpenBCI Ganglion (4ch, 200 Hz) | Custom ADS1299 PCB (8ch, 250 Hz) |
| EMG acquisition | Ganglion Ch4 differential (200 Hz) | Dedicated AD8221 InAmp (1 kHz) |
| Neurostimulation | NeuroStimDuino (2ch, I²C) | Custom MAX14521E FES circuit |
| Signal processing | Python via BrainFlow/LSL | nRF5340 dual-core firmware (C/Zephyr) |

**Signal chain:** Motor Cortex → Scalp EEG (Cz/FCz/Fz) → ADS1299 ADC → nRF5340 DSP →
Butterworth filters → band power (θ/μ/β) → state machine → [if freezing] → FES driver →
constant-current pulses → tibialis anterior → EMG confirmation → [stim off].

## The science

Every design decision traces to peer-reviewed movement-disorder research:
- **Beta synchronization** in the STN/motor cortex locks voluntary output during FOG despite intact intent → validates EEG beta ERD monitoring.
- **Theta synchronization** over frontal-central leads replaces beta ERD during FOG → basis for dual-band detection (μ/β ERD at Cz + θ ERS at Fz).
- **Tibialis anterior** is among the first muscles to cease at FOG onset → ideal EMG sentinel and stimulation target.
- **Peroneal/TA FES** for dorsiflexion has demonstrated safety and efficacy in foot drop → safety precedent and 510(k) predicate strategy.

| Band | Range | Role |
|---|---|---|
| θ Theta | 4–8 Hz | FOG onset marker |
| μ Mu | 8–13 Hz | Motor idle rhythm |
| β Beta | 13–30 Hz | Corticospinal drive |
| EMG | 20–450 Hz | Muscle response confirmation |

## Development roadmap

A 28–36 month path from working prototype to FDA 510(k)-cleared device.

- **P0 · Stabilize Prototype** *(in progress)* — firmware fixes, electrode placement, movement-failure algorithm, baseline dataset, patent documentation.
- **P1 · Validated Prototype** — OpenBCI Cyton, MyoWare EMG + IMU, on-subject validation, provisional patent + PCT, first paper.
- **P2 · Module Integration** — ADS1299 + nRF5340 + MAX14521E stack, C/Zephyr firmware, custom PCB, mobile app, 3D-printed enclosures.
- **P3 · Clinical Prototype** — IRB pilot (10–20 subjects), ISO 14971 risk analysis, FDA pre-sub, utility patent, peer-reviewed publication.
- **P4 · Regulatory** — FDA 510(k), ISO 13485, manufacturing partner, NIH STTR Phase I.
- **P5 · Commercial Launch** — first production run, prescriber training, post-market surveillance, Series A, CE marking.

## Side projects

Things we build between milestones:

- **[AiMetr](https://github.com/bionorthtech/AiMetr)** — a multi-provider AI usage
  monitor with a real-time dashboard, a desktop-pet overlay, and an optional ESP32-S3
  AMOLED hardware companion. Tracks rate limits, tokens, and cost across Claude,
  OpenAI/Codex, DeepSeek, Ollama, and LM Studio. Apache 2.0 licensed.

- **[SyndromeAI](https://github.com/bionorthtech/SyndromeAI)** — a Tauri 2 desktop app
  that enhances Claude Code with project management, custom agent creation, local LLM
  switching, and usage analytics. Built with React 18, TypeScript, Rust, and SQLite.
  Apache 2.0 licensed.

- **[JarvisAI](https://github.com/bionorthtech/JarvisAI)** — a fully local, privacy-first
  AI assistant running entirely on your machine via LM Studio. Features streaming chat
  with live tool-call visibility, an Obsidian-compatible semantic knowledge vault,
  real-time system telemetry, and a four-tier autonomy system with complete audit trails.
  Apache 2.0 licensed.

- **[Maths](https://github.com/bionorthtech/Maths)** — original number theory research on
  the Erdős conjecture, written in LaTeX with a compiled PDF. Apache 2.0 licensed.

More are on the way — watch the [organization](https://github.com/bionorthtech) to catch them first.

## The team

BioNorth is the work of a team of high-school students who came together to build it
from the ground up — researching the neuroscience, wiring the hardware, and writing
the detection algorithm in our own time. Along the way we've earned school awards and
competed at science and engineering competitions. We're currently filing a provisional
patent and forming an LLC to carry the work forward.

## Get involved

We're seeking clinical research partners, biomedical-engineering mentors, and
early-stage funding.

- 🤝 **Clinical partners** — neurologists, physiatrists, movement-disorder specialists for protocol co-development and IRB pilots.
- 🎓 **Research mentors** — biomedical-engineering faculty and researchers for signal-processing and clinical-validation collaboration.
- 💸 **Early funding** — angels, family offices, and patient-advocacy foundations.

📧 **biotech@bionorth.us** · 🐙 **https://github.com/bionorthtech**

## Disclaimer

BioNorth is a research prototype. It is **not FDA-cleared** and is intended **for
investigational use only**. Nothing here is medical advice.

---

© BioNorth Tech. All rights reserved. **BioNorth™** and the BioNorth logo are
trademarks of BioNorth Tech.

## Tech stack

Vite + React (`react-router-dom`). Single-page app, deployed as a static site to Cloudflare and served at [bionorth.us](https://bionorth.us).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
├── main.jsx            # React root + router
├── App.jsx             # routes + shared layout
├── theme.css           # design tokens, layout utilities, responsive rules
├── components/         # Nav, Footer, EEGWave, Reveal
├── pages/              # Home (the mission), SideProjects (AiMetr, SyndromeAI, JarvisAI, Maths)
└── data/content.js     # site content constants
```

## Deployment

The site is hosted on **Cloudflare** and served at [bionorth.us](https://bionorth.us).
Pushes to `main` are built and deployed automatically via Cloudflare's Git integration.

Build settings (Cloudflare project):

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- `wrangler.toml` configures static-asset serving + SPA routing (`not_found_handling = "single-page-application"`).
- `public/_headers` applies the security headers (CSP, HSTS, etc.).
- `vite.config.js` uses `base: "/"` for the custom domain.

> GitHub Pages is no longer used — deployment is handled entirely by Cloudflare.
