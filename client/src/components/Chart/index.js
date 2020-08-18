import {Pie} from 'react-chartjs-2';
import React, {Component} from 'react'

class Chart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            labels: ['Javascript', 'HTML', 'CSS', 'Express', 'Node', 'MongoDB', 'React'],
            datasets: [{
                data: [30, 10, 10, 20, 10, 10, 10],
                backgroundColor: ['pink', 'red', 'blue', 'yellow', 'green', 'orange', 'purple']
            }]
        }
    }

    render() {
        return (
            <div>
                <h1>Skills</h1>
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