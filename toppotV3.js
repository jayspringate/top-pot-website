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
    for(var hours = 0; hours <= 10; hours++) { 
      console.log(this.location + " needs to produce " + this.donutsPerHour() + " donuts per hour " + hours);
      document.getElementsByClassName("output")[hours].innerHTML = (this.location + " needs to produce " + this.donutsPerHour() + " donuts per hour " + hours);
    }
  }
}
function getFat() {    
  var donutShop = new Shop (document.getElementById("location").value,
                            document.getElementById("hours").value,
                            document.getElementById("minTraffic").value,
                            document.getElementById("maxTraffic").value,
                            document.getElementById("percentEntering").value,
                            document.getElementById("donutsPerCustomer").value);

  donutShop.salesReport();
  
