import Image from "next/image";
import { figtree, brunoAce } from "../app/font";

export default function Hero() {
  return (
    <>
      {/* Mobile Version (shows on screens < 768px) */}
      <section className="relative w-full h-[713px] bg-[#090707] overflow-hidden md:hidden">
        {/* Background gradient */}
        <div className="absolute h-[600px] left-[25px] right-[-232px] top-[-10px] bg-gradient-to-b from-[#090707] to-transparent via-[#090707] via-[58.11%] z-0"></div>

        {/* Headshot image */}
        <div className="absolute h-[502px] left-[60px] right-[-197px] top-[46.5px]">
          <Image
            src="/assets/headshot.png"
            alt="Headshot"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* "HEY" Text */}
        <h1
          className={`absolute w-[184px] left-[calc(50%-92px-84.5px)] top-[149px] text-[100px] leading-[120px] tracking-[-0.06em] text-white font-medium ${figtree.className}`}
        >
          HEY
        </h1>

        {/* "IAM" Text */}
        <h2
          className={`absolute w-[182px] left-[20px] top-[243px] text-[100px] leading-[120px] text-white font-medium ${figtree.className}`}
        >
          IAM
        </h2>

        {/* Logo - using the same logoiaj.png */}
        <div className="absolute left-[30px] top-[337px] w-[120px] h-[120px]">
          <Image
            src="/assets/logoiaj.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Tablet Version (768px-1024px) */}
      <section className="hidden md:block lg:hidden relative w-full h-[800px] bg-[#090707] overflow-hidden">
        {/* Background gradient */}
        <div className="absolute top-0 left-0 right-0 h-[700px] bg-gradient-to-b from-[#090707] to-transparent via-[#090707] via-[58.11%] z-0"></div>

        {/* Headshot image */}
        <div className="absolute top-20 left-0 right-0 h-[600px]">
          <Image
            src="/assets/headshot.png"
            alt="Headshot"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* "HOLA" Text */}
        <h1
          className={`absolute top-[250px] left-1/2 -translate-x-1/2 text-[200px] leading-[240px] tracking-[0.15em] text-white font-bold ${figtree.className}`}
        >
          HOLA
        </h1>

        {/* "IAM" and Logo */}
        <div className="absolute top-[500px] left-1/2 -translate-x-1/2 flex items-center gap-6">
          <h2
            className={`text-white text-[200px] leading-[240px] tracking-[0.1em] font-bold ${figtree.className}`}
          >
            IAM
          </h2>
          <div className="w-[150px] h-[126px] relative">
            <Image
              src="/assets/logoiaj.png"
              alt="Logo"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Text labels */}
        <div className={brunoAce.className}>
          <span className="absolute top-[490px] left-[50px] text-[#A4A4A4] text-[18px] leading-[22px] tracking-[-0.05em]">
            PRODUCT DESIGNER
          </span>
          <span className="absolute top-[490px] right-[50px] text-[#A4A4A4] text-[18px] leading-[22px] tracking-[-0.05em]">
            LAWAL JIMOH
          </span>
        </div>
      </section>

      {/* Desktop Version (1024px and up) - EXACTLY AS ORIGINAL */}
      <section className="hidden lg:block relative w-full h-[1024px] bg-[#090707] overflow-hidden">
        {/* Background gradient */}
        <div className="absolute top-[-103px] left-[148px] right-[92px] h-[1200px] bg-gradient-to-b from-[#090707] to-transparent via-[#090707] via-[58.11%] z-0"></div>

        {/* Headshot image */}
        <div className="absolute top-10 left-[218px] right-[162px] h-[1004px]">
          <Image
            src="/assets/headshot.png"
            alt="Headshot"
            width={1024}
            height={990}
            className="object-contain w-full h-full"
            priority
          />
        </div>

        {/* "HOLA" Text */}
        <h1
          className={`absolute top-[381px] left-1/2 -translate-x-1/2 w-[916px] text-[280px] leading-[336px] tracking-[0.15em] text-white font-extrabold ${figtree.className}`}
        >
          HOLA
        </h1>

        {/* "IAM" and Logo */}
        <div className="absolute top-[664px] left-1/2 -translate-x-1/2 flex items-center gap-6 w-[907px]">
          <h2
            className={`text-white text-[280px] leading-[336px] tracking-[0.1em] font-extrabold ${figtree.className}`}
          >
            IAM
          </h2>
          <Image
            src="/assets/logoiaj.png"
            alt="Logo"
            width={233}
            height={196}
            className="drop-shadow-[0_4.9px_4.9px_rgba(0,0,0,0.25)] py-6"
          />
        </div>

        {/* Text labels */}
        <div className={brunoAce.className}>
          <span className="absolute top-[655px] left-[216px] text-[#A4A4A4] text-[24px] leading-[29px] tracking-[-0.05em]">
            PRODUCT DESIGNER
          </span>
          <span className="absolute top-[655px] left-[907px] text-[#A4A4A4] text-[24px] leading-[29px] tracking-[-0.05em]">
            LAWAL JIMOH
          </span>
        </div>
      </section>
    </>
  );
}
