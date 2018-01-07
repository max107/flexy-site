import '../css/app.scss'

import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Header = () => (
    <div className="b-wrapper">
        <div className="b-row">
            <div className="b-col b-col_small_12">
                <div className="b-header">
                    <div className="b-header__container">
                        <h1 className="b-logo">
                            <Link className="b-logo__link" to="/">
                                Flexy <span className="b-badge">beta</span>
                            </Link>
                        </h1>
                        <div className="b-menu">
                            <Link className="b-menu__item" to="/framework/">
                                Components
                            </Link>
                            {/*<Link className="b-menu__item" to="/portfolio/">Portfolio</Link>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const Footer = () => (
    <div className="b-footer">
        <div className="b-wrapper">
            <div className="b-row">
                <div className="b-col b-col_small_12">
                    <div className="b-pane">
                        <div>
                            <div>
                                <a href="https://max107.ru">Maxim Falaleev</a>
                            </div>
                            <div>
                                <a href="https://studio107.ru">Studio107</a>
                            </div>
                        </div>
                        <div>&copy; 2017-{new Date().getFullYear()}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="Gatsby Default Starter"
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
        />

        <Header />
        <div>{children()}</div>
        <Footer />
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper
