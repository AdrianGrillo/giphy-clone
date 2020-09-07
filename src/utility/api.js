const api = 'D4NJn0Y2lqBrdx3rzoV7Fm15m0KBDRTI'
const json = '.json?print=pretty'

export function searchPosts(query) {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api}&q=hi`)
        .then((res) => res.json())
        .then((post) => {
            if(post.message) {
                throw new Error('Error fetching posts.')
            }

            return post.source
        })
}

export function getTrending() {
    return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${api}&limit=25&rating=g`)
        .then((res) => res.json())
        .then((posts) => postsOnly(posts))
}

function postsOnly(data) {
    return data.map(x => x.id)
}