import React from "react";
import { Line } from "./btn.component";
import ContactForm from "./contact-form.component";
import ContactLinks from "./contact-links.component";
import { contactLinks, images } from "../utils/data.utils";

const Footer: React.FC = () => {
  return (
    <div className="bg-body2 py-7 relative">
      <div className="max-w-[1200px] m-auto">
        <img
          src={images.patterRings}
          alt="rings"
          className="absolute -left-48 top-80 opacity-70"
        />
        <ContactForm />
        <div className="mt-28 p-2.5">
          <Line />
          <ContactLinks links={contactLinks} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
