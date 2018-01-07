import React from 'react'
import BlockItem from '../component/BlockItem'
import Link from 'gatsby-link'

export default ({ data }) => {
    // console.log(data);

    const coreNodes = data.allMarkdownRemark.edges.filter(({ node }) => {
        return node.frontmatter.category === 'core'
    })
    const customNodes = data.allMarkdownRemark.edges.filter(
        ({ node }) => node.frontmatter.category !== 'core'
    )

    return (
        <div>
            <div className="b-wrapper">
                <div className="b-row">
                    <div className="b-col b-col_small_12">
                        <h2 className="b-heading">Core</h2>
                        <div className="b-block-grid b-block-grid_small_1 b-block-grid_medium_2 b-block-grid_large_3 b-block-grid_xlarge_4">
                            {coreNodes.map(({ node }) => (
                                <div
                                    className="b-block-grid__item"
                                    key={node.id}
                                >
                                    <BlockItem node={node} />
                                </div>
                            ))}
                        </div>

                        <div className="b-divider" />

                        <h2 className="b-heading">Block</h2>
                        <div className="b-block-grid b-block-grid_small_1 b-block-grid_medium_2 b-block-grid_large_3 b-block-grid_xlarge_4">
                            {customNodes.map(({ node }) => (
                                <div
                                    className="b-block-grid__item"
                                    key={node.id}
                                >
                                    <Link
                                        className="b-blog-post__block"
                                        to={node.frontmatter.url}
                                    >
                                        {node.frontmatter.title}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const query = graphql`
    query BlogListQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___category] }
            filter: { fileAbsolutePath: { regex: "/(framework)/.*\\.md$/" } }
        ) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date
                        url
                        category
                        thumb {
                            childImageSharp {
                                responsiveResolution(width: 48) {
                                    src
                                    srcSet
                                }
                            }
                        }
                    }
                    excerpt
                }
            }
        }
    }
`
