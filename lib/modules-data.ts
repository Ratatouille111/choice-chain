export interface Module {
  id: number;
  character: string;
  characterEmoji: string;
  title: string;
  hook: string;
  color: [string, string];
  accent: string;
  scenario: string;
  choices: string[];
  feedback: {
    title: string;
    body: string;
    insight: string;
    stars: number;
    whyNot3Stars?: string;
  }[];
}

export const MODULES: Module[] = [
  {
    id: 1,
    character: "Robot Ricky",
    characterEmoji: "🤖",
    title: "The Watching Cameras",
    hook: "Who's watching and why does it matter?",
    color: ["#1e3a5f", "#2d5a87"],
    accent: "#5ce1e6",
    scenario: "Your school wants to put cameras everywhere - in hallways, classrooms, and even the playground - to keep everyone safe. But some kids feel weird about being watched all the time. What do you think the school should do?",
    choices: [
      "Put cameras everywhere! Safety is super important, and cameras help catch bullies and keep everyone safe.",
      "Put cameras only in some places like the entrance and hallways, but not in classrooms or the playground.",
      "Don't use cameras at all. Teachers and friends can help keep us safe without watching us all the time."
    ],
    feedback: [
      {
        title: "The Watchful Eye",
        body: "Having cameras everywhere can help catch bad behavior and keep people safe. But when someone's always watching, it might make kids feel nervous or like they can't be themselves. It's like having a teacher follow you everywhere - even to recess!",
        insight: "Safety goes up, but kids might feel less free to play and explore.",
        stars: 2,
        whyNot3Stars: "Think about this: What if there was a way to be safe AND still have some places where you can just be yourself without cameras? Finding balance is the key!"
      },
      {
        title: "Finding the Middle Ground",
        body: "Putting cameras only in some places means you get some safety help while still having spaces where kids can relax and be themselves. The entrance cameras can help keep strangers out, but the playground stays a free space to play!",
        insight: "A balance between being safe and being free!",
        stars: 3
      },
      {
        title: "Trust and Teamwork",
        body: "Without cameras, everyone works together to stay safe - teachers, students, and parents. It's harder to catch everything, but kids learn to look out for each other and solve problems together. That's called building a community!",
        insight: "More freedom, but everyone has to help keep each other safe.",
        stars: 2,
        whyNot3Stars: "This is thoughtful! But what about keeping strangers out of school? Sometimes a few cameras at the entrance can help with that. Maybe there's a middle way?"
      }
    ]
  },
  {
    id: 2,
    character: "Nature Nina",
    characterEmoji: "🌱",
    title: "More Stuff or More Trees?",
    hook: "What really makes us happy?",
    color: ["#1a4d2e", "#2d6a4f"],
    accent: "#74c69d",
    scenario: "A company wants to build a huge factory near your town. It will make lots of toys and gadgets, but it will also cut down a forest and use lots of water. Some people want the jobs, others want to save the forest. What should happen?",
    choices: [
      "Build the factory! We'll get cool new toys and people will have jobs. We can plant new trees somewhere else.",
      "Build a smaller factory that doesn't hurt the forest as much. Maybe make fewer things, but keep the trees too!",
      "Don't build the factory. The forest is home to animals and helps clean our air. We have enough toys already!"
    ],
    feedback: [
      {
        title: "More is More?",
        body: "Factories give us lots of things we want and jobs for people to earn money. But cutting down forests means animals lose their homes, and we lose trees that clean our air and make oxygen for us to breathe. New trees take a loooong time to grow!",
        insight: "We get more stuff, but nature gets smaller.",
        stars: 2,
        whyNot3Stars: "Good thinking about jobs! But those animals need their home too. Is there a way to get some jobs AND keep some forest? That might be the best of both worlds!"
      },
      {
        title: "Sharing the Space",
        body: "A smaller factory means we still get some new things and some jobs, but we also keep most of the forest! This is called finding a balance. The animals keep their home, and we still have nice things. Win-win!",
        insight: "Some new things AND a healthy forest. Nice balance!",
        stars: 3
      },
      {
        title: "Nature First",
        body: "Keeping the forest means the animals stay safe, the air stays clean, and we have beautiful places to explore! But people who wanted jobs might be sad. Sometimes taking care of nature means saying no to some things we want.",
        insight: "The planet stays healthy, but we have to be happy with what we have.",
        stars: 2,
        whyNot3Stars: "You really care about animals - that's awesome! But what about the people who need jobs? Maybe a smaller factory could help them AND save most of the forest?"
      }
    ]
  },
  {
    id: 3,
    character: "Wise Owl Omar",
    characterEmoji: "🦉",
    title: "Let the Robot Decide?",
    hook: "Who should make your choices?",
    color: ["#5a3921", "#7d5a3c"],
    accent: "#fbbf24",
    scenario: "There's a new app that can pick your clothes, choose your lunch, suggest your friends, and even tell you what to study. It knows you really well and always picks things you'll probably like. Should kids use this app for everything?",
    choices: [
      "Yes! Let the app decide everything. It's smart and knows what I like. I won't make bad choices anymore!",
      "Use the app for some things, like finding new books or games, but make my own choices about friends and important stuff.",
      "No way! I want to make my own choices, even if I sometimes pick wrong. That's how I learn!"
    ],
    feedback: [
      {
        title: "The Easy Button",
        body: "When an app makes all your choices, life seems easier. But here's the thing: making choices - even wrong ones - is how your brain learns and grows! If you never practice choosing, how will you know what YOU really like?",
        insight: "Fewer mistakes, but also fewer chances to discover who you really are.",
        stars: 2,
        whyNot3Stars: "It sounds nice to never make mistakes! But your brain is like a muscle - it gets stronger when you use it. Maybe use the app for small stuff but make big choices yourself?"
      },
      {
        title: "Best of Both Worlds",
        body: "Using the app for small stuff (like finding a new book) saves time. But making big choices yourself (like who to be friends with) helps your brain grow stronger. It's like using training wheels sometimes but also riding on your own!",
        insight: "Smart help when you need it, real learning when it matters!",
        stars: 3
      },
      {
        title: "Learning by Doing",
        body: "Making your own choices - even the wrong ones - teaches you about yourself. Every mistake is actually a lesson! You might pick a food you don't like, but then you KNOW you don't like it. That's wisdom you earned yourself!",
        insight: "More mistakes, but way more learning and growing!",
        stars: 3
      }
    ]
  },
  {
    id: 4,
    character: "Caring Clara",
    characterEmoji: "💝",
    title: "Robot Nurses?",
    hook: "Can a robot really care about you?",
    color: ["#4a1942", "#6b2d5c"],
    accent: "#f472b6",
    scenario: "A hospital wants to use friendly robots to help take care of sick kids. The robots can check temperatures, bring medicine, and tell jokes. But they can't give real hugs or truly understand how you feel. Should robots help take care of sick kids?",
    choices: [
      "Replace all the nurses with robots! They never get tired and always remember the medicine. Plus, they tell funny jokes!",
      "Have robots help the nurses with boring tasks so the nurses have more time to talk and play with sick kids.",
      "No robots in hospitals! When you're sick, you need real people who can hug you and really understand how you feel."
    ],
    feedback: [
      {
        title: "Robo-Care",
        body: "Robots are great at remembering things and working all day without getting tired. But when you're sick and scared, a robot's joke isn't the same as a real person holding your hand. Robots can DO things for you, but can they really CARE about you?",
        insight: "Perfect medicine timing, but no warm hugs when you're sad.",
        stars: 2,
        whyNot3Stars: "Robots are pretty cool! But when you're sick and scared, don't you want a real person to comfort you? What if robots just helped the nurses instead of replacing them?"
      },
      {
        title: "Teamwork Makes the Dream Work",
        body: "When robots handle the boring stuff (counting pills, taking temperatures), nurses have more time for the important stuff - like sitting with you when you're scared, reading you stories, or calling your mom. The robots help the humans help YOU!",
        insight: "Robots do the boring work, humans do the heart work!",
        stars: 3
      },
      {
        title: "All Human Care",
        body: "Real people can see when you're sad even if you don't say anything. They give the best hugs and really listen. But nurses get tired and can forget things. Without robot help, they might have less time for each kid.",
        insight: "All the warmth and love, but nurses have a lot to do!",
        stars: 2,
        whyNot3Stars: "Human hugs are the best! But nurses have SO much to do. What if robots helped with boring tasks so nurses have MORE time to give hugs and play games?"
      }
    ]
  },
  {
    id: 5,
    character: "Future Finn",
    characterEmoji: "🚀",
    title: "Super Smart Machines",
    hook: "What if robots become smarter than us?",
    color: ["#3d1010", "#5c2020"],
    accent: "#f87171",
    scenario: "Scientists are building robots that learn and get smarter every day. Someday they might be smarter than humans! They could solve big problems like diseases, but they might also not need humans anymore. Should we keep making them smarter?",
    choices: [
      "Make them as smart as possible! Super-smart robots could cure diseases and solve all our problems. The smarter, the better!",
      "Keep making them smarter, but add special rules so humans always stay in charge. Like a robot off-switch!",
      "Stop making them smarter right now. Robots should be our helpers, not our bosses. Some things are too risky!"
    ],
    feedback: [
      {
        title: "Unlimited Power!",
        body: "Super-smart robots could solve problems humans can't even understand! But here's a tricky question: if a robot is way smarter than us, will it still listen to us? It's like asking your teacher to follow your rules - would that work?",
        insight: "Amazing possibilities, but we might lose control.",
        stars: 2,
        whyNot3Stars: "Super-smart robots sound amazing! But if they're smarter than us, how do we make sure they still do what we want? Maybe we need some safety rules first?"
      },
      {
        title: "Smart but Safe",
        body: "Making robots smarter WITH safety rules is like driving a fast car with good brakes. You get the speed (smart robots!) but can stop if needed. The key is making sure the safety rules actually work!",
        insight: "Keep the benefits, but don't forget the emergency stop button!",
        stars: 3
      },
      {
        title: "Know When to Stop",
        body: "Stopping now means we won't get all those amazing solutions. But it also means we definitely stay in charge. Sometimes the wisest choice is knowing when to say 'that's enough.' Not every adventure is worth the risk!",
        insight: "Safer for sure, but we might miss out on big discoveries.",
        stars: 2,
        whyNot3Stars: "Being careful is smart! But what about all the good things smarter robots could do, like cure diseases? Maybe we can keep building them WITH safety rules?"
      }
    ]
  },
  {
    id: 6,
    character: "Newsy Nadia",
    characterEmoji: "📱",
    title: "The Magic Feed",
    hook: "Why does the app show you what it shows?",
    color: ["#0c3547", "#154c63"],
    accent: "#38bdf8",
    scenario: "Social media apps learn what you like and only show you more of that. So if you like cat videos, you see MORE cats. If you like soccer, you see MORE soccer. But you stop seeing other stuff. Is this magic feed a good thing?",
    choices: [
      "Yes! I love seeing exactly what I like. Why would I want to see stuff I don't like? Give me all the cat videos!",
      "Show me mostly what I like, but also mix in some new things I've never seen before. I might discover something cool!",
      "Show me everything, not just what I already like. I want to see what my friends with different interests are seeing too!"
    ],
    feedback: [
      {
        title: "The Bubble",
        body: "It feels great to see only things you love! But here's the thing: you might start thinking EVERYONE loves cats because that's all you see. Your world becomes a bubble where everything seems the same. You might miss out on discovering you also love dogs!",
        insight: "Super fun, but your world gets smaller and smaller.",
        stars: 2,
        whyNot3Stars: "Cat videos are awesome! But what if you ALSO love dogs and you never find out? A little variety helps you discover new favorites!"
      },
      {
        title: "The Discovery Mix",
        body: "Seeing mostly what you like PLUS some new stuff is like your favorite meal with a surprise side dish! You stay happy, but you also discover new things. Maybe you find out you love basketball too, not just soccer!",
        insight: "Comfortable but still full of surprises!",
        stars: 3
      },
      {
        title: "The Big Picture",
        body: "Seeing everything helps you understand the whole world, not just your little corner. You'll see some stuff you don't like, but you'll also understand your friends better. It's like visiting different countries instead of staying home!",
        insight: "More variety, even if not everything is your favorite.",
        stars: 3
      }
    ]
  },
  {
    id: 7,
    character: "Wild Wendy",
    characterEmoji: "🦋",
    title: "City vs. Forest",
    hook: "Where should animals live?",
    color: ["#0f2d0f", "#1a4a1a"],
    accent: "#86efac",
    scenario: "The mayor wants to build a new 'eco-city' with parks and solar panels. Sounds great! But they want to build it where a forest is now. The forest has deer, birds, and even some rare butterflies! What should the mayor do?",
    choices: [
      "Build the eco-city! It will be good for the environment in new ways. The animals can move somewhere else.",
      "Build a smaller city and keep half the forest. The animals and people can be neighbors!",
      "Don't build anything! The forest is already the best home for those animals. They were there first!"
    ],
    feedback: [
      {
        title: "New Beginnings",
        body: "An eco-city sounds nice with its solar panels and parks. But a park isn't the same as a real forest! Those deer and butterflies need their REAL home with old trees and wild plants. When we say 'animals can move,' where exactly do they go?",
        insight: "Shiny new city, but homeless animals.",
        stars: 2,
        whyNot3Stars: "Eco-cities are cool! But those butterflies can't just pack up and move. What if we built a smaller city and kept their forest home too?"
      },
      {
        title: "Good Neighbors",
        body: "Building LESS and saving half the forest means the rare butterflies can stay in their home while people get a nice (but smaller) place to live. The kids could even visit the forest to see real wildlife - like having a zoo that's not a zoo!",
        insight: "Sharing the space like good neighbors do!",
        stars: 3
      },
      {
        title: "Forest Forever",
        body: "Keeping the whole forest means every single deer, bird, and butterfly keeps their home. The forest also cleans our air and gives us fresh water! But people who wanted to live in that nice eco-city will have to go somewhere else.",
        insight: "Happy animals, but humans need to find another spot.",
        stars: 2,
        whyNot3Stars: "You have a big heart for animals! But people need homes too. What if we could share the space - some forest for animals, some city for people?"
      }
    ]
  },
  {
    id: 8,
    character: "Science Sam",
    characterEmoji: "🧬",
    title: "Designer Babies?",
    hook: "Should parents pick what their kids are like?",
    color: ["#0d4040", "#156565"],
    accent: "#5eead4",
    scenario: "Scientists can now change tiny parts of babies before they're born. They can remove sickness, but some people want to also change eye color, height, or even make kids smarter! Should parents be allowed to design their babies?",
    choices: [
      "Let parents change anything they want! If you can make your kid healthier, smarter, and taller, why not?",
      "Only allow changes that prevent sickness and diseases. No changing looks or making 'super babies.'",
      "Don't change anything! Every baby should be born naturally, just the way they are. We shouldn't play around with this stuff."
    ],
    feedback: [
      {
        title: "The Perfect Baby?",
        body: "Changing everything sounds cool, but think about it: what if only rich families can afford 'super babies'? And what makes someone 'perfect' anyway? Your freckles, your curly hair, your unique brain - those 'imperfections' are what make you YOU!",
        insight: "More 'perfect' babies, but is everyone's 'perfect' the same?",
        stars: 2,
        whyNot3Stars: "Being healthy and smart sounds great! But what makes someone 'perfect'? Your unique quirks are what make you special! Maybe just fix sickness and let the rest be a surprise?"
      },
      {
        title: "Healthy is Enough",
        body: "Removing sickness before birth could save babies from hurting! But stopping there means kids are still surprised by their eye color and personality. You're you, not something your parents ordered from a catalog!",
        insight: "No more sickness, but you're still wonderfully YOU!",
        stars: 3
      },
      {
        title: "Nature Knows Best",
        body: "Letting babies be born naturally means embracing surprises - the good and the challenging. Some babies might have health problems, but they'll be exactly who nature intended. Sometimes our differences make us strongest!",
        insight: "Totally natural, but some health problems could have been prevented.",
        stars: 2,
        whyNot3Stars: "Nature is amazing! But what about babies who get really sick? If we could help them be healthy before they're born, wouldn't that be kind?"
      }
    ]
  },
  {
    id: 9,
    character: "Tiny Tech Tina",
    characterEmoji: "🔬",
    title: "Invisible Machines",
    hook: "Super tiny helpers... but are they safe?",
    color: ["#3d3d00", "#5c5c00"],
    accent: "#fde047",
    scenario: "Scientists created teeny-tiny robots (smaller than a grain of sand!) that could clean pollution, deliver medicine inside your body, or make super-strong materials. But we don't know yet if they're safe for humans and animals. Should we use them?",
    choices: [
      "Use them everywhere! They could solve pollution and cure diseases! We'll figure out the safety stuff as we go.",
      "Use them only in labs and hospitals with lots of testing first. Make sure they're safe before putting them everywhere.",
      "Wait and don't use them at all yet. We don't know enough about what these tiny robots might do to nature and our bodies."
    ],
    feedback: [
      {
        title: "Tiny but Risky",
        body: "These tiny robots could do amazing things! But because they're SO small, we can't really see what they do. What if they accidentally hurt good cells in your body or tiny animals in the ocean? Small things can cause big problems!",
        insight: "Amazing possibilities, but we can't take back what we don't understand.",
        stars: 2,
        whyNot3Stars: "You're excited about cool technology - that's great! But we should probably test these tiny robots first to make sure they're safe. What if we tried them in labs before using them everywhere?"
      },
      {
        title: "Test First, Wonder Later",
        body: "Using tiny robots ONLY in safe places (like hospitals) means scientists can watch what happens. If something goes wrong, it's easier to stop. It's like trying a new food at home before eating it at a restaurant!",
        insight: "Careful steps lead to confident leaps!",
        stars: 3
      },
      {
        title: "Wait and See",
        body: "Waiting means we don't get those cool benefits yet. But we also don't accidentally cause problems we can't fix. Sometimes being patient is the smartest thing to do, even when you're excited!",
        insight: "Super safe, but we have to wait longer for the cool stuff.",
        stars: 2,
        whyNot3Stars: "Being careful is wise! But some people are really sick and need help now. What if we tested the tiny robots carefully in special places first?"
      }
    ]
  },
  {
    id: 10,
    character: "Weather Wizard Wally",
    characterEmoji: "🌍",
    title: "Fixing the Weather?",
    hook: "Should we try to control the sky?",
    color: ["#1e3a5f", "#2d5a87"],
    accent: "#67e8f9",
    scenario: "Earth is getting hotter because of pollution. Some scientists want to spray special chemicals in the sky to cool the planet down, like a giant sunscreen for Earth! But nobody knows for sure what else it might do. Should we try it?",
    choices: [
      "Do it now! Earth is getting too hot and we need to cool it down fast. The chemicals will probably work great!",
      "Research it carefully first, but focus mostly on making less pollution. Fix the cause, not just the symptom!",
      "Don't mess with the sky at all! We should just stop polluting and let nature heal itself. Spraying stuff could make things worse!"
    ],
    feedback: [
      {
        title: "Sky Experiment",
        body: "Spraying stuff in the sky MIGHT cool Earth down. But the sky is connected to everything - rain, wind, seasons. What if it messes up rain in one country while fixing heat in another? The sky doesn't follow borders!",
        insight: "Quick fix maybe, but nobody really knows what else could happen.",
        stars: 2,
        whyNot3Stars: "You want to help Earth cool down - that's awesome! But spraying stuff in the sky is a big experiment. What if we focused on making less pollution while scientists study this more?"
      },
      {
        title: "Fix the Real Problem",
        body: "Earth is hot because of pollution. So the best fix is... less pollution! Learning about sky-spraying is okay as a backup plan, but riding bikes, using solar power, and planting trees actually solve the problem, not just cover it up.",
        insight: "Treat the sickness, not just the fever!",
        stars: 3
      },
      {
        title: "Let Nature Heal",
        body: "Nature is really good at fixing itself... IF we stop hurting it! But healing takes a long time, and Earth is getting hot fast. Can we wait long enough for nature to recover on its own?",
        insight: "The safest choice, but maybe not fast enough.",
        stars: 2,
        whyNot3Stars: "You trust nature - that's beautiful! But Earth is getting hotter pretty fast. Maybe we could stop polluting AND study backup plans, just in case nature needs a little help?"
      }
    ]
  }
];
