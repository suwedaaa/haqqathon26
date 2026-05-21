import BubbleParticles from "@/components/BubbleParticles/BubbleParticles";

export default function BubblesTestPage() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(255, 255, 255, 0.5)",
        backgroundColor: "#87CEEB",
      }}
    >
      <BubbleParticles />
    </div>
  );
}
