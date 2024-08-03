"use client";
import React, { useState } from "react";
import { GoPencil } from "react-icons/go";
import Image from "next/image";
import { StaticImageData } from "next/image";
import EditBannerTemplateBs from "./EditBannerTemplateBs";

interface Banner {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  image: StaticImageData | { src: string; width: number; height: number };
  author: string;
  platform: string;
}

interface BannerProps {
  banner: Banner;
  showEdit: Boolean;
}

export default function BannerImageComp({
  banner,
  showEdit,
}: BannerProps): JSX.Element {
  const [bannerObj, setBannerObj] = useState<Banner>(banner);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClose() {
    setIsOpen(false);
  }

  function handleOpen() {
    setIsOpen(true);
  }

  function setBannerChange() {
    setBannerObj(bannerObj);
  }

  return (
    <div
      className="bg-center min-w-72 bg-no-repeat rounded-lg p-4 flex flex-row justify-between items-center relative"
      style={{
        backgroundImage: "url('/square-four.png')",
        backgroundSize: "100% 100%",
        aspectRatio: "5 / 4",
        width: showEdit ? "40%" : "70%",
        height: "auto",
      }}
    >
      {showEdit && (
        <div onClick={handleOpen} style={{ cursor: "pointer" }}>
          <GoPencil className="absolute right-4 top-4 text-3xl text-slate-700" />
        </div>
      )}
      <EditBannerTemplateBs
        isOpen={isOpen}
        onClose={handleClose}
        bannerObj={showEdit ? bannerObj : banner}
        setBannerObj={setBannerObj}
      />
      <div className="w-[45%] gap-4">
        <h1 className="lg:text-4xl md:text-xl sm:text-sm w-fit lg:mt-[10%] font-extrabold">
          {showEdit ? bannerObj.title : banner.title}
        </h1>
        <p className="mt-[15%] w-fit text-md">
          {showEdit ? bannerObj.description : banner.description}
        </p>
        <button className="py-1 lg:px-10 lg:text-md sm:text-sm sm:font-bold lg:font-extrabold mt-[49.3%] bg-amber-200">
          <a href={showEdit ? "https://groweasy.ai/" : "#"}>
            {showEdit ? bannerObj.buttonText : banner.buttonText}
          </a>
        </button>
      </div>

      <Image
        src={showEdit ? bannerObj.image : banner.image}
        alt={showEdit ? bannerObj.title : banner.title}
        className="rounded-t-full w-[49%] h-[80%]"
      />
    </div>
  );
}
