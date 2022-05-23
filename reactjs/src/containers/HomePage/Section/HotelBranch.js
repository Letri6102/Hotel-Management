import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./HotelBranch.scss";
import Slider from "react-slick";
import { getAllHotel } from "../../../services/userService";
import { withRouter } from "react-router";

class HotelBranch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHotel: [],
    };
  }

  async componentDidMount() {
    let res = await getAllHotel();
    if (res && res.errCode === 0) {
      this.setState({
        dataHotel: res.data ? res.data : [],
      });
    }
  }

  handleViewDetailHotel = (hotel) => {
    if (this.props.history) {
      this.props.history.push(`/detail-hotel/${hotel.id}`);
    }
  };

  render() {
    let { dataHotel } = this.state;
    return (
      <div className="section-share section-hotel-branch">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Chi nhánh</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              {dataHotel &&
                dataHotel.length > 0 &&
                dataHotel.map((item, index) => {
                  return (
                    <div
                      className="section-customize hotel-child"
                      key={index}
                      onClick={() => this.handleViewDetailHotel(item)}
                    >
                      <div
                        className="bg-image section-hotel-branch"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div className="hotel-name">{item.name}</div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HotelBranch)
);
