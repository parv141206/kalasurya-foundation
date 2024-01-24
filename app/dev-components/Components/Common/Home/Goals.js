import React from "react";

export default function Goals() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center dark:text-white md:h-[70vh]">
      <div className="h-full gap-5 px-5 md:flex md:justify-center md:px-10">
        <div className="goals-card self-end bg-[var(--secondary-light)] dark:bg-[var(--secondary-dark)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          recusandae tempore cum nam ipsa saepe id rem minus aliquid! Nostrum,
          deleniti? Facilis libero cumque eligendi aspernatur molestiae
          blanditiis sint esse.
        </div>
        <div className="goals-card self-start bg-[var(--primary-light)]  dark:bg-[var(--primary-dark)]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem vel
          mollitia ex aperiam inventore facilis molestias, eum minima nobis modi
          voluptate ipsa voluptatum impedit autem, amet exercitationem nihil
          enim harum.
        </div>
        <div className="goals-card self-end bg-[var(--tertiary-light)] dark:bg-[var(--tertiary-dark)]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat aut
          eius vitae quibusdam, nesciunt optio maxime? Rem distinctio aperiam
          architecto facere recusandae numquam. Aspernatur voluptas, illum
          beatae labore voluptatum reiciendis!
        </div>
      </div>
    </div>
  );
}
