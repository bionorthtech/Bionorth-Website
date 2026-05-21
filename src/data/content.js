// ---------------------------------------------------------------------------
// BioNorth — the mission (neurotech freezing-of-gait device)
// ---------------------------------------------------------------------------

export const HERO_AWARD = {
  title: "National Innovator Challenge Winner",
  subtitle: "University of San Diego Camp · 2025",
};

export const TRUENORTH_PRODUCT = {
  name: "TrueNorth Neural Headset",
  nameLine1: "TrueNorth",
  nameLine2: "Neural Headset",
  tagline: "A direct brain-to-muscle connection for movement recovery.",
  overview:
    "The TrueNorth Neural Headset is a non-invasive brain-computer interface designed to help individuals with mobility challenges, specifically those experiencing freezing of gait. This device reads brain signals indicating the intention to move and translates them into muscle stimulation commands, creating a direct brain-to-muscle connection that bypasses neurological issues causing movement difficulties.",
  highlights: [
    { label: "Non-invasive", detail: "Wearable EEG headset — no surgery required." },
    { label: "Intent-driven", detail: "Reads brain signals when the patient intends to move." },
    { label: "Closed-loop", detail: "Translates neural intent into targeted muscle stimulation." },
  ],
  image: "truenorth-setup.png",
  imageAlt: "TrueNorth Neural Headset prototype with EEG sensors, wiring, and stimulation setup on a lab bench",
};

export const TEAM_MEMBERS = [
  {
    name: "Dario M",
    role: "Founder, BioTech, Inc.",
    website: "https://bionorth.us/",
    location: "Lake Mary, FL 32746",
    email: "biotech@bionorth.us",
  },
];

export const CONTACT_SECTIONS = [
  {
    category: "General Inquiries",
    name: "Dario M",
    role: "Founder, BioTech, Inc.",
    website: "https://bionorth.us/",
    location: "Lake Mary, FL 32746",
    email: "biotech@bionorth.us",
    color: "#00D4FF",
  },
  {
    category: "Legal Inquiries",
    name: "Eric Salama",
    role: "Associate Attorney",
    organization: "RezLegal",
    website: "https://www.rezlegal.com",
    color: "#FFB347",
  },
  {
    category: "Investment Opportunities",
    name: "Qvanta Group",
    email: "ceo@qvanta.io",
    color: "#00FF88",
  },
];

export const STATS = [
  { value: "1M+", label: "Americans experience freezing of gait" },
  { value: "~38%", label: "of Parkinson's patients report FOG episodes" },
  { value: "3×", label: "higher fall risk during a freeze episode" },
  { value: "0", label: "FDA-cleared EEG-triggered FOG devices exist" },
];

export const EXISTING_APPROACHES = [
  { name: "Levodopa / Medication", gap: "Up to 30% of FOG episodes are dopamine-resistant. Doesn't detect or respond to individual episodes." },
  { name: "Auditory / Visual Cueing", gap: "Requires manual activation. Cannot detect freeze onset automatically. Provides no physical assistance." },
  { name: "Deep Brain Stimulation", gap: "Invasive neurosurgery. Significant surgical risk. Continuous stimulation regardless of neural state." },
  { name: "Heel-Switch FES (WalkAide, Bioness)", gap: "Triggered by biomechanical sensors, not brain signals. Cannot detect FOG before biomechanical freeze. Requires ongoing gait cycle." },
  { name: "Prior BCI-FES Systems", gap: "Trigger stimulation on motor intent alone — the same signal present during normal movement. Cannot distinguish a freeze from intentional stepping." },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Neural Intent Detected",
    body: "EEG electrodes at Cz, FCz, and Fz monitor motor cortex activity. When the patient intends to walk, mu and beta frequency bands desynchronize — a measurable neural signature of movement intent.",
    icon: "🧠",
  },
  {
    step: "02",
    title: "EMG Monitors Response",
    body: "Simultaneously, EMG electrodes on the tibialis anterior monitor muscle activation. In healthy movement, the muscle responds within 300–500ms of neural intent firing.",
    icon: "📡",
  },
  {
    step: "03",
    title: "Failure State Classified",
    body: "If motor intent is detected but EMG confirms the muscle has not responded within the defined window — a freeze is classified. This movement failure state is the precise target, not intent alone.",
    icon: "⚡",
  },
  {
    step: "04",
    title: "Stimulation Delivered",
    body: "Constant-current biphasic electrical pulses are delivered to the target muscle, initiating dorsiflexion and breaking the freeze. Stimulation is calibrated per patient.",
    icon: "💪",
  },
  {
    step: "05",
    title: "Confirmation & Termination",
    body: "EMG confirms muscle activation. Stimulation stops immediately — not on a timer, but upon verified motor response. The loop closes, movement resumes.",
    icon: "✅",
  },
];

