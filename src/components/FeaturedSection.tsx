// "use client";

// import courseData from "@/data/music_courses.json";
// import { p } from "motion/react-client";
// import Link from "next/link";
// import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
// // import Link from "next/link";
// interface Course {
//   id: Number;
//   title: string;
//   slug: string;
//   description: string;
//   price: Number;
//   instructor: string;
//   isFeatured: boolean;
// }
// function FeaturedSection() {
//      const featuredcourses = courseData.courses.filter((course:Course) => course.isFeatured);
//   return (
//     <div className="py-12 bg-gray-900">
//       <div className="">
//         <div className="text-center">
//           <h2 className="uppercase text-base text-teal-600 font-semibold tracking-wide">
//             featured courses
//           </h2>
//           <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
//             Learn With the Best
//           </p>
//         </div>
//       </div>
//       <div className="mt-10">
//         <div
//           className="grid grid-cols-1
//               md:grid-cols-2
//               lg:grid-cols-3 gap-8 justify-center"
//         >
//           {featuredcourses.map((course: Course) => (
//             <div key={course.id} className="flex justify-center">
//               <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
//                 <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
//                   <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark text-neutral-200" >{course.title}</p>
//                   <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow" >{course.description}</p>
//                   <Link
//                     className="capitalize px-4 py-2 border border-neutral-500 text-neutral-800 hover:text-white bg-[#f1f1f1] hover:bg-transparent transition duration-300 rounded-lg  mt-4"
//                     href={`/courses/${course.slug}`}
//                   >
//                     Learn more
//                   </Link>
//                 </div>
//               </BackgroundGradient>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="mt-20 text-center">
//         <Link
//           href={"/courses"}
//           className="capitalize px-4 py-3 border border-neutral-500 text-neutral-800 hover:text-white bg-[#f1f1f1] hover:bg-transparent transition duration-300 rounded-lg "
//         >
//           view all courses
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default FeaturedSection;

"use client";

import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedSection() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="uppercase text-base text-teal-600 font-semibold tracking-wide">
          Featured Courses
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {featuredCourses.map(({ id, title, slug, description }: Course) => (
          <div key={id} className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  {description}
                </p>
                <Link
                  href={`/courses/${slug}`}
                  className="capitalize px-4 py-2 border border-neutral-500 text-neutral-800 hover:text-white bg-[#f1f1f1] hover:bg-transparent transition duration-300 rounded-lg mt-4"
                >
                  Learn more
                </Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Link
          href="/courses"
          className="capitalize px-4 py-3 border border-neutral-500 text-neutral-800 hover:text-white bg-[#f1f1f1] hover:bg-transparent transition duration-300 rounded-lg"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedSection;
