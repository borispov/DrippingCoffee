export const USER_TYPES = {
  AVERAGE: "Average User",
  SERIOUS: "Serious Hobbyist",
};

export const VOLUME_PER_SERVING = {
  SOLO: "It's only me",
  DUO: "Coffee for two",
  SMALL_GATHERING: "Small gatherings",
};

export const VOLUME_PER_DAY = {
  LOW: "One cup per day",
  MEDIUM: "Two cups per day",
  HIGH: "Up to three cups",
  VERY_HIGH: "Four and more",
};

export const TYPE_OF_DRINK = {
  ESPRESSO: "Espresso",
  CAPPUCCINO_LATTE: "Cappuccinos/Latte",
  AMERICANO: "Americano",
  ALL: "All of them",
};

export const WARMUP_TIME = {
  FAST: "ASAP!",
  MEDIUM: "15-30 minutes",
  SLOW: "45+ minutes",
};

export const BUDGET = {
  LOW: "300-600",
  MID: "600-1,200",
  HIGH: "1200-3000",
  VERY_HIGH: "3000+",
};

const ACCESSORIES = {
  TAMPER: "Tamper",
  JUGG: "Milk Jugg",
  WDT_TOOL: "WDT",
  LEVELER: "Leveler",
  MAT: "Espresso mat",
  PF: "Portafilter",
  SCALE: "Scale",
};

export const accessories = {
  tampers: {
    "mhw-3bomber-53mm-tamper": {
      type: ACCESSORIES.TAMPER,
      machine: "MHW-3BOMBER 53mm Tamper",
      url: "https://amzn.to/3xOIOYg",
      price: "$43.99",
      diameter: 53,
    },
  },
  juggs: [
    {
      type: ACCESSORIES.JUGG,
      machine: "Generic Milk Pitcher",
      url: "https://amzn.to/3XNFnvA",
      price: "$12",
    },
    {
      type: ACCESSORIES.JUGG,
      machine: "Nomrcore Milk Pitcher - 20oz",
      url: "https://amzn.to/3VTbUh1",
      price: "$32.99",
    },
  ],
  scales: [
    {
      type: ACCESSORIES.SCALE,
      machine: "Mini Pocket Size Scale",
      url: "https://amzn.to/3zqnyIH",
      price: "$19.99",
      note: "A generic alternative to Normcore, if you don't want or can't invest in a mid-range scale like the normcore.",
    },
    {
      type: ACCESSORIES.SCALE,
      machine: "Normcore Pocket Scale",
      url: "https://www.amazon.com/Normcore-Pocket-Coffee-Scale-Espresso/dp/B0CP5Y6LYB?tag=dc0d7d-20",
      price: "$63.99",
      note: "This is one of those items that is worth investing in early on and that will bring joy to your daily coffee prep routine.",
    },
  ],
};

