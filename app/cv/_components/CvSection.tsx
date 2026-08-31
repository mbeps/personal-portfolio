import type React from "react";

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
      <h2 className="mb-4 border-neutral-200 border-b-2 pb-2 font-bold text-3xl uppercase tracking-wider dark:border-neutral-800">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default CvSection;
