import React from "react";
import { socialIcons } from "@/utils/static";
const Introduce = ({myData}) => {


  return (
    <section class="home section" id="home">
      <div class="home__container container grid">
        <h1 class="home__name">{myData.name}</h1>

        <div class="home__perfil">
          <div class="home__image">
            <img
              src="https://media.licdn.com/dms/image/D5603AQEOXO0EE0t1kQ/profile-displayphoto-shrink_800_800/0/1680101256882?e=1703721600&v=beta&t=B_Utj6zbMvyLvpWaNiBzgmppLYLRFW6RHywdaHFEFfc"
              alt=""
              class="home__img"
            />

            <div class="home__shadow"></div>

            <div class="geometric-box"></div>
          </div>
          <div class="home__social">

            {
               myData.socials && myData.socials.length > 0 && myData.socials.map((el, idx) =>

                <span onClick={(e) => {
                  e.stopPropagation()
                  window.location.href = el.url
                }}
                  class="button__ghost" >
                  {socialIcons[idx].icon}

                </span>

              )
            }

          </div>
        </div>

        <div class="home__info">
          <div class="home__description">
            <b>Software developer</b>
            &nbsp; Tôi là 1 lập trình viên và có 1 năm kinh nghiệm với lập trình web, hiện tại tôi đang làm việc tại công ty IVS
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