const machines = {
  r9: {
    machine: "Rocket R Nine",
    url: "https://www.espressocoffeeshop.com/en/high-tech/15-0-rocket-r-nine-one-coffee-machine.html",
    purchase: "",
  },
  de1xl: {
    machine: "Decent 1XL",
    url: "https://decentespresso.com/de1xl",
    purchase: "",
  },
  lmgs: {
    machine: "La Marzocco GS3",
    url: "https://home.lamarzoccousa.com/espresso-machines/linea-mini/",
    purchase: "",
  },
  lmlm: {
    machine: "La Marzocco Linea Mini",
    url: "machines/la-marzocco-linea-mini/",
    purchase: "https://home.lamarzoccousa.com/espresso-machines/linea-mini/",
  },
  pro800: {
    machine: "Profitec 800 Lever Machine",
    url: "/machines/profitec-pro-800/",
    purchase: "",
  },
  sync: {
    machine: "ECM Synchronika",
    url: "/machines/ecm-synchronika/",
    price: 2499,
    purchase: "",
  },
  flairBasic: {
    machine: "Flair Basic",
    url: "",
    price: 229, // Example price, replace with actual
    purchase: "https://amzn.to/469frg8",
  },
  flair58: {
    machine: "Flair 58",
    url: "",
    price: 325, // Example price, replace with actual
    purchase: "/machines/flair-58/",
  },
  gcp: {
    machine: "Gaggia Classic Pro Evo",
    url: "/machines/gaggia-classic-pro/",
    price: 549, // Example price, replace with actual
    purchase: "https://amzn.to/3WkvKU3",
  },
  go: {
    machine: "Profitec Go",
    url: "/machines/profitec-go/",
    purchase: "",
    price: 499, // Example price, replace with actual
  },
  bambinoPlus: {
    machine: "Breville Bambino Plus",
    url: "/machines/breville-bambino-plus/",
    price: 499, // Example price, replace with actual
    purchase: "https://amzn.to/3XW7I2V",
  },
  puristika: {
    machine: "Profitec Pro 300",
    url: "/machines/profitec-pro-300/",
    price: 1599, // Example price, replace with actual
    purchase: "",
  },
  silviaX: {
    machine: "Rancilio Silvia X",
    url: "/machines/rancilio-silvia-x/",
    price: 1222, // Example price, replace with actual
    purchase: "",
  },
  bdb: {
    machine: "Breville Dual Boiler",
    url: "/machines/breville-dual-boiler/",
    tamper: accessories.tampers["mhw-3bomber-53mm-tamper"],
    price: 1800, // Example price, replace with actual
    purchase: "https://amzn.to/4620kou",
  },
  mara: {
    machine: "Lelit Mara",
    url: "/machines/lelit-mara-x/",
    price: 1199, // Example price, replace with actual
    purchase: "",
  },
  elizabeth: {
    machine: "Lelit Elizabeth",
    url: "/machines/lelit-elizabeth/",
    price: 1399, // Example price, replace with actual
    purchase:
      "https://www.amazon.de/-/en/Elizabeth-PL92T-Prosumer-Parameter-Stainless/dp/B07Q5V179F/ref=sr_1_11?crid=T0J7I6HOGSLA&dib=eyJ2IjoiMSJ9.wJc_X4J6K7lVSctvOVpRPu1-4f2A8R6aeezSVRctZLT9fy7HDAdGzrm_OVQfUouKbF1rx8NmQHzXo1Mz83YHxzgHa8qEwm7RolPKTRXx_W-wIYC2vqKLg8cb2ssmg7z_rDfTBy6nDLDZIafGwMKkUKYQnqftdt58UrxtDMQ3Qf3RYch89cuB4iHTafAm8ObyTtMlxrg4fa7_2DNY8EgGN6kLzqLkiD_zJzPc5enFaxE.KGJEU6BBAzcaUAS0p28WFWSjGcMnC1tEA9fjKNw6t7o&dib_tag=se&keywords=lelit%2Bmara%2Bx&qid=1720792363&sprefix=lelit%2Bmara%2Bx%2Caps%2C134&sr=8-11&th=1",
  },
  strega: {
    machine: "Bezzera Strega",
    url: "/machines/bezzera-strega/",
    price: 2499, // Example price, replace with actual
    purchase: "",
  },
  drive: {
    machine: "Profitec 700 Drive",
    url: "/machines/profitec-pro-700-drive/",
    price: 2499, // Example price, replace with actual
    purchase: "",
  },
  bianca: {
    machine: "Lelit Bianca",
    url: "/machines/lelit-bianca/",
    price: 2499, // Example price, replace with actual
    purchase: "",
  },
};

const grinders = {
  SETTE: {
    machines: "Baratza Sette",
    url: "https://amzn.to/45XOY4O",
  },
  MAHLKONIG_E80: {
    machine: "Mahlkonig E80 SUPREME",
    url: "https://www.espressocoffeeshop.com/en/coffee-grinders/78-112794-MAHLKOENIG-E80-SUPREME-COFFEE-GRINDER.html#/2-color-white/46-voltage-110_v",
  },
  NORMCORE_MANUAL: {
    machine: "Normcore Manual",
    url: "https://amzn.to/3zyGQvv",
  },
  COMMANDANTE: {
    machine: "Comandante",
    url: "https://amzn.to/3zzu6VJ",
  },
  WEBER_EG_1: {
    machine: "Weber EG-1",
    url: "https://weberworkshops.com/products/eg-1",
  },
  LAGOM_01: {
    machine: "Lagom 01",
    url: "https://www.option-o.com/lagom-01",
  },
  MIGNON: {
    machine: "Eureka Mignon Manuale",
    url: "/machines/mignon",
  },
  MIGNON_ZERO: {
    machine: "Eureka Mignon Manuale",
    url: "/machines/mignon-zero",
  },
  NICHE: {
    machine: "Niche Zero",
    url: "/machines/niche-zero/",
  },

  SPECIALITA: {
    machine: "Eureka Specialita",
    url: "/machines/specialita/",
  },

  VARIO: {
    machine: "Baratza Vario+",
    url: "/machines/vario/",
  },
};

