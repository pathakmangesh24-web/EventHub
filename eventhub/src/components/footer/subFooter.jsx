import React from "react";

const SubFooter = () => {
  return (
    <section className="w-full bg-[#382878] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* Left Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Become A Vendor
            </h2>
          </div>

          {/* Right Side */}
          <div>

            <p className="text-base md:text-lg leading-7 font-serif">
              Apply to be part of our next event! This is a paragraph.
              You can write your own content here, and fill in the blanks.
              What's your story and where do you go from here? Tell the
              world about your business, and make this text yours.
            </p>

            <button
              className="
                mt-5
                px-5
                py-2.5
                border-2
                border-white
                rounded-lg
                text-base
                font-serif
                hover:bg-white
                hover:text-[#382878]
                transition-all
                duration-300
              "
            >
              Apply Now
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SubFooter;