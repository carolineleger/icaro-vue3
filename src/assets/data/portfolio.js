export const portfolio = [
  {
    title: "Mable",
    description:
      "React, Wordpress, Headless CMS, Component library, CI/CD, Testing",
    link: "mable",
    thumbnail: "mable.jpg",
    labels: [
      "react",
      "wordpress",
      "jest",
      "cypress",
      "storybook",
      "storyblok",
      "ci/cd",
      "github actions",
    ],
    content: [
      {
        items: [
          {
            title: "Move from Wordpress to headless CMS",
            description: `
              <b>Mable owns multiple websites to connect social workers to people with disabilities or older adults.</b>
              <p>All websites are built using WordPress. While it's flexible and easy to use for non-technical people, it has its limitations and is considered an older technology.</p>
              <p>One of my primary responsibilities was to investigate moving to a headless CMS to ensure both usability for content producers/designers and modern technological support. After evaluating several options, Storyblok emerged as the best fit for our requirements.</p>
              <p>Using React as a front-end framework, I began rebuilding some of the websites, focusing on flexibility. My main goal was to provide a library of reusable components that non-technical users could easily understand and use.</p>
            `,
            image: "mable1.png",
          },
          {
            title: "Sign up microservice, component library",
            description: `
              <b>On Mable, both social workers and clients can log in to use our application (built in Angular and managed by another team).</b>
              <p>To improve the signup flow, we decided to split the signup process by creating a microservice specifically for this use case.</p>
              <p>This microservice was built in React and leverages our shared component library, also built by my team with React and managed using Storybook. The project achieved over 80% code coverage with rigorous testing using Jest.</p>
              <p>It is deployed on AWS, with automated deployments managed through GitHub Actions, ensuring a seamless and reliable development pipeline.</p>
            `,
            image: "mable2.png",
          },
          {
            title: "Clean and Maintain WordPress Websites",
            description: `
              <b>Before joining Mable, the websites were managed by multiple external contractors, resulting in disorganized codebases and bloated websites overloaded with unnecessary plugins.</b>
              <p>One of my first tasks was to streamline the WordPress environments and establish a scalable, maintainable structure. This involved cleaning up the themes, removing unused or redundant plugins, and consolidating functionality into custom widgets built using Elementor's custom features for reusability.</p>
              <p>Testing was introduced using Cypress to ensure stability and quality. Additionally, the WordPress theme content was placed under version control in GitHub, with a deployment pipeline set up through GitHub Actions. These improvements ensured efficient collaboration, reduced deployment errors, and maintained consistency across environments.</p>
            `,
            image: "mable3.png",
          },
        ],
      },
    ],
  },
  {
    title: "CESE (NSW Education Department)",
    link: "cese",
    description: "VueJS, REST APIs, Tailwind, Vuetify",
    thumbnail: "cese.jpg",
    labels: ["vue", "vuetify", "github", "tailwind", "charts", "axios", "vuex"],
    content: [
      {
        items: [
          {
            title: "Rebuilding a critical Census tool for NSW schools",
            description: `
              <b></b>
              <p>CESE, a project for the NSW Department of Education, aimed to rebuild an outdated internal tool used by schools across New South Wales to submit Census data about their students. This data included metrics such as attendance rates, languages studied, and other essential academic statistics.</p>
              <p>The application consisted of two main parts: one interface for schools to enter and manage their data, and another for administrators to review submissions and generate detailed charts and reports. Built from the ground up using <b>Vue.js</b> (Vue 2) as a mandated framework, the project utilized a custom component library provided by the department, based on Vuetify, to ensure consistency in design and functionality.</p>
            `,
            image: "cese1.png",
          },
          {
            title: "Managing complexity with reusable components",
            description: `
              <p>The CESE tool needed to handle massive amounts of data efficiently, as most of the information was displayed in data tables, input forms, and visualized in interactive charts. The application connected to multiple API endpoints, making it a data-heavy and highly interconnected system.</p>
              <p>Given the complexity of the data structure, our approach prioritized reusability and modularity. Key components such as tables, forms, and charting modules were designed to be highly configurable and reusable across the application. Tailwind CSS was used alongside Vuetify to enhance the styling flexibility, while Vuex handled the state management, ensuring smooth data flow across the app.</p>
              <p>This meticulous planning and execution resulted in a robust and user-friendly application that simplified the management of intricate datasets for both schools and administrators.</p>
            `,
            image: "cese2.png",
          },
        ],
      },
    ],
  },
  {
    title: "Wilde",
    link: "wilde",
    thumbnail: "wilde.jpg",
    description: "Shopify Headless CMS, GSAP animations, React, Remix",
    labels: ["react", "remix", "hydrogen", "shopify", "gsap", "sass"],
    content: [
      {
        items: [
          {
            description: `
              <b>Building a vibrant e-commerce experience with Shopify Hydrogen</b>
              <p>Wilde is an e-commerce website for a brand specializing in protein chips, designed to deliver an engaging and fun shopping experience. The project leveraged Shopify's <b>Hydrogen</b>, a headless CMS optimized for Shopify stores, allowing me to connect seamlessly to the store’s backend while creating a highly interactive front-end experience.</p>
              <p>As the sole developer, I used <b>GSAP</b> (GreenSock Animation Platform) extensively to create smooth and dynamic animations throughout the website. These animations brought the site to life, enhancing user engagement with playful transitions and interactive elements. </p>
              <p>I also worked with basic <b>GraphQL</b> queries to fetch product data directly from Shopify, ensuring accurate and efficient data retrieval. One of the project’s highlights was the custom "Build Your Box" feature, which allowed users to mix and match products. Developing this feature required a deep dive into Shopify’s ecosystem and APIs to handle the unique cart and inventory logic seamlessly.</p>
              <p>With a blend of <b>React</b>, <b>Remix</b>, and the Shopify Hydrogen framework, the result was a modern, fast, and visually stunning e-commerce platform tailored to Wilde’s brand identity and business goals.</p>
            `,
            video: "wilde.mp4",
          },
        ],
      },
    ],
  },
  {
    title: "Intelematics",
    link: "intelematics",
    description:
      "RACV company with work on multiple apps (Angular, React) and Wordpress",
    thumbnail: "intelematics.jpg",
    labels: [
      "React",
      "Angular",
      "WordPress",
      "GitHub",
      "REST API",
      "Power BI",
      "Mapbox",
      "OpenStreetMap",
      "SASS",
    ],
    content: [
      {
        items: [
          {
            description: `
              <b>Comprehensive Development Across Automotive Platforms</b>
              <p>Intelematics, a company affiliated with RACV, delivers cutting-edge automotive solutions through connected devices and applications. During my time there, I contributed to a wide range of projects spanning technologies such as <b>React</b>, <b>Angular</b>, and <b>WordPress</b>.</p>
              <p>One notable project was an Angular-based troubleshooting and incident management platform. This app allowed users to diagnose car issues and connect directly with support personnel. I worked on improving the interface, implementing complex workflows, and ensuring an intuitive user experience.</p>
              <p>Another significant contribution was the maintenance of Intelematics’ <b>WordPress</b> website. From building custom plugins to optimizing performance and SEO, I ensured that the site reflected the brand’s professionalism and innovation.</p>
            `,
            image: "intelematics1.png",
          },
          {
            description: `
              <b>Developing Traffic Insights and a Vehicle Marketplace</b>
              <p>One of my key projects was building a React-based traffic insights application from the ground up. This tool, powered by <b>Mapbox</b> and <b>OpenStreetMap</b>, provided detailed traffic data visualizations. Users could filter data dynamically to view traffic volume for specific areas and timeframes, with data seamlessly integrated from <b>Power BI</b> via custom APIs. The application featured a clean, interactive map interface designed for actionable insights.</p>
              <p>Additionally, my last project was a website similar to Carsales, designed specifically for RACV. This platform in Angular fetched vehicle data directly from RACV’s database and offered users robust filtering options to explore and search for cars.</p>
            `,
            image: "intelematics2.webp",
          },
        ],
      },
    ],
  },
  {
    title: "Virgin and British Paint",
    link: "web-apps",
    description:
      "Small interactive web apps in VueJs for British Paint and Virgin",
    thumbnail: "web-apps.jpg",
    labels: [
      "Vue.js",
      "Interactive Design",
      "Digital Agency",
      "Gsap",
      "UX/UI",
      "Tailwind",
    ],
    content: [
      {
        items: [
          {
            description: `
              <b>Creating Engaging Web Applications at DDB</b>
              <p>During my time at <b>DDB</b>, a leading digital agency, I worked on a variety of projects, including two standout web applications, both developed using <b>Vue.js</b>. These projects showcased a blend of innovative functionality and immersive user experiences.</p>
              
              <p><b>British Paints - Find Your Perfect Color</b></p>
              <p>This interactive web app guided users on a personalized journey to find the perfect color for their painting projects. The experience culminated in an interactive palette where users could zoom in to explore recommended colors or browse others. Each color was linked to paint references available in stores, making it practical for users to act on their selections offline.</p>
              <p>The project emphasized intuitive design and fluid interactivity, ensuring a delightful user experience that aligned with British Paints' brand identity.</p>
              
              <p><b>Virgin Airlines - Accent Analyzer</b></p>
              <p>For Virgin Airlines, I built a fun and engaging app designed to analyze the user's accent and determine whether it leaned more towards an Aussie or a Kiwi. Through animated screens, users could record their voice and submit the audio to an external tool for analysis. The results provided a percentage breakdown of their Australian or New Zealand accent and redirected them to promotional offers based on their result.</p>
            `,
            image: "webapp.png",
          },
        ],
      },
    ],
  },
  {
    title: "Australia Post",
    link: "australia-post",
    thumbnail: "auspost.jpg",
    description: "Animated microsite for Australia Post, Javascript, JQuery",
    labels: ["JavaScript", "jQuery", "HTML", "SASS", "CSS", "GSAP"],
    content: [
      {
        items: [
          {
            description: `
              <b>Building a Campaign Microsite for Australia Post</b>
              <p>As a contractor for <b>Australia Post</b>, I worked on an exciting campaign called <b>The Great Aussie Coin Hunt</b>. This campaign celebrated Australia's culture with a series of special coins, each representing iconic Australian themes.</p>
              <p>I developed the campaign microsite using <b>Vanilla JavaScript</b> and <b>jQuery</b>, adhering to the client's specific requirements. The microsite needed to be split into smaller modules to integrate seamlessly into their <b>Adobe Experience Manager (AEM)</b> platform. Despite these constraints, the project offered plenty of creative opportunities.</p>
              <p>The microsite was heavy on animations, which were built using <b>GSAP</b> (GreenSock Animation Platform) to create smooth and engaging transitions. It was a joy to work on, blending technical challenges with creative problem-solving to deliver a fun, interactive experience that captured the campaign's essence.</p>
            `,
            video: "auspost.mp4",
          },
        ],
      },
    ],
  },
  {
    title: "Others",
    link: "others",
    description:
      "A collection of significant work and personal projects over the past decade.",
    thumbnail: "others.jpg",
    labels: [
      "React",
      "Redux",
      "Angular",
      "AngularJS",
      "Sass",
      "Wordpress",
      "Woocommerce",
    ],
    content: [
      {
        items: [
          {
            description: `
                <b>Blackmagic Design - Prototyping Video Editing Interfaces</b>
                <p>While at <b>Blackmagic Design</b>, I contributed to several prototypes aimed at testing new interfaces for camera software and DaVinci Resolve, their industry-leading video editing software. These projects were essential in exploring new workflows and UI patterns for professionals in the film industry. I used <b>AngularJS</b> and began diving into <b>React</b> with <b>Redux</b> to build interactive and performant solutions.</p>
              `,
            image: "bmd.jpg",
          },
          {
            description: `
            <b>Nintex - Analytics Dashboard</b>
            <p>During my time contracting for <b>Nintex</b>, I worked on an analytics tool that visualized user activity across their suite of apps. The project required building charts and data-driven components with multiple filtering options, helping users make sense of their usage data and gain actionable insights.</p>
          `,
            image: "nintex.webp",
          },
          {
            description: `
            <b>Personal Projects</b>
            <p>Some of my personal projects were done for friends. One involved building a <b>Vue.js</b> website and contributing to some features for their app, which focused on feedback sharing between employers and employees. <br/><br/>Another was creating a <b>WordPress/WooCommerce</b> website to sell tarot cards. These projects allowed me to tackle diverse challenges, from interactive web app development to e-commerce functionality.</p>`,
            image: "gestaltra.png",
          },
          {
            description: `
            <b>Early Career - UX and Design</b>
            <p>Before transitioning fully into development, I spent time in UX/UI. I worked on designing and building landing pages, emails, animated banners, and web designs. <br/><br/>Though I’ve since shifted away from design work, this experience gave me a keen eye for detail, which helps me communicate with designers and maintain design integrity in projects.</p>
          `,
            image: "melbourneuni.webp",
          },
        ],
      },
    ],
  },
];
