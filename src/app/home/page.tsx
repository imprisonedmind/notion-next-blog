import { Gluten } from "next/font/google";

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
          absolute top-0 mx-auto h-[100svh] w-[100svw] max-w-[760px] 
          !text-yellow-950
        `}
      >
        <div className={"mx-auto flex w-fit flex-col gap-8"}>
          <div className={`flex flex-col gap-8 pt-20`}>
            <div className={`flex flex-col gap-4`}>
              <p
                className={
                  font.className + " stroke text-center text-6xl font-bold"
                }
              >
                bloggin for da homies, <br /> via notion.
              </p>
              <p className={"text-center text-3xl font-thin tracking-wider"}>
                write, edit and share your notion blogs with your <br />{" "}
                🐸,🐟,🦀 or maybe even your 🧑‍🤝‍🧑. <br />
                <span className={"!text-sm italic"}>(on your own domain)</span>
              </p>
            </div>
          </div>

          <div className={"relative mx-auto w-full max-w-[300px]"}>
            <input
              placeholder={"get a mail on launch day!"}
              className={`
                w-full rounded-md border border-yellow-950/20 bg-yellow-100 p-2 
                shadow-inner outline-none ring-yellow-950/10 ring-offset-4
                ring-offset-yellow-200/10 transition-colors placeholder:text-yellow-950/20
                focus:ring-1
              `}
            />

            <button
              className={`
                ease-in-linear absolute right-2 top-1/2 -translate-y-[50%] rounded-sm 
                border border-yellow-950/5 bg-yellow-500/10 p-1 px-2 text-sm 
                duration-300 hover:rounded-lg hover:bg-yellow-950 
                hover:text-yellow-50 hover:drop-shadow-md
              `}
            >
              submit
            </button>
          </div>
        </div>

        <div
          className={`
            mt-16 flex min-h-[483px] rotate-1 rounded-3xl border border-yellow-950/10 
            bg-gradient-to-t from-yellow-950/10 to-yellow-300/10 p-4
        `}
        >
          <video
            width="320"
            height="240"
            autoPlay={true}
            controls={false}
            muted={true}
            loop={true}
            className={`h-auto w-full rounded-xl`}
          >
            <source src={"/video/demo.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
