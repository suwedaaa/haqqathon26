export type SponsorLogo = {
  id: string;
  name: string;
  image: string;
  website?: string;
  linkedin?: string;
};

export const sponsorLogos: SponsorLogo[] = [
  { id: "nzf", name: "National Zakat Foundation", image: "/sponsors/national-zakat-foundation.png", website: "https://nzf.org.uk", linkedin: "https://www.linkedin.com/company/national-zakat-foundation" },
  { id: "kestrl", name: "Kestrl", image: "/sponsors/kestrl.png", website: "https://kestrl.io", linkedin: "https://www.linkedin.com/company/kestrl" },
  { id: "ummah1", name: "Ummah1", image: "/sponsors/ummah1.jpg", website: "https://ummah1.com", linkedin: "https://www.linkedin.com/company/ummah1" },
  { id: "mcb", name: "Muslim Council of Britain", image: "/sponsors/mcb.png", website: "https://mcb.org.uk", linkedin: "https://www.linkedin.com/company/muslimcounciluk/" },
  { id: "bpf", name: "British Pakistan Foundation", image: "/sponsors/british-pakistan-foundation.png", website: "https://britishpakistanfoundation.com", linkedin: "https://www.linkedin.com/company/thebritishpakistanfoundation/" },
];
