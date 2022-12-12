import RegionGrid from "../components/game/RegionGrid";

const regions = [
  {
    id: "1",
    name: "The North",
    population: 2.2,
    description: 
      `Covering half the landmass of Westeros, the North is largely a frozen wasteland. 
      The long Winters often decimate the Northmen population, but also work to make them
      stronger, resulting in a race of sturdy warriors who have no fear of death. 
      Blood of the First Men still flows through their ways, and they keep the Old Gods of the Forest.
      Long ago these lands were ruled by the Kings of Winter who bore the name Stark, until Torrhen
      knelt before the Dragon, forfeiting his Crown but saving his army from certain death and taking up
      a new title - the Warden of the North. The entire region is heavily fortified by Moat Cailin to the South,
      that guards the strip of land called The Neck, and to the North, the Wall protects the Realm from what lies beyond.`,
    goods: ["Timber","Iron","Fur"]
  },
  {
    id: "2",
    name: "The Crownlands",
    population: 1.6,
    description: 
      `Once home to poor fishing villages and the occassional small city, the Crownlands 
      grew into prosperity only when Aegon the Conqueror invaded and founded
      the city of King's Landing. The city now boasts a million souls, and is the primary
      center of Trade of the Seven Kingdoms, aided by the nearby city of Duskendale and the
      Isle of Driftmark. Atop Aegon's High Hill sits the Red Keep, home to the Kings of house Targaryen 
      and the Iron Throne, while Baelor's Great Sept, seat of the Faith of the Seven lies atop Visenya's Hill and
      the ruins of a once mighty dragonpit crest the Hill of Rhaenys. Many craftsmen and merchants make their living
      in the great city of King's Landing, including Bakers, Armorers, Fishmongers and Moneychangers and shipbuilders.`,
    goods: ["Spice","Fish","Ale"]
  },
  {
    id: "3",
    name: "The Reach",
    population: 3.1,
    description: 
      `The most fertile and populous of the Seven Kingdoms (thanks to the floodplains of the river Mander),
      the Reach was once ruled by the Gardeners. However, they all perished on the Field of Fire when Aegon and his 
      sisters came down upon them. Highgarden passed from Kings to Stewards and now house Tyrell formally 
      holds all the immense power of the Reach, with its fealty sworn to the Iron Throne as Wardens of the South.
      In practice, the richest and most powerful house is still House Hightower, an ancient and proud house that 
      rules over Oldtown - the second most populuous city in Westeros, and protects the Citadel of the Maesters, 
      the learning hub of the continent. Golden vines from the Arbor, bees from Honeyholt, and fields of grain 
      of many others make the Reach the Breadbasket of the Realm.`,
    goods: ["Grain","Cattle","Wine"]
  },
  {
    id: "4",
    name: "Dorne",
    population: 0.8,
    description: 
      `The last to swear fealty to the Iron Throne, Dorne yet remains the most independent of the 
      Seven Kingdoms, even retaining the style of Prince. Men and Women are equal by Dornish Law,
      as their customs of inheritence allow the older child to inherit no matter their gender. 
      This is owed to their history, as Nymeria brought the Rhoynish people with her to Dorne fleeing war,
      arriving from the continent of Essos aboard ten thousand ships. Those ships were burned, so they
      never may be used to return to the yoke of the imperialist Old Valyria. Dunes and rocky mountains
      leave little arrable land, which is mostly found in the valley of the Greenblood river, where the city of 
      Plankytown is situated, as well as the vineyards for the famous Dornish Red.`,
    goods: ["Fruit","Wine","Spice"]
  },
  {
    id: "5",
    name: "The Westerlands",
    population: 2,
    description: 
      `Rolling hills and rocky mountains give character to the region of the Westerlands. They seem arren on the 
      outside, but filled to the brim with the riches of the Earth on the inside. Gold, silver and platinum flow
      from the Westerlands to every corner of the realm. House Lannister has ruled over this region since the Age
      of Heroes, when Lann the Clever tricked the Casterlies of Casterly Rock and gained power as King of the West.
      But after the defeat at the Field of Fire, the Lannisters were relegated to the Wardens of the West, losing
      much of their former power but keeping their pride. Known throughout the world as legendary Smiths, 
      Western Steel is always sought after by knights and lords and foreigners alike, second only to Valyrian Steel,
      whose craftsmanship has long been forgotten.`,
    goods: ["Gold","Silver","Cattle"]
  },
  {
    id: "6",
    name: "The Vale",
    population: 1.4,
    description: 
      `The Vale of Arryn lies between the Mountains of the Moon to the West and the Narrow Sea to the East,
      House Arryn is the oldest and most noble of the Andal houses and fields the mightiest heavy cavalry force
      in the known world - the Knights of the Vale. They rule from their castle high up in the clouds, as Wardens of 
      the East, sworn to the Iron Throne. Most of the Terrain is inaccessible, due to slippery rockfaces
      and steep mountain ranges with snow-capped peaks, even in the Summer. Silversmiths and Merchnats of Gulltown 
      connect the Vale to the Free Cities and the Riverlands and Crownlands, as most of the trade avoids the 
      treacherous paths through the Mountains of the Moon, as they are often plagued by wild mountain clans,
      who once ruled these lands before the Andals.`,
    goods: ["Silver","Timber","Fish"]
  },
  {
    id: "7",
    name: "The Iron Islands",
    population: 0.4,
    description: 
      `The Iron Islands have long been the most savage of the Seven Kingdoms, a society that respected only
      strength of arms, knew only the law of fire and sword. They were mighty sailors and raiders who in their prime
      lorded over half the continent. That is of course before the Dragons arrived, and Harren the Black cooked in his
      castle, ending the line of House Hoare and giving rise to House Greyjoy, who swore fealty to the Targaryens, and
      promised to keep the Ironborn Reavers in check. This region still has the Iron Fleet - the largest fleet in Westeros
      sailed by the most battle-hardened sailors who often venture to the far lands of Essos, and some have even dared
      to venture west - never to return. "We do not Sow", ring the words of House Greyjoy, for the Islands are unable 
      to grow any crops and have to pay the Iron Price to survive.`,
    goods: ["Iron","Fish","Steel"]
  },
  {
    id: "8",
    name: "The Riverlands",
    population: 1.6,
    description: 
      `Although never a formal Kingdom, the region of the Riverlands has always been contested between several of them.
      This in turn built a unique character to the lands, owing their names to the mightiest river on the continent -
      the Trident. When the Dragon defeated Harren the Black, house Tully was the first to come to his side and in turn
      were awarded the title Lord Paramount of the Riverlands, which they hold to this day. The smallfolk grow crops,
      catch fish and breed cattle thanks to the fertile rivers and a hospitable climate. But whenever the flames of war
      are stoked, the Riverlands burn the brightest. This in turn has shaped a culture of warfare behind the enemy lines
      making the Rivermen the realm's finest archers and scouts, and the Lords of the Trident a particularly
      challanging foe in any weather and circumstance.`,
    goods: ["Fish","Cattle","Grain"]
  },
  {
    id: "9",
    name: "The Stormlands",
    population: 1.8,
    description: 
      `Owing its name to the mighty storms that rage from the Kingswood to Estermont, the Stormlands are a wooded region,
      often covered in mists and flooded with mighty rains. The land itself is fertile enough to farm and the hills
      are rich with iron, copper and tin. Aegon granted the Lordship to Lord Orys Baratheon, the first Hand of the King.
      He took to wife the daughter of the vanquished Storm King and became Lord Paramount of the Stormlands, swearing its
      allegience to the Iron Throne. The Stormlanders are not known for their horsemenship but are widely considered the 
      finest infantry force, often wielding heavy warhammers and battle axes to war instead of swords and shields.
      The Dornish Marches, to the Southeast have long been the fighting ground from which the Stormlords repelled the Dornish
      Incursions.`,
    goods: ["Cattle","Iron","Timber"]
  },
]

function RegionsPage() { 
    return <div> 
      <h1> Regions Page </h1>
      <p>
        The Regions page displays all the regions of the seven kingdoms,
        with one paragraph about the history, one about the geographic
        characteriscs, a picture of a typical landscape, and a list of
        houses (only sigil and name) for each region (dynamically rendered 
        based on the array of data of all houses and the 
        region property of all objects).
      </p>
      <RegionGrid regions={regions}/>
    </div>
    
  }
  
  export default RegionsPage;