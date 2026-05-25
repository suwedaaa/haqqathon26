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
  { id: "mcb", name: "Muslim Council of Britain", image: "/sponsors/mcb.png", website: "https://mcb.org.uk", linkedin: "https://www.linkedin.com/company/muslim-council-of-britain" },
  { id: "bpf", name: "British Pakistani Foundation", image: "/sponsors/british-pakistani-foundation.png", website: "https://britishpakistanifoundation.com", linkedin: "https://www.linkedin.com/company/british-pakistani-foundation" },
];
