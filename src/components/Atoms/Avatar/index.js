import React from "react";
import Image from "./style";

const Avatar = ({ src = "", alt = "", size = "default" }) => {
  return <Image size={size} src={src} alt={alt} />;
};

export default Avatar;
