
export const getStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await response.json()

    const paths = posts.map(post => {
        return {
            params: { id: post.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const [id] = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const posts = await response.json()
    return {
        props: { post }
    }

}


const post = ({ post }) => {
    return (<>
        <div className="m-5 p-5 border border-2">
            <u><h2>{props.title}</h2></u>
            <h3>{props.body}</h3>
        </div>
    </>
    );
}

export default post;