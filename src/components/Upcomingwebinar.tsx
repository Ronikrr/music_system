"use client";

import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Stripe_Logo%2C_revised_2016.svg",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta_Platforms_Inc._logo.svg",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
];

function Upcomingwebinar() {
  return (
    <div className="p-2 lg:p-12 bg-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="uppercase text-base text-teal-600 font-semibold tracking-wide">
            Featured webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl capitalize">
            enhance your musical juourney
          </p>
        </div>
        <div className="mt-10 ">
          <HoverEffect
            items={projects.map((webinr) => ({
              title: webinr.title,
              description: webinr.description,
              link: webinr.link,
              logo: webinr.logo,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/courses"
            className="capitalize px-4 py-3 border border-neutral-500 text-neutral-800 hover:text-white bg-[#f1f1f1] hover:bg-transparent transition duration-300 rounded-lg"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Upcomingwebinar;
