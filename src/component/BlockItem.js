import React from 'react'
import Link from 'gatsby-link'

export default ({ node }) => (
    <Link className="b-blog-post" to={node.frontmatter.url}>
        {node.frontmatter.thumb && (
            <img
                className="b-blog-post__image"
                src={
                    node.frontmatter.thumb.childImageSharp.responsiveResolution
                        .src
                }
                alt={node.frontmatter.title}
            />
        )}
        <span className="b-blog-post__name">{node.frontmatter.title}</span>
    </Link>
)
