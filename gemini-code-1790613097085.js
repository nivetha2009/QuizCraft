export const QUESTION_BANK = {
  "Economics": {
    "Elasticity of Demand": [
      {
        question: "What happens to demand when the price of a product increases, assuming other factors remain constant?",
        options: ["Demand increases", "Demand decreases / Quantity demanded decreases", "Demand remains unchanged", "Demand becomes perfectly elastic"],
        answer: 1,
        explanation: "According to the Law of Demand, as price increases, quantity demanded decreases ceteris paribus."
      },
      {
        question: "If a 10% increase in price leads to a 20% decrease in quantity demanded, demand is:",
        options: ["Inelastic", "Unitary Elastic", "Elastic", "Perfectly Inelastic"],
        answer: 2,
        explanation: "Price Elasticity = % change in Q / % change in P = |-20% / 10%| = 2. Since 2 > 1, demand is elastic."
      },
      {
        question: "Products with few or no substitutes typically have demand that is:",
        options: ["Inelastic", "Elastic", "Perfectly Elastic", "Unitary Elastic"],
        answer: 0,
        explanation: "When consumers have no alternatives, they must purchase the good regardless of price increases."
      },
      {
        question: "Which formula correctly represents Price Elasticity of Demand (PED)?",
        options: ["% Change in Price / % Change in Quantity", "% Change in Quantity Demanded / % Change in Price", "Change in Total Revenue / Change in Price", "Price x Quantity"],
        answer: 1,
        explanation: "PED measures responsiveness: % change in Quantity Demanded divided by % change in Price."
      },
      {
        question: "A vertical demand curve represents:",
        options: ["Perfectly elastic demand", "Perfectly inelastic demand", "Unitary elastic demand", "Relatively elastic demand"],
        answer: 1,
        explanation: "A vertical line indicates quantity demanded remains identical regardless of price change (Elasticity = 0)."
      }
    ]
  },
  "Financial Accounting": {
    "Basic Concepts": [
      {
        question: "Which accounting equation forms the foundation of the balance sheet?",
        options: ["Assets = Revenue - Expenses", "Assets = Liabilities + Equity", "Equity = Assets + Liabilities", "Liabilities = Assets + Net Income"],
        answer: 1,
        explanation: "The core accounting equation requires that total Assets equal the sum of Liabilities and Owner's Equity."
      },
      {
        question: "What type of account is 'Unearned Revenue'?",
        options: ["Asset", "Liability", "Revenue", "Equity"],
        answer: 1,
        explanation: "Unearned revenue represents cash received for services/goods not yet provided, creating an obligation (liability)."
      },
      {
        question: "Which principle states that expenses should be recognized in the same period as related revenues?",
        options: ["Matching Principle", "Cost Principle", "Entity Concept", "Conservatism Principle"],
        answer: 0,
        explanation: "The Matching Principle aligns revenue earned with expenses incurred to generate that revenue in the accounting period."
      },
      {
        question: "On which financial statement would you find Accumulated Depreciation?",
        options: ["Income Statement", "Balance Sheet", "Statement of Cash Flows", "Retained Earnings Statement"],
        answer: 1,
        explanation: "Accumulated Depreciation is a contra-asset account reported on the Balance Sheet directly beneath Property, Plant & Equipment."
      },
      {
        question: "A debit entry increases which of the following accounts?",
        options: ["Accounts Payable", "Common Stock", "Cash", "Service Revenue"],
        answer: 2,
        explanation: "Assets (like Cash) and Expenses increase with Debits. Liabilities, Equity, and Revenue increase with Credits."
      }
    ]
  },
  "Mathematics": {
    "Algebra": [
      {
        question: "What is the solution to 2x + 5 = 15?",
        options: ["x = 3", "x = 5", "x = 10", "x = 7.5"],
        answer: 1,
        explanation: "Subtract 5 from both sides (2x = 10), then divide by 2 (x = 5)."
      },
      {
        question: "What are the roots of x² - 5x + 6 = 0?",
        options: ["x = 2 and x = 3", "x = -2 and x = -3", "x = 1 and x = 6", "x = -1 and x = 5"],
        answer: 0,
        explanation: "Factoring: (x - 2)(x - 3) = 0 gives solutions x = 2 and x = 3."
      },
      {
        question: "Simplify (x³)²:",
        options: ["x⁵", "x⁶", "x⁹", "x⁸"],
        answer: 1,
        explanation: "Power rule of exponents: multiply exponents, so (x³)² = x^(3*2) = x⁶."
      },
      {
        question: "What is the slope of the line y = -3x + 8?",
        options: ["8", "3", "-3", "-8"],
        answer: 2,
        explanation: "In slope-intercept form (y = mx + b), 'm' represents the slope, which is -3."
      },
      {
        question: "If f(x) = 3x² - 4, what is f(3)?",
        options: ["23", "14", "20", "27"],
        answer: 0,
        explanation: "Substitute x = 3: f(3) = 3(3²) - 4 = 3(9) - 4 = 27 - 4 = 23."
      }
    ]
  },
  "Computer Science": {
    "Data Structures": [
      {
        question: "Which data structure operates on a First In, First Out (FIFO) principle?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: 1,
        explanation: "A Queue processes elements in arrival order (FIFO), whereas a Stack uses Last In, First Out (LIFO)."
      },
      {
        question: "What is the time complexity of searching an element in a balanced Binary Search Tree (BST)?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        answer: 2,
        explanation: "In a balanced BST, halving the search space at each node yields O(log n) time complexity."
      },
      {
        question: "Which data structure utilizes hash functions to map key-value pairs?",
        options: ["Array", "Linked List", "Hash Table", "Heap"],
        answer: 2,
        explanation: "Hash Tables use hash functions to convert keys into array indexes for average O(1) retrieval."
      },
      {
        question: "In a stack, adding an item is known as ____, and removing an item is ____:",
        options: ["Enqueue / Dequeue", "Push / Pop", "Insert / Delete", "Append / Extract"],
        answer: 1,
        explanation: "Push places an item onto the top of a stack; Pop removes the top item."
      },
      {
        question: "Which sorting algorithm has a worst-case time complexity of O(n²)?",
        options: ["Merge Sort", "Quick Sort", "Heap Sort", "Counting Sort"],
        answer: 1,
        explanation: "Quick Sort defaults to O(n²) when bad pivot choices (like sorted arrays) occur consistently."
      }
    ]
  }
};

