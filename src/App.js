import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';
import './bootstrap.css';

function Hero() {
  return (
    <div className="row">
      <div className="jumnptron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
}

function Book({title, onClick}){
  return (<div className="answer" onClick = {() => onClick(title)}>
      <h4>{title}</h4>
    </div>);
}

function Turn({author, books, highlight, onAnswerSelected}){
  function highlightToBgColor(highlight) {
    const mapping = {
      "none": "",
      "correct": "green",
      "wrong": "red"
    };

    return mapping[highlight];
  };

  return (<div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
    <div className="col-5 offset-1">
      <img src={author.imageUrl} className="authorimage" alt="Author" />
    </div>
    <div className="col-6">
      {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected}></Book>)}
    </div>
  </div>);
}

Turn.propTypes ={
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight:PropTypes.string
};

function Continue() {
  return (<div></div>);
}

function Footer() {
  return (<div id="footer" className="row">
    <div className="col-12">
      <p className="text-muted credit">
        All images are from Wikemedia Commons and are in the public domain.
      </p>
    </div>
  </div>);
}

function App({turnData, highlight, onAnswerSelected}){
    return (
      <div className="container-fluid">
        {/* <Identity /> */}
        <Hero/>
        <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
        <Continue/>
        <Footer></Footer>
      </div>
    );
}

export default App;
