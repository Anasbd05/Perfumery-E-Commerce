import { bestSellers } from "@/assets/assets";
import React from "react";

const PerfumeDetails = ({ params }: { params: Promise<{ title: string }> }) => {
  const { title } = React.use(params);

  const selectedperfume = bestSellers.find(
    (perfume) => perfume.title.replaceAll(" ", "") === title
  );

  return <div>{selectedperfume?.price} </div>;
};

export default PerfumeDetails;
