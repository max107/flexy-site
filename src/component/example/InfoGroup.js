import React from 'react'

export default () => (
    <div className="b-block-grid b-block-grid_small_2 b-block-grid_medium_3 b-block-grid_large_4">
        <div className="b-block-grid__item">
            <div className="b-info__label">Area</div>
            <div className="b-info__value">32 m.</div>
        </div>
        <div className="b-block-grid__item">
            <div className="b-info__label">Price</div>
            <div className="b-info__value">
                3 200 <div className="b-badge b-badge_error">hot</div>
            </div>
        </div>
        <div className="b-block-grid__item">
            <div className="b-info__label">Rooms</div>
            <div className="b-info__value">2</div>
        </div>
        <div className="b-block-grid__item">
            <div className="b-info__label">Floor</div>
            <div className="b-info__value">3 / 5</div>
        </div>
    </div>
)
