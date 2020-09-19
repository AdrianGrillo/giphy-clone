import React from 'react'
import Axios from 'axios'

export default function useAxios(url) {
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        setLoading(true)
        
        Axios({
            method: 'GET',
            url: url,
        }).then(res => {
            setData(res.data)
            setLoading(false)
        })
        .catch(e => {
            console.warn(e)
            e.message ? setError(e.message) : setError(false)
        })
    }, [url])

    return {
        error,
        loading, 
        data
    }
}