import { PLACEHOLDER_IMAGE } from "@/lib/assets";

export type SponsorProfile = {
  id: string;
  name: string;
  role: string;
  image: string;
  contact?: string;
  follow?: string;
};

export const featuredSponsor: SponsorProfile = {
  id: "areeb",
  name: "Areeb Siddiqui",
  role: "Kestrl CEO",
  image: "/sponsors/areeb-siddiqui.png",
  contact: "mailto:hello@haqqathon.com",
  follow: "https://instagram.com",
};

export const sponsorGallery = [
  featuredSponsor,
  {
    id: "sponsor-2",
    name: "Partner Name",
    role: "Gold Sponsor",
    image: PLACEHOLDER_IMAGE,
  },
];
