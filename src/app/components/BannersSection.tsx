import React from "react";
import { ADVERTISEMENTS } from "../../../data/addsData";
import BannerImageComp from "./BannerImageComp";
import { Banner } from "../../../data/addsData";
import { truncate } from "fs";

export default function BannersSection(): JSX.Element {
  return (
    <main className="flex flex-row flex-wrap align-middle gap-4 pb-20 justify-center">
      {ADVERTISEMENTS.map((banner: Banner) => (
        <BannerImageComp
          key={banner.id}
          banner={{ ...banner }}
          showEdit={true}
        />
      ))}
    </main>
  );
}
