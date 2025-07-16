//react and redux are added by clicking settings
//and searching for 'react' and 'redux' then include
//those as imports automatically

//import React from "react";

// link to get the quotes
const quoteLink = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';




// empty array to store the quotes from the API link
const quotes = [];

// fetch the quotes data
const fetchData = async () => {
  try {
    const res = await fetch(quoteLink);
    const data = await res.json();
    quotesData = data;
  } catch (err) {
    console.log(err);
  }
};

// calling the function to fetch
fetchData();

//  function get a single, random quote
const getRandomQuote = () => {
  return quotesData.quotes[
    Math.floor(Math.random() * quotesData.quotes.length)
  ];
}


// component that displays title
class QuoteHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render (){
  return (
    <div className="quoteHeader">
      <h1>"Famous Quotes:"</h1>
        </div>
  );
      }
}


// component that displays the quote and author and button
class QuoteBoxContent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      quote: '',
      author: '',
      link: 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (event) {
    const red = Math.round(Math.random()*255);
    const green = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    document.getElementById("new-quote").style.backgroundColor = `rgb(${red},${green},${blue})`;

    const currentQuote = getRandomQuote();

    this.setState({
      quote: currentQuote.quote,
      author: currentQuote.author,
      link: this.state.link + '"' + currentQuote.quote + '" ' + currentQuote.author
    })
  };
  render () {
  return (
    <div className="quoteContent">
    <div id="quote-box" className="quoteBoxContent">
    <p id="text" className="theQuote">"{this.state.quote}"</p>
      <br/>
      <p id="author" className="theAuthor">-{this.state.author}</p>
        <button id="new-quote" className="quoteBtn" onClick={this.handleClick}>New Quote</button>
      <a id="tweet-quote" title="Tweet this quote!" target="_top" href={this.state.link}><i id="icon" className="fa-brands fa-twitter"></i></a>
      </div>
        </div>
      );
      }
}

// main app renders all components
class App extends React.Component {
  constructor (props) {
    super(props);

  }
  render () {
  return (
<section>
      <div class="row">
        <div class="col">

       <QuoteHeader />
       <QuoteBoxContent />


        </div>
      </div>

 </section>
  );
  }
}

// render all in App


ReactDOM.render(<App />, document.getElementById("app"));