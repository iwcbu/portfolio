interface DescriptionSection {
  heading: string;
  content: string[];
}

export type Project = {
  slug: string;
  title: string;
  detailTitle: string;
  summary: string;
  description: DescriptionSection[];
  stack: string[];
  highlights: string[];
  category: string;
  year: string;
  status?: string;
  href?: string;

  logo?: string;
};

export const projects: Project[] = [
  {
    slug: 'omen-ne',
    title: 'Omen NE',
    detailTitle: 'Coastline Condition Prediction and Visualization Platform',
    summary: 'A surf conditions platform bringing NOAA buoy observations together for local breaks in New Hampshire and Maine.',
    description: [
      {
        heading: "The Problem",
        content: [
          "Living in New England, I've noticed that most surf cameras are concentrated around popular beaches. There are plenty of lesser known spots without cameras, making it difficult to know whether the conditions are worth heading out for.",
          "I started Omen NE with the idea of predicting and visualizing what the surf might look like at a particular beach without needing a camera. Rather than relying only on wave heights and weather reports, I want surfers to be able to see a representation of the conditions before making the trip.",
          "Although I'm initially focusing on surfers, I eventually see the platform being useful for marine workers, researchers, and anyone who spends time around the coastline."
        ]
      },
      {
        heading: "Building the Data Pipeline",
        content: [
          "Before working on predictions or visualizations, I needed reliable historical ocean observations.",
          "I built an ETL pipeline in Python that retrieves historical records from NOAA's National Data Buoy Center, transforms the measurements into structured datasets, and stores the results in Parquet files for later analysis.",
          "The pipeline supports retrieving available historical observations across different NOAA stations and years. I organized the extraction, transformation, and storage stages separately so the data flow remains understandable and individual stages can be modified without rewriting the entire process.",
          "I chose Python because of its data processing libraries, readability, and accessibility to potential future contributors. FastAPI is part of the planned application architecture, allowing me to build a separate JavaScript based frontend."
        ]
      },
      {
        heading: "Connecting Observations",
        content: [
          "The biggest challenge I'm currently working through is determining how observations from different buoys relate to one another.",
          "Two buoys recording measurements at the same timestamp aren't necessarily observing the same ocean conditions. Swells take time to travel, and their direction, speed, and interactions with local winds can influence when conditions observed at one station become relevant to another.",
          "I'm exploring sliding time windows to associate observations across stations, but handling missing data, inconsistent measurement times, and the potential travel delay between stations introduces several edge cases.",
          "I haven't established a reliable method for aligning observations or predicting how conditions propagate between buoys yet."
        ]
      },
      {
        heading: "Current Progress",
        content: [
          "The historical data ETL pipeline is complete, providing a structured foundation for future analysis.",
          "My next milestone is aligning observations across selected offshore and nearshore buoys and testing whether their measurements reveal useful relationships.",
          "From there, I plan to experiment with models that predict readings at other buoy locations before attempting to relate offshore measurements to actual coastline conditions. That final step will require collecting real observations at individual surf spots to evaluate the predictions."
        ]
      },
      {
        heading: "The Long Term Vision",
        content: [
          "Ultimately, I want Omen NE to offer two ways of understanding surf conditions: conventional forecasts with useful measurements, and interactive 3D visualizations.",
          "Someone could select a beach and see a simulated representation of its waves based on predicted conditions, rather than interpreting numbers alone. My goal is to make coastal information easier to understand, whether someone is planning a surf session or simply trying to understand what the ocean might look like."
        ]
      }
    ],

    stack: ['Python', 'FastAPI', 'pandas', 'NOAA NDBC', 'Parquet'],
    highlights: [
      "Built a historical NOAA buoy data ETL pipeline",
      "Standardized observations into Parquet datasets",
      "Supports historical data retrieval across NOAA stations",
      "Developing methods to align offshore and nearshore observations"
    ],
    category: 'Data engineering',
    year: '08/2026',
    status: 'In progress',
    logo: '/images/logos/omen-ne.png'
  },


  
  {
    slug: 'bmw-inventory',
    title: 'BMW Inventory Automation',
    detailTitle: 'Inventory Extraction and Excel Workbook Automation',
    summary: 'A Python tool that converts dealership inventory information into usable Excel workbooks.',

    description: [
      {
        heading: "Context",
        content: [
          "My dealership needed to respond to a new Massachusetts pricing transparency requirement. Managers assigned a coworker and me to document the packages, options, and add ons for every vehicle in inventory, then manually transfer that information onto formatted sheets.",
          "I timed our process to estimate how long the task would take. We completed four vehicles in 20 minutes. With hundreds of vehicles to process, it was clear that doing everything manually would take a considerable amount of time. I figured there had to be a better way."
        ]
      },
      {
        heading: "How I Built It",
        content: [
          "I built a Python automation tool following an ETL workflow: extracting inventory data from the dealership's website, transforming it into structured records, and loading the results into Excel templates using openpyxl.",
          "Extracting reliable data was the first challenge. I used Beautiful Soup to inspect the website's structure and identify the vehicle information I needed. The extraction logic also accounted for different ways the website exposed inventory data.",
          "Once the information was collected, I organized the records and ran validation checks to identify missing values before generating the spreadsheets.",
          "The final challenge was Excel formatting. Some vehicle details exceeded the default column widths, so I adjusted the formatting to accommodate the generated data while preserving the provided templates."
        ]
      },
      {
        heading: "Results & Takeaways",
        content: [
          "The finished tool processed 384 vehicles in approximately five minutes, replacing a task that would have required roughly 32 hours of manual work at our measured pace.",
          "This project taught me how to approach automation from an actual business problem rather than starting with a technical idea. I gained experience with web data extraction, validation, and openpyxl, which I learned through its documentation while developing the tool.",
          "More importantly, it showed me how much impact a relatively small Python program could have when applied to the right problem."
        ]
      }
    ],

    stack: ['Python', 'Beautiful Soup', 'Playwright', 'openpyxl'],
    highlights: [
      "Processed 384 vehicles in approximately 5 minutes",
      "Reduced an estimated 36 hours of manual work",
      "Built an ETL workflow with data validation",
      "Automated Excel workbook generation"
    ],
    category: 'Automation',
    year: '5/2026',
    logo:'/images/logos/bmw-logo.jpg'
  },



  {
    slug: "partout",
    title: "Partout",
    year:'10/2026 - 12/2026',
    detailTitle: "Automotive Parts Marketplace",
    summary: "A Django marketplace for buying, selling, and discussing car parts, with offers, messaging, and community features.",
    category: "Full Stack Development",
    stack: ["Python", "Django", "SQLite", "HTML", "CSS"],

    highlights: [
      "Built an automotive marketplace independently",
      "Implemented direct messaging and group conversations",
      "Developed price offers with duplicate conversation prevention",
      "Designed interconnected Django models and optimized related queries"
    ],

    description: [
      {
        heading: "The Motivation",
        content: [
          "Partout started with my frustration with Facebook Marketplace. I enjoyed buying and selling car parts, but searching through unrelated listings and dealing with the lack of community around them made the experience frustrating.",

          "When I needed to build a full stack application for my Boston University course, I decided to make my own automotive marketplace.",

          "I wanted Partout to be more than a place to post listings. Features like comments, likes, ratings, and saved items would give buyers and sellers a better sense of the market and encourage conversations around pricing."
        ]
      },
      {
        heading: "Building the Marketplace",
        content: [
          "I built Partout independently using Django, SQLite, HTML, and CSS. Django was the framework taught in the course, and I used its ORM, authentication system, and template engine to build the application.",

          "The platform includes user accounts and profiles, vehicle garages, parts listings, search and filtering, price offers, direct messaging, group chats, ratings, follows, likes, and saved listings.",

          "I spent considerable time planning the database before implementing these features. As the project grew, the schema evolved to support new relationships between users, listings, offers, and conversations.",

          "Because I built both the backend and HTML templates myself, I also gained experience connecting database operations directly to the interfaces people interact with."
        ]
      },
      {
        heading: "The Messaging Challenge",
        content: [
          "Direct messaging was easily the hardest part of the project.",

          "What initially sounded like a simple feature became a system involving seven or eight interconnected Django models. I needed to support new conversations, replies to existing offer conversations, group chats, and logic to prevent duplicate conversations between users.",

          "The challenge was keeping those relationships consistent as people interacted with listings and offers. For example, when someone made an offer, the application needed to determine whether an appropriate conversation already existed before creating another one.",

          "I used Django ORM relationships and queries, including select_related(), to retrieve related information efficiently. Much of the development involved manually testing different interaction sequences, discovering edge cases, and refining the logic.",

          "One of my biggest lessons was that the first working solution doesn't always have to be the most efficient. Sometimes I needed to implement a straightforward approach, understand where it struggled, and then improve it."
        ]
      },
      {
        heading: "Results & Takeaways",
        content: [
          "By the end of the semester, I had built a functional automotive marketplace with interconnected social, listing, and messaging features.",

          "I'm particularly proud of the messaging and price offer systems because of how much planning and debugging they required. I'm also proud of the overall design and identity of Partout. I wanted it to feel like a community for car enthusiasts rather than another generic marketplace.",

          "I deployed the application to Vercel, but later discovered that its SQLite database wasn't stored persistently across deployments. The application worked, but redeployments could reset its data.",

          "If I revisit Partout, my first priority would be moving the database to persistent hosting. I'd also redesign the messaging interface, which works but could use a significant visual improvement.",

          "Partout taught me how much planning goes into building a larger application, particularly when multiple features depend on the same data and relationships."
        ]
      }
    ]
  },



  {
    slug: 'chess-bot',
    title: 'MyChessBot',
    detailTitle: 'Custom Chess Engine and Web Application',
    summary: 'A playable chess application powered by a custom Python chess engine and FastAPI backend.',
    
    description: [
      {
        heading: "The Motivation",
        content: [
          "I've played chess for years, and I wanted to build an opponent that I could challenge myself against. Chess engines interested me because they combine programming, algorithms, and an enormous amount of chess theory. I also knew there was plenty of research available, making it a good opportunity to explore a subject I had never worked with before.",
          "The project felt intimidating at first, so I used AI tools to help break it into manageable tasks. I worked through them one at a time, gradually building the engine into a playable application.",
          "I originally intended to play against the bot myself, but eventually expanded the application to support separate games running concurrently across different devices."
        ]
      },
      {
        heading: "Building the Engine",
        content: [
          "I built several difficulty levels, starting with simpler bots that prioritize capturing pieces and progressing toward opponents that evaluate potential positions using minimax search.",
          "The two more advanced difficulties search to depths of three and five moves, evaluating possible moves based on material advantage, piece positioning, captures, and available moves.",
          "The hardest part was developing the evaluation heuristics. Minimax itself was relatively straightforward to understand, but teaching the engine to recognize a good position required a deeper understanding of chess theory. A piece's value isn't determined by its type alone; where it's positioned and how it interacts with the rest of the board matters just as much. I spent a lot of time experimenting with how those factors should influence the engine's decisions."
        ]
      },
      {
        heading: "Improving Performance and Evaluation",
        content: [
          "One of the biggest challenges was the number of possible positions the engine needed to search. With dozens of legal moves available in a typical position, searching five moves without optimization quickly becomes impractical.",
          "I implemented alpha beta pruning to eliminate branches that couldn't improve the current decision, allowing the engine to search more efficiently. Before this optimization, some moves took 40–60 seconds to calculate. Afterward, the slowest moves in those tests took approximately 10 seconds.",
          "I also compared the engine's position evaluations and move recommendations against Stockfish. Using a collection of test positions, I adjusted the evaluation heuristics to better reflect stronger chess decisions.",
          "This was particularly rewarding because improving the engine wasn't just about making it faster. I could see changes in how it actually played."
        ]
      },
      {
        heading: "From Engine to Application",
        content: [
          "I built a FastAPI backend to expose the engine through an API and used React for the interface.",
          "I chose FastAPI for its lightweight design and performance characteristics, since every player move requires a request to the backend before the engine can respond. React was already familiar to me, and I used a design I created in Canva as the starting point for the interface.",
          "I used AI tools to help generate the initial frontend implementation, then worked through the integration and debugging needed to connect it to the engine.",
          "One particularly frustrating bug involved en passant. The chess library correctly recognized the move as a legal capture, but my evaluation logic assumed the captured piece would always occupy the destination square. In en passant, the captured pawn is on a different square, causing the evaluation to fail. Fixing that required accounting for how the move actually works rather than treating every capture the same way."
        ]
      },
      {
        heading: "Results and Future Improvements",
        content: [
          "The result is a playable chess application with multiple bot difficulties and separate game sessions for different players. The undo feature still needs work, but the core experience of playing against the engine is functional.",
          "What I'm most proud of is the evaluation system. I can adjust how the engine values positions and see those decisions reflected in its play. There's something satisfying about creating an opponent that can consistently beat me at a game I've spent years learning.",
          "If I continue developing it, I'd like to add multiplayer, time controls, and even a cooperative mode where two players discuss and agree on moves against the computer. I'd also like to develop a stronger difficulty beyond the current hardest level."
        ]
      }
    ],
    stack: ['Python', 'FastAPI', 'React', 'pytest'],
    highlights: [
      "Implemented minimax with alpha beta pruning",
      "Built multiple difficulties with positional evaluation heuristics",
      "Compared engine evaluations against Stockfish",
      "Supports separate concurrent game sessions"
    ],
    category: 'Software engineering',
    year: '5/2026-10/2026',
    href: 'https://github.com/iwcbu/Chess-bot',
    logo:'/images/logos/MCB.jpg'
  },


  {
    slug: 'bure',
    title: 'BURE',
    detailTitle: 'Boston Rental Data Analysis and Price Estimation',
    summary: 'A Boston rent estimator built from cleaned apartment listings and neighborhood based regression models.',
    description: [
      {
        heading: "The Motivation",
        content: [
          "BURE started as an open ended project for my Applied Machine Learning course at Boston University. We could explore almost any problem as long as we incorporated data tools and machine learning concepts from class.",

          "At the time, I was looking at housing around Boston and was confused by how differently properties were priced across neighborhoods. My partner and I realized this was a problem that affected plenty of other students too. With college already being expensive, we wanted to build something that could help people estimate rental costs based on location, amenities, and property characteristics.",

          "We decided to build a rental price estimator using regression models."
        ]
      },
      {
        heading: "Data Collection & Preparation",
        content: [
          "We developed Python scripts to collect rental listings from Apartments.com and Homes.com, gathering 1,433 listings across six Boston neighborhoods.",

          "One of our first challenges was dealing with inconsistent data. Both websites contained different types of properties, and their page structures didn't always expose information in the same way. We had to account for these differences while extracting the available features and organizing everything into structured records.",

          "Rather than choosing only the features we expected to matter, we collected as much available information as possible. We wanted to leave room for relationships we might not have anticipated.",

          "During cleaning, we removed listings with missing or invalid essential information, such as square footage, bedrooms, or bathrooms. For less important features, we preserved missing values rather than introducing potentially misleading replacements. The cleaned records were then exported to CSV files for analysis."
        ]
      },
      {
        heading: "Model Development & Feature Selection",
        content: [
          "Our first approach was to train a single linear regression model using listings from across Boston. Unfortunately, its estimates were inconsistent, suggesting that one model wasn't capturing the differences between rental markets.",

          "We experimented with splitting the dataset into three geographic groups and saw a substantial improvement in model performance. That led us to refine the approach further, eventually training six separate models for Beacon Hill, North End, Allston, Back Bay, Fenway, and South Boston.",

          "Feature selection was another important part of the process. We calculated Pearson correlation coefficients between rental price and approximately 160 numeric features using only the training data. We then used correlation analysis and a heatmap to explore relationships and select promising predictors for each neighborhood model.",
        ]
      },
      {
        heading: "Results & Application",
        content: [
          "We evaluated the models using an approximately 80/20 training and testing split, measuring performance on data that wasn't used to fit the models.",

          "All six neighborhood models achieved test R² scores above 0.80, with several exceeding 0.90. These results were a substantial improvement over our original citywide model, although additional testing with new listings would be necessary to understand how well they generalize.",

          "I built the Django application that made the models accessible through a simple interface. Users could enter property characteristics and select a neighborhood, and the backend would load the corresponding saved model to generate an estimated rental price.",

          "The interface was relatively simple, but it completed the process from collecting raw listings to producing predictions someone could use."
        ]
      },
      {
        heading: "What I Learned",
        content: [
          "The hardest part of BURE wasn't writing the code. It was learning how to approach the modeling problem itself.",

          "Before this project, I didn't have much experience with feature selection, correlation analysis, or evaluating regression models. Understanding why we should calculate Pearson correlations or examine a heatmap required learning concepts that weren't immediately obvious to me.",

          "I contributed to the modeling and feature selection work, developed the Django application, and helped standardize our documentation and code readability. Working with a partner also taught me how to coordinate technical decisions and keep a shared project organized.",

          "What initially seemed like an overwhelming problem became something we could break down, experiment with, and eventually solve. I still use many of the data processing and analysis skills I developed through BURE in my current projects."
        ]
      }
    ],
    stack: ['Python', 'Django', 'Beautiful Soup', 'scikit-learn'],
    highlights: [
      "Collected and processed 1,433 rental listings",
      "Developed six neighborhood regression models",
      "Achieved test R² scores above 0.80 across all six models",
      "Selected features using Pearson correlation on training data"
    ],
    category: 'Data science',
    year: '9/2025 - 12/2025',
    logo:'/images/logos/BURE-logo.png'
  },



  {
  slug: 'raft-consensus',
  title: 'Raft Consensus',
  detailTitle: 'Distributed Consensus and Fault Tolerance in Go',
  summary: 'An implementation of the Raft consensus algorithm in Go, exploring how distributed nodes coordinate and maintain consistency through failures.',
  description: [
    {
      heading: "The Context",
      content: [
        "Raft was a project for my Distributed Systems course at Boston University, where I worked with Go to implement a distributed consensus algorithm. The goal was to understand how multiple servers can maintain a consistent state even when individual nodes fail or communication between them is interrupted.",

        "Unlike most of my other projects, this wasn't about building a user interface or solving a problem with data. It was about understanding how distributed systems coordinate behind the scenes and what happens when that coordination breaks down."
      ]
    },
    {
      heading: "Leader Election & Communication",
      content: [
        "Raft organizes servers into three roles: leaders, followers, and candidates. I implemented the mechanisms that allow servers to elect a leader, communicate through RPCs, and use heartbeats to maintain leadership.",

        "When a follower stops receiving heartbeats, it can become a candidate and request votes from other servers. Once a candidate receives a majority of votes, it becomes the leader and resumes coordinating the cluster.",

        "This introduced me to challenges that don't exist in ordinary sequential programs, particularly managing timeouts, coordinating concurrent operations, and handling messages that may arrive late or not at all."
      ]
    },
    {
      heading: "Log Replication & Consistency",
      content: [
        "After implementing leader election, I worked on replicating log entries across servers. The leader coordinates updates and tracks the replication progress of each follower using nextIndex and matchIndex.",

        "The challenge was ensuring that servers could recover from inconsistent logs and eventually agree on the same sequence of committed entries, even after communication failures.",

        "This required carefully managing server state and the rules governing when entries could be considered committed."
      ]
    },
    {
      heading: "Testing & Takeaways",
      content: [
        "I tested the implementation under different failure scenarios, including server interruptions and network partitions. These tests helped expose problems involving leader changes, replication progress, and maintaining consistency across the cluster.",

        "The biggest takeaway was learning to think about software as multiple independent processes rather than one program following a predictable sequence of instructions.",

        "Raft gave me practical experience with Go, RPC communication, concurrency, and the challenges involved in building reliable distributed systems."
      ]
    }
  ],
  stack: ['Go', 'RPC', 'Distributed Systems'],
  highlights: [
    "Implemented Raft consensus mechanisms in Go",
    "Developed leader election and heartbeat communication",
    "Implemented replicated logs using nextIndex and matchIndex",
    "Tested server failures and network partitions"
  ],


  category: 'Distributed systems',
  year: '10/2025 - 12/2025',
  logo: '/images/logos/raft-logo.png'
}
];
