import { useEffect } from "react";

export function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: MouseEvent) => void
) {
  useEffect(() => {
    function listener(event: MouseEvent) {
      // Do nothing if clicking inside the element
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event); // Trigger handler if clicked outside
    }

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}