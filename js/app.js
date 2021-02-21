'use strict';
const workingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const Seattle = {
  location: 'Seattle',
  minCus: 23,
  maxCus: 65,
  avgCookie: 6.3,

  generateRandomNumber:function ( min, max ) {
    return ( ( Math.random() * ( max - min + 1 ) + min ) );
  },



  render: function(){
    const parentElement = document.getElementById ( 'locationProfiles' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.location;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < workingHours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workingHours[i]}: ${Math.floor( this.generateRandomNumber( this.minCus, this.maxCus )* this.avgCookie )}`;
    }
  }
};


Seattle.render();

const Tokyo = {
  location: 'Tokyo',
  minCus: 3,
  maxCus: 24,
  avgCookie: 1.2,

  generateRandomNumber:function ( min, max ) {
    return ( ( Math.random() * ( max - min + 1 ) + min ) );
  },



  render: function(){
    const parentElement = document.getElementById ( 'locationProfiles' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.location;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < workingHours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workingHours[i]}: ${Math.floor( this.generateRandomNumber( this.minCus, this.maxCus )* this.avgCookie )}`;
    }
  }
};


Tokyo.render();

const Dubai = {
  location: 'Dubai',
  minCus: 11,
  maxCus: 38,
  avgCookie: 3.7,

  generateRandomNumber:function ( min, max ) {
    return ( ( Math.random() * ( max - min + 1 ) + min ) );
  },



  render: function(){
    const parentElement = document.getElementById ( 'locationProfiles' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.location;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < workingHours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workingHours[i]}: ${Math.floor( this.generateRandomNumber( this.minCus, this.maxCus )* this.avgCookie )}`;
    }
  }
};


Dubai.render();

const Paris = {
  location: 'Paris',
  minCus: 20,
  maxCus: 38,
  avgCookie: 2.3,
  finalNumber: [],
  generateRandomNumber:function ( min, max ) {
    return ( ( Math.random() * ( max - min + 1 ) + min ) );
  },



  render: function(){
    const parentElement = document.getElementById ( 'locationProfiles' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.location;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < workingHours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workingHours[i]}: ${Math.floor( this.generateRandomNumber( this.minCus, this.maxCus )* this.avgCookie )}`;
    }
  }
};


Paris.render();

const Lima = {
  location: 'Lima',
  minCus: 2,
  maxCus: 16,
  avgCookie: 4.6,

  generateRandomNumber:function ( min, max ) {
    return ( ( Math.random() * ( max - min + 1 ) + min ) );
  },



  render: function(){
    const parentElement = document.getElementById ( 'locationProfiles' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.location;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < workingHours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workingHours[i]}: ${Math.floor( this.generateRandomNumber( this.minCus, this.maxCus )* this.avgCookie )}`;
    }
  }
};


Lima.render();
