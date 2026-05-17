export type TimelineEntry = {
  time: string;
  title: string;
  description: string;
  icon: string;
};

export const timelineDay1: TimelineEntry[] = [
  {
    time: "9:00",
    title: "Registration & Breakfast",
    description: "Check in, grab breakfast, and meet fellow hackers.",
    icon: "/timeline-registration.png",
  },
  {
    time: "9:45",
    title: "Opening Ceremony",
    description: "Welcome talks and an overview of the weekend.",
    icon: "/timeline-opening-ceremony.png",
  },
  {
    time: "10:30",
    title: "Team Formation",
    description: "Find teammates or solidify your squad.",
    icon: "/timeline-team-formation.png",
  },
  {
    time: "11:00",
    title: "Hacking Begins",
    description: "Start building — mentors are on hand.",
    icon: "/timeline-hacking-begins.png",
  },
  {
    time: "13:00",
    title: "Lunch",
    description: "Refuel and recharge.",
    icon: "/timeline-lunch.png",
  },
  {
    time: "14:00",
    title: "Mentor Sessions",
    description: "Drop-in advice from industry mentors.",
    icon: "/timeline-mentor-sessions.png",
  },
  {
    time: "17:30",
    title: "Dinner",
    description: "Evening meal before the final push.",
    icon: "/timeline-dinner.png",
  },
  {
    time: "18:30",
    title: "Workshop Block",
    description: "Optional sessions and skill-building.",
    icon: "/blue-star.png",
  },
];

export const timelineDay2: TimelineEntry[] = [
  {
    time: "9:00",
    title: "Breakfast & Stand-up",
    description: "Morning sync and last-day planning.",
    icon: "/timeline-registration.png",
  },
  {
    time: "10:00",
    title: "Hacking Continues",
    description: "Polish features and prepare your demo.",
    icon: "/timeline-hacking-begins.png",
  },
  {
    time: "12:00",
    title: "Lunch",
    description: "Midday break.",
    icon: "/timeline-lunch.png",
  },
  {
    time: "14:00",
    title: "Submission Deadline",
    description: "Projects must be submitted on time.",
    icon: "/timeline-team-formation.png",
  },
  {
    time: "15:00",
    title: "Demos & Judging",
    description: "Present to judges and the community.",
    icon: "/timeline-opening-ceremony.png",
  },
  {
    time: "17:00",
    title: "Awards & Closing",
    description: "Celebrate winners and wrap up.",
    icon: "/blue-star.png",
  },
];
