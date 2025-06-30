import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-7xl text-primary font-bold">
        Send me a message!
      </h1>
      <p className="text-2xl text-center mt-5 text-accent mx-auto mb-10 w-3/12">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>

      <div className="text-center">
        <form className="  ">
          <div className="flex justify-center *:text-accent  gap-20">
            <div className="flex items-center flex-col space-y-4">
              <p className="label -ml-77">Your name</p>
              <input
                type="text"
                placeholder="Enter your name"
                className="border-b w-96 h-10 focus:outline-none text-2xl font-thin border-accent"
              />
            </div>

            <div className="flex items-center flex-col space-y-4">
              <p className="label -ml-70">Email Address</p>
              <input
                type="text"
                placeholder="Enter your email address"
                className="border-b focus:outline-none w-96 h-10  text-2xl font-thin border-accent"
              />
            </div>
          </div>

          <div className="flex items-center flex-col mt-10 space-y-4">
            <p className="label text-accent -ml-190">Your Message</p>

            <textarea
              className=" border-b text-accent  focus:outline-none w-[860px] h-20  text-2xl font-thin border-accent"
              placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
            ></textarea>
          </div>
          <button className="btn btn-primary text-secondary mt-10"> Send Email  </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
