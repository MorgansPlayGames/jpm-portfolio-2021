const hobbyList = [
  {
    type: "animation",
    list: [
      {
        name:"Texture Examples",
        subtitle: "Using nodes, created some fun textures",
        link:"animations/ballTextures.mp4",
        fileType:"mp4"
      },
      {
        name:"Jellyfish",
        subtitle: "Used cloth and hair physics to make a jellyfish",
        link:"animations/JellyFish.mp4",
        fileType:"mp4"
      },
      {
        name:"Waterfall Text",
        subtitle: "Using water physics, and displacement to create some cool text",
        link:"animations/AlexWater.mp4",
        fileType:"mp4"
      },
      {
        name:"Scultping of Myself",
        subtitle: "Colab, my wife sculpted me, so I textured and animated.",
        link:"animations/LisaFirst.mp4",
        fileType:"mp4"
      },
      {
        name:"Rue Goal Burg",
        subtitle: "Softbody physics rolling ball",
        link:"animations/ballroll.mp4",
        fileType:"mp4"
      },
      {
        name:"Glass of liquid drop",
        subtitle: "Used glass texture to make a cup and simulated some water splashing inside",
        link:"animations/glasswater.mp4",
        fileType:"mp4"
      },
      {
        name:"Splashes",
        subtitle: "Different shapes and modifiers on liquid physics.",
        link:"animations/splash.mp4",
        fileType:"mp4"
      },
      {
        name: "Smash Broez",
        subtitle: "Fast multiple armature animation with smoke effect",
        link: "animations/fight.mp4",
        fileType: "mp4",
      },
      {
        name: "Rick",
        subtitle: "Floating Rigged figure with cloth mesh and psychedelic backround",
        link: "animations/Rick.mp4",
        fileType: "mp4",
      },
      {
        name: "Starboy",
        subtitle: "Rainbow walking hairy starfish",
        link: "animations/Starboy.mp4",
        fileType: "mp4",
      },
      {
        name: "Disco Ball",
        subtitle: "Reflective surface with light particles",
        link: "animations/DiscoLights.mp4",
        fileType: "mp4",
      },
      {
        name: "Spongeboy",
        subtitle: "Dimention shaders for BG and multiple layers",
        link: "animations/spongeboy.mp4",
        fileType: "mp4",
      },
      {
        name: "T-rex",
        subtitle: "Run cycle with a sculpted dinosaur",
        link: "animations/Trex.mp4",
        fileType: "mp4",
      },
      {
        name: "Floof Cat Glowy Eyes",
        subtitle: "Cat with way too much fur rendered",
        link: "animations/catfurry.mp4",
        fileType: "mp4",
      },
      {
        name: "Funky Cup",
        subtitle: "Glass and light rendering",
        link: "animations/funkycup.mp4",
        fileType: "mp4",
      },
      {
        name: "Sad Fuzzy Guy",
        subtitle: "Longer hair walk cycle",
        link: "animations/fuzwalksad.mp4",
        fileType: "mp4",
      },
      {
        name: "DankeyKang",
        subtitle: "4 Leg walk cycle and hair",
        link: "animations/DonkeyKong.mp4",
        fileType: "mp4",
      },
      {
        name: "Among Friends",
        subtitle: "Fun Walk Cycle",
        link: "animations/AmongUs.mp4",
        fileType: "mp4",
      },
      {
        name: "Rolling Box",
        subtitle: "Dimention practice",
        link: "animations/Box.gif",
      },
      {
        name: "Dadada Horse",
        subtitle: "dadadada",
        link: "animations/Dadada.gif",
      },
      {
        name: "Wana Fite Bro",
        subtitle: "Intimidation",
        link: "animations/Dnd.gif",
      },
      {
        name: "Smokey the Dog",
        subtitle: "Doesn't fight fires",
        link: "animations/Doggie.gif",
      },
      {
        name: "Walking Box",
        subtitle: "How does a box walk?",
        link: "animations/Doll.gif",
      },
      {
        name: "Dance",
        subtitle: "Headless?",
        link: "animations/Flutterbees.gif",
      },
      {
        name: "Pork",
        subtitle: "*",
        link: "animations/Pork.gif",
      },
      {
        name: "Strawberry",
        subtitle: "Creepy",
        link: "animations/Something.gif",
      },
      {
        name: "I Quit",
        subtitle: "Wrekd",
        link: "animations/Tableflip.gif",
      },
    ],
  },
  {
    type: "videogames",
    list: [
      {
        name: "Bloodborne",
        subtitle: "Dark Souls with guns",
        rating: "10/10",
        history:
          "I played Bloodborne just after beating Dark Souls 3. It is subversive with it's use of Victorian times, mixed with some H.P. Lovecraft madness. This is Dark Souls, but horror. Screaming pierces your ears from all sides, monsters jump out at you from behind, it is constantly dark, with only your torch to see. The first part of the game is a nighmare of difficulty, as it forces you to actually learn mechanics, rather than run through guns blazing. Trying to survive the high tensity atmosphere that this game bleeds, makes it all the better. Patience and careful timing are key to progressing through the game. I am currently trying to beat this one. I am making good progress!",
        timePlayed: "2016, 2021",
        amountPlayed: "a good month",
      },
      {
        name: "World of Warcraft",
        subtitle: "Classic to BC",
        rating: "10/10",
        history:
          "The Warcraft series has been a big part of my life. I played Warcraft II, loved Starcraft, played tons of Warcraft III, and finally, after getting a good enough internet connection, and begging my dad for it, we purchased a subscription to World of Warcraft. I didn't actually get to play much, as I was grounded throughout Classic and most of The Burning Crusade, but I kept up on the lore, discussed it with my friends who actually played, and taught my sister how to play the game so I could watch her. I set up a bot so I could get to level 60, which got my account banned... I just wanted to kill Onyxia!",
        timePlayed: "2006-2008",
        amountPlayed: "Not a lot",
      },
    ],
  },
  {
    type: "cooking",
    list: [
      {
        name: "Risotto",
        subtitle: "Best rice ever",
        experience:
          "I love cooking risotto. White wine, garlic, and cheese make a nice creamy rice dish. ",
        time: "2019",
      },
    ],
  },
  {
    type: "TabletopGaming",
    list: [
      {
        name: "Horror DnD?!",
        subtitle: "Can you hear the call?",
        experience: [
          "Call of Cthulhu is great! Horror and tabletop gaming are extremely fun, especially when you can get the mood right. When people feel creeped out, and are hesitant to proceed you know you have a fun game.",
          "Life is cheap in this game, guns can outright kill your character, you can go insane by looking at something you shouldn't. This fragility makes the horror all the more visceral.",
          "Modules are a lot easier to follow with investigation and clues being a pillar of the roleplay. The setting is usually the 1920's, making it easier for non-fantasy people to get in on it. I always suggest this game if people are sick of DnD.",
        ],
        time: "pre-pandemic",
        gameType: "Call of Cthulhu",
      },
    ],
  },
];
export default hobbyList;
