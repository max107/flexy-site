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
    const avatarNodes = sizes.map((size, i) => (
        <img
            key={i}
            className={`b-avatar ${size}`}
            src="https://picsum.photos/500/500/?image=1062"
        />
    ))
    const avatarTextNodes = sizes.map((size, i) => (
        <div
            key={i}
            data-avatar="Yo"
            className={`b-avatar b-avatar_text ${
                i % 2 === 0 ? '' : 'b-avatar_error'
            } ${size}`}
        />
    ))
    return (
        <div className="b-row">
            <div className="b-col b-col_small_12 b-col_medium_6">
                {avatarNodes}
            </div>
            <div className="b-col b-col_small_12 b-col_medium_6">
                {avatarTextNodes}
            </div>
        </div>
    )
}
