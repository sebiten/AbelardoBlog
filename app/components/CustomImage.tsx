import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: string;
};

export default function CustomImage({ src, alt, priority }: Props) {
  const prty = priority ? true : false;

  return (
    <div className="w-full h-full">
      <Image
        width={1920}
        height={1080}
        src={src}
        alt={alt}
        quality={100}
        priority={prty}
        className="object-cover w-full rounded-lg"
      />
    </div>
  );
}