const isBlack = (v) =>
  TYPE_OF_DRINK.ESPRESSO == v || TYPE_OF_DRINK.AMERICANO == v;
const isLowBudget = (v) => BUDGET.LOW == v;
const isMidBudget = (v) => BUDGET.MID == v;
const isHighBudget = (v) => BUDGET.HIGH == v;
const isAverageUser = (v) => USER_TYPES.AVERAGE == v;

const matchForAverageUser = (user) => {
  const drink = user.typeOfDrink;
  return isLowBudget(user)
    ? recs.AVERAGE.LOW
    : isMidBudget(user)
      ? recs.AVERAGE.MID[drink]
      : isHighBudget(user)
        ? recs.AVERAGE.HIGH[drink]
        : recs.AVERAGE.VERY_HIGH;
};

const matchForSeriousUser = (user) => {
  const drink = user.typeOfDrink;
  return isLowBudget(user)
    ? recs.AVERAGE.LOW
    : isMidBudget(user)
      ? recs.AVERAGE.MID
      : isHighBudget(user)
        ? recs.AVERAGE.HIGH[drink]
        : recs.AVERAGE.VERY_HIGH;
};

export function matchRecommendation(userInput) {
  return isAverageUser(userInput.userType)
    ? matchForAverageUser(userInput)
    : matchForSeriousUser(userInput);
}

// need to fix this... not iterable
const recsPerBudget = (...args) => {
  let recs = [];
  args.forEach((budget) => {
    recs.push((Array.isArray(budget) && [...budget]) || [budget]);
  });
  return recs;
};

