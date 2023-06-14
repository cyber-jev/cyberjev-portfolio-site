import React from "react";

type ContactLink = {
  id: number;
  title: string;
  icon: string;
  url: string;
};

type ContactLinksProps = {
  links: ContactLink[];
};

const Link: React.FC<{ link: ContactLink }> = ({ link }) => {
  const { id, title, icon, url } = link;
  return (
    <li className="animate-bounce">
      <a href={url} target="_blank">
        <img
          src={icon}
          alt={title}
          className="max-w-sm hover:scale-150 transition-transform "
        />
      </a>
    </li>
  );
};

const ContactLinks: React.FC<ContactLinksProps> = ({ links }) => {
  return (
    <div className="text-center md:flex md:justify-between md:items-center md:mt-2">
      <h1 className="py-3 md:text-2xl">
        <span className="text-accent">@</span>cyber_jev
      </h1>
      <ul className="flex justify-center gap-6 ">
        {links.map((link) => (
          <Link key={link.id} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default ContactLinks;
