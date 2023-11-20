import React from 'react'

import { useState } from 'react';
import axios from 'axios';

import { RiGithubFill, RiFileVideoFill, RiLinkM, RiDownload2Fill } from "react-icons/ri";
import { useRouter } from 'next/router';

import { useEffect } from 'react';
import Loading from './Loading';
import NotFound from './NotFound';
const ProjectDetail = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [projectData, setProjectData] = useState('')
    const [loading, setLoading] = useState(true)

    const initFetch = async () => {
        try {
            const res = await axios.get("/api/init")
            setProjectData(res.data.data.projects[slug - 1])
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log(e);
        }

    }
    useEffect(() => {
        if (slug) {
            initFetch()
        }
    }, [slug])





    return (
        <>
            {
                loading && !projectData && <Loading />
            }

            {!loading && projectData && projectData.title &&
                <div div className='project__detail main'>
                    <div class="container grid">
                        <h2 class="project__title">
                            <span>{projectData.title}</span>
                        </h2>

                        <div className="video-demo">

                            <iframe width="100%" height="560" src={projectData.videoLink}></iframe>

                        </div>

                        <div class="projects__buttons">
                            {projectData.sourceCodeLink &&
                                <a href={projectData.sourceCodeLink} class="projects__link">
                                    <RiGithubFill />
                                    Source Code
                                </a>
                            }
                            {projectData.sourceCodeApiLink &&
                                <a href={projectData.sourceCodeApiLink} class="projects__link">
                                    <RiGithubFill />
                                    Api Source Code
                                </a>
                            }

                            {
                                // for web
                                projectData.demoLink && <a href={projectData.demoLink} class="projects__link">
                                    <RiLinkM />
                                    Production
                                </a>
                            }
                            {
                                // for game
                                projectData.installLink && <a href={projectData.installLink} class="projects__link">
                                    <RiDownload2Fill />
                                    Download
                                </a>
                            }

                        </div>
                        <div class="project__info">
                            {projectData.content && projectData.content.length ?
                                <>
                                    {projectData.content.map(item => <>
                                        {item.points.length > 0 && item.points.map(el1 => <p class="project__point">
                                            {
                                                el1.label ? <><b>{el1.label}</b>: {el1.value}</> :


                                                    <>{el1.value}</>
                                            }


                                        </p>
                                        )


                                        }


                                        <ul class="project__list">
                                            {
                                                item.details.length > 0 && item.details.map(el2 =>

                                                    <li class="project__item">
                                                        {
                                                            el2.label ? <><b>{el2.label}</b>: {el2.value}</> :


                                                                <>{el2.value}</>
                                                        }
                                                    </li>


                                                )
                                            }
                                        </ul>
                                    </>)}


                                </>



                                : <></>}



                        </div>







                    </div>
                </div>

            }
            {!loading && !projectData && <NotFound />}

        </>


    )
}

export default ProjectDetail