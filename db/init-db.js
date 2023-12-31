db.createUser({
  user: 'root',
  pwd: 'toor',
  roles: [
      {
          role: 'readWrite',
          db: 'testDB',
      },
  ],
});

// Connect to the MongoDB server
const conn = new Mongo();

// Choose the database you want to use
const db = conn.getDB('resumedata');

const userData = [{  
  username: 'franciswilliams1999',
  firstName: 'Francis',
  lastName: 'Williams',
  phoneNumber: process.env.PHONE_NUMBER,
  email: process.env.EMAIL,
  details:  
    [
      'I am a young professional with a passion for back-end applications, however, I love all kinds of software development.'
    ],
  tags: ['sql', 'java', 'node.js', 'react.js', 'kubernetes', 'docker', 'c', 'c++', 'rust', 'spring']
}];


async function addResumeData() {
  try {
    db.createCollection('users');
    const result = await db.users.insertMany(userData);
    const userId = result.insertedIds[0];

    const experienceData = [
      { 
        userId: userId,
        name: 'Anaplan', 
        position: 'Associate Software Engineer', 
        details: [
          'Enhanced the developer experience within the Developer Enablement Group by creating and managing problem-solving tools. ' + 
          'Utilized a comprehensive tech stack including Java, Rust, Terraform, Cypress, Pact, and Kubernetes to empower developers ' + 
          'and streamline workflows.',
  
          'Boosted internal adoption of the team\'s Data Provisioning Tool (Java) through an impactful organization-wide demonstration, ' +
          'showcasing its value and capabilities to the greater organization.',
  
          'Significantly reduced errors in Splunk logs by 40% through the implementation of performance, ' +
          'stability, and contract (Pact) tests for the tool. Collaborated with internal users to gain insights, address concerns, ' + 
          'and align the tool with their specific needs. Expanded the associated Jenkins library, enabling seamless integration into ' + 
          'developers\' CI/CD pipelines, further enhancing its usability and effectiveness.',
  
          'Elevated the organization\'s test visibility by deploying a robust Rust-based web API on Amazon EKS and Aurora DB. ' +
          'Leveraged Infrastructure as Code (IaaC) principles to provision resources with Terraform and Helm. ' +
          'Demonstrated Agile principles by creating Jenkins pipelines for seamless containerization and integration of new code changes. ' + 
          'Implemented Harness pipelines for efficient deployment of those changes. ' + 
          'Introduced observability to the cluster with metrics and logging using OpenTelemetry and Grafana.',
  
          'Enhanced front-end for the application using React and Backstage by integrating our plugin into the organizations\' ' + 
          'existing backstage deployment.'
        ], 
        tags: ['java', 'rust', 'rest-apis', 'aws', 'kubernetes', 'docker', 'terraform', 'backend', 'dev-ops', 'full-stack', 'jenkins'] 
      },
      { 
        userId: userId,
        name: 'HCLTech', 
        position: 'Intern Software Engineer', 
        details: [
          'Developed and managed full-stack website services encompassing front-end, back-end, and database layers using ' + 
          'Java, SpringBoot, OpenShift, and Angular.',
  
          'Ensured robust web security practices with code coverage over 90%, zero code smells, and minimal cognitive complexity.',
  
          'Successfully collaborated with a team of interns, effectively navigating a 12-hour time difference with managers. ' + 
          'Demonstrated exceptional coordination and communication skills to ensure seamless project development and progress.'
        ], 
        tags: ['java', 'springBoot', 'rest-apis', 'backend', 'full-stack']
      }
    ];
  
    const projectData = [
      { 
        userId: userId,
        name: 'Smart Resume', 
        link: 'https://github.com/JamaicaNater/Smart-Resume', 
        details: [
          'Utilized MongoDB, Express.js, React.js, and Node.js to architect and engineer a containerized full-stack web application. ' +
          'This innovative platform empowers users to seamlessly input their job experiences, project details, educational background, and more. ' +
          'The application dynamically tailors its presentation to align with various desired positions, offering a personalized and engaging experience.',

          'Implemented Google-based OpenID login functionality.'
        ],
        tags: ['javascript', 'rest-apis', 'backend', 'full-stack', 'frontend', 'react.js', 'node.js', 'express.js', 'mongodb', 'nosql'] 
      },      
      { 
        userId: userId,
        name: 'Method Payment Dashboard (Full Stack Site)', 
        link: 'https://github.com/JamaicaNater/Method-Payment-Dashboard', 
        details: [
          'Developed a user-friendly ReactJS-based interface enabling users to input payroll data, ' +
          'which is then parsed and securely stored in a database.',
    
          'Created a robust Rust-based web API that follows RESTful principles, ' +
          'facilitating seamless communication between the user interface and the database. '+ 
          'Implemented data validation and error handling to ensure data integrity and system reliability',
    
          'Employed modern containerization techniques using Docker, ' +
          'configuring dockerfiles and docker-compose files to enable hassle-free deployment and scalability across different environments. ' +
          'This ensured platform independence and streamlined application maintenance'
        ],
        tags: ['rust', 'rest-apis', 'backend', 'full-stack', 'frontend', 'react.js', 'sql'] 
      },
      { 
        userId: userId,
        name: 'RocketEngine (Game Engine)', 
        link: 'https://github.com/JamaicaNater/RocketEngine', 
        details: [
          'Spearheaded the development of a robust C++ game engine for the Sony PlayStation Portable (2005) from scratch, ' +
          'encompassing key features such as a user input, image loading and rendering, ' + 
          'physics simulations, collision detection, and logging.',
    
          'Utilized industry best pratices to architect a framework for GUI for menus which involved use of funtions pointers to ' +
          'handle various even such as component selection, click and open',
        ],
        tags: ['c++', 'game-development'] 
      },
      { 
        userId: userId,
        name: 'RocketManPSP (Video Game)', 
        link: 'https://github.com/JamaicaNater/RocketManPSP', 
        details: [   
          'Employed object-oriented design principles to architect game components, ' +
          'leveraging industry best practices to create an easily  maintainable codebase.',
    
          'Navigated the challenges of working within a limited 6MB RAM constraint (2MB stack, 4MB heap), ' + 
          'optimizing resource usage to maximize performance and deliver an immersive gaming experience on the Sony PSP platform.'
        ],
        tags: ['c++', 'game-development'] 
      },
      { 
        userId: userId,
        name: 'Micro-C Compiler', 
        link: 'https://git.sr.ht/~jamaicanater/McCompiler', 
        details: [
          'Designed a robust C-based compiler for Micro-C, which ensured strict adherence to the Micro-C grammar ' +
          'and generated efficient MIPS assembly code.',
    
          'Leveraged industry-standard lexical analyzer (lex) and powerful parser (yacc/bison) to analyze the code, ' +
          'transforming it into an abstract syntax tree.',
    
          'Demonstrated exceptional proficiency in advanced data structures and algorithms, ' +
          'utilizing trees to enable seamless compilation processes. Mastered recursion-based functions and operations ' + 
          'to enhance performance and code optimization.'
        ],
        tags: ['c', 'compiler-construction'] 
      },
      { 
        userId: userId,
        name: 'Red-To-You (Video Creation Tool)', 
        link: 'https://github.com/JamaicaNater/Red-To-You', 
        details: [
          'Developed a Python program that seamlessly converts Reddit post links into videos, ' +
          'incorporating customizable visual modifications to elevate the user\'s viewing experience.',
    
          'Leveraged advanced data analysis libraries such as sklearn and pandas to empower the tool with intelligent video length estimation. ' +
          'By analyzing the number of comments, replies, and characters in a thread, users can effortlessly specify the desired video duration.',
    
          'Optimized the tool\'s performance by implementing efficient multi-threading techniques, resulting in a substantial reduction in runtime. ' +
          'This enhancement ensures swift video generation, allowing users to enjoy their content without unnecessary delays.'
        ],
        tags: ['python'] 
      }
    ];
    
    const educationData = [
      {
        userId: userId,
        name: "Texas State University",
        degreeType: "BS",
        major: "Computer Science",
        minor: "Mathermatics",
        gpa: 3.73,
        details: null,
        startDate: "2019-8",
        endDate: "2022-5",
        city: "San Marcos",
        state: "TX",
        country: "United States"
      }
    ];

    const referenceData = [
      {
        userId: userId,
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "876-432-1234",
        email: "john.doe@gmail.com",
        relationship: "Manager"
      }
    ];

    const tagData = [
      { name: "c++" },
      { name: "game-development" },
      { name: "python" },
      { name: "compiler-construction" },
      { name: "react.js" },
      { name: "backend" },
      { name: "full-stack" },
      { name: "frontend" },
      { name: "express.js" },
      { name: "java" },
      { name: "spring-boot" },
      { name: "rest-apis" },
      { name: "aws" },
      { name: "terraform" },
      { name: "dev-ops" },
      { name: "jenkins" },
      { name: "sql" },
      { name: "node.js" },
      { name: "kubernetes" },
      { name: "docker" },
      { name: "c" },
      { name: "rust" },
      { name: "spring" },
      { name: "angular" },
      { name: "django" },
      { name: ".net" },
      { name: "c#" },
      { name: "web-assembly" },
      { name: "vue.js" },
      { name: "mongo-db" },
      { name: "nosql" },
      { name: "mysql" },
    ];

    const jobData = [
      { 
        name: "Backend Developer", 
        tags: ["rust", "java", "sql", "spring", "rest-apis", "djanjo", "node.js", "express.js", ".net", "c#", "backend", "fullstack"] 
      },
      {
        name: "Frontend Developer",
        tags: ["javascript", "web-assembly", "react.js", "angular", "vue.js", "typescript", "frontend", "fullstack"]
      },
      {
        name: "Low-Level Developer",
        tags: ["rust", "compiler-construction", "c++", "c", "zig", "assembly"]
      },
      {
        name: "Dev-ops", 
        tags: ["docker", "jenkins", "ci/cd", "terraform", "aws", "gcp", "dev-ops", "kubernetes"]
      }
    ]

    db.createCollection('experiences');
    db.experiences.insertMany(experienceData);

    db.createCollection('educations');
    db.educations.insertMany(educationData);

    db.createCollection('projects');
    db.projects.insertMany(projectData);

    db.createCollection('references');
    db.references.insertMany(referenceData);

    db.createCollection('tags');
    db.tags.createIndex({ name: 1 }, { unique: true });
    db.tags.insertMany(tagData);

    db.createCollection('jobs');
    db.jobs.createIndex({ name: 1 }, { unique: true });
    db.jobs.insertMany(jobData);

    print('MongoDB initialization script executed successfully.');
  } catch (error) {
    console.error(error);
  }
}

addResumeData();
