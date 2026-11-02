ServerEvents.recipes((event) => {
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            { "block": "minecraft:obsidian", "predicate_type": "xycraft_core:block_rule" },
            { "block": "minecraft:obsidian", "predicate_type": "xycraft_core:block_rule" },
            { "block": "minecraft:obsidian", "predicate_type": "xycraft_core:block_rule" },
            { "block": "minecraft:obsidian", "predicate_type": "xycraft_core:block_rule" }
        ],
        "output": { "Count": 4, "id": "fluxnetworks:flux_dust" },
        "target": { "block": "minecraft:redstone_block", "predicate_type": "xycraft_core:block_rule" },
        "ticks": 25,
        "valid_directions": ["down"]
    })
})