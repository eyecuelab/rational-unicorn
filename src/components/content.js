import React from 'react'

const Content = () => {
  const textNodes = [
    {
      nodeId: 1,
      question: "We are all at different places in life. That’s ok. I’ll meet you where you are. Which of these best describes you: ",
      options: [
        {
          text: "My business has been formed but I need help knowing if I’m on the right track",
          description: "An organization or enterprising entity engaged in commercial, industrial, or professional activities.",
          requiredState: null,
          category: null,
          prevNodeId: 0,
          nextNodeId: 2,
        },
        {
          text: "I’m considering forming a nonprofit but I’d like to learn more about the process.",
          description: "A not-for-profit organization does not earn any profits for its owners. Instead, the organization donates the money it receives to help fund the organization's objectives and goals. A not-for-profit might also use received donations to stay up and running.",
          requiredState: null,
          category: "nonProfit",
          prevNodeId: 0,
          nextNodeId: 2,
        },
        {
          text: "I have a craft or hobby and I’m thinking of making it into a business",
          description: "The IRS defines a hobby as an activity that an individual pursues without intent to generate a profit. Almost everyone partakes in some sort of hobby without worrying about whether it will generate income. However, as soon as you take steps to attempt to generate a profit you've got a business on your hands.",
          requiredState: null,
          category: "intProperty",
          prevNodeId: 0,
          nextNodeId: 2,
        },
        {
          text: "I’m an artist or entertainer and would like to my art to be my business",
          description: "Let's share your gift with the world.",
          requiredState: null,
          category: "intProperty",
          prevNodeId: 0,
          nextNodeId: 2,
        },
      ],
    },
    {
      nodeId: 2,
      question: "How would you describe your business in terms of who will it own and manage it?",
      options: [
        {
          text: "Just me as the sole owner and manager",
          description: "I'm really digging the lone wolf vibe you're putting out.",
          requiredState: null, // if(options.category == "nonProfit") { prevNode = 2, nextNodeId = 7 }
          category: null,      // if(options.category == "intProperty") { prevNode = 2, nextNodeId = 4 }
          prevNodeId: 1,
          nextNodeId: 3,
        },
        {
          text: "Me and one business partner",
          description: "It's good to know someone's got your back.",
          requiredState: null, // if(options.category == "nonProfit") { prevNode = 2, nextNodeId = 7 }
          category: "partner", // if(options.category == "intProperty") { prevNode = 2, nextNodeId = 4 }
          prevNodeId: 1,
          nextNodeId: 3,
        },
        {
          text: "A board of directors",
          description: "Too big to fail",
          requiredState: null, // if(options.category == "nonProfit") { prevNode = 2, nextNodeId = 7 }
          category: "partner", // if(options.category == "intProperty") { prevNode = 2, nextNodeId = 4 }
          prevNodeId: 1,
          nextNodeId: 3,
        },
        {
          text: "I'm not sure",
          description: "That's okay! Let's keep moving along.",
          requiredState: null,
          category: null,
          prevNodeId: 1,
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
          description: "refers to creations of the mind, such as inventions; literary and artistic works; designs; and symbols, names and images used in commerce.",
          requiredState: null,
          category: "intProperty",
          prevNodeId: 2,
          nextNodeId: 4,
        },
        {
          text: "I have a business conflict",
          description: "A state of disagreement or misunderstanding, resulting from the actual or perceived dissent of needs, beliefs, resources and relationship between the members of the organization.",
          requiredState: null,
          category: null,
          prevNodeId: 2,
          nextNodeId: 6,
        },
        {
          text: "I'm not sure",
          description: "That's okay! Let's keep moving along.",
          requiredState: null,
          category: null,
          prevNodeId: 2,
          nextNodeId: 5,
        },
      ],
    },
    {
      nodeId: 4,
      question: "Which of these intellectual property types would you like to learn more about?",
      options: [
        {
          text: "Copyright",
          description: "Copyright put simply is the right to copy. This means that the original creators of products and anyone they give authorization to are the only ones with the exclusive right to reproduce the work.",
          requiredState: null,
          category: null,
          prevNodeId: 3,
          nextNodeId: 7,
        },
        {
          text: "Trademark",
          description: "A trademark is for a symbol, word, or words legally registered or established by use as representing a company or product.",
          requiredState: null,
          category: null,
          prevNodeId: 3,
          nextNodeId: 7,
        },
        {
          text: "Patent",
          description: "Patents are a right granted to an inventor that allows them to exclude all others from making, using, or selling their invention for 20 years.",
          requiredState: null,
          category: null,
          prevNodeId: 3,
          nextNodeId: 7,
        },
        {
          text: "I'm not sure",
          description: "I promise it's STILL okay. Let's keep moving along.",
          requiredState: null,
          category: null,
          prevNodeId: 3,
          nextNodeId: 5,
        },
      ],
    },
    {
      nodeId: 5,
      question: "",
      options: [
        {
          text: "",
          description: "",
          requiredState: null,
          category: null,
          prevNodeId: 4,
          nextNodeId: 6,
        },
        {
          text: "",
          description: "",
          requiredState: null,
          category: null,
          prevNodeId: 4,
          nextNodeId: 6,
        },
        {
          text: "",
          description: "",
          requiredState: null,
          category: null,
          prevNodeId: 4,
          nextNodeId: 7,
        },
        {
          text: "I'm not sure",
          description: "I promise it's okay! Let's keep moving along.",
          requiredState: null,
          category: null,
          prevNodeId: 4,
          nextNodeId: 6,
        },
      ],
    },
    {
      nodeId: 6,
      question: "",
      options: [
        {
          text: "",
          description: "",
          requiredState: null,
          category: null,
          prevNodeId: 5,
          nextNodeId: 7,
        },
        {
          text: "",
          description: "",
          requiredState: null,
          category: null,
          prevNodeId: 5,
          nextNodeId: 7,
        },
        {
          text: "",
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
          nextNodeId: 7,
        },
      ],
    },
    {
      nodeId: 7,
      question: "",
      options: [
        {
          text: "",
          description: "",
          requiredState: null,
          category: null,
          prevNodeId: 6,
          nextNodeId: 0,
        },
        {
          text: "",
          description: "",
          requiredState: null,
          category: null,
          prevNodeId: 6,
          nextNodeId: 0,
        },
        {
          text: "",
          description: "",
          requiredState: null,
          category: null,
          prevNodeId: 6,
          nextNodeId: 0,
        },
        {
          text: "I'm not sure",
          description: "I promise it's okay! Let's keep moving along.",
          requiredState: null,
          category: null,
          prevNodeId: 6,
          nextNodeId: 0,
        },
      ],
    },
  ]
}

export default Content