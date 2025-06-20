"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const TimelineComponent = React.memo(
  ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    const updateHeight = useCallback(() => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    }, []);

    useEffect(() => {
      updateHeight();

      const resizeObserver = new ResizeObserver(updateHeight);
      if (ref.current) {
        resizeObserver.observe(ref.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, [updateHeight]);

    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    const timelineItems = useMemo(
      () =>
        data.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        )),
      [data]
    );

    const animatedLineStyle = useMemo(
      () => ({
        height: heightTransform,
        opacity: opacityTransform,
      }),
      [heightTransform, opacityTransform]
    );

    const staticLineStyle = useMemo(
      () => ({
        height: height + "px",
      }),
      [height]
    );

    return (
      <div
        className="w-full px-4 font-sans md:px-10 bg-gradient-to-br from-black via-gray-800"
        ref={containerRef}
      >
        <div className="max-w-7xl mx-auto pt-20 pb-0 px-4 md:px-8 lg:px-10">
          <h2 className="text-2xl font-josefinSlab md:text-6xl text-purple-500 hover:text-purple-600">
            My journey.
          </h2>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {timelineItems}
          <div
            style={staticLineStyle}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={animatedLineStyle}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    );
  }
);

// Separate component for timeline items to prevent unnecessary re-renders
const TimelineItem = React.memo(
  ({ item }: { item: TimelineEntry; index: number }) => (
    <div className="flex justify-start pt-10 md:pt-40 md:gap-10">
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
        </div>
        <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-josefinSlab text-neutral-200">
          {item.title}
        </h3>
      </div>

      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-200">
          {item.title}
        </h3>
        {item.content}
      </div>
    </div>
  )
);

TimelineComponent.displayName = "TimelineComponent";
TimelineItem.displayName = "TimelineItem";
