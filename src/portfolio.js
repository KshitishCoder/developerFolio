/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kshitish Sahoo",
  title: "Hi, I'm Kshitish",
  subTitle: emoji(
    "A passionate and results-driven DevOps Engineer 👨🏼‍💻 with 9+ years of experience in cloud infrastructure, CI/CD pipelines, and container orchestration. I work with tools like AWS, Helm Charts, Kubernetes, Jenkins, and ArgoCD to build scalable and secure systems. I love automating workflows, solving infrastructure challenges, and contributing to clean, efficient DevOps solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KshitishCoder",
  linkedin: "https://www.linkedin.com/in/kshitish-sahoo",
  gmail: "kksahoo16@gmail.com",
  twitter: "",
  //gitlab: "https://gitlab.com/saadpasta",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
  const skillsSection = {
    title: "What I Do",
    subTitle: "BUILDING SCALABLE, SECURE, AND AUTOMATED INFRASTRUCTURE THROUGH DEVOPS BEST PRACTICES",
    skills: [
      emoji("⚡ Design and implement CI/CD pipelines using Jenkins, ArgoCD, and GitHub Actions"),
      emoji("⚡ Build and manage containerized applications with Docker, Kubernetes, and Helm"),
      emoji("⚡ Automate cloud infrastructure using AWS services like EKS, EC2, S3, Lambda, and Secrets Manager"),
      emoji("⚡ Monitor and troubleshoot distributed systems using Splunk, New Relic, and CloudWatch"),
      emoji("⚡ Develop automation scripts and tools in Python and PHP"),
      emoji("⚡ Work with databases like PostgreSQL and MongoDB in cloud-native environments")
    ],
  

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Docker",
    fontAwesomeClassname: "devicon-docker-plain"
  },
  {
    skillName: "Kubernetes",
    fontAwesomeClassname: "devicon-kubernetes-plain"
  },
  {
    skillName: "Helm",
    fontAwesomeClassname: "devicon-helm-original"
  },
  {
    skillName: "Jenkins",
    fontAwesomeClassname: "devicon-jenkins-plain"
  },
  {
    skillName: "GitHub",
    fontAwesomeClassname: "devicon-github-original"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "devicon-amazonwebservices-plain-wordmark"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "devicon-python-plain"
  },
  {
    skillName: "PHP",
    fontAwesomeClassname: "devicon-php-plain"
  },
  {
    skillName: "Linux",
    fontAwesomeClassname: "devicon-linux-plain"
  },
  {
    skillName: "PostgreSQL",
    fontAwesomeClassname: "devicon-postgresql-plain"
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "devicon-mongodb-plain"
  },
  //{
  //  skillName: "Terraform",
  //  fontAwesomeClassname: "devicon-terraform-plain"
  //},
  //{
  //  skillName: "Ansible",
  //  fontAwesomeClassname: "devicon-ansible-plain"
  //},
  {
    skillName: "Bash",
    fontAwesomeClassname: "devicon-bash-plain"
  },
  {
    skillName: "ArgoCD",
    fontAwesomeClassname: "devicon-argocd-plain-wordmark"
  },
  {
    skillName: "Postman",
    fontAwesomeClassname: "devicon-postman-plain"
  },
  {
    skillName: "Cloud Monitoring",
    fontAwesomeClassname: "fas fa-chart-line"  // general monitoring icon
  },
  {
    skillName: "New Relic",
    fontAwesomeClassname: "fas fa-tachometer-alt"  // symbolic
  },
  {
    skillName: "Splunk",
    fontAwesomeClassname: "devicon-splunk-original-wordmark"
  }
],
  display: true // Set false to hide this section, defaults to true
};

//Tools Proficiency ProgressBar
export const proficiencySection = {
  title: "Proficiency",
  skills: [
    {
      name: "DevOps / Cloud Infrastructure",
      percentage: "90",
    },
    {
      name: "CI/CD & Automation (Jenkins, ArgoCD, GitHub Actions)",
      percentage: "85",
    },
    {
      name: "Containerization (Docker, Kubernetes, Helm)",
      percentage: "85",
    },
    {
      name: "Cloud Services (AWS, Lambda, S3, EC2)",
      percentage: "80",
    },
    {
      name: "Scripting (Python, Bash, PHP)",
      percentage: "75",
    },
    {
      name: "Monitoring & Logging (CloudWatch, Splunk, New Relic)",
      percentage: "70",
    },
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer",
      company: "TCS (Tata Consultancy Services)",
      companylogo: require("./assets/images/tcslogo.png"),
      date: "Nov 2022 – Present",
      desc: "In my current role, I focus on automating CI/CD workflows using Jenkins, ArgoCD, and GitLab, while managing containerized deployments with Docker, Kubernetes, and Helm. I work extensively on AWS services including EKS, Lambda, S3, EC2, and EMR, ensuring scalable and reliable infrastructure. I also develop automation scripts in Python and Bash, and monitor system performance using CloudWatch and Splunk to maintain operational excellence.",
      descBullets: [
        "CI/CD & Automation: Jenkins, ArgoCD, GitLab, Helm Charts",
        "Cloud Services: AWS, EKS, Lambda, S3, EC2, Elastic Cache, EMR etc.",
        "Containerization: Docker, Kubernetes",
        "Scripting & Programming: Python, Bash",
        "Monitoring & Logging: CloudWatch, Splunk"
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Envestnet | Yodlee Inc.",
      companylogo: require("./assets/images/EnevestnetLogo.png"),
      date: "April 2016 – Nov 2022",
      desc: "I was responsible for automating and managing end-to-end CI/CD pipelines using Jenkins, while provisioning and configuring infrastructure with Chef and Bash scripting. I handled deployment and monitoring of applications on JBoss servers, integrated Nagios and ELK Stack for system health checks, and streamlined environment provisioning for Dev, QA, and Production. Additionally, I developed custom scripts for deployments, log management, and system automation, implemented single-click deployments, and integrated Linux servers with SSO for secure access and seamless operations."
    }
  ]
};
// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};
// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-0000000000",
  email_address: "kksahoo16@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  workExperiences,
  educationInfo,
  openSource,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
