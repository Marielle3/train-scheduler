    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCIa5HOT3mMakob_A8n3XRcysPuF11IaxY",
    authDomain: "train-scheduler-ba734.firebaseapp.com",
    databaseURL: "https://train-scheduler-ba734.firebaseio.com",
    projectId: "train-scheduler-ba734",
    storageBucket: "train-scheduler-ba734.appspot.com",
    messagingSenderId: "186060136314",
    appId: "1:186060136314:web:f745f5600cd38a66"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  //holding variables for new added trains 
 var newTrain = {
   name: trainName,
   destination: trainDestination,
   rate: trainRate,
   arrival: trainArrival,
   minutesTil: trainTil
 };

  //logging to the console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.rate);
  console.log(newTrain.arrival);
  console.log(newTrain.minutesTil);

  alert("New train successfully added");

  //clear textbox 
  
//event listener
  $('#submit').on('click', function (event) {
    event.preventDefault();

    //values grabbed from the textbox
    trainName = $('#nameInputName').val().trim();
    trainDestination = $('#nameInputDestination').val().trim();
    trainRate = $('#nameInputRate').val().trim();
    trainArrival = $('#nameInputTime').val().trim();
    

    database.ref().push({
      name: trainName,
      destination: trainDestination,
      rate: trainRate,
      arrival: trainArrival,
      minutesTil: trainTil
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });

database.ref().on("child_added", function(snapshot) {
// //adding employers to the table
// $('#table').append(" '<div class='well'><span class='nameInputName'> " +
// childSnapshot.val().name + 
// " </span><span class='nameInputDestination'> " + childSnapshot.val().destination +
// " </span><span class='nameInputTime'> " + childSnapshot.val().time +
// " </span><span class='nameInputRate'> " + childSnapshot.val()rate +
// " </span></div>");

// });

var trainName = childSnapshot.val().name;
var trainDestination = childSnapshot.val().destination;
var trainRate = childSnapshot.val().rate;
var trainArrival = childSnapshot.val().arrival;
var trainTil = childSnapshot.val().minutesTil;

var newRow = $('<tr>').append(
  $('<td>').text(trainName),
  $('<td>').text(trainDestination),
  $('<td>').text(trainRate),
  $('<td>').text(trainArrival),
  $('<td>').text(trainTil)
);
//append rows of added train station to the table
$("#train-table > tbody").append(newRow);
});
//firebase watcher and changing html to reflecr
  // database.ref().on("value", function (snapshot) {
  //   $("#nameInputName1").text(snapshot.val().name);
  //   $("#nameInputDestination1").text(snapshot.val().name);
  //   $("#nameInputTime1").text(snapshot.val().name);
  //   $("#nameInputRate1").text(snapshot.val().name);
  // });
