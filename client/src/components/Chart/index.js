import {Pie} from 'react-chartjs-2';
import React, {Component} from 'react'
import "./style.css"

class Chart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            labels: ['Javascript', 'HTML', 'CSS', 'Express', 'Node', 'MongoDB', 'React'],
            datasets: [{
                data: [30, 10, 10, 20, 10, 10, 10],
                backgroundColor: ['red', 'orange', 'yellow', 'blue', 'green', 'indigo', 'purple']
            }]
        }
    }

    render() {
        return (
            <div class="pie">
                <figcaption id="skills"><strong>Skills</strong></figcaption>
                <Pie
                    data={{
                        labels: this.state.labels,
                        datasets: this.state.datasets
                    }}
                    height='50%'
                />
                <br />
            </div>
        )
        }
}

export default Chart;