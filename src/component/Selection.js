import React, { Component } from 'react'

const options = [
    {
        type: "radio",
        label: "Radio",
        value: "radio",
    },
    {
        type: "checkbox",
        label: "Checkbox",
        value: "checkbox",
    },
    {
        type: "textarea",
        label: "Textarea",
        value: "textarea",
    }
];


class Selection extends Component {
    constructor() {
        super();
        this.displayData = [];
        this.state = { showData: [], val: "" }

    }

    addOp() {
        this.displayData.push(<div type="radio">{this.state.val}</div>);
        this.setState({
            displayData: [],
            val: " "
        });
    }

    handleChange(e) {
        let selection = e.target.value;
        this.setState({
          val :selection
        });
  }


    render() {
        return (
            <div>
                <div id="App">
                    <select value={this.state.val} onChange={this.handleChange}>
                        {options.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Soal</label><br />
                    <input type="text" id="soal" /></div>
                <div>
                    <label>Jawaban A</label><br />
                    <input type="text" id="A" /></div>
                <div>
                    <label>Jawaban B</label><br />
                    <input type="text" id="B" /></div>
                <div>
                    <label>Jawaban C</label><br />
                    <input type="text" id="C"/></div>
                <div>
                    <label>Jawaban D</label><br />
                    <input type="text" id="D" />
                </div>
                <div>
                    <label>Kunci</label><br />
                    <input type="text" id="kunci"/>
                </div>
                <div>
                    <label>Score</label><br />
                    <input type="text" id="score"/>
                </div>
                <input type="submit" onClick={this.addOp} />
                <div>{this.displayData}</div>
            </div>
        )
    }
}

export default Selection;