export default (state = [], action) => {
  // init index & quote for lookup & safe copy
  let index;
  let quote;

  switch (action.type) {

    case "ADD_QUOTE":
      return state.concat(action.quote);

    case "DOWNVOTE_QUOTE":
      index = state.findIndex((quote) => quote.id === action.quoteId);
      quote = state[index];
      // only downvote if any votes are present
      if (quote.votes > 0) {
        // safely copy state
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(index + 1)
        ];
      };
      return state;

    case "REMOVE_QUOTE":
      return state.filter((quote) => quote.id !== action.quoteId);
    
    case "UPVOTE_QUOTE":
      index = state.findIndex((quote) => quote.id === action.quoteId);
      quote = state[index];
      // safely copy state
      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];

    default:
      return state;
  }
}