const EmojiCatcherSavedDataTemplate = {
  emojis: [],
  points: 0,
  achievements: [],
  shiny: [],
  stats: {
    avgTimeToClick: 0,
    lastSecClick: 0,
    firstSecClick: 0,
    missedEmojis: 0,
  },
};

const EmojiCatcherData = {
  bugEmoji: {
    emoji: "🐛",
    chance: 0,
    title: "You found a bug, consider reporting :]",
    points: 1,
    rareStatus: 3,
  },
  firstEmoji: "🍪",
  rareStatuses: ['normal', 'spacial', 'rare', 'unique'],
  emojis: [
    // rare status 0 - 20/20
    {
      emoji: "✌️",
      chance: 200,
      title: "Peace and Love",
      points: 5,
      rareStatus: 0,
    },
    {
      emoji: "🍪",
      chance: 200,
      title: "Clicker",
      points: 5,
      rareStatus: 0,
    },
    {
      emoji: "😍",
      chance: 190,
      title: "Lover",
      points: 7,
      rareStatus: 0,
    },
    {
      emoji: "🤡",
      chance: 190,
      title: "Peanut",
      points: 7,
      rareStatus: 0,
    },
    {
      emoji: "🎃",
      chance: 180,
      title: "PSL",
      points: 10,
      rareStatus: 0,
    },
    {
      emoji: "😼",
      chance: 180,
      title: "Sneaky Kitty",
      points: 10,
      rareStatus: 0,
    },
    {
      emoji: "💪",
      chance: 170,
      title: "Lifting",
      points: 15,
      rareStatus: 0,
    },
    {
      emoji: "👮",
      chance: 170,
      title: "Click police",
      points: 15,
      rareStatus: 0,
    },
    {
      emoji: "🧦",
      chance: 160,
      title: "Dirty laundry",
      points: 20,
      rareStatus: 0,
    },
    {
      emoji: "🐭",
      chance: 160,
      title: "Mousing around",
      points: 20,
      rareStatus: 0,
    },
    {
      emoji: "😈",
      chance: 150,
      title: "Planning ahead",
      points: 25,
      rareStatus: 0,
    },
    {
      emoji: "👼",
      chance: 150,
      title: "Going up",
      points: 25,
      rareStatus: 0,
    },
    {
      emoji: "🏃",
      chance: 150,
      title: "Gotta run",
      points: 25,
      rareStatus: 0,
    },
    {
      emoji: "🧶",
      chance: 150,
      title: "Meow",
      points: 30,
      rareStatus: 0,
    },
    {
      emoji: "🐙",
      chance: 150,
      title: "All the arms",
      points: 30,
      rareStatus: 0,
    },
    {
      emoji: "🧸",
      chance: 140,
      title: "Theodore",
      points: 35,
      rareStatus: 0,
    },
    {
      emoji: "📎",
      chance: 140,
      title: "Clippy?",
      points: 35,
      rareStatus: 0,
    },
    {
      emoji: "🆒",
      chance: 130,
      title: "A cool emoji",
      points: 40,
      rareStatus: 0,
    },
    {
      emoji: "💋",
      chance: 130,
      title: "XOXO",
      points: 40,
      rareStatus: 0,
    },
    {
      emoji: "🧑‍🦽",
      chance: 120,
      title: "For all",
      points: 45,
      rareStatus: 0,
    },
    // rare status 1 - 15/15
    {
      emoji: "🦄",
      chance: 100,
      title: "Majestic",
      points: 50,
      rareStatus: 1,
    },
    {
      emoji: "😀",
      chance: 100,
      title: "OG",
      points: 50,
      rareStatus: 1,
    },
    {
      emoji: "🤩",
      chance: 100,
      title: "OMG it's Taytay",
      points: 50,
      rareStatus: 1,
    },
    {
      emoji: "🤖",
      chance: 90,
      title: "The Machine",
      points: 50,
      rareStatus: 1,
    },
    {
      emoji: "🐷",
      chance: 90,
      title: "OINK",
      points: 60,
      rareStatus: 1,
    },
    {
      emoji: "🐬",
      chance: 80,
      title: "Free",
      points: 60,
      rareStatus: 1,
    },
    {
      emoji: "🔥",
      chance: 80,
      title: "LIT",
      points: 60,
      rareStatus: 1,
    },
    {
      emoji: "🍆",
      chance: 69,
      title: "...",
      points: 69,
      rareStatus: 1,
    },
    {
      emoji: "🍺",
      chance: 70,
      title: "ANOTHER",
      points: 70,
      rareStatus: 1,
    },
    {
      emoji: "🍬",
      chance: 60,
      title: "Sweet tooth",
      points: 70,
      rareStatus: 1,
    },
    {
      emoji: "🎹",
      chance: 60,
      title: "Tickle me",
      points: 70,
      rareStatus: 1,
    },
    {
      emoji: "💨",
      chance: 50,
      title: "\"Gust of wind\"",
      points: 80,
      rareStatus: 1,
    },
    {
      emoji: "🍓",
      chance: 50,
      title: "Neta's choice",
      points: 80,
      rareStatus: 1,
    },
    {
      emoji: "🍖",
      chance: 40,
      title: "Caveman",
      points: 100,
      rareStatus: 1,
    },
    {
      emoji: "🧀",
      chance: 40,
      title: "this is allowed",
      points: 100,
      rareStatus: 1,
    },
    // rare status 2 - 10/10
    {
      emoji: "😎",
      chance: 10,
      title: "Coooool",
      points: 200,
      rareStatus: 2,
    },
    {
      emoji: "🦾",
      chance: 10,
      title: "Upgrades",
      points: 200,
      rareStatus: 2,
    },
    {
      emoji: "🎩",
      chance: 10,
      title: "Fancy-pants",
      points: 300,
      rareStatus: 2,
    },
    {
      emoji: "🍄",
      chance: 8,
      title: "Its-a-me",
      points: 300,
      rareStatus: 2,
    },
    {
      emoji: "🥑",
      chance: 8,
      title: "Avocadon't",
      points: 500,
      rareStatus: 2,
    },
    {
      emoji: "🎱",
      chance: 7,
      title: "Corner pocket",
      points: 500,
      rareStatus: 2,
    },
    {
      emoji: "🛵",
      chance: 7,
      title: "They see me rollin",
      points: 1000,
      rareStatus: 2,
    },
    {
      emoji: "🕹",
      chance: 6,
      title: "Old school",
      points: 1000,
      rareStatus: 2,
    },
    {
      emoji: "🧨",
      chance: 6,
      title: "Mining for diamonds",
      points: 2000,
      rareStatus: 2,
    },
    {
      emoji: "🧻",
      chance: 5,
      title: "2020",
      points: 5000,
      rareStatus: 2,
    },
    // rare status 3 - 5/5
    {
      emoji: "💸",
      chance: 1,
      title: "Cha-Ching",
      points: 10000,
      rareStatus: 3,
    },
    {
      emoji: "👑",
      chance: 1,
      title: "Royalty",
      points: 12000,
      rareStatus: 3,
    },
    {
      emoji: "🏆",
      chance: 1,
      title: "NO 1",
      points: 15000,
      rareStatus: 3,
    },
    {
      emoji: "🎲",
      chance: 1,
      title: "On a roll",
      points: 20000,
      rareStatus: 3,
    },
    {
      emoji: "🧩",
      chance: 1,
      title: "The last piece",
      points: 20000,
      rareStatus: 3,
    },
  ],
  achievements: [
    // points
    {
      condition: {
        check: "points",
        for: 100,
      },
      text: "On the board - 100 points collected",
      icon: "🥉",
    },
    {
      condition: {
        check: "points",
        for: 1000,
      },
      text: "Up the chart - 1000 points collected",
      icon: "🥈",
    },
    {
      condition: {
        check: "points",
        for: 10000,
      },
      text: "A contender - 10000 points collected",
      icon: "🥇",
    },
    {
      condition: {
        check: "points",
        for: 100000,
      },
      text: "True dedication - 100000 points collected",
      icon: "🏅",
    },
    // emojis
    {
      condition: {
        check: "emojis",
        types: ["🍪"],
        for: 10,
      },
      text: "Master-baker - 10 cookies caught",
      icon: "🍪",
    },
    {
      condition: {
        check: "emojis",
        types: ["🦄"],
        for: 3,
      },
      text: "Why stop at 3 - 3 unicorns caught",
      icon: "🦄",
    },
    {
      condition: {
        check: "emojis",
        types: ["😎","😍","🤩"],
        for: 1,
      },
      text: "Cover your eyes - Cool-heartthrob-struck series caught",
      icon: "🙈",
    },
    // types
    {
      condition: {
        check: "types",
        for: 1,
      },
      text: "My first emoji - caught your first emoji",
      icon: "🧢",
    },
    {
      condition: {
        check: "types",
        for: 10,
      },
      text: "Slowly but surely - caught 10 different types",
      icon: "☝️",
    },
    {
      condition: {
        check: "types",
        for: 25,
      },
      text: "Half way - caught 25 different types",
      icon: "🧗",
    },
    {
      condition: {
        check: "types",
        for: 50,
      },
      text: "A complete set - caught 50 different types",
      icon: "🏆",
    },
    // amount
    {
      condition: {
        check: "amount",
        for: 69,
      },
      text: "Nice - caught 69 Emojis",
      icon: "🍆",
    },
    {
      condition: {
        check: "amount",
        for: 420,
      },
      text: "Nicer - caught 420 Emojis",
      icon: "🌿",
    },
  ],
};
