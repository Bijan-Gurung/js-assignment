//Q1. write a js function that  can  calculates the final price
// formula is distance multiply unitKmPrice
//expected output is 600 

const rideDetails= {
    pickup: 'balaju',
    destination: 'thamel',
    distance: '20km',
    unitKmPrice: 30
}
const calculateFare = (rideDetails) => {
    const distance = parseInt(rideDetails.distance);
    const unitKmPrice = parseInt(rideDetails.unitKmPrice);
    const fare = distance * unitKmPrice;
  
    return fare;
  }
  const finalFare = calculateFare(rideDetails);
  console.log(finalFare)


//Q2 write a js function that checks if the object has status success or not
//should return true or false

const status1 ={
    status: 'onTheWay'
}
const status2 ={
    status: 'success'
}
const checkIfSuccess = (statusObject) => {
    if (statusObject.status === 'success') {
      return true;
    } else {
      return false;
    }
  }
  console.log(checkIfSuccess(status1))  //should return false

  console.log(checkIfSuccess(status2))  //should return true


