import React from "react";
import MembersNavBar from "./MembersNavBar";
import mainvideo from "../../assets/mainvideo.mp4";

export default function MembersMainPage() {
  return (
    <>
      {/* <MembersNavBar></MembersNavBar> */}
      <div className=" relative w-full h-[56.25vw]">
        <video
          className="w-full h-3/5 object-cover brightness-90 mb-16"
          autoPlay
          muted
          loop
          src="https://i.imgur.com/NA835MZ.mp4"
        ></video>
        <div>
          <p>Looking For Your Dream Home?</p>
        </div>
      </div>
    </>
  );
}