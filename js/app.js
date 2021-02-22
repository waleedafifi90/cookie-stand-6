'use strict';
const workingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


function tableHead (){
  const parentElement = document.getElementById ( 'locationProfiles' );
  const articleElement = document.createElement( 'article' );
  parentElement.appendChild( articleElement );
  const tableElement = document.createElement( 'table' );
  articleElement.appendChild( tableElement );


  const tr1Element = document.createElement( 'tr' );
  tableElement.appendChild( tr1Element );

  const th1Element= document.createElement( 'th' );
  tr1Element.appendChild( th1Element );
  th1Element.textContent= 'location';

  for( let i=0 ; i<workingHours.length; i++ ){
    const th2Element= document.createElement( 'th' );
    tr1Element.appendChild( th2Element );
    th2Element.textContent= `${workingHours[i]}`;
  }

}
function Market ( location, minCus, maxCus, avgCookie ){
  this.location = location;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookie = avgCookie;
  this.customerHour = [];
  this.cookiesSale = [];
  this.total = 0;
}

Market.prototype.getRandomint = function ( min,max ){
  return Math.floor( Math.random()*( max -min )+min );
};
Market.prototype.getCookiesale = function (){
  for( let i=0;i< workingHours.length; i++ ){
    let cookie = this.getRandomint( this.minCus, this.maxCus )* this.avgCookie ;
    this.cookiesSale.push( Math.ceil( cookie ) );
    this.total = this.total+ cookie;
  }
};
Market.prototype.getCustomer = function (){
  for( let i=0;i< workingHours.length; i++ ){
    let customer = Math.ceil( this.getRandomint( this.minCus, this.maxCus ) );
    this.cookiesSale.push( customer );
  }

};
Market.prototype.render = function (){
  // const parentElement = document.getElementById ( 'locationProfiles' );
  // const tableElement = document.createElement( 'table' );
  // parentElement.appendChild( tableElement );

  const parentElement = document.getElementById ( 'locationProfiles' );
  const articleElement = document.createElement( 'article' );
  parentElement.appendChild( articleElement );
  const tableElement = document.createElement( 'table' );
  articleElement.appendChild( tableElement );

  const tr1Element = document.createElement( 'tr' );
  tableElement.appendChild( tr1Element );

  const clelement = document.createElement( 'td' );
  tr1Element.appendChild( clelement );
  clelement.textContent = `${this.location}`;

  for( let i = 0; i < workingHours.length; i++ ) {
    const tdElement = document.createElement( 'td' );
    tr1Element.appendChild( tdElement );
    tdElement.textContent = `${this.cookiesSale[i]}`;
  }
  const tableFooter = document.createElement( 'tfoot' );

  tableFooter.textContent = 'total';

};

tableHead();
const Seattle = new Market ( 'Steattle', 23, 65, 6.3 );
Seattle.getCookiesale();
Seattle.getCustomer();
Seattle.render();

const Tokyo = new Market ( 'Tokyo', 3, 24, 1.2 );
Tokyo.getCookiesale();
Tokyo.getCustomer();
Tokyo.render();

const Dubai = new Market ( 'Dubai', 23, 65, 6.3 );
Dubai.getCookiesale();
Dubai.getCustomer();
Dubai.render();

const Paris = new Market ( 'Paris', 23, 65, 6.3 );
Paris.getCookiesale();
Paris.getCustomer();
Paris.render();

const Lima = new Market ( 'Lima', 23, 65, 6.3 );
Lima.getCookiesale();
Lima.getCustomer();
Lima.render();
