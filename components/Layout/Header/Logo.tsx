import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <Link href="/">
      <div>
        <Image src="/assets/logo.svg" width={154} height={28} alt="logo" />
      </div>
    </Link>
  );
};

export default Logo;
