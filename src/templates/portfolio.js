import React from 'react'

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <div>
            <div>portfolio yo!</div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    )
}

export const query = graphql`
    query PortfolioPostQuery($slug: String!) {
        markdownRemark(frontmatter: { url: { eq: $slug } }) {
            html
            frontmatter {
                title
                url
            }
        }
    }
`
