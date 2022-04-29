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
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              {" "}
              When visiting Nha Trang, you'll feel right at home at Vinpearl Nha
              Trang Bay Resort & Villas, which offers quality accommodation and
              great service. Situated only 10.4 km from the city center, guests
              are well located to enjoy the town's attractions and activities.
              With its convenient location, the hotel offers easy access to the
              city's must-see destinations.
            </p>
            <p>
              Vinpearl Nha Trang Bay Resort & Villas offers impeccable service
              and all the essential amenities to invigorate travelers. Free
              Wi-Fi in all rooms, 24-hour front desk, 24-hour room service,
              facilities for disabled guests, luggage storage are just a few of
              the facilities that set Vinpearl Nha Trang Bay Resort & Villas
              apart from other hotels in the city.{" "}
            </p>
            <p>
              Guests can choose from 483 hotel rooms and 173 villas, all of
              which exude an atmosphere of total peace and harmony. The hotel
              offers wonderful recreational facilities such as private beach,
              fitness center, sauna, golf course (within 3 km), outdoor pool to
              make your stay truly unforgettable. Vinpearl Nha Trang Bay Resort
              & Villas is a smart choice for travelers to Nha Trang, offering a
              relaxed and hassle-free stay every time.
            </p>
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
