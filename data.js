/* Caretaker Prime dev log: all changing content lives here.
   To update the site, edit this file (and add images to media/), then publish.
   Keep everything a plain JS object (no fetch, works from file://). See UPDATING.md. */
window.SITE = {
  updated: "2026-09-27",

  /* Headline numbers in the stat row. */
  stats: [
    { label: "Sim tests", value: "17 / 17", delta: "passing, standalone C++20" },
    { label: "Baby candidates", value: "4", delta: "Kenneth picked C" },
    { label: "Props", value: "13", delta: "concept + 3D mesh each" },
    { label: "Creature clips", value: "12", delta: "on a 24-bone rig (v1)" },
    { label: "SFX", value: "10", delta: "starter sound set" }
  ],

  /* Dev log: newest first. Copy an entry, change the date/title/items. */
  devlog: [
    {
      date: "2026-09-27", time: "evening",
      title: "Public dev log goes up",
      items: [
        "This page. Built from the fal share-site template, published to GitHub Pages from a separate public repo; the game repo stays private.",
        "All updatable content lives in one data file so new entries are a small edit."
      ]
    },
    {
      date: "2026-09-27", time: "19:45",
      title: "Dumpling v1 animations reviewed: weights need a redo",
      items: [
        "Kenneth reviewed the v1 clips in Blender and flagged the skin weights: the head deformed as it turned and the arms warped the body.",
        "Measured cause: Meshy's auto-weights spread head/neck influence across the face and let arm bones pull on the belly; several joints sat outside the mesh (one knee above the hip).",
        "v2 in progress: a scripted re-skin (rigid head, narrow blend bands at neck, armpits and hips), joint pivots re-seated inside the mesh, a Hips scale bug in the idle clip fixed, and a colour-corrected base texture. Not yet reviewed."
      ]
    },
    {
      date: "2026-09-27", time: "19:01",
      title: "Baby Dumpling 3D v1",
      items: [
        "Four turnaround views of candidate C went into Meshy 7.1 multi-image-to-3D, then Meshy rigging/multi-animation for a 24-bone rig and 12 clips (idle, walk, run, sleep, wave, pick-up and more).",
        "The first A-pose attempt rigged badly (knees above hips), so v1 uses a T-pose regeneration. Meshy also grew a long tail the concept doesn't have; an agent cut it back to a stub in headless Blender before rigging.",
        "Exported as FBX for Unreal. Marked unapproved until Kenneth reviews it."
      ]
    },
    {
      date: "2026-09-27", time: "18:02",
      title: "Starter sound set and first tiling texture",
      items: [
        "Ten sounds: footsteps on grass, grass pull, pickup, fruit crunch, egg crack, hatch chime, happy chirp, hungry whine, phone ping (ElevenLabs SFX v2) and an island ambience loop (Mirelo SFX 1.6).",
        "First ground material: a faceted rock albedo from z-image turbo tiling, seam-checked with a 2x2 preview, plus a normal map from patina. Grass, sand and dirt path are still to do."
      ]
    },
    {
      date: "2026-09-27", time: "17:48",
      title: "Kenneth picks the baby: C, “Dumpling”",
      items: [
        "The creature-design gate: the agents stopped and waited for a human pick. Kenneth's words: “for creatures let go with C”.",
        "The prop kit was approved in the same review."
      ]
    },
    {
      date: "2026-09-27", time: "17:38",
      title: "Starter-island prop kit",
      items: [
        "13 props from two nano-banana-pro concepts each (an agent picked one and wrote down why), then Meshy 7.1 image-to-3D.",
        "Every mesh was checked headless in Blender for triangle count, bounds and holes, and scaled to its intended real-world size."
      ]
    },
    {
      date: "2026-09-27", time: "17:06",
      title: "Simulation core: 17 tests green",
      items: [
        "Codex wrote CaretakerSim, a C++20 library with no engine headers: fixed-point state, seeded random streams, JSON saves with versioning and migrations.",
        "It builds with CMake and the full test run takes under a second, so the coding loop does not need Unreal."
      ]
    },
    {
      date: "2026-09-27", time: "17:03",
      title: "Art bible, style anchors and four baby candidates",
      items: [
        "The art-direction agent read the 8-page style guide and wrote an art bible: rules, a sampled palette and reusable prompt blocks.",
        "Four anchor renders (beach, nursery cave, prop sheet, ground tile) tested whether the look reproduces. Then four baby designs, each with a hero render and an A-pose turnaround."
      ]
    },
    {
      date: "2026-09-27", time: "16:42",
      title: "Kickoff",
      items: [
        "Fixed the Epic launcher's self-update loop, started the UE 5.8 install, and checked the fal model catalog live before choosing any endpoint.",
        "Wrote the plan: the main session only orchestrates, and all game assets come from fal."
      ]
    }
  ],

  /* Baby candidates. `pick: true` gets the highlighted card. */
  babies: [
    { id: "A", name: "Round cub", img: "media/baby_A_hero.webp",
      text: "Very round head, small side ears, darker tan cap, stubby round tail. Closest to the style guide's baby." },
    { id: "B", name: "Sprout kit", img: "media/baby_B_hero.webp",
      text: "Egg-shaped head, upright leaf-shaped ears, forehead tuft, long fluffy tail. Leans fox/deer." },
    { id: "C", name: "Dumpling", img: "media/baby_C_hero.webp", pick: true,
      text: "Head and body merge into one soft mass, nub ears, three-tuft crest, stub tail, huge wide-set eyes. The most neutral silhouette." },
    { id: "D", name: "Speckled kit", img: "media/baby_D_hero.webp",
      text: "Pear body, floppy ears, freckles carried over from the egg, dark-tipped tail. The most puppy-like." }
  ],

  /* Prop kit gallery: concept (left) vs Meshy 3D render (right). */
  props: [
    { name: "Incubator pod", key: "incubator_pod", scale: 1.4, tris: 19399,
      why: "Closest to the style guide's incubator: rounded amber-framed windows, front step, rope-bound timber legs." },
    { name: "Vault door slab", key: "vault_door_slab", scale: 2.2, tris: 6036,
      why: "Clean disc with visible thickness and riveted bands." },
    { name: "Vault door frame", key: "vault_door_frame", scale: 2.8, tris: 5963,
      why: "Chunky faceted stone blocks and clean steps." },
    { name: "Radio mast", key: "radio_mast", scale: 6.0, tris: 6135,
      why: "Rope-lashed timber lattice, matching the rope-and-timber motif. The other option looked like steel." },
    { name: "Pier section", key: "pier_section", scale: 4.0, tris: 5974,
      why: "Readable splintered end, rope lashings on the posts, chunky planks." },
    { name: "Fruit tree", key: "fruit_tree", scale: 4.0, tris: 22041,
      why: "Rounder canopy with more fruit and visible roots." },
    { name: "Fruit", key: "fruit_orange", scale: 0.12, tris: 16882,
      why: "Saturated amber with a crisp specular dot and a clean two-leaf stem." },
    { name: "Small boulder", key: "boulder_small", scale: 1.0, tris: 6099,
      why: "Gem-like violet-gray facets with a little moss." },
    { name: "Large boulder", key: "boulder_large", scale: 2.5, tris: 5902,
      why: "Broad flat facets and two fused base rocks; restrained moss." },
    { name: "Fallen log", key: "fallen_log", scale: 2.0, tris: 18506,
      why: "Readable pale cut ring and chunky rounded bark." },
    { name: "Supply crate", key: "supply_crate", scale: 0.6, tris: 5349,
      why: "Warm saturated timber and chunky corner brackets." },
    { name: "Grass clump", key: "grass_clump", scale: 0.5, tris: 19118,
      why: "A full fan of broad blades with lime-to-green steps." },
    { name: "Note post", key: "note_post", scale: 1.3, tris: 6173,
      why: "Chunky post, slanted board with a rope loop and a blank note." }
  ],

  /* Palette sampled from the style guide (art bible section 3). */
  palette: [
    ["Sky azure", "#4baefd"], ["Water turquoise", "#35d3d7"], ["Water deep", "#1682ac"],
    ["Sand pale", "#f5db9d"], ["Grass lime", "#ccd042"], ["Grass mid", "#6b8c3d"],
    ["Leaf deep", "#345534"], ["Timber", "#b98152"], ["Fruit amber", "#fa8f0f"],
    ["Rock violet-gray", "#6b6a82"], ["Rock shadow", "#565360"], ["Lavender", "#b095e4"],
    ["Baby tan", "#e9b989"], ["Baby tan shade", "#d39962"], ["Baby cream", "#fee8bf"],
    ["Paw brown", "#613a26"], ["Eye amber", "#f88c06"], ["Elder glow", "#fcf1a6"]
  ],

  /* Simulation tests (ctest), with what each one proves. */
  tests: [
    ["determinism", "Same seed, same result: a three-day run hashes to a frozen FNV-1a-64 value, and a replay produces the identical save."],
    ["equivalence", "One day of minute ticks and one offline catch-up give byte-identical saves. Over a week (10,080 steps) needs agree within a stated tolerance and life stage matches."],
    ["trees", "No midnight exploit: harvest a tree at 23:59, try again at 00:01 and get nothing. Each tree regrows on its own 24-hour timer."],
    ["vacation", "Vacation mode through a 14-day absence: an adult stays adult, ages at most 2.8 biological days, and needs stay above the floor."],
    ["divergence", "Two creatures with the same care differ on at least four developed metrics after a week."],
    ["roundtrip", "Save, load, save gives identical bytes; no floating-point values in the save; unicode names survive."],
    ["backwards", "Moving the clock backwards changes nothing except logging a clock anomaly."],
    ["neglect", "Sixty days of total neglect produces a warning and a runaway, never a deleted creature."],
    ["lifecycle", "Eggs must mature before hatching; the incubator breaks after two hatches and must be repaired."],
    ["food", "Food effects, taste rules, quality and spoilage behave as specified."],
    ["migration", "Older save versions load and migrate forward."],
    ["validation", "Malformed or unknown-version saves are rejected cleanly."],
    ["social", "Relationships react to context: jealousy, gifts, scolding and witnesses."],
    ["recovery", "If no creature remains, a recovery egg arrives the next day, without erasing history."],
    ["clock_edges", "Clock edge cases, such as far-future and boundary timestamps, are handled."],
    ["rng", "Random streams are isolated: one entity's draws never shift another's."],
    ["calendar", "Calendar, seasons and the daily economy requests are deterministic."]
  ],

  /* What's next (short, plain). */
  next: [
    "Finish Dumpling v2 (re-skin, re-seated joints, corrected texture) and get Kenneth's review.",
    "Remaining ground textures: grass, sand and dirt path.",
    "Toon post-process in Unreal: 2 to 3 hard lighting bands, warm rim light, outlines coloured from the base colour instead of black.",
    "Connect the sim to Unreal: a world subsystem, save/load, offline catch-up with a recap, and debug commands.",
    "Greybox the starter island and place the prop kit.",
    "First loop: egg, hatch, hungry baby, hand-feed, quit, relaunch, recap."
  ]
};
