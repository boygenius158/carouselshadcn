import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="relative border-2 border-blue-300 w-1/2 h-1/2 flex items-center justify-center overflow-hidden">
        <Carousel className="relative w-full h-full">
          <CarouselContent className="flex w-full h-full items-center  ">
            <CarouselItem className="shrink-0 w-full h-full flex items-center justify-center">
              <Image
                src="https://i.pinimg.com/736x/47/e4/89/47e48930e43f84b377df7ef5f1bbb77e.jpg"
                alt="helloworld"
                height={250}
                width={250}
              />
            </CarouselItem>
            <CarouselItem className="shrink-0 w-full h-full flex items-center justify-center">
              <Image
                src="https://i.pinimg.com/736x/fb/12/01/fb1201e5b8c27b5acffad64fadee28b8.jpg"
                alt="helloworld"
                height={250}
                width={250}
              />
            </CarouselItem>
            <CarouselItem className="shrink-0 w-full h-full flex items-center justify-center">
              <Image
                src="https://i.pinimg.com/564x/5b/c1/48/5bc14846e751ea08be7ba3cd88d194e5.jpg"
                alt="helloworld"
                height={250}
                width={250}
              />
            </CarouselItem>
            <CarouselItem className="shrink-0 w-full h-full flex items-center justify-center">
              <Image
                src="https://i.pinimg.com/564x/ab/26/f5/ab26f52085a55e83301ed46e202bbd56.jpg"
                alt="helloworld"
                height={250}
                width={250}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </main>
  );
}
