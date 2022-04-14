import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">Truyền thông</div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="650"
              height="420"
              src="https://www.youtube.com/embed/bSFdtZDAGQ4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right">
              <p> When visiting Nha Trang, you'll feel right at home at Vinpearl Nha Trang Bay Resort & Villas, which offers quality accommodation and great service. Situated only 10.4 km from the city center, guests are well located to enjoy the town's attractions and activities. With its convenient location, the hotel offers easy access to the city's must-see destinations.</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
