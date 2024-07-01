import { Gluten } from "next/font/google";
import demo from "../../../public/video/";

const font = Gluten({
  subsets: ["latin"],
  // weight: "400",
  weight: ["200", "300", "400", "500", "600"],
});

export default function Page() {
  return (
    <div className={""}>
      <div
        className={`
          absolute left-0 top-0 flex h-[100svh] w-[100svw] flex-col 
          bg-yellow-50 !text-yellow-950
        `}
      >
        <div
          className={`
          absolute top-0 h-full w-full bg-gradient-to-t from-yellow-300 to-yellow-50
          blur-[100px]
        `}
        />
      </div>
      <div
        className={`
          absolute left-0 top-0 h-[100svh] w-[100svw] !text-yellow-950
        `}
      >
        <div className={"mx-auto flex w-fit flex-col gap-8"}>
          <div className={`flex flex-col`}>
            <p className={"text-[80px]"}>📝</p>
            <p className={font.className + " stroke text-6xl font-bold"}>
              bloggin for the masses, <br /> via notion.
            </p>
            <p className={"text-2xl font-thin tracking-wider"}>
              write, edit and share your Notion blogs with your 🐸,🐟,🦀 or
              maybe even your 🧑‍🤝‍🧑.
            </p>
          </div>

          <div className={"relative"}>
            <input
              placeholder={"get a mail on launch day!"}
              className={`
              w-full rounded-md border border-yellow-950/20 bg-yellow-100 p-2 
              shadow-inner placeholder:text-yellow-950/20
            `}
            />
            <button
              className={`
                absolute right-2 top-1/2 -translate-y-[50%] rounded-sm bg-yellow-500/10 
                p-1 px-2 text-sm transition duration-75 ease-out
                hover:bg-yellow-950 hover:text-yellow-50 hover:shadow-sm 
              `}
            >
              submit
            </button>
          </div>

          <video width="320" height="240" controls>
            <source src={} type="video/mov" />
          </video>
        </div>
      </div>
    </div>
  );
}
