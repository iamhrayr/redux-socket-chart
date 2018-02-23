import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCharts} from '../actions/charts';
import Chart from './Chart';

class Charts extends Component {

    componentDidMount(){
        this.props.getCharts();
    }

    renderCharts(){
        return this.props.charts && this.props.charts.map((chart, i) => {
            return <Chart key={chart.id} data={chart} index={i}/>
        });
    }

    render(){
        return (
            <React.Fragment>
                {this.renderCharts()}
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    return {
        charts: state.charts
    }
}

export default connect(mapStateToProps, {getCharts})(Charts);