import React from "react";


import { ImProfile } from "react-icons/im";

const About = ({ myData }) => {
  const Content = (data) => <>
    {data.map(item => <>
      {item.points.length > 0 && item.points.map(el1 => <p class="about__point">
        {
          el1.label ? <><b>{el1.label}</b>: {el1.value}</> : <>{el1.value}</>
        }


      </p>
      )


      }

      <ul class="about__list">
        {
          item.details.length > 0 && item.details.map(el2 =>

            <li class="about__item">
              {
                el2.label ? <><b>{el2.label}</b>: {el2.value}</> : <>{el2.value}</>
              }
            </li>


          )
        }
      </ul>

    </>

    )}
  </>
  return (
    <section class="about section" id="about">
      <h2 class="section__title-1">About me</h2>
      <div class="about__container container grid">
        <div class="about__perfil">
          <div class="about__image">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--V0ekZaVJ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/h68x0up43hmknl5tjcww.jpg"
              alt=""
              class="about__img"
            />

            <div class="about__shadow"></div>

            <div class="geometric-box"></div>
            <img
              src="https://freesvg.org/img/clipart-0028.png"
              alt=""
              class="about__line"
            />
            <div class="about__box"></div>
          </div>
        </div>
        <div class="about__info">

          {myData.infoContent && myData.infoContent.length ?
            <>
              {myData.infoContent.map(item => <>
                {item.details.length > 0 && item.details.map(el1 => <p class="about__point">
                  {
                    el1.label ? <><b>{el1.label}</b>: {el1.value}</> : <>{el1.value}</>
                  }


                </p>
                )


                }


              </>)}


            </>
            : <></>}

        </div>
        <div class="about__detail">


          {myData.expContent && myData.expContent.length ?
            <>

              {Content(myData.expContent)}


            </>
            :
            <></>
          }

          {myData.skillContent && myData.skillContent.length ?
            <>

              {Content(myData.skillContent)}

            </>
            :
            <></>
          }

        </div>

        <div class="about__buttons">
          <a href={myData.socials[0].url} class="button ">
         Contact me
          </a>

          <a href={myData.socials[3].url} class="button ">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
