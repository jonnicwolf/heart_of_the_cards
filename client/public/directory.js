export function randomCards (cards) {
  const result = [];

  let counter = 3;
  while (counter > 0) {
    const randIndex = Math.floor(Math.random() * cards.length);
    if (result.includes(cards[randIndex]) === false) {
      counter-=1;
      result.push(cards[randIndex]);
    };
  };

  return result;
};

export const cards = [
    {
      "code": "ar01",
      "name": "The Magician",
    },
    {
      "code": "ar02",
      "name": "The High Priestess",
    },
    {
      "code": "ar03",
      "name": "The Empress",
    },
    {
      "code": "ar04",
      "name": "The Emperor",
    },
    {
      "code": "ar05",
      "name": "The Hierophant",
    },
    {
      "code": "ar06",
      "name": "The Lovers",
    },
    {
      "code": "ar07",
      "name": "The Chariot",
    },
    {
      "code": "ar08",
      "name": "Fortitude",
    },
    {
      "code": "ar09",
      "name": "The Hermit",
    },
    {
      "code": "ar10",
      "name": "Wheel Of Fortune",
    },
    {
      "code": "ar11",
      "name": "Justice",
    },
    {
      "code": "ar12",
      "name": "The Hanged Man",
    },
    {
      "code": "ar13",
      "name": "Death",
    },
    {
      "code": "ar14",
      "name": "Temperance",
    },
    {
      "code": "ar15",
      "name": "The Devil",
    },
    {
      "code": "ar16",
      "name": "The Tower",
    },
    {
      "code": "ar17",
      "name": "The Star",
    },
    {
      "code": "ar18",
      "name": "The Moon",
    },
    {
      "code": "ar19",
      "name": "The Sun",
    },
    {
      "code": "ar20",
      "name": "The Last Judgment",
    },
    {
      "code": "ar00",
      "name": "The Fool",
    },
    {
      "code": "ar21",
      "name": "The World",
    },
    {
      "name": "Page of Wands",
      "code": "wapa",
    },
    {
      "name": "Knight of Wands",
      "code": "wakn",
    },
    {
      "name": "Queen of Wands",
      "code": "waqu",
    },
    {
      "name": "King of Wands",
      "code": "waki",
    },
    {
      "name": "Ace of Wands",
      "code": "waac",
    },
    {
      "name": "Two of Wands",
      "code": "wa02",
    },
    {
      "name": "Three of Wands",
      "code": "wa03",
    },
    {
      "name": "Four of Wands",
      "code": "wa04",
    },
    {
      "name": "Five of Wands",
      "code": "wa05",
    },
    {
      "name": "Six of Wands",
      "code": "wa06",
    },
    {
      "name": "Seven of Wands",
      "code": "wa07",
    },
    {
      "name": "Eight of Wands",
      "code": "wa08",
    },
    {
      "name": "Nine of Wands",
      "code": "wa09",
    },
    {
      "name": "Ten of Wands",
      "code": "wa10",
    },
    {
      "name": "Page of Cups",
      "code": "cupa",
    },
    {
      "name": "Knight of Cups",
      "code": "cukn",
    },
    {
      "name": "Queen of Cups",
      "code": "cuqu",
    },
    {
      "name": "King of Cups",
      "code": "cuki",
    },
    {
      "name": "Ace of Cups",
      "code": "cuac",
    },
    {
      "name": "Two of Cups",
      "code": "cu02",
    },
    {
      "name": "Three of Cups",
      "code": "cu03",
    },
    {
      "name": "Four of Cups",
      "code": "cu04",
    },
    {
      "name": "Five of Cups",
      "code": "cu05",
    },
    {
      "name": "Six of Cups",
      "code": "cu06",
    },
    {
      "name": "Seven of Cups",
      "code": "cu07",
    },
    {
      "name": "Eight of Cups",
      "code": "cu08",
    },
    {
      "name": "Nine of Cups",
      "code": "cu09",
    },
    {
      "name": "Ten of Cups",
      "code": "cu10",
    },
    {
      "name": "Page of Pentacles",
      "code": "pepa",
    },
    {
      "name": "Knight of Pentacles",
      "code": "pekn",
    },
    {
      "name": "Queen of Pentacles",
      "code": "pequ",
    },
    {
      "name": "King of Pentacles",
      "code": "peki",
    },
    {
      "name": "Ace of Pentacles",
      "code": "peac",
    },
    {
      "name": "Two of Pentacles",
      "code": "pe02",
    },
    {
      "name": "Three of Pentacles",
      "code": "pe03",
    },
    {
      "name": "Four of Pentacles",
      "code": "pe04",
    },
    {
      "name": "Five of Pentacles",
      "code": "pe05",
    },
    {
      "name": "Six of Pentacles",
      "code": "pe06",
    },
    {
      "name": "Seven of Pentacles",
      "code": "pe07",
    },
    {
      "name": "Eight of Pentacles",
      "code": "pe08",
    },
    {
      "name": "Nine of Pentacles",
      "code": "pe09",
    },
    {
      "name": "Ten of Pentacles",
      "code": "pe10",
    },
    {
      "name": "Page of Swords",
      "code": "swpa",
    },
    {
      "name": "Knight of Swords",
      "code": "swkn",
    },
    {
      "name": "Queen of Swords",
      "code": "swqu",
    },
    {
      "name": "King of Swords",
      "code": "swki",
    },
    {
      "name": "Ace of Swords",
      "code": "swac",
    },
    {
      "name": "Two of Swords",
      "code": "sw02",
    },
    {
      "name": "Three of Swords",
      "code": "sw03",
    },
    {
      "name": "Four of Swords",
      "code": "sw04",
    },
    {
      "name": "Five of Swords",
      "code": "sw05",
    },
    {
      "name": "Six of Swords",
      "code": "sw06",
    },
    {
      "name": "Seven of Swords",
      "code": "sw07",
    },
    {
      "name": "Eight of Swords",
      "code": "sw08",
    },
    {
      "name": "Nine of Swords",
      "code": "sw09",
    },
    {
      "name": "Ten of Swords",
      "code": "sw10",
    }
  ];



