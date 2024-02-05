import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false);

    useEffect(() => {

    // console.log("inside the effect" ,url);

        const fetchData = async () => {

            setLoading(true)

            try {

                const res = await fetch(url);

                if (!res.ok) {
                    setError("failed to fetch")
                    alert("failed to fetch")
                    
                }

                const result = await res.json()
                
                console.log("Nice : ",result)
                console.log("Our key is ",res);


                console.log(result.data)
                setData(result.data)
                setLoading(false)
            }
            catch (error) {
                setError(error.message)
                setLoading(false)
            }
        };
        fetchData();
    },[url]);

    return {
        data,
        error,
        loading
    }
}

export default useFetch