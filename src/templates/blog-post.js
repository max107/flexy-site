import React from 'react'

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <div className="b-wrapper">
            <div className="b-row">
                <div className="b-col b-col_small_12">
                    <h1 className="b-heading">{post.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </div>
        </div>
    )
}

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(frontmatter: { url: { eq: $slug } }) {
            html
            frontmatter {
                title
                url
                category
            }
        }
    }
`
