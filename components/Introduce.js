import React from "react";
import { socialIcons } from "@/utils/static";
const Introduce = ({ myData }) => {


  return (
    <section class="home section" id="home">
      <div class="home__container container grid">
        <h1 class="home__name">{myData.name}</h1>

        <div class="home__perfil">
          <div class="home__image">
            <img
              src={myData.avatarLink}
              alt=""
              class="home__img"
            />

            <div class="home__shadow"></div>

            <div class="geometric-box"></div>
          </div>
          <div class="home__social">

            {
              myData.socials && myData.socials.length > 0 && myData.socials.map((el, idx) => <>

                {
                  idx <= 2 ? <span onClick={(e) => {
                    e.stopPropagation()
                    window.location.href = el.url
                  }}
                    class="button__ghost" >
                    {socialIcons[idx].icon}

                  </span>
                    : <></>
                }
              </>



              )
            }

          </div>
        </div>

        <div class="home__info">
          <div class="home__description">
            <b>Software developer</b>
            &nbsp; Tôi là 1 lập trình viên và có 1 năm kinh nghiệm với lập trình web.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
