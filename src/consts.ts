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
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: `${baseUrl}/`, 
  },
  { 
    TEXT: "Work", 
    HREF: `${baseUrl}/work`, 
  },
  { 
    TEXT: "Blog", 
    HREF: `${baseUrl}/blog`, 
  },
  { 
    TEXT: "Projects", 
    HREF: `${baseUrl}/projects`, 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "dhingra_kk@yahoo.com",
    HREF: "mailto:dhingra_kk@yahoo.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "kamaldhingra1",
    HREF: "https://github.com/kamaldhingra1"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Kamal Dhingra",
    HREF: "https://www.linkedin.com/in/kamaldhingra/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "Kamal Dhingra",
    HREF: "https://twitter.com/x",
  },
]

