import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import HomeHeader from "../../HomePage/HomeHeader";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils/constant";
import { getDetailInforRooms } from "../../../services/userService";
import "./DetailRoom.scss";

class DetailRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailRoom: {},
    };
  }

  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      let res = await getDetailInforRooms(id);
      if (res && res.errCode === 0) {
        this.setState({
          detailRoom: res.data,
        });
      }
    }
  }

  render() {
    console.log("check state detail room", this.state);
    let { detailRoom } = this.state;
    let { language } = this.props;
    let nameVi = "",
      nameEn = "";
    if (detailRoom && detailRoom.positionData) {
      nameVi = `${detailRoom.positionData.valueVi} ${detailRoom.lastName} ${detailRoom.firstName}`;
      nameEn = `${detailRoom.positionData.valueEn} ${detailRoom.lastName} ${detailRoom.firstName}`;
    }
    return (
      <>
        <HomeHeader isShowBanner={false} />
        <div className="detail-room-container">
          <div className="intro-room">
            <div
              className="content-left"
              style={{
                backgroundImage: `url(${
                  detailRoom && detailRoom.image ? detailRoom.image : ""
                })`,
              }}
            ></div>
            <div className="content-right">
              <div className="up">
                {language === LANGUAGES.VI ? nameVi : nameEn}
              </div>
              <div className="down">
                {detailRoom &&
                  detailRoom.Markdown &&
                  detailRoom.Markdown.description && (
                    <span>{detailRoom.Markdown.description}</span>
                  )}
              </div>
            </div>
          </div>
          <div className="schedule-room"></div>
          <div className="detail-infor-room">
            {detailRoom &&
              detailRoom.Markdown &&
              detailRoom.Markdown.contentHTML && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: detailRoom.Markdown.contentHTML,
                  }}
                ></div>
              )}
          </div>
          <div className="comment-room"></div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //fire event
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailRoom);
