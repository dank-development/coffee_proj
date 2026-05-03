import { useEffect, type RefObject } from "react";

// from https://dev.to/parth24072001/how-to-autoscroll-in-reactcreating-smooth-auto-scrolling-functionality-in-react-1o33

const useScrollToBottom = <T>(
  elementRef: RefObject<HTMLDivElement | null>,
  trigger: T,
) => {
  const scrollToBottom = () => {
    if (elementRef) elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);
};

export default useScrollToBottom;
