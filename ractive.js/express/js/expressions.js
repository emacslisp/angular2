var ractive = new Ractive({
  el: '#container',
  template: '#template',
  data: {
    city: 'Copenhagen',
    population: 763908,
    inCopenhagen: 601448,
      colors:['red','green','blue'],
      color: 'green',
    format: function ( num ) {
      if ( num > 1000 ) return ( Math.floor( num / 1000 ) ) + ',' + ( num % 1000 );
      return num;
    }
  }
});