export const TECH_SPECS = [
  {
    component: "EEG Acquisition",
    current: "OpenBCI Ganglion (4ch, 200Hz)",
    target: "Custom ADS1299 PCB (8ch, 250Hz)",
    bands: ["Theta 4–8Hz (FOG marker)", "Mu 8–13Hz (motor idle)", "Beta 13–30Hz (motor drive)"],
    placement: "Cz (primary), FCz, Fz per 10-20 system",
  },
  {
    component: "EMG Acquisition",
    current: "Ganglion Ch4 differential (200Hz)",
    target: "Dedicated AD8221 InAmp (1kHz)",
    bands: ["Bandpass 20–450Hz", "RMS envelope detection", "Activation threshold calibrated per patient"],
    placement: "Tibialis anterior — upper third of anterior lower leg",
  },
  {
    component: "Neurostimulation",
    current: "NeuroStimDuino (2ch, I2C)",
    target: "Custom MAX14521E FES circuit",
    bands: ["Biphasic, charge-balanced", "Constant-current 0–20mA", "Frequency 30–40Hz, Pulse 200–300μs"],
    placement: "TA motor point + distal return electrode",
  },
  {
    component: "Signal Processing",
    current: "Python pipeline via BrainFlow/LSL",
    target: "nRF5340 dual-core firmware (C/Zephyr)",
    bands: ["4-state FSM: IDLE → INTENT → MOVEMENT/FREEZING", "Per-patient calibration profile", "Watchdog + emergency stop"],
    placement: "Standalone onboard — no laptop required",
  },
];

export const SCIENCE_REFS = [
  {
    finding: "Beta-frequency synchronization in STN and motor cortex locks voluntary motor output during FOG episodes despite intact cortical intent signals.",
    application: "Confirms EEG beta ERD monitoring is the correct neural signal for FOG-specific intent detection.",
  },
  {
    finding: "Beta ERD over Cz — present in healthy controls before movement — is replaced by theta band synchronization over frontal-central leads during FOG.",
    application: "Basis for BioNorth's dual-band detection: mu/beta ERD at Cz + theta ERS at Fz = high-confidence freeze state.",
  },
  {
    finding: "Tibialis anterior activation is among the first muscle activities to cease at FOG onset, making it the ideal EMG sentinel for movement failure detection.",
    application: "Justifies TA as primary EMG monitoring site and stimulation target.",
  },
  {
    finding: "Functional electrical stimulation of the peroneal nerve/TA for foot dorsiflexion has demonstrated safety and efficacy in foot drop across multiple clinical trials.",
    application: "Establishes safety precedent for BioNorth's stimulation approach and supports 510(k) predicate device strategy.",
  },
];

export const EEG_BANDS = [
  { band: "θ Theta", hz: "4–8 Hz", role: "FOG onset marker", detail: "Surge at Fz/FCz during freezing. Compensatory cognitive recruitment of motor pathways.", color: "#FF6B6B" },
  { band: "μ Mu", hz: "8–13 Hz", role: "Motor idle rhythm", detail: "Desynchronizes (drops) when motor cortex activates. Absence = intent present.", color: "#FFB347" },
  { band: "β Beta", hz: "13–30 Hz", role: "Corticospinal drive", detail: "ERD indicates movement planning. Pathologically elevated in STN during FOG.", color: "#00D4FF" },
  { band: "EMG", hz: "20–450 Hz", role: "Muscle response", detail: "RMS envelope confirms actual motor unit activation. Absence = failure state.", color: "#00FF88" },
];

