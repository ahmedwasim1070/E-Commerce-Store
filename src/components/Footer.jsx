import React from "react";

function Footer() {
  return (
    <div className="w-full h-[150px] flex flex-col justify-center text-black items-center gap-y-2">
      <p className="flex gap-3 text-[18px]">
        <svg
          fill="#000000"
          width="24px"
          height="24px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z" />
        </svg>{" "}
        2024 Crush Fragrances LTD{" "}
      </p>
      <p className="flex gap-3 text-[18px]">
        Created by &lt;./&gt; by{" "}
        <a
          className=" underline"
          href="https://github.com/ahmedwasim1070/crush-ecomerce-store"
        >
          ahmedwasim1070
        </a>
      </p>
    </div>
  );
}

export default Footer;
