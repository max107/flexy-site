import React from 'react'

export default () => (
    <div>
        <div className="b-form__row">
            <label htmlFor="input1" className="b-label">
                Text
            </label>
            <input
                id="input1"
                type="text"
                className="b-input"
                placeholder="Hello world"
            />
        </div>
        <div className="b-form__row">
            <label htmlFor="input2" className="b-label">
                Textarea <span className="b-badge">Hello badge</span>
            </label>
            <textarea
                id="input2"
                className="b-input b-input_textarea"
                placeholder="Hello world"
            />
        </div>
        <div className="b-form__row">
            <label htmlFor="select1" className="b-label">
                Select
            </label>
            <select id="select1" className="b-input b-input_select">
                <option value="foo">foo</option>
                <option value="bar">bar</option>
            </select>
        </div>
        <div className="b-pane">
            <div>
                <input
                    type="checkbox"
                    className="b-input b-input_choice"
                    id="checkbox1"
                />
                <label className="b-label" htmlFor="checkbox1">
                    Checkbox
                </label>
            </div>
            <div>
                <input
                    type="checkbox"
                    className="b-input b-input_choice"
                    id="checkbox2"
                />
                <label className="b-label" htmlFor="checkbox2">
                    Checkbox
                </label>
            </div>
            <div>
                <input
                    type="radio"
                    className="b-input b-input_choice"
                    name="radio"
                    id="radio1"
                />
                <label className="b-label" htmlFor="radio1">
                    Radio 1
                </label>
            </div>
            <div>
                <input
                    type="radio"
                    className="b-input b-input_choice"
                    name="radio"
                    id="radio2"
                />
                <label className="b-label" htmlFor="radio2">
                    Radio 2
                </label>
            </div>
            <div>
                <input
                    type="radio"
                    className="b-input b-input_choice"
                    name="radio"
                    id="radio3"
                />
                <label className="b-label" htmlFor="radio3">
                    Radio 3
                </label>
            </div>
        </div>
    </div>
)
