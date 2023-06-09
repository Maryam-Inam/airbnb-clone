import React from "react";
import Image from "next/image";
function Lcard(props) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px] scrollbar-hide p-3 -ml-3">
        <Image
          src={props.img}
          alt="lcard"
          fill
          className="rounded-2xl"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{props.title}</h3>
        <p>{props.description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {props.buttonText}
        </button>
      </div>
    </section>
  );
}

export default Lcard;
