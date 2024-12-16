import Image from 'next/image';
import {Vortex} from './ui/vortex';
import TypewriterText from './Typewriter';
const Home = () => {

  return (
    <>
      <main id="main" className="container min-height-screen mx-auto px-4 py-4  sm:px-6 md:px-8 md:py-0  md:h-[calc(100vh-6rem)] mt-12 md:mt-6 lg:mt-6">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-6 items-center max-w-5xl mx-auto">
          {/* Image Container */}
          <div className="md:col-start-2 md:row-start-1 flex justify-center md:justify-end">
            <div 
              className="w-[250px] h-[250px] 
                         sm:w-[280px] sm:h-[280px] 
                         md:w-[350px] md:h-[350px] 
                         lg:w-[420px] lg:h-[420px] 
                         rounded-full shadow-md 
                         bg-[url('/sanjeev.jpg')] bg-cover bg-center
                         transition-all duration-300"
            >
              <Image 
                src="https://streak-stats.demolab.com?user=sanjeevshah1&theme=transparent&hide_border=true" 
                className='mt-[420px] invisible md:visible' 
                alt='streak'
                width={500} // Set appropriate dimensions
  height={300} 
                />
            </div>
          </div>
          {/* Text Content */}
          <div className="md:col-start-1 md:row-start-1 flex justify-center md:justify-start mt-6 md:mt-0 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-7 md:p-8 max-w-fit shadow-lg text-center md:text-left md:pr-20" >
              <TypewriterText
                text="Hi! It&apos;s me,"
                className="text-base text-violet-500 sm:text-lg"
                delay={0.4}
              />
              <TypewriterText
                text="Sanjeev Shah"
                className="text-3xl text-white font-bold italic sm:text-3xl md:text-4xl tracking-wider my-2 sm:my-3"
                delay={1.4}
              />
              <TypewriterText
                text="Web Developer & Problem Solver"
                className="text-lg text-violet-500"
                delay={2.4}
              />
              <TypewriterText
                text="Engineer to be"
                className="text-sm text-violet-500 sm:text-base md:text-lg mt-2"
                delay={4.1}
              />
            </div>
          </div>
          {/* Image below Text */}
          <div className="md:col-span-1 mt-[-1rem] row-span-2 flex justify-center md:mt-[-10rem] md:mr-[6rem]">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=sanjeevshah1&layout=compact&theme=tokyonight&langs_count=6"
              alt="Top programming languages"
              className="rounded-lg w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[370px] lg:h-[370px]"
            />
          </div>
        </div>
        </Vortex>
      </main>
    </>
  );
};

export default Home;
