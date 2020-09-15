import React from 'react'

function infiniteReducer(state, action) {
    if(action.type === 'fetch') {
        return {
            ...state,
            loading: true
        }
    } else if(action.type === 'success') {
        return {
            ...state,
            loading: false,
            data: action.data
        }
    } else if(action.type === 'error') {
        return {
            ...state,
            loading: false,
            error: "Error fetching gifs"
        }
    } else {
        throw new Error('Action not supported, try again.')
    }
}

export default function useInfiniteScroll(url) {
    const [state, dispatch] = React.useReducer(
        infiniteReducer,
        {loading: true, error: false, data: null}
    )

    React.useEffect(() => {
        dispatch({ type: 'fetch' })

        fetch(url)
            .then((res) => res.json())
            .then((data) => dispatch({ type: 'success', data }))
            .catch((e) => {
                console.warn(e)
                dispatch({ type: 'error' })
            })
    }, [url])

    return { 
        loading: state.loading, 
        error: state.error, 
        data: state.data 
    }
}

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
//                 setData((prevData) => (
//                     [...prevData, data]
//                 ))
//                 // setHasMore(data.length > 0)
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
