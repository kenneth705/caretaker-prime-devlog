/* Caretaker Prime dev log: all changing content lives here.
   To update the site, edit this file (and add images to media/), then publish.
   Keep everything a plain JS object (no fetch, works from file://). See UPDATING.md. */
window.SITE = {
  updated: "2026-10-05",

  /* Headline numbers in the stat row. */
  stats: [
    { label: "Tests", value: "128 + 136", delta: "sim ctest + UE automation, all passing" },
    { label: "End-to-end", value: "156 / 156", delta: "checks in the self-driving two-island run" },
    { label: "Creature bodies", value: "1 + 8", delta: "the baby plus 8 grown-up bodies" },
    { label: "Islands", value: "2 + hub", delta: "plus the race meadow" },
    { label: "Save schema", value: "v10", delta: "every old save still migrates forward" }
  ],

  /* Dev log: newest first. Copy an entry, change the date/title/items. */
  devlog: [
    {
      date: "2026-10-05", time: "21:20",
      title: "Playtest fix: stuck holding an egg",
      items: [
        "Kenneth got stuck. Kettle Island was full, so the incubator wouldn't take the egg he was carrying, there was no way to put it down, and once he carried it to Broadmeadow he couldn't travel home: the game counted the egg as a resident that needed room.",
        "Now an egg can be set down anywhere with G, and it stays put through saving and travel. Eggs never block a trip, because an egg isn't a resident until it hatches.",
        "Every refusal now says why and how to get unstuck, for example \u201cPut Pip down (G) to travel alone\u201d. A follower with no room on the other island stays behind instead of blocking you.",
        "Still open: a set-down egg can hide in tall grass. Verified: 128 of 128 sim tests, 136 of 136 Unreal tests, 156 of 156 end-to-end checks."
      ]
    },
    {
      date: "2026-10-05", time: "11:40",
      title: "Wave 13: fallen logs, tool hints and a dev panel",
      items: [
        "Fallen logs can be chopped with any axe for a few logs, and they come back after three days. The first time you need a tool, the Prime tells you how to make it, then reminds you once to press 1 to hold it.",
        "A dev panel (Ctrl+Cmd+D) for playtesting: give items and tools, change the sky and season, fast-forward time, repair or break buildings, hatch and age creatures, teleport, and save or reload.",
        "The save is now schema v10, with each step since v6 migrated and tested on a real older save."
      ]
    },
    {
      date: "2026-10-04", time: "23:30",
      title: "Wave 13: the workshop is home base",
      items: [
        "Kenneth played wave 12 and asked for a home base, storage, a way to get rid of extra stuff, and fixes to the big tree and the ground.",
        "The workshop ruin moved to Kettle Island, the starting island. The workbench is there from day one, with the Outpost Locker (12 slots) beside it. Mending the workshop with a hammer opens the Brass and Solarpunk tool tiers and grows the locker to 24 slots.",
        "Storage Chests are craftable (10 logs and 4 fiber, 24 slots), and tools can be stored too. If your axe is in the locker, the prompt tells you so.",
        "Surplus goes in the Supply Crate at the landing beach. It ships overnight to the company that sent you, which pays in Supply Vouchers, shown with a V-over-S sign that reads like a dollar. Kenneth still has to pick the final glyph.",
        "A trash can in the bag, with one-step undo, and tools ask before they go. Story Parts can't be thrown away.",
        "The big tree on Kettle had see-through holes in its trunk; the mesh is now watertight. Paths and beaches got soft, wandering edges, the grass varies in height and colour, and it no longer grows through buildings or in hard circles around trees."
      ]
    },
    {
      date: "2026-10-04", time: "19:45",
      title: "Wave 12: the outpost buildings",
      items: [
        "Kenneth wanted a solarpunk feel and real buildings with a purpose: \u201cthe cottage, maybe a seed recoverer (broke and late game item like a goal) Maybe a boat dock with boat tools for getting between islands. Workshop for tool upgrades and bigger project\u201d. He picked one concept for each.",
        "All four were built with Tripo H3.1 multiview, each in a broken and a repaired version with the same footprint, and placed on Broadmeadow. Repairing the dock and the seed recoverer comes in a later wave."
      ]
    },
    {
      date: "2026-10-04", time: "14:15",
      title: "Wave 12: gathering feels good",
      items: [
        "Kenneth's playtest asks: a scythe for fiber, a Stardew-style tool bar and bag, a busted house to fix, rocks that make sense to gather, and animations for chopping, mining, hammering and scything.",
        "Two kinds of wood: logs from any tree, and hardwood from big trees and old stumps, which needs a Stone Axe. Small rocks are loose stones you pick up by hand; big rocks need a pick. The scythe mows a swath of meadow, and grass grows back over five days.",
        "A 12-slot hotbar (keys 1 to 0, minus and equals, or the wheel) and a bag of 12, 24 or 36 slots, with 38 new icons in the style Kenneth picked. The selected tool decides what E does.",
        "The Broadmeadow bunkhouse starts ruined and can be mended with a hammer, with room for four creatures.",
        "The story changed: nobody knows what happened to the last Prime. The outpost just went dark six weeks ago; everyone hoped it was a bad relay, and it wasn't. Kenneth: \u201csix weeks sounds good\u201d.",
        "New animations for the caretaker (draw tool, chop, mine, hammer, scythe) and the creatures (chop, hammer, sweep, carry). These are agent work waiting for Kenneth's review."
      ]
    },
    {
      date: "2026-10-03", time: "20:05",
      title: "A trailer, in progress",
      items: [
        "Work started on a 30-second trailer. It's cut in HyperFrames, which builds video from HTML, using in-game shots that a console command flies and records on its own, offscreen.",
        "The first narration was the mentor, Prime Rafi. Then we tried a movie-trailer announcer on two engines, Gemini 3.8 Flash TTS and MiniMax Speech 2.8 HD. Kenneth turned both down.",
        "So we cast it properly. An agent built a casting page: round one had 25 voices of different ages and genders, made with ElevenLabs v3, Gemini TTS and MiniMax (including MiniMax voice design).",
        "Kenneth then wrote a short first-person script for the player character: a new apprentice caretaker who arrives to find the Prime gone and the island a mess. Round two had 11 young, gender-fluid voices read it, and Kenneth picked one.",
        "The cut isn't finished and isn't public yet. Kenneth is still reviewing the timing and the mix."
      ]
    },
    {
      date: "2026-10-03", time: "13:05",
      title: "Creatures roam the island; grass grows back",
      items: [
        "Kenneth's next playtest note: the creatures “just stay right where the player lands”. Arrivals now scatter across Broadmeadow, wander 4 to 25 m at a time toward points of interest, and meet up at social spots. Branch piles are spread out too.",
        "Cleared grass now regrows, up to 3 tufts per island per day, so fiber is renewable. Clearing a tuft gives 1 fiber, or 2 with a sickle.",
        "Verified on main: 90 of 90 sim tests, 103 of 103 Unreal tests, 98 of 98 end-to-end checks. Kenneth hasn't played these fixes yet."
      ]
    },
    {
      date: "2026-10-03", time: "08:40",
      title: "Playtest fixes: frozen creatures, sunk trees and bridges",
      items: [
        "Creatures stood frozen in a row. Their “socialize” behaviour had no movement once they arrived, and they spawn closer together than the social distance, so they arrived instantly. Now they sway and then stroll together.",
        "Planted trees sat about 2 m underground and the bridges sat in the water. Generated meshes have their pivot in the middle, and the game placed them by that middle point. New grounding helpers seat trees on the ground and bridges on their banks.",
        "Still open: one river crossing is too wide for its bridge, and young saplings hide in the tall grass."
      ]
    },
    {
      date: "2026-10-03", time: "07:45",
      title: "Wave 11 Phase A: crafting",
      items: [
        "Kenneth's direction for the next big wave: make it like the old game Creatures, “but like, amped up to eleven”. The plan has four phases: tools, then decorating, then creatures doing jobs when you ask, then creatures that pass ideas to each other and form crews.",
        "Phase A is merged. Tools come in 4 tiers (Timber, Stone, Brass and a Solarpunk tier) as an axe, pick, hammer and sickle, with no durability to manage.",
        "You can chop wild trees (pine, birch, oak) and fruit trees. The Prime calls to warn you about the fruit trees, up to three times. Rocks can be mined, and soft rocks give stone by hand, so you can make your first workbench and pick before you own any tools. Grass gives fiber.",
        "There's a workbench menu, the held tool shows in your hand, and the phone lists your materials. The save moved to schema v6, with a migration tested on a real v5 save.",
        "The meshes and text are placeholders for now. The concept sheet below is waiting for Kenneth's answers: is the Stone tier too weak, which tree first, the birch colour, and crystals or plain seams on the rocks."
      ]
    },
    {
      date: "2026-10-02", time: "15:35",
      title: "Wave 10: creatures grow up",
      items: [
        "The baby now grows into real bodies: an adolescent (85 cm) and an adult (120 cm) for each of four lines, Leaf, Fin, Wing and Stone. Before this, grown-ups were the baby scaled up.",
        "Concepts came from nano-banana-pro, guided by the style guide. Kenneth approved them, and all 8 went to Tripo H3.1 multiview, 8 of 8 usable on the first try.",
        "Every body was fitted to the baby's skeleton, so all the existing animations play on them. Tails, ears and wings sway on their own. The Stone bodies came out with ears fused to their forearms; they were cut apart and re-rigged.",
        "New behaviour: adults are too big to carry, but you can give them a shove. Press F to ask a creature to follow you, even across islands. The first time a creature grows up, there's a small moment and a call from the Prime.",
        "Kenneth on the in-engine sheet: “these look great”. He hasn't tried them in play yet."
      ]
    },
    {
      date: "2026-10-02", time: "12:35",
      title: "Caretaker skin weights v2 and wood that never runs out",
      items: [
        "Kenneth circled the spots where the caretaker's body bent badly in motion. v2 fixes them: the spine no longer curves into an S at idle, the thighs and shoulders deform cleanly, the wrist seam is welded and the sleeve cuff follows the forearm. Shoulders still stretch a little with arms overhead. Waiting for his review.",
        "Wood can't run out any more. Up to 3 cleared branch piles regrow per island per day, and harvested trees drop a branch."
      ]
    },
    {
      date: "2026-10-02", time: "09:20",
      title: "Wave 9: the caretaker is real",
      items: [
        "The player was the grey template mannequin until now. Agents drew 8 caretaker concepts, then redrew them in 10 shape styles. Kenneth picked the Tall Elegant style and the Gadget Tech character.",
        "A locked 5-view sheet went to five 3D generators. Tripo H3.1 multiview won. Every generator fused the fingers, so the template's 5-finger hands were grafted on. The model is skinned to a fitted copy of Unreal's mannequin skeleton, so the template's walking and running work on it.",
        "17 extra animations were keyed in Blender: carrying an egg or a creature, picking up, putting down, tossing, feeding, petting, waving, working, the slingshot tuck and the landing. The first build stood in an A-pose at idle, from a blend weight that hit zero; that's fixed.",
        "A title screen: a slow drift over Kettle Island, the logo and title music (agent picks; no human has heard the music yet), then Continue, New Game, Settings, Controls, Credits and Quit.",
        "Babies now have 8 coats and 8 markings, read from their genes and passed on to their children, with no save change.",
        "Grass push fix: each blade now bends at its root and keeps its length. That also removed a flat white shape that had shown up under the player in the grass.",
        "The model, animations, title screen and coats are agent work waiting for Kenneth's review."
      ]
    },
    {
      date: "2026-09-30", time: "11:05",
      title: "Wave 8: a second polish pass",
      items: [
        "Kenneth liked wave 7 but wanted it to look better, and handed over a research report on how Zelda-style games are rendered. Five agent lanes worked through it in parallel.",
        "Light and sky: soft shading on the world and a crisp cel edge on characters and props, real height fog, painted cloud banks on the horizon, cloud shadows drifting over the land and a warmer sun.",
        "Grass and ground now share one colour field, so the grass roots melt into the ground instead of sitting on it. Path edges fade gradually, dune grass reaches the upper beaches, and there are fewer white spike flowers.",
        "New tree canopies built from rounded leaf clusters (no more painted-on fruit) that sway in the wind, plus about 190 bushes along cliff lips and path corners.",
        "Water: waves wash up and leave wet sand, rivers show their flow, foam gathers around posts and rocks, and the sun and moon glint on the sea.",
        "Props and rocks went matte, with bases that blend into the ground, plus scattered pebbles, shells, driftwood, flowers and vines. The nursery hub is now overgrown, with ivy and golden sun shafts.",
        "A review found problems, so a fix pass followed: high overviews had gone darker and duller than wave 7, a bare patch appeared beside Broadmeadow's landing path (a grass-clearing rule matched the wrong name), the night grass was grey and the hub's leaf shadows were blue.",
        "The power went out mid-wave. Each lane works in its own git worktree, so almost nothing was lost: only a few temporary scripts.",
        "Frame time came back down to about 8 ms at 1080p. Kenneth hasn't reviewed the new look yet."
      ]
    },
    {
      date: "2026-09-30", time: "07:05",
      title: "Morning playtest fixes",
      items: [
        "Kenneth played the new look and found the night glow overwhelming, \"like orange fog\" when you stand next to a lamp. The halo, light pools and bloom are halved, and the halo fades as you walk into it.",
        "The nest and hut were stuck in the ground after the terrain was reshaped. Shelters now snap to the real ground when placed and when a save loads, so old saves fix themselves.",
        "New: hold X to take a shelter apart. You get the branches back and the residents move out."
      ]
    },
    {
      date: "2026-09-30", time: "01:45",
      title: "Wave 7: an overnight restyle",
      items: [
        "Kenneth approved a set of AI concept paintings as the target look and asked for the whole game to move toward it: rolling hills, a painted, weathered cel look, the dense grass, the water and beaches, a softer night glow and quiet footsteps.",
        "Grass: dense, wind-swept blades from our own instanced meshes, with a far tier out to a few hundred metres and dune grass on the beaches. The grass bends away from you and your creatures. Unreal's newer Nanite foliage tools are still experimental on the Mac, with crash reports, so we didn't use them. There's a Light, Medium or Full grass setting on the phone.",
        "Terrain: the islands were resculpted into terraces with dirt lips on the edges. Kettle Island has two big plateaus with the path in a valley, and Broadmeadow has six terraces and banked rivers.",
        "Look: softer painterly shading bands, brush-stroke noise, a painted sky and haze, warm lamp pools at night and new water with foam lines and wet sand.",
        "Footsteps: 42 fal sounds for grass, sand, dirt, stone, wood and water, picked by the surface under your feet, plus creature pitter-patter.",
        "What didn't work yet: views from high up looked flatter than the concept, far beaches had almost no dune grass, trees and props were still the old kit, and the frame cost rose from about 6.5 to 9 ms."
      ]
    },
    {
      date: "2026-09-29", time: "17:41",
      title: "Wave 6: love & legacy, world & feel",
      items: [
        "Love & legacy: adults who like each other court (hearts, walks side by side). Bless them from the phone and an egg appears at their home. Hero and Dark looks and archetype accents show how a creature was raised. An elder's final days glow warmer, and a quiet ceremony turns it into Life II with some memories kept. The Album got a Family tab.",
        "World & feel: day and night follow the real local clock, with seasons, weather, stars and warm lamp pools, all in a second post-process pass so the approved cel look is untouched. Grass wears into paths where you walk. Islands can be named, and the phone has Settings with vacation mode and volumes.",
        "The first pass made the idle creatures look T-posed: the custom idle clip kept the arms at the bind pose. The clips were re-authored with relaxed arms.",
        "Integrated on a branch: 62 of 62 Unreal tests, 87 of 87 end-to-end checks, a 72-hour soak with no failures. Not on main yet."
      ]
    },
    {
      date: "2026-09-29", time: "16:07",
      title: "Stability pass and a playtest build",
      items: [
        "A soak driver lived 168 in-game hours with every invariant checked: 0 failures after a round of fixes (input clashes between the phone, calls and photo mode, a job that emptied your bag, tree regrowth).",
        "Tagged a playtest build for Kenneth with a fresh save, a key list, the loop to try and the known issues. He is playing it now.",
        "19 audio files from fal: eight music pieces (ElevenLabs Music and Google Lyria), four ambience loops (Mirelo SFX) and seven sound effects. The loops were cut and crossfaded by script. No human has listened yet."
      ]
    },
    {
      date: "2026-09-29", time: "13:40",
      title: "Wave 5: first race, homes and jobs, album",
      items: [
        "Sim v4 added shelters, homes, jobs, a deterministic race replay and an album, with a migration from v3.",
        "The first race: an F-rank loop on its own map. You watch the sim's replay with visible mistakes (wrong turns, a stumble at the log, butterflies), then a podium and what your creature learned. Visiting rivals were first faked on the Unreal side; a later fix moved them into the sim so placement is fair.",
        "Homes: build a nest, hut or communal house; offer a creature a home by carrying it there, and it may refuse. Jobs on Broadmeadow: gatherers and farmers.",
        "Album: big moments photograph themselves, and P opens photo mode. The first captures came out much darker than the game until the capture target was switched to sRGB; photos now match the screen within a few levels."
      ]
    },
    {
      date: "2026-09-29", time: "11:56",
      title: "The two-island MVP works end to end",
      items: [
        "Restore Kettle Island, find the old caretaker's notes, open the nursery door with their code, fetch the incubator part from the hub, repair and plant, finish any 3 of 8 goals, and launch to Broadmeadow with the giant slingshot. Bridges open its four areas, and the phone fast-travels through the nursery doors.",
        "A self-driving run plays all of it from a fresh save in about 80 seconds: 87 of 87 checks and 26 screenshots. A Codex review found real bugs (stored eggs you couldn't get back, fruit lost in travel) and they were fixed before sign-off.",
        "Mentor calls are paced: at most one at a quiet moment, and if several are due, the others fold into a catch-up line."
      ]
    },
    {
      date: "2026-09-29", time: "10:00",
      title: "Phone, Prime Rafi and the MVP kit",
      items: [
        "The in-game phone (Creatures, Goals, Requests, Travel, Notes) and video calls from the mentor, Prime Rafi of Sector Nine, with a choppy-signal effect.",
        "16 new props, a hub texture and 14 UI icons from fal, plus three Rafi portrait candidates. All waiting for Kenneth.",
        "8 custom animation clips for the round body, since the generic mocap hid the wave and creased the belly. Two maps: Broadmeadow and the nursery hub."
      ]
    },
    {
      date: "2026-09-29", time: "08:47",
      title: "Day plan: many agents in parallel",
      items: [
        "The orchestrator wrote a sim v3 contract (two islands, inventory, the nursery code, goals, travel) and split the day into lanes, each in its own git worktree, so sim, narrative, maps, assets, UI and animation could run at once.",
        "A machine-wide lock keeps only one Unreal process running at a time, because parallel agents share one Mac."
      ]
    },
    {
      date: "2026-09-28", time: "23:18",
      title: "Playtest 2 fixes and the first 30 minutes",
      items: [
        "Fixes from Kenneth's second playtest: a lone creature now roams, the mounds and rocks sit on the ground, cel water with shore foam, and trees you can shake for fruit. On the new sizes: \u201cThe size is great. I love it.\u201d",
        "The first 30 minutes: pick one of three eggs, a 25-minute real-time hatch, a feeding tutorial, a second egg washes ashore, and a second creature that differs in tint, size and habits.",
        "One agent's test run found Kenneth's real save and migrated it, because the \u201cis Unreal running\u201d check matched its own command line. The check now matches process names, and tests always use a throwaway save."
      ]
    },
    {
      date: "2026-09-28", time: "",
      title: "First playtest: what Kenneth flagged",
      items: [
        "Kenneth played the greybox and liked the look. He flagged four things, all in progress:",
        "The fruit tree is one-sided: it was built from a single image, so it's being rebuilt from multiple views.",
        "Scale is off: the logs and the caretaker are too big, the incubator and the nursery door too small.",
        "The cliffs are stacked cubes and read too square. A new fal rock kit is being generated."
      ]
    },
    {
      date: "2026-09-28", time: "10:17",
      title: "Playable greybox starter island",
      items: [
        "You can walk the island, pick fruit, hand-feed and pet the baby. The creature's behaviour comes from the sim: it reads the sim's intent (wander, seek food, sleep, approach you) and acts it out on the navmesh, with small emotion symbols overhead.",
        "11 Unreal automation tests (5 sim-in-engine, 6 gameplay) pass alongside the 17 sim tests.",
        "All five ground textures are done: grass, grass with weeds, sand, dirt path and rock. Ideogram tiling kept stalling, so every one came from z-image turbo tiling, with patina normal maps."
      ]
    },
    {
      date: "2026-09-28", time: "09:04",
      title: "The 1 cm creature",
      items: [
        "With any animation applied, the baby rendered about 1 cm tall. The animation files carried their metre-to-centimetre scale differently from the mesh, so the whole body was scaled by 1/100. Importing the animations at x100 on the root bone fixed it, and the import script now fails loudly if the root scale ever disagrees again.",
        "Also added the template content packs that the project copy had missed (Characters, Input, LevelPrototyping)."
      ]
    },
    {
      date: "2026-09-28", time: "08:16",
      title: "Global cel-shading look",
      items: [
        "One post-process material gives the whole game its look: three tone bands, coloured outlines, a warm rim light on characters, and a painted sky. Lumen, bloom and ambient occlusion are off so the bands stay predictable.",
        "Kenneth's verdict after playing: \u201clike the cell shading\u201d."
      ]
    },
    {
      date: "2026-09-28", time: "07:55",
      title: "The simulation runs inside Unreal",
      items: [
        "A world subsystem owns the sim: it loads the save (with a backup), catches up on the time you were away, keeps a \u201cWhile you were away\u201d recap, steps every 60 real seconds and autosaves.",
        "Debug console commands let us advance time, feed, hatch and dump every creature's state."
      ]
    },
    {
      date: "2026-09-28", time: "07:30",
      title: "Fixed this page's flicker",
      items: [
        "Kenneth: \u201cthat site flickers hella bad\u201d. The animated background was forcing about 60 blurred glass panels to re-blur every frame. It now redraws less often, pauses while scrolling, and glass inside glass no longer blurs."
      ]
    },
    {
      date: "2026-09-27", time: "22:13",
      title: "Everything imported into Unreal",
      items: [
        "One idempotent import script brings in the 13 props (each scaled to its real-world size), the creature and its 12 clips, the textures and the sounds, and builds a review map."
      ]
    },
    {
      date: "2026-09-27", time: "20:05",
      title: "Public dev log goes up",
      items: [
        "This page. Built from the fal share-site template, published to GitHub Pages from a separate public repo; the game repo stays private.",
        "All updatable content lives in one data file so new entries are a small edit."
      ]
    },
    {
      date: "2026-09-27", time: "19:45",
      title: "Dumpling v1 rejected: weights redone as v2",
      items: [
        "Kenneth reviewed the v1 clips in Blender and flagged the skin weights: the head deformed as it turned and the arms warped the body.",
        "Measured cause: Meshy's auto-weights spread head/neck influence across the face and let arm bones pull on the belly; several joints sat outside the mesh (one knee above the hip).",
        "v2 (done 19:46): joints re-placed inside the body and the mesh re-skinned by region, with a rigid head and narrow blend bands at the neck, armpits and hips. Measured head distortion went from up to 270 mm to 0, and belly leak on the wave clip from 33 mm to 0. The texture was colour-matched to the concept."
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
    "Kenneth plays waves 12 and 13 and the egg fix, and picks the voucher glyph.",
    "An egg set down in tall grass is hard to see; it needs a marker or a clearing.",
    "Real 3D for the Storage Chest and the Outpost Locker, which still use placeholder looks.",
    "Repairing the boat dock and the seed recoverer, and something to spend Supply Vouchers on.",
    "Crafting Phases B to D: decorating, creatures doing jobs when you ask, then creatures that share ideas and form crews.",
    "Caretaker polish (the hand seam, aiming the pet and feed, the toss arc), a pause menu, and finishing the trailer."
  ],

  /* Every generation model and agent used so far, grouped by job (from the asset provenance files). */
  models: [
    { group: "Images and concepts", items: [
      ["fal-ai/nano-banana-pro/edit", "The workhorse, about 400 calls: style anchors, creature, caretaker, egg and prop concepts, turnarounds, UI art"],
      ["fal-ai/qwen-image-edit-2511-multiple-angles", "Multi-view sheets that feed image-to-3D"],
      ["fal-ai/gpt-image-1.5", "UI and icons"],
      ["fal-ai/gpt-image-2", "UI and icons"],
      ["fal-ai/recraft/v4/pro/text-to-image", "UI and icons"],
      ["fal-ai/ideogram/v3/generate-transparent", "Icons and the title logo, with a transparent background"],
      ["fal-ai/recraft/upscale/crisp", "UI upscales"],
      ["pixelcut/background-removal", "Background removal"],
      ["fal-ai/birefnet/v2", "Background removal"],
      ["fal-ai/bria/background/remove", "Background removal"]
    ]},
    { group: "Textures and materials", items: [
      ["fal-ai/z-image/turbo/tiling", "All the tiling ground textures. ideogram/v4/tiling was tried first and dropped because it kept stalling"],
      ["fal-ai/patina", "PBR material maps (normals and more)"]
    ]},
    { group: "3D", items: [
      ["meshy/v7.1/image-to-3d + multi-image-to-3d", "Most props, the eggs and the early creatures"],
      ["fal-ai/meshy/rigging/multi-animation", "The early creature auto-rig. Joints landed badly on round bodies"],
      ["tripo3d/h3.1/multiview-to-3d", "Won the bake-off: the caretaker and all 8 creature stage bodies"],
      ["tripo3d/h3.1/image-to-3d", "Props"],
      ["tripo3d/p2/image-to-3d", "Props"],
      ["fal-ai/hunyuan3d-v3/image-to-3d", "Props"],
      ["fal-ai/hyper3d/rodin/v2.5", "Caretaker bake-off entrant, not used"],
      ["hitem3d/hi3d/v3.0", "Caretaker bake-off entrant, not used"],
      ["Blender, headless and procedural", "Terrain, grass and skin weights. No generation model", "plain"]
    ]},
    { group: "Music", items: [
      ["google/lyria-3.5", "Island, race and ceremony candidates"],
      ["elevenlabs/music/v2.5", "Island, race and ceremony candidates"],
      ["fal-ai/minimax-music/v2.6", "The title track"]
    ]},
    { group: "Sound effects", items: [
      ["fal-ai/elevenlabs/sound-effects/v2", "Most in-game sound effects"],
      ["mirelo-ai/sfx1.6/text-to-audio", "Ambience loops and extra candidates"]
    ]},
    { group: "Voice (trailer)", items: [
      ["fal-ai/elevenlabs/tts/eleven-v3", "Mentor narration and casting voices, including Kenneth's pick"],
      ["google/gemini-3.8-flash-tts", "Announcer attempt and casting voices"],
      ["fal-ai/minimax/speech-2.8-hd", "Announcer attempt and casting voices"],
      ["fal-ai/minimax/voice-design", "Custom-designed casting voices"]
    ]},
    { group: "Agents that build it", items: [
      ["Claude Opus 5.5", "Orchestrator: plans, Unreal, 3D and trailer work, and every acceptance check", "plain"],
      ["Claude Sonnet 5.5", "Git commits and pushes", "plain"],
      ["Claude Fable 5.1", "Narrative and UI copy", "plain"],
      ["GPT-6 Astra and GPT-6 Sol (Codex)", "The deterministic simulation and other clear-spec code", "plain"]
    ]}
  ],

  /* First-playtest notes (Kenneth's flags). status: "in progress" | "done". */
  playtest: [
    { what: "Fruit tree is one-sided", fix: "Rebuilt from a multi-view turnaround (v2), waiting for his check", status: "awaiting review" },
    { what: "Logs and caretaker too big", fix: "Rescaled. Kenneth: \u201cThe size is great. I love it.\u201d", status: "done" },
    { what: "Incubator and nursery door too small", fix: "Rescaled, approved with the island sizes", status: "done" },
    { what: "Cliffs too square", fix: "Replaced the stacked cubes with a fal rock kit, waiting for his check", status: "awaiting review" }
  ]
};
