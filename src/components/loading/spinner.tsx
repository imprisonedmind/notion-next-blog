export default function Spinner() {
  return (
    <div
      className={
        "ease-out-linear m-auto flex w-full justify-center duration-300"
      }
    >
      <div
        className={`
          relative m-auto size-4 animate-spin overflow-hidden 
          rounded-full bg-yellow-950/10 group-hover:bg-yellow-100
        `}
      >
        <div className={"h-full w-1/2 bg-yellow-950"} />
        <div
          className={`
            absolute left-1/2 top-1/2 z-10 flex h-4/5  w-4/5 -translate-x-1/2 
            -translate-y-1/2 transform items-center justify-center rounded-full
            bg-[#FCF2B4] group-hover:bg-yellow-950
          `}
        />
      </div>
    </div>
  );
}
