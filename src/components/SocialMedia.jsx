import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/DealWithMuhammad" target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <a
        href="https://www.instagram.com/jugnooisschizophrenic/"
        target="_blank"
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
