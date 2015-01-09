function Shop(location, hours, minTraffic, maxTraffic, percentEntering, donutsPerCustomer) {
    this.location          = location;
    this.hours             = hours;
    this.minTraffic        = minTraffic;
    this.maxTraffic        = maxTraffic;
    this.percentEntering   = percentEntering;
    this.donutsPerCustomer = donutsPerCustomer;  

    this.donutsPerHour = function() {
      return Math.round(((Math.random() * (this.maxTraffic - this.minTraffic) + this.minTraffic)) * (this.percentEntering * .01) * this.donutsPerCustomer);
    }    
    this.salesReport = function() {
      for(var hours = 1; hours <= 11; hours++) 
        console.log(this.location + " needs to produce " + this.donutsPerHour() + " donuts hour " + hours);
    }
  }; 
  var location = new Shop(document.getElementById('location')),
  (document.getElementById('hours')),
  (document.getElementById('minTraffic')),
  (document.getElementById('maxTraffic')),
  (document.getElementById('percentEntering')),
  (document.getElementById('donutsPerCustomer'));
  
  location.salesReport();
