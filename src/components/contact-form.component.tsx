import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Line } from "./btn.component";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("https://formspree.io/f/xgebbyvq", data);
      reset();
      alert("I got your message, Thanks 🙌");
    } catch (error) {
      console.error("Error sending message:", error);
      alert(
        //"An error occurred while sending the message. Please try again later."
        "Please input a valid email address"
      );
    }
  };

  return (
    <section>
      <div
        className="p-2.5 pt-7 max-w-[1200px] lg:grid  lg:grid-cols-2 m-auto "
        id="contact-me"
      >
        <div className="text-center lg:text-left">
          <h2 className="text-5xl font-bold lg:text-6xl">Contact</h2>
          <p className="py-4 text-sm font-medium text-text2 max-w-[40ch] text-center m-auto lg:text-lg lg:text-left lg:m-0 lg:pt-9">
            I would like to hear your exciting projects or get feedback from
            you. Please fill the form and I'll get back to you asap!
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:max-w-[500px] lg:w-full  m-auto"
        >
          <div className="m-4">
            {/* <label htmlFor="name">Name:</label> */}
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="bg-inherit outline-none w-[90%]"
              placeholder="NAME"
            />
            {errors.name && <span className="text-red-600 pl-1"> *</span>}
          </div>
          <Line />
          <div className="m-4">
            {/* <label htmlFor="email">Email:</label> */}
            <input
              type="email"
              id="email"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              className="bg-inherit outline-none w-[90%]"
              placeholder="EMAIL"
            />
            {errors.name && <span className="text-red-600 pl-1"> *</span>}
          </div>
          <Line />
          <div className="m-4">
            {/* <label htmlFor="message">Message:</label> */}
            <textarea
              id="message"
              {...register("message", { required: true })}
              className="bg-inherit outline-none w-[90%]"
              placeholder="MESSAGE"
            />
            {errors.name && <span className="text-red-600 pl-1"> *</span>}
          </div>
          <Line />
          <button
            type="submit"
            className="relative mt-6 float-right text-sm font-semibold after:absolute after:bg-accent after:w-full after:h-[0.1rem] after:left-0 after:-bottom-2 afteer:rounded"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
