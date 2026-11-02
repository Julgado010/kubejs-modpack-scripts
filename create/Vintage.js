// ============================================================
//  SISTEMA DE MINÉRIOS
//  - Mesa Vibratória → blocos normais (chance alta + bônus)
//  - Create Crushing → 1x até 9x (quantidade alta)
// ============================================================

ServerEvents.recipes(event => {

  // ======================================================
  // 1. MESA VIBRATORIA (só blocos normais)
  // ======================================================
  const TEMPO_VIBRATORY = 5 // bem rápido

  const gruposVibratory = [
    {
      bloco: 'minecraft:cobblestone',
      itens: [
        { id: 'minecraft:raw_iron', chance: 0.95 },
        { id: 'minecraft:raw_copper', chance: 0.95 },
        { id: 'minecraft:coal', chance: 0.90 },
        { id: 'minecraft:redstone', chance: 0.85 }
      ]
    },
    {
      bloco: 'minecraft:stone',
      itens: [
        { id: 'minecraft:raw_gold', chance: 0.85 },
        { id: 'alltheores:raw_tin', chance: 0.85 },
        { id: 'alltheores:raw_lead', chance: 0.80 },
        { id: 'alltheores:raw_zinc', chance: 0.80 }
      ]
    },
    {
      bloco: 'minecraft:andesite',
      itens: [
        { id: 'minecraft:diamond', chance: 0.35 },
        { id: 'minecraft:emerald', chance: 0.28 },
        { id: 'minecraft:quartz', chance: 0.75 },
        { id: 'minecraft:lapis_lazuli', chance: 0.80 }
      ]
    },
    {
      bloco: 'minecraft:gravel',
      itens: [
        { id: 'alltheores:raw_silver', chance: 0.75 },
        { id: 'alltheores:raw_platinum', chance: 0.65 },
        { id: 'alltheores:raw_osmium', chance: 0.70 },
        { id: 'alltheores:raw_iridium', chance: 0.55 }
      ]
    },
    {
      bloco: 'minecraft:sand',
      itens: [
        { id: 'alltheores:sulfur', chance: 0.80 },
        { id: 'alltheores:fluorite', chance: 0.75 },
        { id: 'alltheores:raw_aluminum', chance: 0.80 },
        { id: 'alltheores:raw_nickel', chance: 0.75 }
      ]
    },
    {
      bloco: 'minecraft:netherrack',
      itens: [
        { id: 'alltheores:raw_uranium', chance: 0.70 },
        { id: 'powah:uraninite_raw', chance: 0.65 },
        { id: 'minecraft:netherite_scrap', chance: 0.12 },
        { id: 'minecraft:quartz', chance: 0.85 }
      ]
    },
    {
      bloco: 'minecraft:end_stone',
      itens: [
        { id: 'allthemodium:raw_allthemodium', chance: 0.08 },
        { id: 'allthemodium:raw_vibranium', chance: 0.05 },
        { id: 'allthemodium:raw_unobtainium', chance: 0.03 },
        { id: 'minecraft:diamond', chance: 0.25 }
      ]
    }
  ]

  gruposVibratory.forEach(grupo => {
    event.custom({
      type: 'vintageimprovements:vibrating',
      ingredients: [{ item: grupo.bloco }],
      results: grupo.itens,
      processingTime: TEMPO_VIBRATORY
    }).id(`kubejs:vibrating/${grupo.bloco.split(':')[1]}`)
  })


  // ======================================================
  // 2. CREATE CRUSHING (1x até 9x) - Quantidade alta
  // ======================================================

  // Multiplicador de quantidade por nível de compressão
  const multCrushing = {
    1: 12,
    2: 35,
    3: 90,
    4: 220,
    5: 550,
    6: 1400,
    7: 3500,
    8: 9000,
    9: 25000      // bem generoso no 9x + bônus
  }

  const gruposCrushing = [
    {
      compressed: 'allthecompressed:cobblestone',
      itens: [
        { id: 'minecraft:raw_iron', base: 8 },
        { id: 'minecraft:raw_copper', base: 8 },
        { id: 'minecraft:coal', base: 7 },
        { id: 'minecraft:redstone', base: 6 }
      ]
    },
    {
      compressed: 'allthecompressed:stone',
      itens: [
        { id: 'minecraft:raw_gold', base: 6 },
        { id: 'alltheores:raw_tin', base: 6 },
        { id: 'alltheores:raw_lead', base: 5 },
        { id: 'alltheores:raw_zinc', base: 5 }
      ]
    },
    {
      compressed: 'allthecompressed:andesite',
      itens: [
        { id: 'minecraft:diamond', base: 2 },        // raro → quantidade menor
        { id: 'minecraft:emerald', base: 1.5 },
        { id: 'minecraft:quartz', base: 6 },
        { id: 'minecraft:lapis_lazuli', base: 6 }
      ]
    },
    {
      compressed: 'allthecompressed:gravel',
      itens: [
        { id: 'alltheores:raw_silver', base: 5 },
        { id: 'alltheores:raw_platinum', base: 4 },
        { id: 'alltheores:raw_osmium', base: 5 },
        { id: 'alltheores:raw_iridium', base: 3 }
      ]
    },
    {
      compressed: 'allthecompressed:sand',
      itens: [
        { id: 'alltheores:sulfur', base: 6 },
        { id: 'alltheores:fluorite', base: 5 },
        { id: 'alltheores:raw_aluminum', base: 6 },
        { id: 'alltheores:raw_nickel', base: 5 }
      ]
    },
    {
      compressed: 'allthecompressed:netherrack',
      itens: [
        { id: 'alltheores:raw_uranium', base: 5 },
        { id: 'powah:uraninite_raw', base: 4 },
        { id: 'minecraft:netherite_scrap', base: 1 }, // bem raro
        { id: 'minecraft:quartz', base: 7 }
      ]
    },
    {
      compressed: 'allthecompressed:end_stone',
      itens: [
        { id: 'allthemodium:raw_allthemodium', base: 1 },
        { id: 'allthemodium:raw_vibranium', base: 0.7 },
        { id: 'allthemodium:raw_unobtainium', base: 0.4 },
        { id: 'minecraft:diamond', base: 2 }
      ]
    }
  ]

  gruposCrushing.forEach(grupo => {
    for (let x = 1; x <= 9; x++) {
      let resultados = grupo.itens.map(item => {
        let quantidade = Math.floor(item.base * multCrushing[x])
        if (quantidade < 1) quantidade = 1

        return Item.of(item.id, quantidade)
      })

      event.recipes.create.crushing(resultados, `${grupo.compressed}_${x}x`)
        .id(`kubejs:crushing/${grupo.compressed.split(':')[1]}_${x}x`)
    }
  })

})