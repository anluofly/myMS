import React from 'react'
import { Row, Col } from 'antd';
import { connect } from 'react-redux'
import Util from '../../utils/utils'
import axios from '../../axios'
import './index.less'

class Header extends React.Component {
    componentWillMount() {
        this.setState({
            userName: '小毛虫'
        })
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        });
        this.getWeatherAPIDate();
    }
    getWeatherAPIDate() {
        let city = '上海';
        axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res) => {
            if (res.status === 'success') {
                console.log(res);
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather
                })
            }
        })
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，{this.state.userName} </span>
                        <span style={{color: '#ff9400'}}>退出</span>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        { this.props.menuName }
                    </Col>
                    <Col className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt="" />
                        </span>
                        <span className="weather-detail">
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {
        menuName: state.menuName
    }
};
export default connect(mapStateToProps)(Header)