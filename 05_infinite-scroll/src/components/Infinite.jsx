import { useEffect, useState } from "react";

const Infinite = () => {
  const [count, setCount] = useState(50);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreItems = () => {
    setIsLoading(true);
    // Simulate an async loading process (e.g., fetching data from an API)
    setTimeout(() => {
      setCount((prevCount) => prevCount + 50);
      setIsLoading(false);
    }, 1000); // Delay for demonstration purposes
  };
  useEffect(() => {
    console.log("isLoading state changed", isLoading);
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 30
      ) {
        // setCount(count + 50);
        loadMoreItems();
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLoading]);

  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(<div key={i}>{i + 1}</div>);
  }
  return (
    <main>
      {elements}
      {isLoading &&
        (console.log("Rendering loading message"),
        (<div>Loading more items...</div>))}
    </main>
  );
};

export default Infinite;
