import React from "react"

const TextNodes = [
  {
    nodeId: 1,
    question:
      "We are all at different places in life. That’s ok. I’ll meet you where you are. Which of these best describes you: ",
    options: [
      {
        text:
          "My business has been formed but I need help knowing if I’m on the right track",
        description:
          "A business is an organization or enterprising entity engaged in commercial, industrial, or professional activities.",
        requiredState: null,
        category: null,
        prevNodeId: 1,
        nextNodeId: 2,
      },
      {
        text:
          "I’m considering forming a nonprofit but I’d like to learn more about the process.",
        description:
          "A not-for-profit organization does not earn any profits for its owners. Instead, the organization donates the money it receives to help fund the organization's objectives and goals. A not-for-profit might also use received donations to stay up and running.",
        requiredState: null,
        category: "nonProfit",
        prevNodeId: 1,
        nextNodeId: 2,
      },
      {
        text:
          "I have a craft or hobby and I’m thinking of making it into a business",
        description:
          "The IRS defines a hobby as an activity that an individual pursues without intent to generate a profit. Almost everyone partakes in some sort of hobby without worrying about whether it will generate income. However, as soon as you take steps to attempt to generate a profit you've got a business on your hands.",
        requiredState: null,
        category: "intProperty",
        prevNodeId: 1,
        nextNodeId: 2,
      },
      {
        text:
          "I’m an artist or entertainer and would like to my art to be my business",
        description: "Let's share your gift with the world.",
        requiredState: null,
        category: "intProperty",
        prevNodeId: 1,
        nextNodeId: 2,
      },
    ],
  },
  {
    nodeId: 2,
    question:
      "How would you describe your business in terms of who will it own and manage it?",
    options: [
      {
        text: "Just me as the sole owner and manager",
        description:
          "I'm really digging the lone wolf vibe you're putting out.",
        requiredState: null, // if(options.category == "nonProfit") { prevNode = 2, nextNodeId = 7 }
        category: null, // if(options.category == "intProperty") { prevNode = 2, nextNodeId = 4 }
        prevNodeId: 2,
        nextNodeId: 3,
      },
      {
        text: "Me and one business partner",
        description: "It's good to know someone's got your back.",
        requiredState: null, // if(options.category == "nonProfit") { prevNode = 2, nextNodeId = 7 }
        category: "partner", // if(options.category == "intProperty") { prevNode = 2, nextNodeId = 4 }
        prevNodeId: 2,
        nextNodeId: 3,
      },
      {
        text: "A board of directors",
        description: "Too big to fail",
        requiredState: null, // if(options.category == "nonProfit") { prevNode = 2, nextNodeId = 7 }
        category: "partner", // if(options.category == "intProperty") { prevNode = 2, nextNodeId = 4 }
        prevNodeId: 2,
        nextNodeId: 3,
      },
      {
        text: "I'm not sure",
        description: "That's okay! Let's keep moving along.",
        requiredState: null,
        category: null,
        prevNodeId: 2,
        nextNodeId: 3,
      },
    ],
  },
  {
    nodeId: 3,
    question: "Select what best suits your needs.",
    options: [
      {
        text: "I need to learn about Intellectual Property",
        description:
          "refers to creations of the mind, such as inventions; literary and artistic works; designs; and symbols, names and images used in commerce.",
        requiredState: null,
        category: "intProperty",
        prevNodeId: 3,
        nextNodeId: 4,
      },
      {
        text: "I’d like to learn about other business formation steps..",
        description:
          "What an EIN is, Licenses, Zoning Permits, business bank accounts, etc.",
        requiredState: null,
        category: null,
        prevNodeId: 3,
        nextNodeId: 7,
      },
      {
        text: "I have a business conflict",
        description:
          "A state of disagreement or misunderstanding, resulting from the actual or perceived dissent of needs, beliefs, resources and relationship between the members of the organization.",
        requiredState: null,
        category: "conflict",
        prevNodeId: 3,
        nextNodeId: 6,
      },
      {
        text: "I'm not sure",
        description: "That's okay! Let's keep moving along.",
        requiredState: null,
        category: null,
        prevNodeId: 3,
        nextNodeId: 5,
      },
    ],
  },
  {
    nodeId: 4,
    question:
      "Which of these intellectual property types would you like to learn more about?",
    options: [
      {
        text: "Copyright",
        description:
          "Copyright put simply is the right to copy. This means that the original creators of products and anyone they give authorization to are the only ones with the exclusive right to reproduce the work.",
        requiredState: null,
        category: null,
        prevNodeId: 4,
        nextNodeId: 7,
      },
      {
        text: "Trademark",
        description:
          "A trademark is for a symbol, word, or words legally registered or established by use as representing a company or product.",
        requiredState: null,
        category: null,
        prevNodeId: 4,
        nextNodeId: 7,
      },
      {
        text: "Patent",
        description:
          "Patents are a right granted to an inventor that allows them to exclude all others from making, using, or selling their invention for 20 years.",
        requiredState: null,
        category: null,
        prevNodeId: 4,
        nextNodeId: 7,
      },
      {
        text: "I'm not sure",
        description: "I promise it's STILL okay. Let's keep moving along.",
        requiredState: null,
        category: null,
        prevNodeId: 4,
        nextNodeId: 5,
      },
    ],
  },
  {
    nodeId: 5,
    question:
      "This would be describe the type of rental and lease agreement I need help with:",
    options: [
      {
        text: "Vacation rental less than 30 days",
        description: "",
        requiredState: null,
        category: null,
        prevNodeId: 5,
        nextNodeId: 7,
      },
      {
        text: "A short term rental for more than 30 days",
        description: "",
        requiredState: null,
        category: null,
        prevNodeId: 5,
        nextNodeId: 7,
      },
      {
        text: "A residential lease for 3 months, 6 months, or a year",
        description: "",
        requiredState: null,
        category: null,
        prevNodeId: 5,
        nextNodeId: 7,
      },
      {
        text: "An office share or office rental in a larger office",
        description: "",
        requiredState: null,
        category: null,
        prevNodeId: 5,
        nextNodeId: 7,
      },
      {
        text: "A commercial lease for just my businesse",
        description: "",
        requiredState: null,
        category: null,
        prevNodeId: 5,
        nextNodeId: 7,
      },
      {
        text: "I'm not sure",
        description: "I promise it's okay! Let's keep moving along.",
        requiredState: null,
        category: null,
        prevNodeId: 5,
        nextNodeId: 6,
      },
    ],
  },
  {
    nodeId: 6,
    question: "Conflict Resolution Options",
    options: [
      {
        text: "Legal Demand Letter",
        description:
          "A demand letter is a preliminary tactic used by individuals or entities as an attempt to resolve a dispute, usually over a form of payment owed by one party to another. These letters are an effort by one party involved in the dispute to reach a resolution before taking formal legal action through the courts.",
        requiredState: null, // if(options.category == "conflict") { prevNode = 3, nextNodeId = 0 }
        category: "demand",
        prevNodeId: 6,
        nextNodeId: 7,
      },
      {
        text: "Small Claims Court",
        description: "Yes this is like Judge Judy",
        requiredState: null, // if(options.category == "conflict") { prevNode = 3, nextNodeId = 0 }
        category: "claims",
        prevNodeId: 6,
        nextNodeId: 7,
      },
      {
        text: "Alternative Dispute Resolution (ADR)",
        description: `the use of methods such as ${(
          <a href="https://corporate.findlaw.com/litigation-disputes/what-is-mediation-and-how-does-it-work.html">
            mediation
          </a>
        )} and ${(
          <a href="https://www.dictionary.com/browse/arbitration">
            arbitration
          </a>
        )} to resolve a dispute instead of litigation.`,
        requiredState: null, // if(options.category == "conflict") { prevNode = 3, nextNodeId = 0 }
        category: "resolution",
        prevNodeId: 6,
        nextNodeId: 7,
      },
      {
        text: "Litigation",
        description:
          " Ultimate legal method for settling controversies or disputes between and among persons, organizations, and the State.",
        requiredState: null, // if(options.category == "conflict") { prevNode = 3, nextNodeId = 0 }
        category: "litigation",
        prevNodeId: 6,
        nextNodeId: 7,
      },
      {
        text: "I'm not sure",
        description: "I promise it's okay! Let's keep moving along.",
        requiredState: null,
        category: null,
        prevNodeId: 6,
        nextNodeId: 7,
      },
    ],
  },
  {
    nodeId: 7,
    question: "Here are some additional business formation steps",
    options: [
      {
        text: "EIN",
        description:
          "An Employer Identification Number (EIN) is a unique identification number that is assigned to a business entity so that it can easily be identified by the Internal Revenue Service (IRS). 1﻿ It is commonly used by employers for the purpose of reporting taxes.",
        requiredState: null,
        category: null,
        prevNodeId: 7,
        nextNodeId: 0,
      },
      {
        text: "City or County License",
        description: `Licenses required for starting a business, more information can be found ${(
          <a href="https://www.orcity.org/economicdevelopment/business-licenses">
            here
          </a>
        )}.`,
        requiredState: null,
        category: null,
        prevNodeId: 7,
        nextNodeId: 0,
      },
      {
        text: "Zoning and Permitting",
        description: `All your zoning license and permit needs can be found ${(
          <a href="https://www.orcity.org/library/permits-licenses-and-zoning">
            here
          </a>
        )}.`,
        requiredState: null,
        category: null,
        prevNodeId: 7,
        nextNodeId: 0,
      },
      {
        text: "On needing a business bank account",
        description: `More information on this topic can be found ${(
          <a href="https://www.patriotsoftware.com/blog/accounting/do-need-separate-business-bank-account/#:~:text=You%20need%20a%20bank%20account,business%20as%20(DBA)%20name.&text=If%20you%20operate%20as%20a,open%20a%20business%20bank%20account.">
            here
          </a>
        )}.`,
        requiredState: null,
        category: null,
        prevNodeId: 7,
        nextNodeId: 0,
      },
      {
        text: "I'm not sure",
        description: "I promise it's okay! Let's keep moving along.",
        requiredState: null,
        category: null,
        prevNodeId: 7,
        nextNodeId: 0,
      },
    ],
  },
]

export default TextNodes
