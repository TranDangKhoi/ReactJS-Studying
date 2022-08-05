/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useRef } from "react";
import useHover from "../../../hooks/UseHover";
import useLinkNewTab from "../../../hooks/useLinkNewTab";

const Blog = () => {
  // Add attr target="_blank" vào tất cả thẻ a
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  return (
    <div className="entry-content" ref={contentRef}>
      <p className="mb-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
        doloremque impedit quam nobis corporis autem iste laudantium natus
        quibusdam veritatis at, culpa dolores, possimus neque totam provident ex
        fugiat? Eum.
        <a href="https://www.google.com" className="underline">
          Google
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
        doloremque impedit quam nobis corporis autem iste laudantium natus
        quibusdam veritatis at, culpa dolores, possimus neque totam provident ex
        fugiat? Eum.
        <a
          href="https://google.com"
          className={`underline ${hovered ? "text-green-400" : ""}`}
          ref={nodeRef}
        >
          Google
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
        doloremque impedit quam nobis corporis autem iste laudantium natus
        quibusdam veritatis at, culpa dolores, possimus neque totam provident ex
        fugiat? Eum.
        <a href="https://google.com" className="underline">
          Google
        </a>
        ?
      </p>
    </div>
  );
};

export default Blog;
