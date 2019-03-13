import React from "react";
import { connect } from "react-redux";
import { Card, Icon, Image } from "semantic-ui-react";

import "../components/style.scss";

class itemList extends React.Component {
  renderList() {
    return (
      this.props.topNews &&
      this.props.topNews.map((news, idx) => {
        let publishedData = new Date(news.publishedAt);
        const YYYY = publishedData.getFullYear();
        const MM = ("00" + (publishedData.getMonth() + 1)).slice(-2);
        const dd = ("00" + publishedData.getDate()).slice(-2);
        const hh = ("0" + publishedData.getHours()).slice(-2);
        const mm = ("0" + publishedData.getMinutes()).slice(-2);
        const publishedDate = YYYY + "/" + MM + "/" + dd + ", " + hh + ":" + mm;
        return (
          <Card key={idx} className='ui-card'>
            <Card.Content
              className="card-content"
              style={{
                background: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${news.urlToImage}) no-repeat center center / cover`,
              }}
            >
              <Card.Header className='card-text-white'>{news.title}</Card.Header>
              <Card.Description className='card-text-white'>{news.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>{publishedDate}</Card.Content>
            <Card.Content extra>{news.source.name}</Card.Content>
            <Card.Content extra>
              <Icon link name="heart outline" />
            </Card.Content>
          </Card>
        );
      })
    );
  }

  render() {
    return <div className="item-list-container row">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    topNews: state.articles.topNews
  };
};

export default connect(mapStateToProps)(itemList);
