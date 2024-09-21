type SiteConfig = {
  timeline: {
    name: string;
    url: string;
    time: string;
    description?: string;
  }[];
  contact: {
    name: string;
    url: string;
  }[];
};

export const SITE_CONFIG: SiteConfig = {
  timeline: [
    {
      name: "withYHR",
      url: "https://withyhr.com/",
      time: "2024-Present",
      description: "Building web products as a dev studio",
    },
    {
      name: "Frontend Hire",
      url: "https://frontendhire.com/",
      time: "2023-Present",
      description: "Trying to solve frontend developer interviews and hiring",
    },
    {
      name: "Freelancer",
      url: "https://withyhr.com/",
      time: "2023",
      description: "Worked with New Relic, HireHunch, and XRG",
    },
    {
      name: "University of Leeds",
      url: "https://www.leeds.ac.uk/",
      time: "2022-2023",
      description: "Got another computer science degree",
    },
    {
      name: "HireHunch",
      url: "https://hirehunch.com/",
      time: "2021-2022",
      description: "Led core UI development for multiple products",
    },
    {
      name: "Piktorlabs",
      url: "https://piktorlabs.com/",
      time: "2021",
      description: "Started the dev career here",
    },
    {
      name: "BML Munjal University",
      url: "https://www.bmu.edu.in/",
      time: "2017-2021",
      description: "Got a computer science degree",
    },
  ],
  contact: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yarala-hruthik-reddy/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/thisisyhr",
    },
    {
      name: "GitHub",
      url: "https://github.com/yaralahruthik",
    },
  ],
};
