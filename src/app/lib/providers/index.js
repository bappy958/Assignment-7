import TimelineContextProvider from "@/context/TimelineContextProvider";

function Provides({ children }) {
  return <TimelineContextProvider>{children}</TimelineContextProvider>;
}

export default Provides;
