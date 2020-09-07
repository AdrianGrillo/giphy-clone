import React from 'react'

function fetchReducer(state, action) {
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

export default function useFetch(url) {
    const [state, dispatch] = React.useReducer(
        fetchReducer,
        { data: null, error: null, loading: true }
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
        data: state.data, 
        error: state.error
    }
}