export const PHASES = [
  {
    id: "P0",
    title: "Stabilize Prototype",
    status: "IN PROGRESS",
    duration: "Weeks 1–3",
    items: [
      "Fix Arduino firmware (current_conversion_ratio, watchdog)",
      "Configure Ganglion split EEG/EMG",
      "Correct 10-20 electrode placement (Cz, FCz, Fz)",
      "Implement movement failure detection algorithm",
      "Collect baseline dataset (20+ sessions)",
      "Document everything for patent specification",
    ],
  },
  {
    id: "P1",
    title: "Validated Prototype",
    status: "UPCOMING",
    duration: "Weeks 4–12",
    items: [
      "Upgrade to OpenBCI Cyton (8ch, 250Hz)",
      "Add MyoWare EMG sensor + IMU gait detection",
      "Validate state machine on real subjects",
      "File provisional patent + PCT",
      "First research paper draft",
      "Apply to Conrad Challenge + science fairs",
    ],
  },
  {
    id: "P2",
    title: "Module Integration",
    status: "FUTURE",
    duration: "Months 4–8",
    items: [
      "ADS1299 + nRF5340 + MAX14521E module stack",
      "Port algorithm to C firmware (Zephyr RTOS)",
      "Design carrier PCB (KiCad, JLCPCB fabrication)",
      "React Native mobile app + BLE GATT",
      "3D print headset + leg band enclosures",
      "Standalone operation (no laptop required)",
    ],
  },
  {
    id: "P3",
    title: "Clinical Prototype",
    status: "FUTURE",
    duration: "Months 8–16",
    items: [
      "IRB approval + pilot study (10–20 subjects)",
      "Design History File + ISO 14971 risk analysis",
      "FDA pre-submission Q-Sub meeting",
      "Full utility patent filing",
      "Peer-reviewed publication",
      "V2 PCB incorporating pilot feedback",
    ],
  },
  {
    id: "P4",
    title: "Regulatory",
    status: "FUTURE",
    duration: "Months 16–28",
    items: [
      "FDA 510(k) submission",
      "ISO 13485 quality system certification",
      "Contract EMS manufacturing partner",
      "UDI registration + facility registration",
      "Reimbursement strategy (CPT codes)",
      "NIH STTR Phase I ($314K target)",
    ],
  },
  {
    id: "P5",
    title: "Commercial Launch",
    status: "FUTURE",
    duration: "Months 28–36",
    items: [
      "First production run (200–500 units)",
      "Prescriber training program",
      "Post-market surveillance system",
      "Cloud platform + population data flywheel",
      "Series A fundraise",
      "International expansion (CE marking)",
    ],
  },
];

export const ROADMAP_METRICS = [
  { label: "Total Timeline", value: "28–36 months", note: "Prototype → FDA clearance" },
  { label: "Total Budget", value: "$370K–$835K", note: "Across all phases" },
  { label: "Funding Target (Phase 1)", value: "$1,200", note: "Hardware upgrades + patent" },
];

export const IP_STATUS = [
  { label: "Provisional Patent", status: "FILING", color: "#FFB347" },
  { label: "PCT (International)", status: "FILING", color: "#FFB347" },
  { label: "Utility Patent", status: "PENDING", color: "#888" },
  { label: "LLC Formation", status: "IN PROGRESS", color: "#00FF88" },
];

export const CURRENT_HARDWARE = [
  "OpenBCI Ganglion — EEG acquisition (4ch, 200Hz)",
  "NeuroStimDuino — Constant-current FES (2ch)",
  "Arduino — I2C master controller",
  "Custom Python/BrainFlow signal pipeline",
];

export const TEAM_HIGHLIGHTS = [
  { label: "Where it started", detail: "A capstone project at Markham Woods Elementary that grew into a team at Lake Mary High School, Florida." },
  { label: "Patent in progress", detail: "Filing a provisional patent on the movement-failure detection method." },
  { label: "Forming an LLC", detail: "Standing up the legal entity to take the work forward." },
  { label: "National Innovator Challenge", detail: "Winner — University of San Diego Camp, 2025." },
];

