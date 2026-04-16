import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex  justify-center items-center  h-screen">
      <ClipLoader
        color="#244D3F"
        size={50}
        speedMultiplier={2}
        aria-label="Loading Spinner"
      />
    </div>
  );
}
