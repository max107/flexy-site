const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;
    switch (node.internal.type) {
        case `MarkdownRemark`:
            createNodeField({
                node,
                name: `slug`,
                value: createFilePath({ node, getNode, basePath: `pages` }),
            });
            break;
    }
};

function createBlog(createPage, graphql) {
    const query = `
{
    allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]}, 
        filter: {fileAbsolutePath: {regex: "/(framework)/"}}
    ) {
        edges {
            node {
                frontmatter {
                    url
                }
            }
        }
    }
}
    `;

    return new Promise((resolve, reject) => {
        graphql(query).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.frontmatter.url,
                    component: path.resolve(`./src/templates/blog-post.js`),
                    context: {
                        slug: node.frontmatter.url,
                    },
                })
            });
            resolve()
        })
    });
}

function createPortfolio(createPage, graphql) {
    const query = `
{
    allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]}, 
        filter: {fileAbsolutePath: {regex: "/(portfolio)/"}}
    ) {
        edges {
            node {
                frontmatter {
                    url
                }
            }
        }
    }
}
    `;

    return new Promise((resolve, reject) => {
        graphql(query).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.frontmatter.url,
                    component: path.resolve(`./src/templates/portfolio.js`),
                    context: {
                        // Data passed to context is available in page queries as GraphQL variables.
                        slug: node.frontmatter.url
                    },
                })
            });
            resolve()
        })
    });
}

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    const promises = [
        createBlog(createPage, graphql),
        createPortfolio(createPage, graphql),
    ];

    return Promise.all(promises);
};
