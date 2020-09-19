import React from 'react'
import Axios from 'axios'

function scrollReducer(state, action) {
    if(action.type === 'fetch') {
        return {
            ...state,
            loading: true
        }
    } else if(action.type === 'success') {
        return {
            ...state,
            loading: false,
            // data: prevData => {
            //     return [...prevData, action.res.data]
            // }
            data: action.res.data
        }
    } else if(action.type === 'error') {
        return {
            ...state,
            loading: false,
            error: 'Error fetching data'
        }
    } else {
        throw new Error('Action not supported')
    }
}

const initialState = {
    loading: true,
    error: null,
    data: []
}

export default function useInfiniteScroll(url, offset) {
    const [state, dispatch] = React.useReducer(
        scrollReducer,
        initialState
    )

    React.useEffect(() => { 
        dispatch({ type: 'fetch' })

        let cancel

        Axios({
            method: 'GET',
            url: url,
            params: {page: offset},
            cancelToken: new Axios.CancelToken(c => cancel = c)
        }).then(res => {
            dispatch({ type: 'success', res })
        }).catch(e => {
            if(Axios.isCancel(e)) return
            dispatch({ type: 'error' })
        })

        return () => cancel()
    }, [url, offset])

    return {loading: state.loading, error: state.error, data: state.data}
}

// export default function useInfiniteScroll(url, offset) {
//     const [loading, setLoading] = React.useState(true)
//     const [error, setError] = React.useState(false)
//     const [data, setData] = React.useState([])

//     React.useEffect(() => { 
//         setLoading(true)
//         setError(false)

//         let cancel

//         Axios({
//             method: 'GET',
//             url: url,
//             params: {page: offset},
//             cancelToken: new Axios.CancelToken(c => cancel = c)
//         }).then(res => {
//             // setData(res.data)
//             setData(prevData => {
//                 return {...prevData, ...res.data}
//             })
//             // setData(res.data)
//             setLoading(false)
//         }).catch(e => {
//             if(Axios.isCancel(e)) return
//             setError(true)
//         })

//         return () => cancel()
//     }, [url, offset])

//     return {loading, error, data}
// }

// function infiniteReducer(state, action) {
//     if(action.type === 'fetch') {
//         return {
//             ...state,
//             loading: true
//         }
//     } else if(action.type === 'success') {
//         return {
//             ...state,
//             loading: false,
//             data: action.data
//         }
//     } else if(action.type === 'error') {
//         return {
//             ...state,
//             loading: false,
//             error: "Error fetching gifs"
//         }
//     } else {
//         throw new Error('Action not supported, try again.')
//     }
// }

// export default function useInfiniteScroll(url) {
//     const [state, dispatch] = React.useReducer(
//         infiniteReducer,
//         {loading: true, error: false, data: null}
//     )

//     React.useEffect(() => {
//         dispatch({ type: 'fetch' })

//         fetch(url)
//             .then((res) => res.json())
//             .then((data) => dispatch({ type: 'success', data }))
//             .catch((e) => {
//                 console.warn(e)
//                 dispatch({ type: 'error' })
//             })
//     }, [url])

//     return { 
//         loading: state.loading, 
//         error: state.error, 
//         data: state.data 
//     }
// }

// export default function useInfiniteScroll(url) {
//     const [loading, setLoading] = React.useState(true)
//     const [error, setError] = React.useState(false)
//     const [data, setData] = React.useState(null)
//     // const [hasMore, setHasMore] = React.useState(false)
    
//     React.useEffect(() => {
//         setLoading(true)

//         fetch(url)
//             .then((res) => res.json())
//             .then((data) => {
//                 setData(data)
//                 setLoading(false)
//                 console.log(data)
//             }).catch((e) => {
//                 if(e) {
//                     console.warn(e.message)
//                     setError('Error fetching more gifs')
//                 }
//             })
//     }, [url])

//     /* GIPHY API doesn't supply more than a single random gif at a time so here we're searching the word random and displaying
//     the results instead of making 50 different API calls everytime the page loads more GIFs */

//     return { loading, error, data }
// }
