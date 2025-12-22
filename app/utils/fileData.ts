interface ItemDetails {
  biome: string;
  mapCoordinates: string;
}

const FILE_DATA = {
  fleas: {
    SavedFlea_Ant_03: {
      biome: "Hunters's March",
      mapCoordinates: "477999",
    },
    SavedFlea_Belltown_04: {
      biome: "Bellhart",
      mapCoordinates: "478193",
    },
    SavedFlea_Bone_06: {
      biome: "The Marrow",
      mapCoordinates: "477890",
    },
    SavedFlea_Bone_East_05: {
      biome: "The Marrow",
      mapCoordinates: "477916",
    },
    SavedFlea_Bone_East_10_Church: {
      biome: "Far Fields",
      mapCoordinates: "478219",
    },
    SavedFlea_Bone_East_17b: {
      biome: "Far Fields",
      mapCoordinates: "477940",
    },
    SavedFlea_Coral_24: {
      biome: "Sands of Karak",
      mapCoordinates: "478385",
    },
    SavedFlea_Coral_35: {
      biome: "Blasted Steps",
      mapCoordinates: "478386",
    },
    SavedFlea_Crawl_06: {
      biome: "Warmways",
      mapCoordinates: "478450",
    },
    SavedFlea_Dock_03d: {
      biome: "Deep Docks",
      mapCoordinates: "478437",
    },
    SavedFlea_Dock_16: {
      biome: "Deep Docks",
      mapCoordinates: "477907",
    },
    SavedFlea_Dust_09: {
      biome: "Exhaust Organ",
      mapCoordinates: "478378",
    },
    SavedFlea_Dust_12: {
      biome: "Sinner's Road",
      mapCoordinates: "478360",
    },
    SavedFlea_Greymoor_06: {
      biome: "Greymoor",
      mapCoordinates: "478287",
    },
    SavedFlea_Greymoor_15b: {
      biome: "Greymoor",
      mapCoordinates: "478145",
    },
    SavedFlea_Library_01: {
      biome: "Whispering Vaults",
      mapCoordinates: "478402",
    },
    SavedFlea_Library_09: {
      biome: "Songclave",
      mapCoordinates: "478404",
    },
    SavedFlea_Peak_05c: {
      biome: "Mount Fay",
      mapCoordinates: "478380",
    },
    SavedFlea_Shadow_10: {
      biome: "Bilewater",
      mapCoordinates: "478408",
    },
    SavedFlea_Shadow_28: {
      biome: "Bilewater",
      mapCoordinates: "478443",
    },
    SavedFlea_Shellwood_03: {
      biome: "Shellwood",
      mapCoordinates: "478176",
    },
    SavedFlea_Slab_06: {
      biome: "The Slab",
      mapCoordinates: "478392",
    },
    SavedFlea_Slab_Cell: {
      biome: "The Slab",
      mapCoordinates: "478393",
    },
    SavedFlea_Song_11: {
      biome: "Choral Chambers",
      mapCoordinates: "478416",
    },
    SavedFlea_Song_14: {
      biome: "Choral Chambers",
      mapCoordinates: "478398",
    },
    SavedFlea_Under_21: {
      biome: "Underworks",
      mapCoordinates: "478420",
    },
    SavedFlea_Under_23: {
      biome: "Underworks",
      mapCoordinates: "478419",
    },
    tamedGiantFlea: {
      biome: "Memouium",
      mapCoordinates: "478413",
    },
  },
  masks: {
    Crawl_02: {
      biome: "Warmways",
      mapCoordinates: "478091",
    },
    Dock_08: {
      biome: "Deep Docks",
      mapCoordinates: "477901",
    },
    Bone_East_20: {
      biome: "Far Fields",
      mapCoordinates: "477975",
    },
    Shellwood_14: {
      biome: "The Marrow",
      mapCoordinates: "478177",
    },
    Weave_05b: {
      biome: "The Marrow",
      mapCoordinates: "478233",
    },
    Song_09: {
      biome: "Choral Chambers",
      mapCoordinates: "478615",
    },
    Library_05: {
      biome: "Whispering Vaults",
      mapCoordinates: "478671",
    },
    Bone_East_LavaChallenge: {
      biome: "Far Fields",
      mapCoordinates: "478841",
    },
    Peak_04c: {
      biome: "Mount Fay",
      mapCoordinates: "479038",
    },
    Slab_17: {
      biome: "The Slab",
      mapCoordinates: "479001",
    },
    Shadow_13: {
      biome: "Bilewater",
      mapCoordinates: "478849",
    },
    Wisp_07: {
      biome: "Wisp Thicket",
      mapCoordinates: "479151",
    },
    Coral_19b: {
      biome: "Blasted Steps",
      mapCoordinates: "478498",
    },
    Peak_06: {
      biome: "Mount Fay",
      mapCoordinates: "479460",
    },
    PurchasedBonebottomHeartPiece: {
      biome: "Moss Grotto",
      mapCoordinates: "477840",
    },
    MerchantEnclaveShellFragment: {
      biome: "Choral Chambers",
      mapCoordinates: "478879",
    },
    "Beastfly Hunt": {
      biome: "Bellhart",
      mapCoordinates: "478800",
    },
    "Sprintmaster Race": {
      biome: "Far Fields",
      mapCoordinates: "479194",
    },
    "Destroy Thread Cores": {
      biome: "Bellhart",
      mapCoordinates: "479449",
    },
    "Ant Trapper": {
      biome: "Bellhart",
      mapCoordinates: "479447",
    },
  },
} as const;

export { FILE_DATA };
export type { ItemDetails };
