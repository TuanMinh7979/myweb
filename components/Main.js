import React, { useEffect, useState } from 'react'
import Introduce from "./Introduce";
import About from "./About";
import Project from "./Project";

import axios from 'axios';

import NotFound from './NotFound';
const Main = () => {
    const [all, setAll] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function initFetch() {
            try {
            
                const res = await axios.get("/api/init")
                setAll(res.data.data)
                setLoading(false)


            } catch (e) {
                setLoading(false)
                console.log(e);
            }

        }
        initFetch()

    }, [])
    return (<>
        {loading && !all && <Loading />}
        {!loading && all && all.pro &&
            <main class="main">
                <Introduce myData={all.pro}></Introduce>
                <About myData={all.pro}></About>
                <Project projectsData={all.projects}></Project>

            </main> 
        }
        {!loading && !all && <NotFound/>}


    </>


    )
}

export default Main