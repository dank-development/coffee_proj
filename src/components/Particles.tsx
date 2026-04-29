const createParticles = (number: number) => {
  return Array.from({ length: number }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${15 + Math.floor(Math.random() * 20)}s`,
    delay: `${Math.floor(Math.random() * 5)}s`,
    scale: 1 + Math.random() * 0.33,
    opacity: 0.5 + Math.random() * 0.5,
  }));
};

export default function Particles({ number = 30 }) {
  const particles = createParticles(number);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full h-1.5 w-1.5 bg-highlight"
          style={{
            opacity: particle.opacity,
            backgroundColor: "var(--color-highlight)",
            left: particle.left,
            top: particle.top,
            animation: `slow-drift ${particle.duration} ease-in-out ${particle.delay} infinite`,
            scale: particle.scale,
          }}
        ></div>
      ))}
    </div>
  );
}
