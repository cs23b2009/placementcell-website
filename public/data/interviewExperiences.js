// Interview Experiences Data - IIITDM Kancheepuram Training & Placement Cell
// Dummy data for demonstration - Replace with actual student experiences

// Companies data
const companies = [
    {
        id: "hsbc",
        name: "HSBC",
        logo: "/img/companies/hsbc.jpg", // Will use placeholder for now
        description: "Global banking and financial services company serving clients worldwide",
        knowBeforeInterview: [
            "HSBC is one of the largest banking and financial services organizations in the world",
            "Focuses on retail banking, commercial banking, and global banking & markets",
            "Strong emphasis on digital transformation and sustainable finance",
            "Offers roles in technology, analytics, risk management, and core banking",
            "Values diversity, inclusion, and continuous learning"
        ],
        experiencesCount: 4,
        experiences: [
            {
                id: "hsbc-exp-1",
                batch: "2026",
                branch: "CSE",
                role: "Trainee Software Engineer",
                numberOfRounds: 4,
                rounds: [
                    {
                        name: "Online Assessment",
                        duration: "90 minutes",
                        type: "Coding + Aptitude",
                        topics: ["Arrays", "Strings", "SQL", "Basic Dynamic Programming", "Aptitude"],
                        questions: [
                            "Find the longest subarray with sum equal to zero",
                            "Explain the difference between Stack and Queue data structures",
                            "Write an SQL query to find second highest salary from Employee table",
                            "What is normalization? Explain 1NF, 2NF, 3NF with examples"
                        ],
                        difficulty: "Medium",
                        preparationTips: [
                            "Practice arrays and strings manipulation problems",
                            "Revise basic SQL queries (SELECT, WHERE, GROUP BY, JOINs)",
                            "Solve previous placement coding questions from GFG/LeetCode",
                            "Focus on time management - attempt easier questions first"
                        ]
                    },
                    {
                        name: "Technical Interview Round 1",
                        duration: "45 minutes",
                        type: "Technical",
                        topics: ["Data Structures", "OOP", "DBMS"],
                        questions: [
                            "Explain your project and the technologies used",
                            "What is polymorphism? Give real-world example",
                            "Difference between process and thread?",
                            "Explain indexing in databases - types and when to use",
                            "How does HashMap handle collisions in Java?"
                        ],
                        difficulty: "Medium",
                        preparationTips: [
                            "Be able to explain every project on your resume in detail",
                            "Revise core CS subjects - DSA, OOP, DBMS, OS",
                            "Practice explaining your approach clearly before coding",
                            "Prepare for scenario-based questions"
                        ]
                    },
                    {
                        name: "Technical Interview Round 2",
                        duration: "40 minutes",
                        type: "Technical + Managerial",
                        topics: ["System Design", "Projects", "Leadership"],
                        questions: [
                            "Design a URL shortening service like bit.ly",
                            "How would you handle millions of requests per day?",
                            "Tell us about a time you had a conflict in a team project",
                            "How do you prioritize tasks when working on multiple projects?",
                            "What microservices have you worked with?"
                        ],
                        difficulty: "Hard",
                        preparationTips: [
                            "Study basic system design concepts (scalability, load balancing, caching)",
                            "Prepare STAR (Situation, Task, Action, Response) stories for behavioral questions",
                            "Think about trade-offs in your design decisions",
                            "Research about the company's tech stack"
                        ]
                    },
                    {
                        name: "HR Round",
                        duration: "30 minutes",
                        type: "HR",
                        topics: ["Behavioral", "Culture Fit", "Career Goals"],
                        questions: [
                            "Tell us about yourself and your background",
                            "Why do you want to join HSBC specifically?",
                            "Where do you see yourself in 5 years?",
                            "How do you handle stress and pressure?",
                            "Do you have any questions for us?"
                        ],
                        difficulty: "Easy",
                        preparationTips: [
                            "Research about HSBC's values, culture, and recent initiatives",
                            "Prepare thoughtful questions about the role and team",
                            "Be authentic and show genuine interest in the company",
                            "Practice common HR questions but don't sound rehearsed"
                        ]
                    }
                ],
                overallExperience: "The interview process was well-structured and friendly overall. The technical rounds mainly focused on my projects and core CS fundamentals. Interviewers were more interested in understanding how I approached problems rather than just getting the final answer. The HR round was conversational and focused on cultural fit.",
                suggestions: [
                    "Revise DSA fundamentals - arrays, strings, linked lists, trees",
                    "Know your resume very well - be ready to explain every project",
                    "Prepare your projects thoroughly - tech stack, challenges, solutions",
                    "Practice explaining your approach clearly during coding rounds",
                    "Revise DBMS, OS and OOP concepts from academic curriculum",
                    "Do not panic if you don't know an answer - think aloud and show your approach",
                    "Research about the company's recent work and technologies they use"
                ]
            },
            {
                id: "hsbc-exp-2",
                batch: "2025",
                branch: "ECE",
                role: "Software Engineer Intern",
                numberOfRounds: 3,
                rounds: [
                    {
                        name: "Online Assessment",
                        duration: "60 minutes",
                        type: "Coding + Logical Reasoning",
                        topics: ["Arrays", "Strings", "Logical Puzzles", "Basic Programming"],
                        questions: [
                            "Find the missing number in an array of 1 to N integers",
                            "Reverse a string without using built-in functions",
                            "Solve the given logical puzzle within 5 minutes",
                            "Write a program to check if a number is prime"
                        ],
                        difficulty: "Easy",
                        preparationTips: [
                            "Practice basic programming problems",
                            "Work on logical reasoning puzzles",
                            "Revise basic syntax of your preferred programming language"
                        ]
                    },
                    {
                        name: "Technical Interview",
                        duration: "45 minutes",
                        type: "Technical",
                        topics: ["Digital Electronics", "Microprocessors", "C Programming", "OOPS"],
                        questions: [
                            "Explain the difference between microprocessor and microcontroller",
                            "What are the different types of memory in a computer system?",
                            "Explain polymorphism with example in C++",
                            "Write a C program to find factorial of a number using recursion",
                            "What is the difference between structure and union?"
                        ],
                        difficulty: "Medium",
                        preparationTips: [
                            "Revise basic electronics and computer organization concepts",
                            "Practice C/C++ programming problems",
                            "Review your academic projects related to electronics"
                        ]
                    },
                    {
                        name: "HR Round",
                        duration: "25 minutes",
                        type: "HR",
                        topics: ["Communication", "Teamwork", "Career Aspirations"],
                        questions: [
                            "Introduce yourself and talk about your academic background",
                            "Why did you choose ECE branch?",
                            "How do you work in a team environment?",
                            "What are your salary expectations?",
                            "Are you willing to relocate for the job?"
                        ],
                        difficulty: "Easy",
                        preparationTips: [
                            "Be confident while talking about your academics",
                            "Highlight team projects and collaborative work",
                            "Research about the company's work culture beforehand"
                        ]
                    }
                ],
                overallExperience: "The process was straightforward with focus on basic technical knowledge and communication skills. Interviewers were patient and helped when I got stuck on certain questions. The HR round was more about understanding my career goals and ensuring I was a good fit for their internship program.",
                suggestions: [
                    "Focus on fundamental concepts from your academic curriculum",
                    "Practice basic programming in C/C++ or Java",
                    "Be ready to discuss your academic projects in detail",
                    "Work on your communication skills - clarity and confidence matter",
                    "Prepare to talk about why you chose your specific engineering branch"
                ]
            }
        ]
    },
    {
        id: "amazon",
        name: "Amazon",
        logo: "/img/companies/amazon.jpg",
        description: "Global e-commerce and cloud computing leader",
        knowBeforeInterview: [
            "Amazon operates in multiple domains: e-commerce, AWS, advertising, devices",
            "Known for customer obsession, innovation, and operational excellence",
            "Uses a bar-raiser interview process to maintain high hiring standards",
            "Leadership Principles are crucial - prepare examples for each",
            "Offers roles in SDE, SDET, Product Management, and various technical domains"
        ],
        experiencesCount: 3,
        experiences: [
            {
                id: "amzn-exp-1",
                batch: "2026",
                branch: "CSE",
                role: "Software Development Engineer",
                numberOfRounds: 4,
                rounds: [
                    {
                        name: "Online Assessment (Codestar)",
                        duration: "90 minutes",
                        type: "Coding + Debugging",
                        topics: ["Arrays", "Strings", "Trees", "Graphs", "Debugging"],
                        questions: [
                            "Given an array, find if there exists a triplet with zero sum",
                            "Debug the given code snippet that has logical errors",
                            "Implement LRU Cache from scratch",
                            "Find the diameter of a binary tree"
                        ],
                        difficulty: "Medium-Hard",
                        preparationTips: [
                            "Practice medium-hard level coding problems consistently",
                            "Learn to spot bugs in given code snippets quickly",
                            "Revise tree and graph traversal algorithms",
                            "Practice on platforms like Codestar, Codeforces for speed"
                        ]
                    },
                    {
                        name: "Technical Round 1",
                        duration: "50 minutes",
                        type: "Data Structures & Algorithms",
                        topics: ["Linked Lists", "Stacks", "Queues", "Recursion", "Problem Solving"],
                        questions: [
                            "Implement a queue using two stacks",
                            "Reverse a linked list in groups of given size",
                            "Find the lowest common ancestor in a binary tree",
                            "Explain how you would design a rate limiter",
                            "What is the time complexity of your solution?"
                        ],
                        difficulty: "Medium",
                        preparationTips: [
                            "Focus on linked list, stack, queue problems",
                            "Practice recursion problems with different base cases",
                            "Think out loud while solving - interviewers want to see your approach",
                            "Always analyze time and space complexity"
                        ]
                    },
                    {
                        name: "Technical Round 2",
                        duration: "50 minutes",
                        type: "System Design + Coding",
                        topics: ["System Design", "OOP", "Design Patterns"],
                        questions: [
                            "Design a parking lot system",
                            "How would you design Twitter's follower mechanism?",
                            "Explain Singleton vs Factory design patterns with use cases",
                            "Write code to implement a thread-safe singleton class",
                            "How do you ensure scalability in your designs?"
                        ],
                        difficulty: "Hard",
                        preparationTips: [
                            "Study basic system design concepts (load balancing, caching, databases)",
                            "Learn common design patterns and their applications",
                            "Think about scalability, availability, and consistency trade-offs",
                            "Practice designing systems for given scenarios"
                        ]
                    },
                    {
                        name: "Bar Raiser Round",
                        duration: "45 minutes",
                        type: "Leadership Principles",
                        topics: ["Leadership Principles", "Behavioral", "Cultural Fit"],
                        questions: [
                            "Tell us about a time you took ownership of a project",
                            "How do you handle disagreement with team members?",
                            "Give an example when you had to learn something quickly",
                            "Describe a situation where you had to meet a tight deadline",
                            "Which Amazon Leadership Principle resonates most with you and why?"
                        ],
                        difficulty: "Medium",
                        preparationTips: [
                            "Study all 16 Amazon Leadership Principles thoroughly",
                            "Prepare STAR stories for each principle from your experiences",
                            "Be specific about situations, your actions, and the results",
                            "Show how you embody customer obsession and innovation"
                        ]
                    }
                ],
                overallExperience: "Amazon's interview process is rigorous but fair. The coding rounds test your problem-solving skills under pressure, while the system design rounds evaluate your ability to think at scale. The Bar Raiser round focuses heavily on Leadership Principles - make sure you have concrete examples ready. Overall, it was a great learning experience.",
                suggestions: [
                    "Master Amazon Leadership Principles - have examples ready for each",
                    "Practice coding problems daily - focus on medium to hard difficulty",
                    "Learn system design basics - scalability, databases, caching, messaging",
                    "Work on your communication skills - explain your thought process clearly",
                    "Prepare for behavioral questions using STAR method (Situation, Task, Action, Result)",
                    "Do mock interviews if possible to get comfortable with the format"
                ]
            }
        ]
    },
    {
        id: "zoho",
        name: "Zoho Corporation",
        logo: "/img/companies/zoho.jpg",
        description: "Indian multinational technology company making computer software",
        knowBeforeInterview: [
            "Zoho is a profitable, privately-held company known for its suite of online productivity tools",
            "Strong focus on R&D and innovation - spends significant revenue on research",
            "Known for long-term employment and less layoffs compared to industry average",
            "Offers roles in deluge programming, UI/UX, QA, and various technical domains",
            "Values practical skills over just theoretical knowledge"
        ],
        experiencesCount: 2,
        experiences: [
            {
                id: "zoho-exp-1",
                batch: "2026",
                branch: "CSE",
                role: "Junior Developer",
                numberOfRounds: 4,
                rounds: [
                    {
                        name: "Written Test",
                        duration: "120 minutes",
                        type: "C Programming + SQL + Aptitude",
                        topics: ["C Programming", "SQL Queries", "Logical Reasoning", "Quantitative Aptitude"],
                        questions: [
                            "Write a C program to implement a linked list with insert/delete operations",
                            "Write SQL queries for given schema - joins, aggregate functions",
                            "Solve the given logical reasoning puzzles",
                            "Quantitative aptitude questions on time-work, profit-loss"
                        ],
                        difficulty: "Medium",
                        preparationTips: [
                            "Revise C programming thoroughly - pointers, structures, file handling",
                            "Practice SQL queries - DDL, DML, joins, subqueries",
                            "Solve puzzles from previous years' papers",
                            "Practice quantitative aptitude problems regularly"
                        ]
                    },
                    {
                        name: "Technical Interview 1",
                        duration: "45 minutes",
                        type: "Technical",
                        topics: ["OOPS", "Data Structures", "Networking", "OS"],
                        questions: [
                            "Explain the four pillars of OOPS with examples",
                            "Difference between TCP and UDP protocols",
                            "What is deadlock? How can it be prevented?",
                            "Explain your favorite project and challenges faced",
                            "How does hashmap work internally in Java?"
                        ],
                        difficulty: "Medium",
                        preparationTips: [
                            "Revise core CS subjects from your curriculum",
                            "Be ready to explain your projects in detail",
                            "Practice explaining concepts clearly and concisely",
                            "Know the basics of networking and operating systems"
                        ]
                    },
                    {
                        name: "Technical Interview 2",
                        duration: "45 minutes",
                        type: "Coding",
                        topics: ["Arrays", "Strings", "Recursion", "Problem Solving"],
                        questions: [
                            "Find the first non-repeating character in a string",
                            "Check if two strings are anagrams of each other",
                            "Implement quicksort algorithm from scratch",
                            "Find all pairs in an array that sum to a given value",
                            "Write a recursive function to calculate factorial"
                        ],
                        difficulty: "Medium",
                        preparationTips: [
                            "Practice array and string manipulation problems",
                            "Work on recursion problems with clear base cases",
                            "Focus on optimizing your solutions",
                            "Practice on coding platforms to improve speed"
                        ]
                    },
                    {
                        name: "HR Round",
                        duration: "30 minutes",
                        type: "HR",
                        topics: ["Communication", "Team Fit", "Career Goals"],
                        questions: [
                            "Tell us about yourself and your family background",
                            "Why do you want to join Zoho specifically?",
                            "How do you handle criticism or feedback?",
                            "What are your long-term career goals?",
                            "Do you prefer working individually or in teams?"
                        ],
                        difficulty: "Easy",
                        preparationTips: [
                            "Research about Zoho's work culture and values",
                            "Be honest about your strengths and areas for improvement",
                            "Talk about what motivates you in your work",
                            "Prepare questions about the team and projects you'd work on"
                        ]
                    }
                ],
                overallExperience: "Zoho's process was comprehensive and tested both theoretical knowledge and practical coding skills. The written test was lengthy but fair, covering multiple domains. Technical interviews focused on core concepts and problem-solving abilities. The interviewers were friendly and made me feel comfortable throughout the process.",
                suggestions: [
                    "Focus on C programming if applying for developer roles",
                    "Revise SQL thoroughly - it's heavily tested in the written test",
                    "Practice coding problems regularly to build confidence",
                    "Work on your communication skills - clarity is key in technical interviews",
                    "Be ready to discuss your academic projects and the learnings from them",
                    "Have a clear idea about why you want to join the specific company"
                ]
            }
        ]
    },
    {
        id: "qualcomm",
        name: "Qualcomm",
        logo: "/img/companies/qualcomm.jpg",
        description: "Global leader in wireless technology and semiconductors",
        knowBeforeInterview: [
            "Qualcomm is a world leader in 5G, wireless technology, and semiconductor innovation",
            "Known for its Snapdragon processors used in mobile devices worldwide",
            "Strong focus on research and development with numerous patents",
            "Offers roles in software engineering, hardware engineering, QA, and internships",
            "Values strong fundamentals in computer science and electronics"
        ],
        experiencesCount: 3,
        experiences: [
            {
                id: "qualcomm-exp-1",
                batch: "2026",
                branch: "CSE",
                role: "Software Engineer",
                numberOfRounds: 3,
                rounds: [
                    {
                        name: "Online Assessment",
                        duration: "90 minutes",
                        type: "Coding + Aptitude",
                        topics: ["Arrays", "Strings", "DP", "OOP", "Aptitude"],
                        questions: [
                            "Find the longest palindromic substring in a given string",
                            "Implement a stack that supports getMinimum() in O(1) time",
                            "Solve the given DP problem on grid traversal",
                            "Object-oriented design questions - inheritance, polymorphism",
                            "Quantitative aptitude on speed-distance-time"
                        ],
                        difficulty: "Medium",
                        preparationTips: [
                            "Practice DP problems - focus on common patterns",
                            "Revise OOP concepts thoroughly",
                            "Practice stack, queue, linked list problems",
                            "Work on aptitude problems regularly"
                        ]
                    },
                    {
                        name: "Technical Interview",
                        duration: "50 minutes",
                        type: "Technical",
                        topics: ["Computer Networks", "OS", "DBMS", "Projects"],
                        questions: [
                            "Explain the OSI model and TCP/IP model layers",
                            "What happens when you type a URL in browser and press enter?",
                            "Explain ACID properties in databases with examples",
                            "Difference between process and thread - context switching",
                            "Explain your biggest achievement during your academic years"
                        ],
                        difficulty: "Medium",
                        preparationTips: [
                            "Revise computer networks - protocols, models, devices",
                            "Study operating systems - processes, threads, memory management",
                            "Know DBMS concepts - normalization, transactions, indexing",
                            "Be ready to discuss your projects and the technologies used"
                        ]
                    },
                    {
                        name: "HR Round",
                        duration: "30 minutes",
                        type: "HR",
                        topics: ["Behavioral", "Culture Fit", "Motivation"],
                        questions: [
                            "Tell us about yourself and your educational background",
                            "Why do you want to work in the semiconductor industry?",
                            "How do you stay updated with latest technology trends?",
                            "Describe a time when you failed and what you learned from it",
                            "Where do you see yourself contributing at Qualcomm?"
                        ],
                        difficulty: "Easy",
                        preparationTips: [
                            "Research about Qualcomm's products and recent innovations",
                            "Show genuine interest in technology and innovation",
                            "Prepare to talk about your learning mindset and adaptability",
                            "Be positive and enthusiastic throughout the interview"
                        ]
                    }
                ],
                overallExperience: "The interview process was technically challenging but well-organized. The online assessment tested both coding aptitude and problem-solving skills. Technical interview went deep into fundamentals of CS subjects relevant to their work. HR round was conversational and focused on understanding my motivation and cultural fit.",
                suggestions: [
                    "Strong focus on fundamentals - DS, Algorithms, OOP, DBMS, OS, Networks",
                    "Practice coding problems regularly to maintain your problem-solving skills",
                    "Be ready to explain core CS concepts clearly and concisely",
                    "Research about the company's domain and recent technological advancements",
                    "Have examples ready that demonstrate your learning ability and adaptability",
                    "Stay calm and confident - remember they're assessing both skill and fit"
                ]
            }
        ]
    },
    {
        id: "tcs",
        name: "Tata Consultancy Services",
        logo: "/img/companies/tcs.jpg",
        description: "Global IT services, consulting and business solutions organization",
        knowBeforeInterview: [
            "TCS is one of the largest IT services companies in the world",
            "Offers services in consulting, digital, engineering, and industrial sectors",
            "Known for its extensive training program (ILP) for freshers",
            "Has a presence in numerous countries serving clients across industries",
            "Offers roles in application development, infrastructure services, BPO, and more"
        ],
        experiencesCount: 2,
        experiences: [
            {
                id: "tcs-exp-1",
                batch: "2026",
                branch: "CSE",
                role: "System Engineer",
                numberOfRounds: 3,
                rounds: [
                    {
                        name: "National Qualifier Test (NQT)",
                        duration: "180 minutes",
                        type: "Aptitude + Reasoning + Programming",
                        topics: ["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability", "Programming Logic"],
                        questions: [
                            "Quantitative aptitude questions on percentages, ratios, averages",
                            "Logical reasoning puzzles and syllogism questions",
                            "Verbal ability - reading comprehension, grammar, vocabulary",
                            "Programming logic questions - flowcharts, pseudocode, basic programming"
                        ],
                        difficulty: "Easy-Medium",
                        preparationTips: [
                            "Practice aptitude questions regularly from standard books",
                            "Work on logical reasoning and verbal ability problems",
                            "Focus on accuracy rather than speed initially",
                            "Review basic programming concepts and logic building"
                        ]
                    },
                    {
                        name: "Technical Interview",
                        duration: "40 minutes",
                        type: "Technical",
                        topics: ["Programming Languages", "DBMS", "Networking", "Software Engineering"],
                        questions: [
                            "Difference between C, C++, and Java programming languages",
                            "Explain normalization and its different forms",
                            "What is the difference between HTTP and HTTPS?",
                            "Explain SDLC and different models like Waterfall, Agile",
                            "What is your preferred programming language and why?"
                        ],
                        difficulty: "Medium",
                        preparationTips: [
                            "Revise basic programming languages and their differences",
                            "Study DBMS concepts thoroughly",
                            "Know networking basics - protocols, models, devices",
                            "Be familiar with software engineering concepts and methodologies"
                        ]
                    },
                    {
                        name: "Managerial Interview",
                        duration: "30 minutes",
                        type: "Managerial + HR",
                        topics: ["Communication", "Teamwork", "Leadership Potential"],
                        questions: [
                            "Tell us about yourself and your family background",
                            "How do you handle working under pressure?",
                            "Describe a time when you took initiative in a group project",
                            "Are you comfortable with relocation for job requirements?",
                            "What motivates you to perform better at work?"
                        ],
                        difficulty: "Easy",
                        preparationTips: [
                            "Be confident while talking about yourself and your background",
                            "Highlight any leadership experiences you've had",
                            "Talk about your adaptability and willingness to learn",
                            "Prepare to discuss your hobbies and interests outside academics"
                        ]
                    }
                ],
                overallExperience: "TCS follows a standard process for hiring freshers. The NQT is a comprehensive test covering multiple aptitude domains. Technical interview focuses on basic CS concepts relevant to IT services. Managerial round evaluates communication skills, teamwork, and leadership potential. Overall process is well-structured and transparent.",
                suggestions: [
                    "Focus on clearing the NQT - practice aptitude and reasoning regularly",
                    "Revise basic CS subjects - programming, DBMS, networking, software engineering",
                    "Work on your communication skills - clarity and confidence matter",
                    "Be open to learning new technologies and domains",
                    "Prepare to talk about your teamwork and collaboration experiences",
                    "Have a positive attitude throughout the process"
                ]
            }
        ]
    }
];

// Export for use in EJS templates
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { companies };
}