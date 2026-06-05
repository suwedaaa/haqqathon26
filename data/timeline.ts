export type TimelineEntry = {
  time: string;
  title: string;
  description: string;
  icon: string;
};

export const timelineDay1: TimelineEntry[] = [
  {
    time: "9:00 - 10:00",
    title: "Registration & Breakfast",
    description: "Check in, grab breakfast, and meet fellow hackers.",
    icon: "/timeline-registration.png",
  },
  {
    time: "10:00 - 11:00",
    title: "Opening Ceremony",
    description: "Welcome talks, Event overview and Problem Statements.",
    icon: "/timeline-opening-ceremony.png",
  },
  {
    time: "11:00",
    title: "Hacking Begins",
    description: "Start building your project!",
    icon: "/timeline-hacking-begins.png",
  },
  {
    time: "13:00 - 14:00",
    title: "Lunch",
    description: "Refuel and recharge.",
    icon: "/timeline-lunch.png",
  },
  {
    time: "14:30 - 16:00",
    title: "Workshop Slots",
    description: "Optional sessions and skill-building.",
    icon: "/timeline-mentor-sessions.png",
  },
  {
    time: "17:00",
    title: "Dinner",
    description: "Evening meal before the final push.",
    icon: "/timeline-dinner.png",
  },
];

export const timelineDay2: TimelineEntry[] = [
  {
    time: "10:00",
    title: "Breakfast & Morning Snacks",
    description: "Back at it!",
    icon: "/timeline-registration.png",
  },
  {
    time: "12:00 - 13:00",
    title: "Lunch",
    description: "Midday break.",
    icon: "/timeline-lunch.png",
  },
  {
    time: "13:00",
    title: "Submission Deadline",
    description: "Projects must be submitted on time.",
    icon: "/timeline-hacking-begins.png",
  },
  {
    time: "13:00 - 15:30",
    title: "First Round of Judging",
    description: "Present to judges and the community.",
    icon: "/timeline-team-formation.png",
  },
  {
    time: "15:30 - 16:00",
    title: "Final Round of Judging",
    description: "For those who made it to the final round.",
    icon: "/timeline-opening-ceremony.png",
  },
  {
    time: "16:15 - 16:45",
    title: "Awards & Closing",
    description: "Celebrating winners and networking.",
    icon: "/blue-star.png",
  },
];
