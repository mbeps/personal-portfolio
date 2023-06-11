import React from "react";

interface SubTitleProps {
  subTitle: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ subTitle }) => {
  return <h2 className="text-2xl font-bold mb-6 mt-6">{subTitle}</h2>;
};

export default SubTitle;
