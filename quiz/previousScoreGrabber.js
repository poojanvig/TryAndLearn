var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;
var score = 5; //this needs to be changed with current score

var scores = localStorage.getItem("scores");

//checking if scores named object present or not in localstorage
if (scores == null || scores == undefined) {
  //if not present
  scores = [{ date: today, score: score }]; // creating new
  var strScores = JSON.stringify(scores); // converting to string
  localStorage.setItem("scores", strScores); // storing in local storage
} else {
  //if present
  scores = JSON.parse(scores); // string to object / array converting

  //adding new data to current array
  scores.push({ date: today, score: 6 }); // replace values with latest score
  strScores = JSON.stringify(scores); // converting to string
  localStorage.setItem("scores", strScores); // storing in local storage
}
