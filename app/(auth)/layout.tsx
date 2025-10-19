import Lights from "@/components/light";
import { ImageSlider } from "@/components/slider";
import ThemeToggle from "@/components/ThemeToggle";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const images = ["/images/dash-nova.png", "/images/dash2-nova.png"];

  return (
    <div className="min-h-screen min-w-screen relative flex justify-center items-center">
      <div className="z-20 fixed top-0 container mx-auto flex justify-between items-center py-3">
        <div className="flex gap-2 items-center ">
          <Image
            src={"/logo.png"}
            width={18}
            height={18}
            alt="Logo"
            className="w-12 h-10"
          />
          <div className="flex flex-col items-center justify-center select-none">
            {/* Logo Text */}
            <h1
              className="relative text-xl font-extrabold tracking-tight
             
            
               transition-all duration-700 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(147,51,234,0.4)]"
            >
              NL<span>~</span>NOVA
            </h1>

            {/* Animated Underline */}
            <div className="relative w-12 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-[shine_2s_linear_infinite]" />
            </div>
          </div>
        </div>{" "}
        <div className="">
          <ThemeToggle />
        </div>
      </div>

      <Lights>
        <Card className="min-w-5xl z-30 ">
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 py-5">
            <div className="relative hidden md:block w-full min-h-[200px] h-full">
              <ImageSlider images={images} />{" "}
            </div>
            {children}
          </CardContent>
        </Card>
      </Lights>
    </div>
  );
}
