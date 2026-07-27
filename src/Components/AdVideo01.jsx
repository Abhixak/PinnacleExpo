import React from "react";
import { cloudinaryAssets } from "../data/cloudinaryAssets";

const AdVideo01 = () => {
  return (
    <section className="">
      <div className="!mx-auto overflow-hidden bg-white shadow-[0_20px_60px_rgba(16,35,59,0.12)]">
        {/* Mobile Video: visible on screens below lg breakpoint */}
        <div className="relative block lg:hidden min-h-[165px] sm:min-h-[320px] w-full bg-slate-950">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            src={cloudinaryAssets.mobileVideo}
            
            className="h-full w-full object-contain"
          >
            Your browser does not support the video.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/25 via-transparent to-slate-950/35 pointer-events-none" />
        </div>

        {/* Desktop Video: visible on lg screens and above */}
        <div className="relative hidden lg:block w-full bg-slate-950">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            src={cloudinaryAssets.video}
            className="h-full w-full object-cover"
          >
            Your browser does not support the video.
          </video>
          {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-950/25 via-transparent to-slate-950/35 pointer-events-none" /> */}
        </div>
      </div>
    </section>
  );
};

export default AdVideo01;

