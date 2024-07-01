import { Gluten } from "next/font/google";
import { YoutubeVideo } from "@/components/video/youtubeVideo";
import Input from "@/components/form/input";

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
          <Input />
        </div>

        <YoutubeVideo
          src={"https://www.youtube.com/embed/fFp-jGz9PYw?si=OXy--Z0lnnvTZS3K"}
        />
      </div>
    </div>
  );
}
