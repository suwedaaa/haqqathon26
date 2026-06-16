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
  role: "Founder & CEO @ Kestrl",
  image: "/speakers/areeb-siddiqui.png",
  contact: "mailto:hello@haqqathon.com",
  follow: "https://www.linkedin.com/in/areeb-siddiqui-01b06144/",
};

export const SpeakerGallery: SpeakerProfile[] = [
  featuredSpeaker,
  {
    id: "wajid",
    name: "Dr Wajid Akhter",
    role: "Secretary General @ MCB",
    image: "/speakers/dr_Wajid_Akhter.jpg",
    contact: "mailto:hello@haqqathon.com",
    follow: "https://www.linkedin.com/company/muslimcounciluk/",  
  },
  {
    id: "zaeem",
    name: "Zaeem Shaukat Mirza",
    role: "Founder + Investment Partner @ UMMAH1 Capital",
    image: "/speakers/zaeem_shaukat_mirza.jpg",
    contact: "mailto:hello@haqqathon.com",
    follow: "https://www.linkedin.com/in/zaeemmirza/",  
  },
  {
    id: "monir",
    name: "Monir Mohammed",
    role: "Head of Technology @ NZF",
    image: "/speakers/monir_mohammed.jpg",
    contact: "mailto:hello@haqqathon.com",
    follow: "https://www.linkedin.com/in/mr-monir/",  
  },
];
