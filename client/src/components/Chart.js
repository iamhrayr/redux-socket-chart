import React, {Component} from 'react';
import Highcharts from 'highcharts';
import {connect} from 'react-redux';
import {changeView} from '../actions/charts';
import {connectSocket} from '../actions/socket';


class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartLiveView: false
        }
    }

    componentDidMount(){
        this.renderChart();
    }

    renderChart(){
        const {data} = this.props;
        const options = {
            title: {
                text: data.id
            },
            series: [{
                data: data.points
            }]
        }
        const chart = new Highcharts.chart(`chart-${data.id}`, options);
    }

    changeView(){
        this.props.changeView(this.props.index);
    }

    render(){
        let buttonText = this.state.chartLiveView ? 'back to static' : 'Change to live';
        return (
            <div className='chart-wrapper'>
                <button onClick={this.changeView.bind(this)}>{buttonText}</button>
                <div id={`chart-${this.props.data.id}`} />
            </div>
        )
    }
}

export default connect(null, {changeView, connectSocket})(Chart);