import React from "react";
import { cloudinaryAssets } from "../data/cloudinaryAssets";

const AdVideo01 = () => {
  return (
    <section className="!px-4 !py-6 sm:!px-6 sm:!py-10 lg:!px-8">
      <div className="!mx-auto overflow-hidden rounded-[1rem] border border-[var(--line)] bg-white shadow-[0_20px_60px_rgba(16,35,59,0.12)]">
        <div className="relative w-full bg-slate-950 sm:aspect-[21/6]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full object-contain"
          >
            <source src={cloudinaryAssets.video} type="video/mp4" />
            Your browser does not support the video.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/25 via-transparent to-slate-950/35" />
        </div>
      </div>
    </section>
  );
};

export default AdVideo01;
