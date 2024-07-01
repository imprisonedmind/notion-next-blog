"use client";
import { Fragment, useEffect, useState } from "react";
import { postContact } from "@/app/actions";
import Spinner from "@/components/loading/spinner";
import Confetti from "react-confetti-boom";
import type { Metadata } from "next";

export default function Input() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [isExploding, setIsExploding] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (email) {
      const { status, res } = await postContact({
        email: email,
      });
      if (status != 200) {
        setMessage(res.detail);
      } else {
        setMessage("Successfully subscribed, can't wait to have you on!");
        setIsExploding(true);
      }
      setEmail("");
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className={"flex flex-col items-center gap-2"}>
        <div
          className={
            "relative mx-auto flex w-full max-w-[300px] flex-col gap-1"
          }
        >
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Get a mail on launch day!"
              required
              className={`
            w-full rounded-md border border-yellow-950/20 bg-yellow-100 p-2 shadow-inner 
            outline-none ring-yellow-950/10 ring-offset-4 ring-offset-yellow-200/10 
            transition-colors placeholder:text-yellow-950/20 focus:ring-1
        `}
            />
          </form>

          <button
            onClick={(e) => handleSubmit(e)}
            className={`
            ease-in-linear group absolute right-[6px] top-1/2 -translate-y-[50%] 
            rounded-sm border border-yellow-950/5 bg-yellow-500/10 p-1 px-2 text-sm 
            duration-300 hover:rounded-lg hover:bg-yellow-950 hover:text-yellow-50
            hover:drop-shadow-md
          `}
          >
            {loading ? <Spinner /> : "submit"}
          </button>
        </div>
        {message && <p className={"text-xs text-yellow-950/50"}>{message}</p>}
      </div>
      {isExploding && (
        <Confetti
          mode={"boom"}
          particleCount={147}
          x={0.3}
          y={0.35}
          shapeSize={20}
          spreadDeg={86}
        />
      )}
    </Fragment>
  );
}
