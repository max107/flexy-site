import React from 'react'

const sizes = [
    'm-size_xsmall',
    'm-size_small',
    'm-size_medium',
    'm-size_large',
    'm-size_xlarge',
    'm-size_xxlarge',
]

export default () => {
    const buttonNodes = sizes.map((size, i) => (
        <div key={i} className="b-form__row">
            <button className={`b-button ${size}`}>Button</button>{' '}
            <span className={size}>{size}</span>
        </div>
    ))
    return <div>{buttonNodes}</div>
}
