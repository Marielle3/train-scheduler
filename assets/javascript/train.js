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

//event listener
$('#submit').on('click', function (event) {
  event.preventDefault();

  //values grabbed from the textbox
  trainName = $('#nameInput').val().trim();
  trainDestination = $('#nameInputDestination').val().trim();
  trainRate = $('#nameInputRate').val().trim();
  trainArrival = $('#nameInputTime').val().trim();
    

  //holding variables for new added trains 
 var newTrain = {
   name: trainName,
   destination: trainDestination,
   rate: trainRate,
   arrival: trainArrival,
   dateAdded: firebase.database.ServerValue.TIMESTAMP
 };

   database.ref().push(newTrain);

  //logging to the console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.rate);
  console.log(newTrain.arrival);
  console.log(newTrain.minutesTil);

  alert("New train successfully added");

});

$('#submit').on('click', function (table){
var newRow = $('<tr>').append(
  $('<th scope="row">').text(trainName),
  $('<td>').text(trainDestination),
  $('<td>').text(trainRate),
  $('<td>').text(trainArrival)
);

//append rows of added train station to the table
$("#content-body").append(newRow);
});

