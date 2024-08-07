import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaLinkedin,
  FaSquareGithub,
  FaSquareUpwork,
  FaSquareXTwitter,
} from "react-icons/fa6";


const SocialIcons = () => {
  return (
    <div>
      <div className="flex gap-2 center text-background text-3xl items-center">
        <Link href="https://github.com/AyushScripts" title="Github">
          <FaSquareGithub />
        </Link>
        <Link href="https://linkedin.com/in/ayushb04" title="LinkedIn">
        <FaLinkedin />
        </Link>
        <Link
          href="https://twitter.com/ayushfromindia"
          title="X (formerly Twitter)"
        >
          <FaSquareXTwitter />
        </Link>
        <Link href="https://upwork.com" title="Upwork">
          <FaSquareUpwork />
        </Link>
      </div>
    </div>
  );
};

export default SocialIcons;
