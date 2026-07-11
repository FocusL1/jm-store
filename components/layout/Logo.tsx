"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-4"
    >
      <Image
        src="/images/logos/jm-store-logo.png"
        alt="JM-STORE"
        width={90}
        height={90}
        priority
        style={{
          width: "90px",
          height: "auto",
        }}
      />

      <div>
        <h1 className="text-yellow-300 text-3xl font-extrabold">
          JM-STORE
        </h1>

        <p className="text-gray-400 text-base">
          Tecnología • Videojuegos • Hogar
        </p>
      </div>
    </Link>
  );
}