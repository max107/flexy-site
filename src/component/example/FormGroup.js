import React from 'react'

export default () => (
    <div>
        <div className="b-form__row">
            <div className="b-group">
                <div className="b-input-group">
                    <a href="javascript:void(0)" className="b-button">
                        Default
                    </a>
                    <button className="b-button">Default</button>
                </div>
                <div className="b-input-group">
                    <a
                        href="javascript:void(0)"
                        className="b-button b-button_dark"
                    >
                        Dark
                    </a>
                    <button className="b-button b-button_dark">Dark</button>
                </div>
                <div className="b-input-group">
                    <a
                        href="javascript:void(0)"
                        className="b-button b-button_success"
                    >
                        Success
                    </a>
                    <button className="b-button b-button_success">
                        Success
                    </button>
                </div>
            </div>
        </div>
        <div className="b-form__row">
            <div className="b-group">
                <div className="b-input-group">
                    <input
                        type="text"
                        placeholder="Hello world"
                        className="b-input"
                    />
                    <button className="b-button">button</button>
                </div>
                <div className="b-input-group">
                    <input
                        type="text"
                        placeholder="Hello world"
                        className="b-input"
                    />
                    <select className="b-input b-input_select">
                        <option>Hello world 1</option>
                        <option>Hello world 2</option>
                        <option>Hello world 3</option>
                        <option>Hello world 4</option>
                        <option>Hello world 5</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="b-form__row">
            <div className="b-group">
                <div className="b-input-group">
                    <input
                        type="text"
                        placeholder="Hello world"
                        className="b-input"
                    />
                    <button className="b-button">button</button>
                </div>
                <div className="b-input-group">
                    <input
                        type="text"
                        placeholder="Hello world"
                        className="b-input"
                    />
                    <select className="b-input b-input_select">
                        <option>Hello world 1</option>
                        <option>Hello world 2</option>
                        <option>Hello world 3</option>
                        <option>Hello world 4</option>
                        <option>Hello world 5</option>
                    </select>
                    <button className="b-button">button</button>
                </div>
            </div>
        </div>
    </div>
)