export const CONNECT_CARDS = [
  {
    title: "Clinical Partners",
    desc: "Neurologists, physiatrists, and movement-disorder specialists interested in co-developing the FOG detection protocol and supporting IRB-approved pilot studies.",
    action: "Discuss Partnership",
    color: "#00D4FF",
  },
  {
    title: "Research Mentors",
    desc: "Biomedical engineering faculty and graduate researchers interested in academic collaboration on the signal processing and clinical validation phases.",
    action: "Explore Collaboration",
    color: "#00FF88",
  },
  {
    title: "Early Funding",
    desc: "Angel investors, family offices, and patient-advocacy foundations interested in supporting a patent-pending, prototype-stage medical device for an unmet need in Parkinson's disease.",
    action: "Request Pitch Deck",
    color: "#FFB347",
  },
];

export const FUNDING_TARGETS = [
  { phase: "Now", amount: "$10K", source: "Self Funded", color: "#FF4444" },
  { phase: "Phase 2", amount: "$125K", source: "Qvanta Group", color: "#FF8C00" },
  { phase: "Phase 3", amount: "$500K", source: "NIH STTR Phase I", color: "#FFB347" },
  { phase: "Phase 4", amount: "$1.5M", source: "NIH STTR Phase II", color: "#00B050" },
  { phase: "Phase 5", amount: "Series A", source: "Institutional / Strategic", color: "#00D4FF" },
];

export const FOOTER_LEGAL = {
  entity: "BioNorth Tech. LLC",
  notice:
    "All biomedical device designs, hardware, firmware, software, detection algorithms, and related intellectual property described on this site are the exclusive property of BioNorth Tech. LLC. All rights reserved.",
  prohibition:
    "Unauthorized copying, reproduction, distribution, reverse engineering, or commercial use of any BioNorth biomedical device technology is strictly prohibited.",
  disclaimer:
    "This device is a research prototype. Not FDA-cleared. For investigational use only.",
};

// ---------------------------------------------------------------------------
// AiMetr — side project
// ---------------------------------------------------------------------------

export const AIMETR_FEATURES = [
  { title: "Live usage dashboard", desc: "Session %, period %, token counts, cost, and rate-limit reset timers for every connected provider." },
  { title: "Per-provider mascots", desc: "Pixel-art characters that react to activity in real time — one for each AI provider." },
  { title: "Desktop pet overlay", desc: "Transparent, always-on-top window showing the most active provider's mascot. Draggable, position persists." },
  { title: "Active task tracker", desc: "Watches ~/.claude/projects/ to show live Claude Code conversation progress." },
  { title: "Historical charts", desc: "24-hour usage sparklines rendered with Chart.js." },
  { title: "Secure credential storage", desc: "API keys stored in the macOS Keychain when available — never written to the repo." },
  { title: "ESP32-S3 firmware", desc: "Companion firmware for a 480×480 AMOLED device displaying usage via LVGL + BLE." },
  { title: "Python BLE daemon", desc: "Standalone daemon that polls all providers and pushes data to the ESP32 hardware." },
  { title: "Offline-first", desc: "Local providers need no credentials; cloud providers degrade gracefully when offline." },
];

export const AIMETR_PROVIDERS = [
  { provider: "Claude (Anthropic)", mascot: "Clawd", emoji: "🐱", tracked: "Rate-limit headers, Claude Code sessions, cost from local JSONL logs" },
  { provider: "OpenAI / Codex", mascot: "Codex", emoji: "🧠", tracked: "Daily usage API (with rate-limit fallback), estimated cost" },
  { provider: "DeepSeek", mascot: "Seeker", emoji: "🐟", tracked: "Account balance / credit usage" },
  { provider: "Ollama (local)", mascot: "Llami", emoji: "🦙", tracked: "Running models, VRAM usage" },
  { provider: "LM Studio (local)", mascot: "Studio", emoji: "🤖", tracked: "Loaded models, memory usage" },
];

export const AIMETR_PET_STATES = [
  { state: "sleeping", trigger: "Connected but no active usage" },
  { state: "idle", trigger: "Connected, 0% usage" },
  { state: "thinking", trigger: "Active usage 10–74%" },
  { state: "excited", trigger: "Usage ≥ 75%" },
  { state: "offline", trigger: "Provider unreachable" },
];

export const AIMETR_BLE = [
  { label: "Device name", value: "Clawdmeter" },
  { label: "Service UUID", value: "4fafc201-1fb5-459e-8fcc-c5c9c331914b" },
  { label: "Characteristic UUID", value: "beb5483e-36e1-4688-b7f5-ea07361b26a8" },
];
