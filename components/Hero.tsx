import Image from "next/image";
import { figtree, brunoAce } from "../app/font";

export default function Hero() {
  return (
    <>
      {/* Mobile Version (shows on screens < 768px) */}
      <section className="relative w-full h-screen max-h-[713px] overflow-hidden md:hidden">
        {/* Background gradient */}
        <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-[#090707] to-transparent via-[#090707] via-[58.11%] z-0"></div>

        {/* Headshot image */}
        <div className="absolute inset-x-0 top-[46.5px] h-[502px] px-[60px]">
          <Image
            src="/assets/headshot.png"
            alt="Headshot"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Text content */}
        <div className="relative h-full container mx-auto px-5">
          <h1
            className={`absolute top-[149px] text-[100px] leading-[120px] tracking-[-0.06em] text-white font-medium ${figtree.className}`}
          >
            HEY
          </h1>

          <h2
            className={`absolute top-[243px] text-[100px] leading-[120px] text-white font-medium ${figtree.className}`}
          >
            IAM
          </h2>

          <div className="absolute top-[337px] w-[120px] h-[120px]">
            <Image
              src="/assets/logoiaj.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Tablet Version (768px-1024px) */}
      <section className="hidden md:block lg:hidden relative w-full h-screen max-h-[800px] bg-[#090707] overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 h-[700px] bg-gradient-to-b from-[#090707] to-transparent via-[#090707] via-[58.11%] z-0"></div>

        {/* Headshot image */}
        <div className="absolute inset-0 top-20 h-[600px]">
          <Image
            src="/assets/headshot.png"
            alt="Headshot"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Text content */}
        <div className="relative h-full container mx-auto px-10">
          <h1
            className={`absolute top-1/4 left-1/2 -translate-x-1/2 text-[200px] leading-[240px] tracking-[0.15em] text-white font-bold ${figtree.className}`}
          >
            HOLA
          </h1>

          <div className="absolute top-[62%] left-1/2 -translate-x-1/2 flex items-center gap-6">
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

          <div className={brunoAce.className}>
            <span className="absolute top-[61%] left-[50px] text-[#A4A4A4] text-[18px] leading-[22px] tracking-[-0.05em]">
              PRODUCT DESIGNER
            </span>
            <span className="absolute top-[61%] right-[50px] text-[#A4A4A4] text-[18px] leading-[22px] tracking-[-0.05em]">
              LAWAL JIMOH
            </span>
          </div>
        </div>
      </section>

      {/* Desktop Version (1024px and up) - Fixed issues */}
      <section className="hidden lg:block relative w-full h-[1024px] bg-[#090707] overflow-hidden">
        {/* Background gradient - fixed positioning */}
        <div
          className="absolute top-[-103px] h-[1200px] bg-gradient-to-b from-[#090707] to-transparent via-[#090707] via-[58.11%] z-0"
          style={{
            left: "10.28%", // 148px/1440px
            right: "6.39%", // 92px/1440px
          }}
        ></div>

        {/* Headshot image - fixed positioning with proper image display */}
        <div className="absolute top-[10px] h-[990px] w-[calc(100%-218px-162px)] left-[218px]">
          <Image
            src="/assets/headshot.png"
            alt="Headshot"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Text content container */}
        <div className="relative h-full w-full max-w-[1440px] mx-auto">
          {/* "HOLA" Text - fixed positioning */}
          <h1
            className={`absolute text-[280px] leading-[336px] tracking-[0.15em] text-white font-extrabold ${figtree.className}`}
            style={{
              top: "381px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "916px",
            }}
          >
            HOLA
          </h1>

          {/* "IAM" and Logo - fixed positioning */}
          <div
            className="absolute flex items-center gap-6"
            style={{
              top: "664px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "907px",
            }}
          >
            <h2
              className={`text-white text-[280px] leading-[336px] tracking-[0.1em] font-extrabold ${figtree.className}`}
            >
              IAM
            </h2>
            <div className="relative w-[233px] h-[196px]">
              <Image
                src="/assets/logoiaj.png"
                alt="Logo"
                fill
                className="object-contain drop-shadow-[0_4.9px_4.9px_rgba(0,0,0,0.25)] py-6"
              />
            </div>
          </div>

          {/* Text labels - properly positioned on opposite sides */}
          <div className={brunoAce.className}>
            <span
              className="absolute text-[#A4A4A4] text-[24px] leading-[29px] tracking-[-0.05em]"
              style={{
                top: "655px",
                left: "216px",
              }}
            >
              PRODUCT DESIGNER
            </span>
            <span
              className="absolute text-[#A4A4A4] text-[24px] leading-[29px] tracking-[-0.05em]"
              style={{
                top: "655px",
                right: "216px",
              }}
            >
              LAWAL JIMOH
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
