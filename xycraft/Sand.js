ServerEvents.recipes((event) => {
    event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
            { "block": "minecraft:deepslate", "predicate_type": "xycraft_core:block_rule" },
            { "block": "minecraft:deepslate", "predicate_type": "xycraft_core:block_rule" },
            { "block": "minecraft:deepslate", "predicate_type": "xycraft_core:block_rule" },
            { "block": "minecraft:deepslate", "predicate_type": "xycraft_core:block_rule" } 
        ],
        "output": { "Count": 4, "id": "minecraft:sand" },
        "target": { "block": "minecraft:sand", "predicate_type": "xycraft_core:block_rule" }, 
        "ticks": 20,
        "valid_directions": ["down"]
    }) 
})