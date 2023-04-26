import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingAnimation() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Programmer", "Engineer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 10,
      smartBackspace: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <h4 className="mb-4 text-2xl">
      <span ref={el}></span>
    </h4>
  );
}
