import type { Site, Page, Links, Socials } from "@types"

const baseUrl = import.meta.env.BASE_URL;

// Global
export const SITE: Site = {
  TITLE: "Kamal Dhingra",
  DESCRIPTION: "Cyber, AI Security Architecture & Beyond..",
  AUTHOR: "Kamal Dhingra",
}

// Work Page
export const WORK: Page = {
  TITLE: "About",
  DESCRIPTION: "Know more About me.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
// export const PROJECTS: Page = {
//   TITLE: "Projects",
//   DESCRIPTION: "Recent projects I have worked on.",
// }

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: `/`, 
  },
  
  { 
    TEXT: "Blog", 
    HREF: `/blog`, 
  },
  { 
    TEXT: "About", 
    HREF: `/work`, 
  },
  // { 
  //   TEXT: "Projects", 
  //   HREF: `${baseUrl}/projects`, 
  // },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "hello@kamaldhingra.com",
    HREF: "mailto:hello@kamaldhingra.com",
  },

  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Kamal Dhingra",
    HREF: "https://www.linkedin.com/in/kamaldhingra/",
  },
    { 
    NAME: "Github",
    ICON: "github",
    TEXT: "kamaldhingra1",
    HREF: "https://github.com/kamaldhingra1"
  },
  // { 
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "Kamal Dhingra",
  //   HREF: "https://twitter.com/x",
  // },
]

