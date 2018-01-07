import React from 'react'
import Link from 'gatsby-link'

export default ({ node }) => (
    <div className="b-block-grid__item">
        <Link className="b-portfolio-post" to={node.frontmatter.url}>
            <img
                className="b-portfolio-post__image"
                src={node.frontmatter.thumb.childImageSharp.responsiveSizes.src}
                alt={node.frontmatter.title}
            />
            <span className="b-portfolio-post__post">
                <span className="b-portfolio-post__title">
                    {node.frontmatter.title}
                </span>
            </span>
        </Link>
    </div>
)
