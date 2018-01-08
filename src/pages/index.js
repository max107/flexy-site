import React from 'react'
import Helmet from 'react-helmet'
import Grid from '../component/example/Grid'
import BlockGrid from '../component/example/BlockGrid'
import Form from '../component/example/Form'
import FormGroup from '../component/example/FormGroup'
import InfoGroup from '../component/example/InfoGroup'
import Button from '../component/example/Button'
import Avatar from '../component/example/Avatar'
import Link from 'gatsby-link'

const IndexPage = () => (
    <div>
        <Helmet bodyAttributes={{ class: 'b-body_index' }}/>

        <div className="b-welcome">
            <div className="b-wrapper">
                <div className="b-row">
                    <div className="b-col b-col_small_12 b-col_medium_6">
                        <div className="b-welcome__title">
                            Free and open source SCSS based BEM library
                        </div>
                        <div className="b-welcome__text">
                            Flexy is lightweight, performant, readable and fully
                            responsive SCSS library built for scale.
                        </div>
                    </div>
                    <div className="b-col b-col_small_12 b-col_medium_6">
                        <div className="b-hide b-hide_medium_up">
                            <div className="b-space"/>
                        </div>
                        <div className="b-segment">
                            <div className="b-segment__content">
                                <div className="b-install">
                                    <div className="b-install__title">
                                        There are several ways to get started
                                        with Flexy. You can either:
                                    </div>

                                    <ol className="b-install__list">
                                        <li className="b-install__li">
                                            <div className="b-install__text">
                                                use npm to install the Flexy
                                                package
                                            </div>
                                            <div className="b-install__code">
                                                npm install flexy-framework
                                                --dev
                                            </div>
                                        </li>
                                        <li className="b-install__li">
                                            <div className="b-install__text">
                                                use the cdnjs CDN to link to the
                                                Flexy stylesheet
                                            </div>
                                            <a href="https://cdn.jsdelivr.net/npm/flexy-framework/release/flexy.css"
                                               target="_blank"
                                               className="b-install__code">
                                                https://cdn.jsdelivr.net/npm/flexy-framework/release/flexy.css
                                            </a>
                                        </li>
                                        <li className="b-install__li">
                                            <div className="b-install__text">
                                                use the GitHub repository to get
                                                the latest development version
                                            </div>
                                            <a
                                                href="https://github.com/studio107/flexy"
                                                target="_bank"
                                                className="b-install__code"
                                            >
                                                https://github.com/studio107/flexy
                                            </a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="b-why__container">
            <div className="b-wrapper">
                <div className="b-row">
                    <div className="b-col b-col_small_12">
                        <div className="b-why__title">Built for scale</div>

                        <div className="b-block-grid b-block-grid_small_1 b-block-grid_medium_2 b-block-grid_large_4">
                            <div className="b-block-grid__item">
                                <div className="b-why__item">
                                    <img
                                        src={require('./responsive.svg')}
                                        className="b-why__icon"
                                    />
                                    <div className="b-why__text">
                                        100% responsive
                                    </div>
                                </div>
                            </div>
                            <div className="b-block-grid__item">
                                <div className="b-why__item">
                                    <img
                                        src={require('./coding.svg')}
                                        className="b-why__icon"
                                    />
                                    <div className="b-why__text">
                                        Modular system
                                    </div>
                                </div>
                            </div>
                            <div className="b-block-grid__item">
                                <div className="b-why__item">
                                    <img
                                        src={require('./strength.svg')}
                                        className="b-why__icon"
                                    />
                                    <div className="b-why__text">
                                        Build with flexbox
                                    </div>
                                </div>
                            </div>
                            <div className="b-block-grid__item">
                                <div className="b-why__item">
                                    <img
                                        src={require('./medal.svg')}
                                        className="b-why__icon"
                                    />
                                    <div className="b-why__text">
                                        Open source and free
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="b-wrapper">
            <div className="b-row">
                <div className="b-col b-col_small_12">
                    <div className="b-example">
                        <h2 className="b-heading">Grid</h2>
                        <Grid/>
                        <div className="b-space"/>
                        <Link to="/framework/core-grid" className="b-button">
                            Read more...
                        </Link>
                    </div>
                    <div className="b-example">
                        <h2 className="b-heading">Block grid</h2>
                        <BlockGrid/>
                        <div className="b-space"/>
                        <Link
                            to="/framework/core-block-grid"
                            className="b-button"
                        >
                            Read more...
                        </Link>
                    </div>
                    <div className="b-example">
                        <h2 className="b-heading">Buttons</h2>
                        <Button/>
                        <h2 className="b-heading">Form</h2>
                        <Form/>
                        <h2 className="b-heading">Groups</h2>
                        <FormGroup/>
                        <div className="b-space"/>
                        <Link to="/framework/block-form" className="b-button">
                            Read more...
                        </Link>
                    </div>
                    <div className="b-example">
                        <h2 className="b-heading">Info</h2>
                        <InfoGroup/>
                        <div className="b-space"/>
                        <Link
                            to="/framework/block-info-group"
                            className="b-button"
                        >
                            Read more...
                        </Link>
                    </div>
                    <div className="b-example">
                        <h2 className="b-heading">Avatars</h2>
                        <Avatar/>
                        <div className="b-space"/>
                        <Link to="/framework/block-avatar" className="b-button">
                            Read more...
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="b-space"/>

        <div className="b-batreon">
            <div className="b-batreon__description">
                Support <strong>Flexy SCSS library</strong> on Patreon
            </div>
            <a
                className="b-button"
                href="https://www.patreon.com/max107"
                target="_blank"
            >
                Become a patron
            </a>
        </div>
    </div>
)

export default IndexPage