export const generateDynamicQuestions = (subject, topic, count, difficulty) => {
  const dynamicSet = [];
  const topicsClean = topic || "General Concepts";
  const subjectClean = subject || "Study Subject";

  const questionTemplates = [
    {
      q: `What is a fundamental principle governing ${topicsClean} in ${subjectClean}?`,
      opts: [
        `Systematic application of core rules and logical evaluation`,
        `Arbitrary selection based on subjective preferences`,
        `Complete independence from overarching standards`,
        `Inverse application of traditional theoretical models`
      ],
      ans: 0,
      exp: `Core concepts in ${topicsClean} rely on established foundational principles and analytical methods within ${subjectClean}.`
    },
    {
      q: `How does ${topicsClean} directly influence real-world outcomes in ${subjectClean}?`,
      opts: [
        `By creating structured frameworks that reduce variability and increase predictability`,
        `By eliminating the need for systematic testing or continuous evaluation`,
        `By guaranteeing static results regardless of external input changes`,
        `By substituting quantitative metrics entirely with arbitrary estimations`
      ],
      ans: 0,
      exp: `Application of ${topicsClean} allows practitioners in ${subjectClean} to model, predict, and optimize outcomes effectively.`
    },
    {
      q: `Which scenario represents an advanced application of ${topicsClean}?`,
      opts: [
        `Analyzing non-standard variables using multi-factor constraint modeling`,
        `Ignoring baseline metrics during critical diagnostic assessments`,
        `Applying basic arithmetic without contextual adjustments`,
        `Relying exclusively on historic assumptions without current data`
      ],
      ans: 0,
      exp: `Advanced mastery in ${topicsClean} requires dynamic evaluation under varying environmental parameters.`
    },
    {
      q: `When evaluating ${topicsClean}, what is a key risk of misinterpreting foundational data?`,
      opts: [
        `Flawed conclusions leading to sub-optimal decision-making`,
        `Automatic real-time self-correction by the theoretical system`,
        `Guaranteed zero impact on overall project architecture`,
        `Immediate simplification of complex structural challenges`
      ],
      ans: 0,
      exp: `Inaccurate data analysis within ${topicsClean} propagates errors downstream across ${subjectClean}.`
    },
    {
      q: `Why is ${topicsClean} considered essential within modern ${subjectClean}?`,
      opts: [
        `It provides scalable, reliable methods for problem solving and continuous improvement`,
        `It is mandated purely for historical compliance without practical utility`,
        `It operates completely isolated from adjacent domain knowledge`,
        `It eliminates the necessity for empirical validation and testing`
      ],
      ans: 0,
      exp: `Understanding ${topicsClean} empowers students and professionals to systematically tackle challenges in ${subjectClean}.`
    }
  ];

  for (let i = 0; i < count; i++) {
    const template = questionTemplates[i % questionTemplates.length];
    dynamicSet.push({
      question: `[${difficulty.toUpperCase()}] Q${i + 1}: ${template.q}`,
      options: template.opts,
      answer: template.ans,
      explanation: template.exp
    });
  }

  return dynamicSet;
};