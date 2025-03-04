import Image from "next/image";
import HoverImage from "../HoverImage";

const RecentProject = () => {
  return (
    <div className="bg-bgDeep mb-20 rounded-lg px-4 py-12">
      <h2 className="mb-12 text-center text-[1.5rem] font-bold text-white md:text-[1.8rem]">
        Recent Projects
      </h2>

      {/* First Image Group */}
      <div className="mb-8 flex h-[250px] w-full gap-4 p-2 sm:h-[300px] md:h-[400px] lg:h-[500px]">
        {/* Left Column - Two Images */}
        <div className="full flex w-1/3 flex-col gap-4">
          <HoverImage
            src="/images/about/img5.png"
            alt="Project Image 1"
            className="h-full w-full"
            text="Weddings and Events"
          />
          <HoverImage
            src="/images/about/img4.png"
            alt="Project Image 2"
            className="h-full w-full"
            text="Weddings and Events"
          />
        </div>

        {/* Right Column - Single Image */}
        <HoverImage
          src="/images/about/img6.png"
          alt="Project Image 3"
          className="flex-1"
          text="Weddings and Events"
        />
      </div>

      {/* Second Image Group (Reversed) */}
      <div className="flex h-[250px] flex-row-reverse gap-4 p-2 sm:h-[300px] md:h-[400px] lg:h-[500px]">
        {/* Left Column - Two Images */}
        <div className="flex w-1/3 flex-col gap-4">
          <HoverImage
            src="/images/about/img3.png"
            alt="Project Image 4"
            className="h-full w-full"
            text="Weddings and Events"
          />
          <HoverImage
            src="/images/about/img2.png"
            alt="Project Image 5"
            className="h-full w-full"
            text="Weddings and Events"
          />
        </div>

        {/* Right Column - Single Image */}
        <HoverImage
          src="/images/about/img1.png"
          alt="Project Image 6"
          className="flex-1"
          text="Weddings and Events"
        />
      </div>
    </div>
  );
};

// Reusable Image Component with Hover Effect

export default RecentProject;
