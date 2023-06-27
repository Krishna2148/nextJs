import Link from "next/link"

export const getStaticProps = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await response.json()
    return {
        props: { posts }
    }

}


const posts = ({ posts }) => {
    return (<>
        {
            posts.map(post => {
                return <div className="m-5 p-5 h3 border border-2 rounded-2 text-center">
                    <Link href={`/posts/${post.id}`}>
                        {post.title}
                    </Link>

                </div>
            })
        }
    </>);
}

export default posts;