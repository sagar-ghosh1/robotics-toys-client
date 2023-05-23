import { useEffect } from "react";

const useTitle = (title) => {
   useEffect(() => {
      document.title = `${title} - Robotics Toys`;
   }, [title]);
};

export default useTitle;
