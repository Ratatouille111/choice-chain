export interface Module {
  id: number;
  character: string;
  characterEmoji: string;
  title: string;
  icon: string;
  color: [string, string];
  accent: string;
  scenario: string;
  choices: { text: string; emoji: string }[];
  feedback: {
    emoji: string;
    title: string;
    body: string;
    stars: number;
    hint?: string;
  }[];
}

export const MODULES: Module[] = [
  {
    id: 1,
    character: "Robot Ricky",
    characterEmoji: "🤖",
    title: "Watching Cameras",
    icon: "📹",
    color: ["#1e3a5f", "#2d5a87"],
    accent: "#5ce1e6",
    scenario: "Your school wants to put cameras EVERYWHERE to catch bullies. But some kids feel weird being watched all the time.",
    choices: [
      { text: "Cameras everywhere! Safety first!", emoji: "📹" },
      { text: "Cameras at doors only, not in class", emoji: "🚪" },
      { text: "No cameras! We can watch out for each other", emoji: "👀" }
    ],
    feedback: [
      {
        emoji: "👁️",
        title: "Always Watching",
        body: "Cameras help catch bullies, but kids might feel nervous being watched ALL the time!",
        stars: 2,
        hint: "What if cameras were only at the entrance? Safe but not EVERYWHERE!"
      },
      {
        emoji: "✨",
        title: "Perfect Balance!",
        body: "Cameras at doors keep strangers out, but you still have freedom in class and at recess!",
        stars: 3
      },
      {
        emoji: "🤝",
        title: "Teamwork!",
        body: "Friends looking out for each other is nice! But cameras at doors could help with strangers.",
        stars: 2,
        hint: "Maybe a few cameras at the entrance would help keep strangers out?"
      }
    ]
  },
  {
    id: 2,
    character: "Nature Nina",
    characterEmoji: "🌱",
    title: "Factory or Forest?",
    icon: "🏭",
    color: ["#1a4d2e", "#2d6a4f"],
    accent: "#74c69d",
    scenario: "A company wants to cut down a forest to build a toy factory. People get jobs, but animals lose their home!",
    choices: [
      { text: "Build it! Jobs and toys are important!", emoji: "🏭" },
      { text: "Build smaller, save half the forest!", emoji: "🌲" },
      { text: "Don't build! Animals need their home!", emoji: "🦊" }
    ],
    feedback: [
      {
        emoji: "🧸",
        title: "More Toys!",
        body: "Jobs and toys are cool, but where will the deer and birds live?",
        stars: 2,
        hint: "Could we have SOME jobs AND keep SOME forest? Best of both worlds!"
      },
      {
        emoji: "🎯",
        title: "Win-Win!",
        body: "Half for people, half for animals! Everyone gets something. That's sharing!",
        stars: 3
      },
      {
        emoji: "🦌",
        title: "Nature First!",
        body: "Animals keep their home! But some people really need those jobs...",
        stars: 2,
        hint: "What about families who need work? Maybe a smaller factory could help them?"
      }
    ]
  },
  {
    id: 3,
    character: "Wise Owl Omar",
    characterEmoji: "🦉",
    title: "App Knows Best?",
    icon: "📱",
    color: ["#5a3921", "#7d5a3c"],
    accent: "#fbbf24",
    scenario: "A magic app wants to pick your lunch, your clothes, and even your friends! It says it knows what you'll like.",
    choices: [
      { text: "Yes! Let the app choose everything!", emoji: "🤖" },
      { text: "App for small stuff, I pick the big stuff!", emoji: "🎯" },
      { text: "Nope! I want to choose for myself!", emoji: "🧠" }
    ],
    feedback: [
      {
        emoji: "😴",
        title: "Easy Mode",
        body: "No mistakes... but how will you learn what YOU really like?",
        stars: 2,
        hint: "Your brain gets stronger when YOU make choices. Maybe use the app just for small things?"
      },
      {
        emoji: "💪",
        title: "Smart Thinking!",
        body: "Let the app help with small stuff, but YOU decide the important things!",
        stars: 3
      },
      {
        emoji: "🌟",
        title: "Independence!",
        body: "You learn from your choices - even mistakes! That makes you wiser.",
        stars: 3
      }
    ]
  },
  {
    id: 4,
    character: "Caring Clara",
    characterEmoji: "💝",
    title: "Robot Nurses?",
    icon: "🏥",
    color: ["#4a1942", "#6b2d5c"],
    accent: "#f472b6",
    scenario: "Hospitals want to use robots to help sick kids. Robots never forget medicine, but they can't give real hugs!",
    choices: [
      { text: "All robots! They never make mistakes!", emoji: "🤖" },
      { text: "Robots help, humans hug!", emoji: "🤝" },
      { text: "No robots! Only real people!", emoji: "💕" }
    ],
    feedback: [
      {
        emoji: "⚙️",
        title: "Robot Care",
        body: "Robots don't forget medicine, but when you're scared, a robot joke isn't the same as a real hug!",
        stars: 2,
        hint: "What if robots did the boring stuff so nurses had MORE time to hug you?"
      },
      {
        emoji: "❤️",
        title: "Perfect Team!",
        body: "Robots do the medicine stuff, nurses have more time for hugs and stories!",
        stars: 3
      },
      {
        emoji: "🫂",
        title: "Human Touch",
        body: "Real hugs are the best! But nurses have SO much work. Robots could help them!",
        stars: 2,
        hint: "What if robots helped with boring tasks so nurses could spend MORE time with you?"
      }
    ]
  },
  {
    id: 5,
    character: "Future Finn",
    characterEmoji: "🚀",
    title: "Super Smart Robots",
    icon: "🧠",
    color: ["#3d1010", "#5c2020"],
    accent: "#f87171",
    scenario: "Scientists are making robots smarter and smarter! They might cure diseases... but what if they get smarter than us?",
    choices: [
      { text: "Make them super smart! Solve all problems!", emoji: "🚀" },
      { text: "Smart robots, but with an OFF switch!", emoji: "🔘" },
      { text: "Stop! Robots should stay our helpers!", emoji: "✋" }
    ],
    feedback: [
      {
        emoji: "🤯",
        title: "Super Power!",
        body: "Super-smart robots could do amazing things! But if they're smarter than us, will they still listen?",
        stars: 2,
        hint: "What if we made them smart BUT added safety rules? Like a car with good brakes!"
      },
      {
        emoji: "🎮",
        title: "Smart AND Safe!",
        body: "Smart robots WITH an off switch! Like having superpowers but staying in control!",
        stars: 3
      },
      {
        emoji: "🤚",
        title: "Play It Safe",
        body: "Being careful is smart! But we might miss out on curing diseases...",
        stars: 2,
        hint: "Maybe we can keep making them smarter, just with really good safety rules?"
      }
    ]
  },
  {
    id: 6,
    character: "Newsy Nadia",
    characterEmoji: "📱",
    title: "The Magic Feed",
    icon: "✨",
    color: ["#0c3547", "#154c63"],
    accent: "#38bdf8",
    scenario: "Your app only shows you cat videos because you love cats! But now you ONLY see cats and nothing else...",
    choices: [
      { text: "Yay! All cats all the time!", emoji: "🐱" },
      { text: "Mostly cats, but show me new stuff too!", emoji: "🎁" },
      { text: "Show me everything, not just cats!", emoji: "🌍" }
    ],
    feedback: [
      {
        emoji: "🐱",
        title: "Cat Paradise!",
        body: "Cats are great! But what if you also love dogs and never find out?",
        stars: 2,
        hint: "A little variety might help you discover NEW favorites!"
      },
      {
        emoji: "🎉",
        title: "Best Mix!",
        body: "Your favorites PLUS surprises! You might discover you also love dogs... or penguins!",
        stars: 3
      },
      {
        emoji: "🌈",
        title: "Big World!",
        body: "Seeing everything helps you understand more! Even if not everything is your favorite.",
        stars: 3
      }
    ]
  },
  {
    id: 7,
    character: "Wild Wendy",
    characterEmoji: "🦋",
    title: "City or Forest?",
    icon: "🏙️",
    color: ["#0f2d0f", "#1a4a1a"],
    accent: "#86efac",
    scenario: "The mayor wants to build an eco-city with parks! But it's where butterflies and deer live now...",
    choices: [
      { text: "Build it! It's eco-friendly!", emoji: "🏗️" },
      { text: "Build smaller, keep half the forest!", emoji: "🦋" },
      { text: "Don't build! That's the animals' home!", emoji: "🏡" }
    ],
    feedback: [
      {
        emoji: "🏢",
        title: "New City!",
        body: "Eco-cities are cool, but a park isn't the same as a REAL forest for butterflies!",
        stars: 2,
        hint: "What if we built a SMALLER city and kept the butterflies' home too?"
      },
      {
        emoji: "🤜🤛",
        title: "Good Neighbors!",
        body: "Half for people, half for animals! Kids can even visit the butterflies!",
        stars: 3
      },
      {
        emoji: "🌳",
        title: "Forest Protected!",
        body: "Animals are happy! But people need homes too...",
        stars: 2,
        hint: "Could we share the space? Some for us, some for animals?"
      }
    ]
  },
  {
    id: 8,
    character: "Science Sam",
    characterEmoji: "🧬",
    title: "Designer Babies?",
    icon: "👶",
    color: ["#0d4040", "#156565"],
    accent: "#5eead4",
    scenario: "Scientists can now prevent babies from getting sick! Some parents also want to pick eye color and height...",
    choices: [
      { text: "Change everything! Make perfect babies!", emoji: "✨" },
      { text: "Only fix sickness, nothing else!", emoji: "💊" },
      { text: "Don't change anything! Nature knows best!", emoji: "🌿" }
    ],
    feedback: [
      {
        emoji: "🤔",
        title: "Perfect... But...",
        body: "What makes someone 'perfect'? Your unique quirks make you YOU!",
        stars: 2,
        hint: "Maybe just fix sickness and let everything else be a fun surprise?"
      },
      {
        emoji: "💖",
        title: "Healthy AND Unique!",
        body: "No sickness, but your eye color and personality are still a surprise! That's special!",
        stars: 3
      },
      {
        emoji: "🌻",
        title: "All Natural!",
        body: "Nature makes amazing surprises! But some babies could be saved from getting sick...",
        stars: 2,
        hint: "What about babies who get really sick? We could help them AND keep the surprises!"
      }
    ]
  },
  {
    id: 9,
    character: "Tiny Tech Tina",
    characterEmoji: "🔬",
    title: "Invisible Robots",
    icon: "🔍",
    color: ["#3d3d00", "#5c5c00"],
    accent: "#fde047",
    scenario: "Scientists made teeny tiny robots (smaller than sand!) that could clean pollution! But we don't know if they're safe yet...",
    choices: [
      { text: "Use them everywhere! Clean the planet!", emoji: "🌍" },
      { text: "Test them carefully first, then use them!", emoji: "🔬" },
      { text: "Wait! We need to know they're safe!", emoji: "⏸️" }
    ],
    feedback: [
      {
        emoji: "💨",
        title: "Fast Action!",
        body: "Cleaning pollution fast is great! But what if the tiny robots cause new problems?",
        stars: 2,
        hint: "What if we tested them really well first, THEN used them everywhere?"
      },
      {
        emoji: "🧪",
        title: "Smart Science!",
        body: "Test first, then use! Like checking the water before you jump in the pool!",
        stars: 3
      },
      {
        emoji: "⏳",
        title: "Super Careful",
        body: "Being safe is smart! But pollution keeps getting worse while we wait...",
        stars: 2,
        hint: "Testing them carefully could help us use them SAFELY and clean up faster!"
      }
    ]
  },
  {
    id: 10,
    character: "Weather Willow",
    characterEmoji: "🌤️",
    title: "Weather Machine",
    icon: "⛅",
    color: ["#1f3d4d", "#2d5a6a"],
    accent: "#a5f3fc",
    scenario: "Scientists built a giant machine that can change the weather! It could stop storms... but might mess up weather somewhere else!",
    choices: [
      { text: "Turn it on! Fix the weather!", emoji: "☀️" },
      { text: "Test it small first, then decide!", emoji: "🧪" },
      { text: "Don't touch it! Weather is complicated!", emoji: "🌀" }
    ],
    feedback: [
      {
        emoji: "🎲",
        title: "Risky!",
        body: "Stopping storms here might cause floods somewhere else! Weather is all connected!",
        stars: 2,
        hint: "What if we tested it small first to see what happens?"
      },
      {
        emoji: "🔬",
        title: "Careful Testing!",
        body: "Small tests first, then bigger if it's safe! That's how good science works!",
        stars: 3
      },
      {
        emoji: "🌍",
        title: "Don't Risk It",
        body: "Playing it safe protects everyone! But what if we could learn to use it carefully?",
        stars: 2,
        hint: "Small tests could teach us if it's safe. We don't have to use it everywhere at once!"
      }
    ]
  }
];
