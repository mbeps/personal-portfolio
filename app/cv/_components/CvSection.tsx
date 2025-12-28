import React from "react";

interface CvSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const CvSection: React.FC<CvSectionProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <section className={`mb-8 ${className}`}>
      <h2 className="text-2xl font-bold border-b-2 border-neutral-200 dark:border-neutral-800 pb-2 mb-4 uppercase tracking-wider">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default CvSection;
