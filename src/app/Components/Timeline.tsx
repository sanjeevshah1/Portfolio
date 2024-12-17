import Image from "next/image";
import React from "react";
import { TimelineComponent } from "./ui/timeline";

export function Timeline() {
  const data = [
    {
      title: "2021 - Present",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Studying Electronics, Communication and Information Engineering
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/ForTimeline/electronics.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/ForTimeline/programming2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/ForTimeline/communication.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
               src="/ForTimeline/programming.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
        title: "Early 2022",
        content: (
          <div>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
              learned C programming.
            </p>
            <div className="mb-8">
              <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                ✅ C
              </div>
              <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                ✅ C++
              </div>
            </div>
          </div>
        ),
      },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started Learning Web Development
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ HTML
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ CSS
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ JAVASCRIPT
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ GIT
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ NODE JS
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ MYSQL
            </div>
          </div>
            <div className="grid grid-cols-2 gap-4">
            <Image
              src="/ForTimeline/mysql.jpg"
              alt="hero template"
              width={500}
              height={500}
               className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/ForTimeline/html.jpg"
              alt="feature template"
              width={500}
              height={500}
               className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Learned more about Web Development
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ REACT
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ TYPESCRIPT
            </div>
           
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ FRAMER MOTION
            </div>
            
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ EXPRESS JS
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ NEXT JS
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ TAILWIND CSS
            </div>
            
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/ForTimeline/javascript.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-[450px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/ForTimeline/types.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-[450px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full overflow-y-hidden" id="journey">
      <TimelineComponent data={data} />
    </div>
  );
}
