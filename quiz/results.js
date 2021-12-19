// console.log("poojan")
var container = document.querySelector("#container");
// container.append
var scores = localStorage.getItem("scores");
scores = JSON.parse(scores);
// console.log(scores);
var temphtml = ``;
scores.map((e) => {
    temphtml = temphtml + `
    <div class="date">date
    ${e.date}
    </div>

    <div class="score">score
    ${e.score}/4
    </div>
    <br>
    `
    
} );
container.innerHTML = temphtml;