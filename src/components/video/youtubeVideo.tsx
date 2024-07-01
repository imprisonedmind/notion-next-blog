"use client";
import { FC, useEffect, useRef, useState } from "react";

interface YoutubeVideoProps {
  src: string;
}

export const YoutubeVideo: FC<YoutubeVideoProps> = ({ src }) => {
  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const loadYouTubeAPI = () => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    };

    loadYouTubeAPI();

    // @ts-ignore
    window.onYouTubeIframeAPIReady = () => {
      // @ts-ignore
      playerRef.current = new YT.Player("youtube-player", {
        events: {
          onReady: (event: any) => {
            event.target.mute();
            event.target.playVideo();
          },
        },
      });
    };
  }, []);

  const handleClick = () => {
    if (playerRef.current) {
      if (isMuted) {
        // @ts-ignore
        playerRef.current.unMute();
      } else {
        // @ts-ignore
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      className={`
        relative mx-auto mt-16 flex rotate-1 cursor-pointer overflow-hidden rounded-3xl 
        border border-yellow-950/10 bg-gradient-to-t from-yellow-950/10 to-yellow-300/10 
        p-8
      `}
      onClick={handleClick}
    >
      <iframe
        src={`${src}&autoplay=1&mute=1&loop=1&controls=1&playlist=fFp-jGz9PYw&enablejsapi=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="h-full min-h-[451px] w-full max-w-[742px] rounded-xl"
        id="youtube-player"
      ></iframe>
      {isMuted && (
        <div
          onClick={handleClick}
          className={`
            absolute bottom-4 left-4 mx-auto flex justify-center rounded-xl border 
            border-yellow-950/10 bg-gradient-to-t from-yellow-300 to-yellow-200 p-2 px-4 
            drop-shadow-md
          `}
        >
          <span className="m-auto text-2xl text-yellow-950">un-mute</span>
        </div>
      )}
      <style jsx global>{`
        .ytp-chrome-top,
        .ytp-chrome-bottom,
        .ytp-watermark,
        .ytp-show-cards-title,
        .ytp-pause-overlay {
          display: none !important;
        }
      `}</style>
    </div>
  );
};
