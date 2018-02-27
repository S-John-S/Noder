function placeQuery(queryNumber){
    console.log('This is Query',queryNumber);

    sendData(function () {
        console.log('Sent Data for Query',queryNumber)
    })

}
//Simulating 3 second database comm
function sendData(callback) {
    setTimeout(callback,3000)
}
//Simulating a request
placeQuery(1);
placeQuery(2);
placeQuery(3);
placeQuery(4);
placeQuery(5);