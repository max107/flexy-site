import React from 'react'
import PortfolioItem from '../component/PortfolioItem'

export default ({ data }) => {
    console.log(data)
    return (
        <div>
            <h1 className="b-heading">Портфолио</h1>

            <div className="b-block-grid b-block-grid_small_1 b-block-grid_medium_2 b-block-grid_large_3 b-block-grid_xlarge_4">
                {data.allMarkdownRemark.edges.map(({ node }) => {
                    return <PortfolioItem node={node} key={node.id} />
                })}
            </div>
        </div>
    )
}

export const query = graphql`
    query PortfolioListQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    id
                    frontmatter {
                        title
                        date
                        url
                        thumb {
                            childImageSharp {
                                responsiveSizes(maxWidth: 200) {
                                    src
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
