/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useLayoutEffect } from 'react';

import { fetchFileData } from './options';
import Analytics from './Analytics';

function AnalyticsPage({ children }) {

    const [FileData, setFileData] = useState([]);

    useLayoutEffect(() => {
        fetchFileData().then((res) => {
            setFileData(res)

        })
    }, [])


    return (
        <>
            {FileData.length > 0 &&
                <Analytics FileData={FileData} />
            }
        </>
    )
}

export default AnalyticsPage