// for serious users
export const naiveSolution = (user) => {
  const party = user.volumePerServing == VOLUME_PER_SERVING.SMALL_GATHERING;
  const isDuo = user.volumePerServing == VOLUME_PER_SERVING.DUO;
  const isSolo = user.volumePerServing == VOLUME_PER_SERVING.SOLO;

  if (party) {
    console.log("we have got a party");
    return {
      espressoMachines: recsPerBudget(
        [machines.bambinoPlus],
        [machines.mara, machines.elizabeth],
        [machines.bdb, machines.bianca, machines.sync],
        [machines.lmgs, machines.sync],
      ),
      grinders: recsPerBudget(
        [grinders.SETTE],
        [grinders.SPECIALITA, grinders.SETTE],
        [grinders.SPECIALITA, grinders.SETTE],
        grinders.MAHLKONIG_E80,
      ),
      message: `Hosting a party and serving espresso based drinks isn't an easy endeavor, unless you got time, willingness and the correct set of tools for the job.
      Serving coffee to 7-8 guests with a Gaggia Classic Pro easn't a pleasant experience. I remember doing so, and I was locked up in the kitchen juggling everything and it wasn't fun, at all.
      However, serving guests with a Profitec-800 was much better, despite still having some more work to do because there's no way to cut the shot after 25 seconds. So, please, bear in mind, if you really need to host a party, you rather
      spend your money on a super-automatica, or spend WAY more money getting adequate equiment including a capable espresso machine, grinder and accessories.`,
    };
  }

  if (isBlack(user.typeOfDrink) && isSolo) {
    return {
      espressoMachines: recsPerBudget(
        [machines.flairBasic],
        [machines.flair58],
        [machines.puristika, machines.strega, machines.pro800],
        machines.de1xl,
      ),
      grinders: recsPerBudget(
        grinders.NORMCORE_MANUAL,
        grinders.COMMANDANTE,
        [grinders.SETTE, grinders.SPECIALITA],
        [grinders.LAGOM_01, grinders.WEBER_EG_1],
      ),
      message: `The dream. You make espresso. And you make it for yourself and yourself only. I'm jealous.
      Still, take into account those rare occasions where you might want to steam milk or make multiple back-to-back shots and consider their importance to you. If they are important,
      getting a manual lever machine like Flair, or even the Puristika won't cut it.`,
    };
  }

  if (isDuo && isBlack(user.typeOfDrink)) {
    switch (user.warmUp) {
      case WARMUP_TIME.FAST:
        return {
          espressoMachines: recsPerBudget(
            [machines.flairBasic],
            [machines.flair58],
            [machines.puristika, machines.pro800],
            [machines.lmlm],
          ),
          grinders: recsPerBudget(
            grinders.NORMCORE_MANUAL,
            grinders.COMMANDANTE,
            grinders.SPECIALITA,
            [grinders.LAGOM_01, grinders.WEBER_EG_1],
          ),
        };
      case WARMUP_TIME.MEDIUM:
        return {
          espressoMachines: recsPerBudget(
            [machines.gcp, machines.flairBasic],
            [machines.elizabeth, machines.mara],
            machines.drive,
            machines.lmlm,
          ),
          grinders: recsPerBudget(
            grinders.NORMCORE_MANUAL,
            grinders.COMMANDANTE,
            grinders.SPECIALITA,
            [grinders.LAGOM_01, grinders.WEBER_EG_1],
          ),
        };
      case WARMUP_TIME.SLOW:
        return {
          espressoMachines: recsPerBudget(
            [machines.gcp, machines.flairBasic],
            machines.silviaX,
            machines.sync,
            machines.lmlm,
          ),
          grinders: recsPerBudget(
            grinders.NORMCORE_MANUAL,
            grinders.COMMANDANTE,
            grinders.SPECIALITA,
            [grinders.LAGOM_01, grinders.WEBER_EG_1],
          ),
        };
      default:
        break;
    }
  }
  if (isDuo) {
    switch (user.warmUp) {
      case WARMUP_TIME.FAST:
        return {
          espressoMachines: recsPerBudget(
            [machines.bambinoPlus, machines.gcp],
            [machines.elizabeth, machines.mara, machines.silviaX],
            [machines.drive, machines.bdb, machines.bianca],
            machines.lmlm,
          ),
          grinders: recsPerBudget(
            grinders.MIGNON,
            grinders.SPECIALITA,
            grinders.NICHE,
            [grinders.LAGOM_01, grinders.WEBER_EG_1],
          ),
          message: `The latest addition of the Profitec Drive certainly added a fresh breath of air into the realm of fast and high-quality espresso machines.
          Prior to that, Bianca was the queen of all machines. You got the Bambino Plus, Lelit Elizabeth, Profitec Drive, and LMLM (in that order) for the fastest machine per budget.`,
        };
      case WARMUP_TIME.MEDIUM:
        return {
          espressoMachines: recsPerBudget(
            machines.gcp,
            machines.elizabeth,
            machines.drive,
            machines.lmlm,
          ),
          grinders: recsPerBudget(
            grinders.MIGNON,
            grinders.SPECIALITA,
            grinders.NICHE,
            [grinders.LAGOM_01, grinders.WEBER_EG_1],
          ),
        };
      case WARMUP_TIME.SLOW:
        return {
          espressoMachines: recsPerBudget(
            machines.gcp,
            machines.elizabeth,
            [
              machines.pro800,
              machines.bdb,
              machines.strega,
              machines.bdb,
              machines.drive,
            ],
            [machines.lmlm, machines.de1xl, machines.r9],
          ),
          grinders: recsPerBudget(
            [grinders.MIGNON],
            [grinders.SPECIALITA],
            [grinders.NICHE],
            [grinders.LAGOM_01, grinders.WEBER_EG_1],
          ),
        };
      default:
        break;
    }
  }

  // General recommendation:
  console.log("RETURNING DEFAULT RECOMMENDATION");
  return {
    espressoMachines: recsPerBudget(
      [machines.bambinoPlus, machines.gcp],
      [machines.elizabeth, machines.mara, machines.silviaX],
      [machines.drive, machines.bdb, machines.bianca],
      machines.lmlm,
    ),
    grinders: recsPerBudget(
      [grinders.MIGNON],
      [grinders.MIGNON],
      [grinders.SPECIALITA, grinders.MIGNON_ZERO],
      [grinders.NICHE][(grinders.LAGOM_01, grinders.WEBER_EG_1)],
    ),
    message: ``,
  };
};

