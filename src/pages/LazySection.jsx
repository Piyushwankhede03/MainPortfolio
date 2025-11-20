import React, { useEffect, useRef, useState } from "react";

function LazySection({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // trigger when 20% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={`lazy-section ${isVisible ? "fade-in" : ""}`}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          style: {
            opacity: 0,
            transform: "translateY(20px) scale(0.95)", // start faded + smaller
            transition: "opacity 0.8s ease, transform 0.8s ease",
            transitionDelay: `${index * 0.15}s`, // staggered delay
          },
          className: `${child.props.className || ""} ${
            isVisible ? "child-fade-in" : ""
          }`,
        })
      )}
    </div>
  );
}

export default LazySection;