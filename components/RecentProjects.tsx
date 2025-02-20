"use client";
import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaArrowUp, FaGithub, FaLocationArrow } from "react-icons/fa";
import { Farro } from "next/font/google";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20 min-h-screen">
      <h1 className="text-center font-extrabold text-[32px] md:text-2xl lg:text-4xl">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-12 gap-y-8 mt-5">
        {projects.map(({ id, title, des, img, iconLists, link,link1 }) => (
          <div key={id} className="w-full sm:w-[30rem]">
            <CardContainer className="inter-var">
              <CardBody className="relative group/card dark:hover:shadow-xl dark:hover:shadow-emerald-500/[0.1] dark:border-blue-950/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 md:p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {des}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={img}
                    height="1000"
                    width="1000"
                    className="h-40 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-10 md:mt-20">
                  <CardItem>
                    <div className="flex items-start mt-5 md:mt-7 mb-3">
                      <div className="flex items-center">
                        {iconLists.map((icon, index) => (
                          <div
                            key={icon}
                            className="border border-white/[0.2] rounded-full bg-black w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${5 * index * 2}px)`,
                            }}
                          >
                            <img src={icon} alt={icon} className="p-1 md:p-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardItem>

                    {!link1 &&(<CardItem
                    translateZ={20}
                    as={Link}
                    href={link}
                    target="__blank"
                    className="px-3 py-1 md:px-4 md:py-2 mt-5 md:mt-7 mb-3 cursor-pointer rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                   Repo Link
                  </CardItem>)
                }
                                     
                  {link1 &&  
                (<div className="flex gap-1">
                  
                  <CardItem
                    translateZ={80}
                    as={Link}
                    href={link}
                    target="__blank"
                    className="cursor-pointer px-3 py-1 md:px-4 md:py-2 mt-5 md:mt-7 mb-3 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <FaGithub className="size-4 "/>
                  </CardItem>

                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={link1}
                    target="__blank"
                    className="px-3 py-1 md:px-4 md:py-2 mt-5 md:mt-7 mb-3 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                   <div className="flex gap-1"> Live Link
                          <FaLocationArrow className="fill-blue-600"/></div>
                  </CardItem>
                      </div>)
                  }
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecentProjects;
