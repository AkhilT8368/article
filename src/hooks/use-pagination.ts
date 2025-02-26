import React, { useEffect, useState } from "react";

const usePagination = () => {
  const [page, setPage] = useState(10);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 500
    ) {
      setPage((prevPage) => prevPage + 5);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return { page };
};

export default usePagination;
