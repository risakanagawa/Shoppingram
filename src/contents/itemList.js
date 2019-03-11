import React from "react";
import { connect } from "react-redux";
import { fetchAllNews } from "../actions";
import { Card, Icon, Image } from "semantic-ui-react";

import "../components/style.scss";

class itemList extends React.Component {
  componentDidMount() {
    this.props.fetchAllNews();
  }

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
          <Card key={idx}>
            <Image height="200px" src={news.urlToImage} />
            <Card.Content>
              <Card.Header>{news.title}</Card.Header>
              <Card.Description>{news.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>{publishedDate}</Card.Content>
            <Card.Content extra>{news.source.name}</Card.Content>
          </Card>
        );
      })
    );
  }

  render() {
    console.log(this.props.topNews);
    return (
        <div className='row'>{this.renderList()}</div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { topNews: state.articles.topNews };
};

export default connect(
  mapStateToProps,
  { fetchAllNews }
)(itemList);
