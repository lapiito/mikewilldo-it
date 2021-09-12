import Image from "next/image";
import React from "react";
import ContactButtons from "./ContactButtons";

const Contact = () => {
  return (
    <div
      id="contact"
      className="mx-auto mt-20 flex flex-col items-center w-screen justify-center"
    >
      <div className="flex items-center flex-wrap mx-auto space-x-10 mt-10 ml-5 md:ml-10">
        <div className="relative h-1 w-24 md:w-60  md:ml-40 ml-0">
          <Image src="/line.svg" alt="line" layout="fill" />
        </div>
        <h2 className="text-text text-xl md:text-4xl">Get in Touch</h2>
        <div className="relative h-1 w-24 md:w-60">
          <Image src="/line.svg" alt="line" layout="fill" />
        </div>
      </div>

      <div className="flex items-center flex-wrap mx-auto space-x-10 mt-10 ml-10">
        <ContactButtons
          name="GitHub"
          icon="github.svg"
          link="https://github.com/avneesh0612"
        />
        <ContactButtons
          name="Instagram"
          icon="instagram.svg"
          link="https://instagram.com/avneesh.codes"
        />
        <ContactButtons
          name="Email ID"
          icon="mail.svg"
          link="mailto:avneeshagarwal0612@gmail.com"
        />
        <ContactButtons
          name="LinkedIn"
          icon="linkedin.svg"
          link="https://www.linkedin.com/in/avneesh-agarwal-78312b20a/"
        />{" "}
        <ContactButtons
          name="Twitter"
          icon="twitter.svg"
          link="https://www.linkedin.com/in/avneesh-agarwal-78312b20a/"
        />
        <ContactButtons
          name="Hashnode"
          icon="hashnode.svg"
          link="https://avneesh0612.hashnode.dev/"
        />
      </div>
    </div>
  );
};

export default Contact;
