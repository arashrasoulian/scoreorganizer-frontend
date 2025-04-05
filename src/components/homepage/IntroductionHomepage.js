import React, { useState } from "react";
import { Link } from "react-router-dom";
import ZoomInOnScroll from "../ZoomInOnScroll";
const IntroductionHomepage = () => {
  const introductioncircle = [
    {
      title: "Easily upload your PDFs",
      text: "Drag and drop or select your sheet music files to upload. Our platform supports PDF format for quick setup and instant access.",
      image: "images/homepage-circle/upload.png",
    },
    {
      title: "Collaborate and share your scores",
      text: "Invite your friends or fellow musicians to view, download, or edit scores together. Perfect for ensembles, teachers, and creative partnerships.",
      image: "images/homepage-circle/share.png",
    },
    {
      title: "Keep your music library tidy",
      text: "Create folders, tag instruments, filter by composer, and search instantly. Stay organized, whether you’re managing 5 scores or 500.",
      image: "images/homepage-circle/organize2.png",
    },
  ];

  return (
    <div className="">
      <div className="introduction-homepage-title ">
        UPLOAD, SHARE, ORGANIZE & EDIT YOUR SCORES – ALL IN ONE PLACE{" "}
      </div>
      <div className="introduction-homepage-description">
        Easily manage your digital sheet music like never before. On this site,
        you can upload, share, organize, and edit your scores—all from one
        streamlined platform. Whether you're a solo musician, a teacher, or part
        of an ensemble, this tool helps you stay focused, keep your scores
        accessible, and collaborate more effectively.
      </div>
      <div className="row introduction-homepage-circle-container">
        {introductioncircle.map((circle , index) => {
          return (
            <div key={index} className="col-4 mx-0 introduction-hompage-first-circle">
              <img src={`${circle.image}`} alt="cilce-image" />

              <div className="mx-3 mt-2">
                <h5>{circle.title}</h5>
                <p> {circle.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default IntroductionHomepage;
