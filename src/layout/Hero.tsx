import Particles from "../components/Particles";
import Background from "../components/Background";
import { agentName } from "../agentConfig";

type Props = {
  imgSrc: string;
  id: string;
};

export default function Hero({ imgSrc, id }: Props) {
  return (
    <section
      className="relative min-h-dvh flex items-center justify-center"
      id={id}
    >
      <Background imgSrc={imgSrc} />
      <Particles />
      <h1 className="font-semibold text-6xl text-center text-primary-foreground z-50">
        Welcome, <br />
        say hi to <br />
        <span className="text-highlight">{agentName}</span>
      </h1>
    </section>
  );
}
