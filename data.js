// StukaFit data — every number below traces to a source_url a pilot can open and check.
// buttons/axes/hats = physical input slots on the controller, from the manufacturer's own
// technical-specification text (independently fetched and quoted for this build — not reused
// from ViperFit/CockpitFit/StarHOTAS's Thrustmaster entries without re-verifying each one).
//
// thrustmaster.com was under a site-wide maintenance page for the whole 2026-09-08 session per
// WA-4 (ViperFit)'s finding. As of this build's research pass (also 2026-09-08) it has recovered —
// all three Thrustmaster URLs below returned a live 200 and were fetched directly, no Wayback
// Machine needed this time.

const CONTROLLERS = [
  {
    id: "t16000m-fcs",
    name: "Thrustmaster T.16000M FCS",
    note: "joystick only, no throttle",
    buttons: 16,
    axes: 4,
    hats: 1,
    sources: [
      { label: "Thrustmaster — T.16000M FCS product page, live 2026-09-08: \"4 independent axes\", \"16 action buttons\", \"one 8-way Point of View (PoV) hat switch\"", url: "https://www.thrustmaster.com/en-us/products/t-16000m-fcs/" }
    ]
  },
  {
    id: "t16000m-fcs-hotas",
    name: "Thrustmaster T.16000M FCS HOTAS",
    note: "joystick + TWCS Throttle bundle",
    buttons: 30,
    axes: 5,
    hats: 2,
    sources: [
      { label: "Thrustmaster — T.16000M FCS HOTAS product page, live 2026-09-08: \"In total, this provides gamers with 5 axes, 30 buttons and two 8-way PoVs\"", url: "https://www.thrustmaster.com/en-us/products/t-16000m-fcs-hotas/" }
    ]
  },
  {
    id: "t-flight-hotas-x",
    name: "Thrustmaster T.Flight HOTAS X",
    note: "joystick + detachable throttle, entry-level. No hat switch.",
    buttons: 12,
    axes: 5,
    hats: 0,
    sources: [
      { label: "Thrustmaster — T.Flight HOTAS X product page, live 2026-09-08 (redirects to the en-gb catalog URL): \"HOTAS with 12 action buttons and 5 axes\" — no hat switch mentioned on the page", url: "https://www.thrustmaster.com/en-gb/products/t-flight-hotas-x/" }
    ]
  },
  {
    id: "logitech-x56",
    name: "Logitech G X56 H.O.T.A.S.",
    note: "joystick + twin throttles, mini analog sticks on both grips",
    buttons: 31,
    axes: 13,
    hats: 5,
    sources: [
      { label: "Logitech G — X56 H.O.T.A.S. product page, live 2026-09-08: \"Customize all 13 axes, 5 HATS, and 31 programmable buttons over three modes\"", url: "https://www.logitechg.com/en-us/shop/p/x56-space-flight-vr-simulator-controller.945-000058" }
    ]
  }
];

const CATEGORY_PRIORITY = ["Plane", "Engine", "Weapons"];

// IL-2 Sturmovik: Great Battles does not publish its own consolidated per-aircraft control-count
// reference (see this lane's CHARTER.md incumbent check). The counts below are extracted from a
// public, community-maintained reference spreadsheet ("IL-2 Great Battles Controls") that maps
// every default key-mapping-menu entry against every aircraft in the game — itself built by
// reading the in-game control options list per plane, the same primary source the charter allows
// ("a forum thread that itself quotes the in-game list"). Sheet self-reports "Up to date to
// version 5.202, date 2/2024".
//
// Method (mechanical, reproducible against the sheet's "Plane Specific Controls" tab, exported
// as CSV): count every row that (a) has a non-empty "Default Key" value — i.e. the game itself
// treats it as a distinct bindable command, not a pure category label — and (b) carries a
// non-blank marker in the target aircraft's column. This is a count of distinct in-game bindable
// commands, not a hand-deduplicated "physical inputs required" number: a few rows legitimately
// share one physical control with an alternate binding view (e.g. a trim axis and its equivalent
// left/right switch pair can each carry their own default key and both get counted), so the
// number is a defensible upper-bound reproducible from the sheet, disclosed as such rather than
// silently rounded down. Verified by direct read of the sheet's CSV export, 2026-09-08.
const IL2_SHEET_SOURCE = {
  label: "\"IL-2 Great Battles Controls\" — public community-maintained Google Sheet, \"Plane Specific Controls\" tab, snapshot 2026-09-08 (self-reports \"Up to date to version 5.202, date 2/2024\")",
  url: "https://docs.google.com/spreadsheets/d/1WZFFW18zSU0ip5QIZQbmuChM5Tw_5u-sqDCEKO5kWk0/htmlview#gid=1254488031"
};

const TIERS = [
  {
    id: "single-engine-fighter",
    tier_name: "Single-Engine Fighter (Bf 109 G-6)",
    tier_note: "One engine, one set of engine controls, no turret/bombsight functions.",
    core_functions: [
      { category: "Plane", count: 26 },
      { category: "Engine", count: 13 },
      { category: "Weapons", count: 13 }
    ],
    total_functions: 52,
    source_url: IL2_SHEET_SOURCE.url,
    source_note: IL2_SHEET_SOURCE.label
  },
  {
    id: "multi-engine-bomber",
    tier_name: "Multi-Engine Bomber (He 111 H-6)",
    tier_note: "Two engines (independent throttle/mixture/prop/radiator per engine), bomb sight and bay controls, gunner/turret station switching.",
    core_functions: [
      { category: "Plane", count: 32 },
      { category: "Engine", count: 20 },
      { category: "Weapons", count: 21 }
    ],
    total_functions: 73,
    source_url: IL2_SHEET_SOURCE.url,
    source_note: IL2_SHEET_SOURCE.label
  }
];
