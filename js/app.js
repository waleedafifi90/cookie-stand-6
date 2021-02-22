'use strict';
const workingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const Seattle = {
  location: 'Seattle',
  minCus: 23,
  maxCus: 65,
  avgCookie: 6.3,
  customerHour: [],
  cookiesSale:[],
  total: 0,

  getRandomint: function( min, max ){
    return Math.floor( Math.random()*( max -min )+min );
  },
  getCookiesale : function(){

    for( let i=0;i< workingHours.length; i++ ){
      let cookie = this.getRandomint( this.minCus, this.maxCus )* this.avgCookie ;
      this.cookiesSale.push( Math.ceil( cookie ) );
      this.total = this.total+ cookie;
    }
  },

  getCustomer: function(){
    for( let i=0;i<workingHours.length; i++ ){
      let customer = Math.ceil( this.getRandomint( this.minCus, this.maxCus ) );
      this.cookiesSale.push( customer );

    }
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
      liElement.textContent = `${workingHours[i]}: ${this.cookiesSale[i]}`;
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `total: ${Math.floor( this.total )}`;
  }
};

Seattle.getCookiesale();
Seattle.getCustomer();
Seattle.render();

const Tokyo = {
  location: 'Tokyo',
  minCus: 3,
  maxCus: 24,
  avgCookie: 1.2,
  customerHour: [],
  cookiesSale:[],
  total: 0,

  getRandomint: function( min, max ){
    return Math.floor( Math.random()*( max -min )+min );
  },
  getCookiesale : function(){

    for( let i=0;i< workingHours.length; i++ ){
      let cookie = this.getRandomint( this.minCus, this.maxCus )* this.avgCookie ;
      this.cookiesSale.push( Math.ceil( cookie ) );
      this.total = this.total+ cookie;
    }
  },

  getCustomer: function(){
    for( let i=0;i<workingHours.length; i++ ){
      let customer = Math.ceil( this.getRandomint( this.minCus, this.maxCus ) );
      this.cookiesSale.push( customer );

    }
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
      liElement.textContent = `${workingHours[i]}: ${this.cookiesSale[i]}`;
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `total: ${Math.floor( this.total )}`;
  }
};

Tokyo.getCookiesale();
Tokyo.getCustomer();
Tokyo.render();

const Dubai = {
  location: 'Dubai',
  minCus: 11,
  maxCus: 38,
  avgCookie: 3.7,
  customerHour: [],
  cookiesSale:[],
  total: 0,

  getRandomint: function( min, max ){
    return Math.floor( Math.random()*( max -min )+min );
  },
  getCookiesale : function(){

    for( let i=0;i< workingHours.length; i++ ){
      let cookie = this.getRandomint( this.minCus, this.maxCus )* this.avgCookie ;
      this.cookiesSale.push( Math.ceil( cookie ) );
      this.total = this.total+ cookie;
    }
  },

  getCustomer: function(){
    for( let i=0;i<workingHours.length; i++ ){
      let customer = Math.ceil( this.getRandomint( this.minCus, this.maxCus ) );
      this.cookiesSale.push( customer );

    }
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
      liElement.textContent = `${workingHours[i]}: ${this.cookiesSale[i]}`;
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `total: ${Math.floor( this.total )}`;
  }
};

Dubai.getCookiesale();
Dubai.getCustomer();
Dubai.render();

const Paris = {
  location: 'Paris',
  minCus: 20,
  maxCus: 38,
  avgCookie: 2.3,
  customerHour: [],
  cookiesSale:[],
  total: 0,

  getRandomint: function( min, max ){
    return Math.floor( Math.random()*( max -min )+min );
  },
  getCookiesale : function(){

    for( let i=0;i< workingHours.length; i++ ){
      let cookie = this.getRandomint( this.minCus, this.maxCus )* this.avgCookie ;
      this.cookiesSale.push( Math.ceil( cookie ) );
      this.total = this.total+ cookie;
    }
  },

  getCustomer: function(){
    for( let i=0;i<workingHours.length; i++ ){
      let customer = Math.ceil( this.getRandomint( this.minCus, this.maxCus ) );
      this.cookiesSale.push( customer );

    }
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
      liElement.textContent = `${workingHours[i]}: ${this.cookiesSale[i]}`;
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `total: ${Math.floor( this.total )}`;
  }
};

Paris.getCookiesale();
Paris.getCustomer();
Paris.render();

const Lima = {
  location: 'Lima',
  minCus: 2,
  maxCus: 16,
  avgCookie: 4.6,
  customerHour: [],
  cookiesSale:[],
  total: 0,

  getRandomint: function( min, max ){
    return Math.floor( Math.random()*( max -min )+min );
  },
  getCookiesale : function(){

    for( let i=0;i< workingHours.length; i++ ){
      let cookie = this.getRandomint( this.minCus, this.maxCus )* this.avgCookie ;
      this.cookiesSale.push( Math.ceil( cookie ) );
      this.total = this.total+ cookie;
    }
  },

  getCustomer: function(){
    for( let i=0;i<workingHours.length; i++ ){
      let customer = Math.ceil( this.getRandomint( this.minCus, this.maxCus ) );
      this.cookiesSale.push( customer );

    }
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
      liElement.textContent = `${workingHours[i]}: ${this.cookiesSale[i]}`;
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `total: ${Math.floor( this.total )}`;
  }
};

Lima.getCookiesale();
Lima.getCustomer();
Lima.render();

