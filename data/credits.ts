export type CreditPerson = {
  name: string;
  linkedin: string;
  github?: string;
};

export const designers: CreditPerson[] = [
  {
    name: "Javeria Saeed",
    linkedin: "https://www.linkedin.com/in/javeria-saeed-317376237/",
  },
  {
    name: "Samiyah Abdirahman",
    linkedin: "https://www.linkedin.com/in/samiyah-abdirahman/",
  },
  {
    name: "Azka Hussain",
    linkedin: "https://www.linkedin.com/in/azka-hussain-9768822b3/",
  },
  {
    name: "Fatima Ismail",
    linkedin: "https://www.linkedin.com/in/fatima-ismail-b17761206/",
  },
  {
    name: "Suweda Abdirahman",
    linkedin: "https://www.linkedin.com/in/suweda-abdirahman/",
  },
];

export const developers: CreditPerson[] = [
  {
    name: "Adrita Ahsan",
    linkedin: "https://www.linkedin.com/in/adrita-ahsan-4072111ab/",
    github: "https://github.com/adrita06",
  },
  {
    name: "Najifah Ahmed",
    linkedin: "https://www.linkedin.com/in/najifah-ahmed/",
    github: "https://github.com/najifah",
  },
  {
    name: "Azka Hussain",
    linkedin: "https://www.linkedin.com/in/azka-hussain-9768822b3/",
    github: "https://github.com/Azka-05",
  },
  {
    name: "Suweda Abdirahman",
    linkedin: "https://www.linkedin.com/in/suweda-abdirahman/",
    github: "https://github.com/suwedaaa",
  },
];

export type CreditTeam = "designers" | "developers";

export const creditLabels: Record<CreditTeam, string> = {
  designers: "Designed with ♥ by",
  developers: "Developed with ♥ by",
};

export const creditLabelsShort: Record<CreditTeam, string> = {
  designers: "Designers",
  developers: "Developers",
};

export const creditTitles: Record<CreditTeam, string> = {
  designers: "Design Team",
  developers: "Development Team",
};
