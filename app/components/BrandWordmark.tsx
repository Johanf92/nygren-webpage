import Image from "next/image";

type BrandWordmarkProps = {
  className?: string;
  light?: boolean;
};

export default function BrandWordmark({ className = "", light = false }: BrandWordmarkProps) {
  return (
    <span className={`relative block h-7 w-32 shrink-0 min-[360px]:w-36 sm:h-10 sm:w-52 ${light ? "brightness-0 invert" : ""} ${className}`}>
      <Image
        src="/images/logo-full.webp"
        alt="Nygren Massasje"
        fill
        sizes="(min-width: 640px) 208px, (min-width: 360px) 144px, 128px"
        className="object-contain object-left"
      />
    </span>
  );
}
