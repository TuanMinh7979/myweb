import React from "react";

import { RiArrowRightUpLine, RiGithubFill, RiFileVideoFill, RiLinkM } from "react-icons/ri";
import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/router";
const Project = ({projectsData}) => {
  const router = useRouter();


  return (
    <section class="projects section" id="projects">
      <h2 class="section__title-1">
        <span>Projects</span>
      </h2>

      <div class="projects__container  container projects grid">

        {projectsData.map((el, idx) => <article class="projects__card" onClick={() => router.push(`/project/${el.id}`)}>
          <div class="projects__image">
            <img
              src={el.imgSrc}
              alt=""
              class="projects__img"
            />

            <span href="" class="projects__button button">
              <RiArrowRightUpLine onClick={() => router.push(`/project/${el.id}`)} />
            </span>
          </div>
          <div class="projects__content">
            <h3 class="projects__subtitle">{el.category}</h3>
            <h2 class="projects__title">{el.title} </h2>
            <p class="projects__description">
              {el.previewText}
            </p>
          </div>

          <div class="projects__buttons">
            <a
              onClick={(e) => {
                e.stopPropagation()
                window.location.href = e.target.href
              }}

              href={el.sourceCodeLink} class="projects__link">
              <RiGithubFill />
              Source Code
            </a>

          </div>
        </article>)}


      </div>
    </section>
  );
};

export default Project;
