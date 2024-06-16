import { FC } from "react";

interface IProps {
  position?: "fixed" | "absolute";
}

const Loading: FC<IProps> = (props) => {
  const { position = "fixed" } = props;

  return (
    <div
      style={{ position }}
      className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      >
        <span
          style={{ position }}
          className="l-1/2 t-1/2 -translate-x-1/2 -translate-y-1/2 -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
        >
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
