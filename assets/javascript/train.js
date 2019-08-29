  var database = firebase.database();

  //values 
  var name = "";
  var destination = "";
  var time = "";
  var rate = "";
  
//event listener
  $('#submit').on('click', function (event) {
    event.preventDefault();

    //values grabbed from the textbox
    name = $('#nameInputName1').val().trim();
    destination = $('#nameInputDestination1').val().trim();
    time = $('#nameInputTime1').val().trim();
    rate = $('#nameInputRate1').val().trim();

    database.ref().push({
      name: name,
      destination: destination,
      time: time,
      rate: rate,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });

database.ref().on("child_added", function(snapshot) {
//adding employers to the table
$('#table').append(" '<div class='well'><span class='nameInputName1'> " +
childSnapshot.val().name + 
" </span><span class='nameInputDestination1'> " + childSnapshot.val().role +
" </span><span class='nameInputTime1'> " + childSnapshot.val().startDate +
" </span><span class='nameInputRate1'> " + childSnapshot.val().monthlyRate +
" </span></div>");

});

//append rows of added employees to the table

//firebase watcher and changing html to reflecr
  // database.ref().on("value", function (snapshot) {
  //   $("#nameInputName1").text(snapshot.val().name);
  //   $("#nameInputRole1").text(snapshot.val().name);
  //   $("#nameInputDate1").text(snapshot.val().name);
  //   $("#nameInputRate1").text(snapshot.val().name);
  // });
