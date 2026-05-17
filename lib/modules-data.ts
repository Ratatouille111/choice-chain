export interface Module {
  id: number;
  thinker: string;
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
  }[];
}

export const MODULES: Module[] = [
  {
    id: 1,
    thinker: "Martin Heidegger",
    title: "Technology as a Way of Revealing",
    hook: "When systems begin to define how reality is seen",
    color: ["#1a1a3e", "#0d2b5e"],
    accent: "#4fc3f7",
    scenario: "Should a city implement an AI surveillance system that analyzes public behavior to predict and prevent crime?",
    choices: [
      "Implement full AI surveillance across all public spaces to maximize safety and predictive control.",
      "Implement AI surveillance only in high-risk areas while maintaining human oversight and limitations.",
      "Reject the use of AI surveillance systems in public spaces to fully protect privacy and human freedom."
    ],
    feedback: [
      {
        title: "Enframing Reality",
        body: "This reflects Heidegger's idea of technology as enframing — where reality is revealed only as something to be measured, optimized, and controlled. Humans become 'standing reserve,' reduced to data points to be monitored and processed. Safety rises, but lived human freedom contracts.",
        insight: "Security is strengthened, but human existence is increasingly defined through data classification."
      },
      {
        title: "Moderated Perception",
        body: "This approach uses technology as a tool rather than a dominant structure of perception. It acknowledges Heidegger's warning but avoids total enframing by preserving spaces where human behavior is not fully quantified.",
        insight: "A controlled balance between technological utility and human autonomy is maintained."
      },
      {
        title: "Resisting the Frame",
        body: "This prioritizes human autonomy and resists the technological reduction of human life into measurable patterns. Individuals can exist outside systems of constant observation and classification.",
        insight: "Human freedom and privacy are fully preserved, but technological preventive capabilities are limited."
      }
    ]
  },
  {
    id: 2,
    thinker: "Jason Hickel",
    title: "Human Flourishing & De-Growth",
    hook: "Progress measured not in output, but in well-being",
    color: ["#0a2818", "#1a3a1a"],
    accent: "#69f0ae",
    scenario: "Should societies continue prioritizing technological systems that maximize productivity and economic growth despite increasing resource consumption?",
    choices: [
      "Continue pursuing continuous technological expansion and economic growth to maximize productivity and output.",
      "Adopt reduced consumption models that prioritize sustainability, equity, and ecological balance over unlimited growth.",
      "Limit or reject productivity-enhancing technologies to avoid the risks of overdevelopment and environmental degradation."
    ],
    feedback: [
      {
        title: "The Growth Machine",
        body: "This reflects the dominant global development model, which Hickel critiques as ecologically unsustainable. While output increases, it intensifies resource extraction and deepens global inequality between wealthy and developing nations.",
        insight: "Economic productivity rises, but ecological and social stability decline."
      },
      {
        title: "De-Growth Reimagined",
        body: "This aligns with Hickel's concept of 'de-growth' — rethinking progress as well-being rather than accumulation. It promotes global fairness by reducing excessive consumption in high-income societies.",
        insight: "Human flourishing is prioritized through ecological and social balance rather than expansion."
      },
      {
        title: "Ecological Primacy",
        body: "This approach prioritizes ecological preservation over technological and economic acceleration. While it reduces environmental pressure, it may also slow improvements in living standards and innovation.",
        insight: "Environmental protection is prioritized over rapid economic progress."
      }
    ]
  },
  {
    id: 3,
    thinker: "Aristotle",
    title: "The Good Life",
    hook: "Can algorithms lead us toward virtue?",
    color: ["#2d1a00", "#3d2200"],
    accent: "#ffb74d",
    scenario: "Should artificial intelligence systems be allowed to fully manage personal decisions such as education, career paths, and daily life routines?",
    choices: [
      "Allow AI systems to fully manage personal decisions in order to optimize life outcomes and efficiency.",
      "Use AI systems as supportive tools while maintaining human control over final decisions.",
      "Reject the use of AI systems in personal decision-making to preserve full human autonomy and responsibility."
    ],
    feedback: [
      {
        title: "Eudaimonia Eroded",
        body: "From Aristotle's view, this undermines Eudaimonia — human flourishing — because individuals stop exercising rational thought and moral judgment. A meaningful life requires active reasoning and moral responsibility, not passive optimization.",
        insight: "Efficiency increases, but human virtue and personal development weaken."
      },
      {
        title: "Phronesis Preserved",
        body: "This aligns with Aristotle's concept of phronesis (practical wisdom), where individuals use tools to enhance — not replace — rational judgment. Technology becomes a means of supporting virtuous living rather than directing it.",
        insight: "Human flourishing is supported through balanced integration of reason and technology."
      },
      {
        title: "Full Moral Agency",
        body: "This preserves complete moral agency, which Aristotle sees as essential for developing virtue. However, it removes external support systems that may improve decision quality and efficiency.",
        insight: "Autonomy is maximized, but supportive optimization is lost."
      }
    ]
  },
  {
    id: 4,
    thinker: "UDHR · UN DUSK · UN RSSR",
    title: "When Technology and Humanity Cross",
    hook: "Dignity cannot be automated",
    color: ["#1a0a2e", "#2a0a3e"],
    accent: "#ce93d8",
    scenario: "Should hospitals integrate emotionally responsive AI systems to assist or replace human nurses in patient care?",
    choices: [
      "Replace human nurses with emotionally responsive AI systems to improve efficiency, monitoring, and healthcare delivery.",
      "Integrate AI systems as assistive tools while ensuring human nurses remain responsible for patient care and emotional support.",
      "Avoid emotionally responsive AI in healthcare to ensure all care remains fully human-led and human-centered."
    ],
    feedback: [
      {
        title: "Dignity Under Threat",
        body: "This raises concerns under the UDHR's right to dignity and humane treatment. The UN DUSK framework emphasizes that autonomous emotional AI may lack accountability in sensitive care settings. Under UN RSSR, replacing human caregivers weakens relational and social responsibility in healthcare.",
        insight: "Efficiency may increase, but human dignity, accountability, and relational care are significantly reduced."
      },
      {
        title: "Rights-Centered Integration",
        body: "This aligns strongly with UDHR principles, ensuring dignity and humane treatment remain central. It supports UN DUSK standards — transparency, human oversight, and ethical deployment. Under UN RSSR, responsibility is shared but anchored in human accountability.",
        insight: "Technology enhances healthcare while preserving human dignity and ethical responsibility."
      },
      {
        title: "Purely Human Care",
        body: "This fully prioritizes UDHR principles of dignity and human-centered care. It eliminates risks associated with algorithmic emotional simulation, ensuring care remains authentic and relational — though limiting assistive efficiencies.",
        insight: "Human dignity and authenticity are fully preserved, but technological assistance is restricted."
      }
    ]
  },
  {
    id: 5,
    thinker: "Bill Joy",
    title: "Why the Future Doesn't Need Us",
    hook: "Technologies that outgrow their creators",
    color: ["#1a0000", "#2d0a0a"],
    accent: "#ef5350",
    scenario: "Should society fully adopt advanced AI and robotics systems even if they may eventually replace most human labor and decision-making roles?",
    choices: [
      "Adopt advanced AI and robotics systems without restriction to maximize innovation and efficiency.",
      "Regulate and carefully govern advanced technologies to ensure responsible and controlled development.",
      "Restrict or limit automation technologies in essential sectors such as healthcare, governance, and public safety."
    ],
    feedback: [
      {
        title: "Unchecked Acceleration",
        body: "Bill Joy warns that AI, robotics, and genetic technologies may evolve beyond human control. Unrestricted adoption increases efficiency but reduces human oversight over critical systems — a trajectory Joy described as existentially dangerous.",
        insight: "Technological progress accelerates, but control over its long-term consequences weakens."
      },
      {
        title: "Ethical Restraint",
        body: "This reflects Bill Joy's call for ethical restraint and precaution in developing powerful technologies. It allows innovation while maintaining human governance over high-risk systems — the balance Joy argued was essential.",
        insight: "Balanced progress is maintained through ethical regulation and oversight."
      },
      {
        title: "Human Domains Protected",
        body: "This prioritizes human control in critical domains to reduce existential and systemic risks. However, it may slow technological advancement and limit efficiency gains in essential sectors.",
        insight: "Safety and human control are prioritized over rapid technological expansion."
      }
    ]
  },
  {
    id: 6,
    thinker: "Manuel Castells",
    title: "The Information Age",
    hook: "The algorithm that shapes what you believe",
    color: ["#001a2d", "#002a3d"],
    accent: "#26c6da",
    scenario: "Should social media platforms continue using AI-driven algorithms to personalize news feeds based on user behavior and preferences?",
    choices: [
      "Allow full algorithmic personalization of information feeds to maximize relevance, engagement, and user convenience.",
      "Reduce algorithmic personalization while maintaining some level of content recommendation for user convenience.",
      "Eliminate algorithmic personalization to ensure equal and unbiased access to all information."
    ],
    feedback: [
      {
        title: "The Network Society's Shadow",
        body: "Castells' 'network society' shows how information flows shape power, communication, and social structure. Full algorithmic filtering creates 'information bubbles,' limiting exposure to diverse perspectives and shaping beliefs invisibly.",
        insight: "Information becomes more efficient but less neutral, increasing the risk of echo chambers."
      },
      {
        title: "Balanced Information Ecology",
        body: "This represents a balanced information ecosystem where users are supported by technology but not fully controlled by it. It reduces extreme filtering effects while maintaining usability in digital platforms.",
        insight: "Information remains accessible while reducing the risk of manipulation and isolation."
      },
      {
        title: "Open Information Flow",
        body: "This prioritizes open information flow and reduces algorithmic influence over perception. However, it may overwhelm users with excessive data and reduce usability of modern platforms.",
        insight: "Information neutrality is preserved, but accessibility and convenience are reduced."
      }
    ]
  },
  {
    id: 7,
    thinker: "IPBES & Ecological Science",
    title: "Biodiversity and a Healthy Society",
    hook: "The city rising where the forest stood",
    color: ["#0a1a0a", "#0a2a12"],
    accent: "#a5d6a7",
    scenario: "Should a government approve the construction of a smart eco-city that replaces a natural forest ecosystem to promote urban development?",
    choices: [
      "Proceed with full development of the eco-city to promote modernization, economic growth, and urban expansion.",
      "Balance urban development with strict conservation of biodiversity and ecosystem protection.",
      "Preserve the forest entirely and reject any form of large-scale urban development in the area."
    ],
    feedback: [
      {
        title: "Ecological Debt",
        body: "IPBES findings show biodiversity loss directly threatens human health, food systems, and ecosystem stability. Replacing forests with urban systems reduces ecological resilience and disrupts natural life cycles essential for planetary health.",
        insight: "Urban progress increases, but ecosystem stability and long-term survival are weakened."
      },
      {
        title: "Sustainable Coexistence",
        body: "This aligns with ecological science perspectives emphasizing sustainable coexistence between human systems and natural environments. It allows development while maintaining ecosystem functions essential for human survival.",
        insight: "A sustainable balance between progress and ecological preservation is achieved."
      },
      {
        title: "Nature First",
        body: "This prioritizes ecosystem integrity and biodiversity protection as essential for long-term planetary health. However, it may limit urban expansion and economic opportunities in certain regions.",
        insight: "Ecological preservation is fully prioritized over urban development."
      }
    ]
  },
  {
    id: 8,
    thinker: "Doudna · Charpentier · Boyer · Cohen",
    title: "GMOs and Gene Therapy",
    hook: "Rewriting the code of human identity",
    color: ["#001a1a", "#002a2a"],
    accent: "#80deea",
    scenario: "Should genetic engineering be used to allow parents to modify the genetic traits of their future children for health, intelligence, or physical characteristics?",
    choices: [
      "Allow full genetic modification of human traits to enhance physical, cognitive, and biological characteristics.",
      "Allow genetic modification only for preventing or curing diseases, not for enhancement purposes.",
      "Prohibit genetic modification of human embryos to avoid ethical, social, and ecological risks."
    ],
    feedback: [
      {
        title: "Designer Humanity",
        body: "CRISPR technology — developed by Doudna and Charpentier — makes enhancement scientifically possible. However, bioethicists warn this may lead to inequality and ethical concerns about 'designer humans,' blurring the boundaries of human identity.",
        insight: "Scientific capability expands, but ethical boundaries around human identity become blurred."
      },
      {
        title: "Therapeutic Intent",
        body: "This reflects the original intent of gene therapy as developed by Boyer and Cohen — medical use to eliminate suffering. It aligns with ethical medical practice while limiting enhancement-based inequality.",
        insight: "Medical benefit is prioritized while ethical risks are controlled."
      },
      {
        title: "Precautionary Refusal",
        body: "This avoids potential risks of genetic inequality, unintended consequences, and moral concerns about human design. However, it also limits medical innovation that could eliminate devastating genetic diseases.",
        insight: "Ethical safety is prioritized over biomedical advancement."
      }
    ]
  },
  {
    id: 9,
    thinker: "Richard Feynman · Norio Taniguchi",
    title: "Nanotechnology",
    hook: "Invisible forces, unpredictable consequences",
    color: ["#1a1000", "#2a2000"],
    accent: "#fff176",
    scenario: "Should nanotechnology be widely implemented in medicine and industry, despite uncertainties about long-term environmental and health effects?",
    choices: [
      "Fully adopt nanotechnology across medicine, electronics, and environmental systems to maximize innovation and efficiency.",
      "Limit nanotechnology use to controlled medical and industrial applications with strict safety regulations.",
      "Restrict nanotechnology development due to potential unknown risks to human health and ecosystems."
    ],
    feedback: [
      {
        title: "Feynman's Promise",
        body: "Inspired by Feynman's vision and Taniguchi's definition of nanoscale engineering, nanotechnology promises breakthroughs in medicine and materials science. However, long-term biological and environmental effects remain deeply uncertain.",
        insight: "Technological innovation expands rapidly, but risk uncertainty increases."
      },
      {
        title: "Precautionary Innovation",
        body: "This reflects STS precautionary principles, ensuring innovation is balanced with risk assessment and ethical oversight. It allows benefits while minimizing unknown consequences through controlled deployment.",
        insight: "Balanced innovation with controlled risk management."
      },
      {
        title: "Caution Over Progress",
        body: "This prioritizes safety and precaution in the face of scientific uncertainty. However, it may delay significant advancements in medicine and environmental solutions that could benefit millions.",
        insight: "Safety is prioritized over scientific and technological progress."
      }
    ]
  },
  {
    id: 10,
    thinker: "IPCC · Svante Arrhenius",
    title: "Climate Change & Environmental Awareness",
    hook: "Engineering the atmosphere as a last resort",
    color: ["#0a1a2a", "#0a2a3a"],
    accent: "#4dd0e1",
    scenario: "Should governments implement large-scale geoengineering technologies to counteract climate change despite uncertain long-term environmental consequences?",
    choices: [
      "Implement geoengineering technologies immediately to reduce global warming and stabilize the climate system.",
      "Prioritize emissions reduction and sustainable lifestyle changes while cautiously researching geoengineering.",
      "Avoid geoengineering entirely and focus solely on natural environmental recovery and policy reform."
    ],
    feedback: [
      {
        title: "Planetary-Scale Risk",
        body: "Climate science — from Arrhenius's foundational work to IPCC reports — confirms human-driven global warming as a major threat. Geoengineering may reduce temperature rise but introduces unpredictable planetary-scale risks that could destabilize entire climate systems.",
        insight: "Climate risks may be reduced, but environmental systems become highly uncertain."
      },
      {
        title: "Mitigation First",
        body: "This aligns with IPCC recommendations emphasizing mitigation over technological intervention alone. It balances immediate action with long-term responsibility — behavioral change combined with scientific caution.",
        insight: "A combined approach of behavioral change and scientific caution is prioritized."
      },
      {
        title: "Natural Recovery",
        body: "This prioritizes ecological caution and avoids large-scale technological interference in Earth systems. However, natural recovery and policy reform alone may not be sufficient to address the pace of rapid climate change.",
        insight: "Environmental integrity is preserved, but climate intervention tools are limited."
      }
    ]
  }
];