export const averageSolution = (user) => {
  const party = user.volumePerServing == VOLUME_PER_SERVING.SMALL_GATHERING;
  const isDuo = user.volumePerServing == VOLUME_PER_SERVING.DUO;
  const isSolo = user.volumePerServing == VOLUME_PER_SERVING.SOLO;

  if (party) {
    console.log("we have got a party");
    return {
      espressoMachines: recsPerBudget(
        [machines.bambinoPlus],
        [machines.mara, machines.elizabeth],
        [machines.bdb, machines.bianca, machines.sync],
        [machines.lmgs, machines.sync],
      ),
      grinders: recsPerBudget(
        [grinders.SETTE],
        [grinders.SPECIALITA, grinders.SETTE],
        [grinders.SPECIALITA, grinders.SETTE],
        grinders.MAHLKONIG_E80,
      ),
    };
  }

  if (isBlack(user.typeOfDrink) && isSolo) {
    return {
      espressoMachines: recsPerBudget(
        [machines.flairBasic],
        [machines.flair58],
        [machines.puristika, machines.strega, machines.pro800],
        machines.de1xl,
      ),
      grinders: recsPerBudget(
        grinders.NORMCORE_MANUAL,
        grinders.COMMANDANTE,
        [grinders.SETTE, grinders.SPECIALITA],
        [grinders.LAGOM_01, grinders.WEBER_EG_1],
      ),
    };
  }

  if (isDuo && isBlack(user.typeOfDrink)) {
    switch (user.warmUp) {
      case WARMUP_TIME.FAST:
        return {
          espressoMachines: recsPerBudget(
            [machines.flairBasic],
            [machines.flair58],
            [machines.puristika, machines.pro800],
            [machines.lmlm],
          ),
          grinders: recsPerBudget(
            grinders.NORMCORE_MANUAL,
            grinders.COMMANDANTE,
            grinders.SPECIALITA,
            [grinders.LAGOM_01, grinders.WEBER_EG_1],
          ),
        };
      case WARMUP_TIME.MEDIUM:
        return {
          espressoMachines: recsPerBudget(
            [machines.gcp, machines.flairBasic],
            [machines.elizabeth, machines.mara],
            machines.drive,
            machines.lmlm,
          ),
          grinders: recsPerBudget(
            grinders.NORMCORE_MANUAL,
            grinders.COMMANDANTE,
            grinders.SPECIALITA,
            [grinders.LAGOM_01, grinders.WEBER_EG_1],
          ),
        };
      case WARMUP_TIME.SLOW:
        return {
          espressoMachines: recsPerBudget(
            [machines.gcp, machines.flairBasic],
            machines.silviaX,
            machines.sync,
            machines.lmlm,
          ),
          grinders: recsPerBudget(
            grinders.NORMCORE_MANUAL,
            grinders.COMMANDANTE,
            grinders.SPECIALITA,
            [grinders.LAGOM_01, grinders.WEBER_EG_1],
          ),
        };
      default:
        break;
    }
  }
  if (isDuo) {
    switch (user.warmUp) {
      case WARMUP_TIME.FAST:
        return {
          espressoMachines: recsPerBudget(
            [machines.bambinoPlus, machines.gcp],
            [machines.elizabeth, machines.mara, machines.silviaX],
            [machines.drive, machines.bdb, machines.bianca],
            machines.lmlm,
          ),
          grinders: recsPerBudget(
            grinders.MIGNON,
            grinders.SPECIALITA,
            grinders.NICHE,
            [grinders.LAGOM_01, grinders.WEBER_EG_1],
          ),
        };
      case WARMUP_TIME.MEDIUM:
        return {
          espressoMachines: recsPerBudget(
            machines.gcp,
            machines.elizabeth,
            machines.drive,
            machines.lmlm,
          ),
          grinders: recsPerBudget(
            grinders.MIGNON,
            grinders.SPECIALITA,
            grinders.NICHE,
            [grinders.LAGOM_01, grinders.WEBER_EG_1],
          ),
        };
      case WARMUP_TIME.SLOW:
        return {
          espressoMachines: recsPerBudget(
            machines.gcp,
            machines.elizabeth,
            [
              machines.pro800,
              machines.bdb,
              machines.strega,
              machines.bdb,
              machines.drive,
            ],
            [machines.lmlm, machines.de1xl, machines.r9],
          ),
          grinders: recsPerBudget(
            [grinders.MIGNON],
            [grinders.SPECIALITA],
            [grinders.NICHE],
            [grinders.LAGOM_01, grinders.WEBER_EG_1],
          ),
        };
      default:
        break;
    }
  }

  // General recommendation:
  console.log("RETURNING DEFAULT RECOMMENDATION");
  return {
    espressoMachines: recsPerBudget(
      [machines.bambinoPlus, machines.gcp],
      [machines.elizabeth, machines.mara, machines.silviaX],
      [machines.drive, machines.bdb, machines.bianca],
      machines.lmlm,
    ),
    grinders: recsPerBudget(
      [grinders.MIGNON],
      [grinders.MIGNON],
      [grinders.SPECIALITA, grinders.MIGNON_ZERO],
      [grinders.NICHE][(grinders.LAGOM_01, grinders.WEBER_EG_1)],
    ),
  };
};
