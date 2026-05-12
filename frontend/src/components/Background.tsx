type Props = {
  imgSrc: string;
};

export default function Background({ imgSrc }: Props) {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={imgSrc}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="z-50 absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
    </>
  );
}
