import React from "react";

export default function ClassyCard(props) {
  const { title, content, footer } = props;
  return (
    <div className=" rounded-lg border border-black border-opacity-20 bg-[var(--tertiary-light)] p-3 dark:border-white dark:border-opacity-5 dark:bg-[var(--secondary-dark)]">
      <h1 className="text-xl font-extrabold">{title}</h1>
      <p>{content}</p>
      <div className="text-sm">{footer}</div>
    </div>
  );
}
