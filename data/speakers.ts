import { PLACEHOLDER_IMAGE } from "@/lib/assets";

export type SpeakerProfile = {
  id: string;
  name: string;
  role: string;
  image: string;
  contact?: string;
  follow?: string;
};

export const featuredSpeaker: SpeakerProfile = {
  id: "areeb",
  name: "Areeb Siddiqui",
  role: "Kestrl CEO",
  image: "/speakers/areeb-siddiqui.png",
  contact: "mailto:hello@haqqathon.com",
  follow: "https://instagram.com",
};

export const SpeakerGallery = [
  featuredSpeaker,
  {
    id: "Speaker-2",
    name: "Partner Name",
    role: "Gold Sponsor",
    image: PLACEHOLDER_IMAGE,
  },
];
