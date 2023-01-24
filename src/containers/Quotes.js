import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { downvoteQuote, removeQuote, upvoteQuote } from "../actions/quotes";

class Quotes extends Component {
 
  render() {

    const { downvoteQuote, quotes, removeQuote, upvoteQuote } = this.props;

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">

              {
                quotes.map((quote) => (
                  <QuoteCard
                    downvoteQuote={downvoteQuote}
                    key={quote.id}
                    quote={quote}
                    removeQuote={removeQuote}
                    upvoteQuote={upvoteQuote}
                  />
                ))
              }

            </div>
          </div>
        </div>
      </div>
    );
  };

};

const mapStateToProps = ({ quotes }) => ({ quotes });

export default connect(mapStateToProps, { downvoteQuote, removeQuote, upvoteQuote })(Quotes);