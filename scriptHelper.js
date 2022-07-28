// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let missionTarget = document.getElementById("missionTarget");
  
  missionTarget.innerHTML = 
  `<h2>Mission Destination</h2>
  <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter}</li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
  </ol>
  <img src="${imageUrl}">`
}

function validateInput(testInput) {
    
    if(isNaN(testInput)){
        return "Not a Number"
    } else if (!isNaN(testInput)){
        if(isNaN(parseInt(testInput))){
            return "Empty"
        } else {
        return "Is a Number"}
        }

   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

if ((validateInput(pilot.value) === 'Empty') || (validateInput(copilot.value) === 'Empty') ||
(validateInput(cargoLevel.value) === "Empty") || (validateInput(cargoLevel.value) === "Empty")){
    alert("All fields are required!");
    preventDefault();
}

if ((validateInput(pilot.value) === "Is a Number") || (validateInput(copilot.value) === "Is a Number") ||
(validateInput(fuelLevel.value) === "Not a Number") || (validateInput(cargoLevel.value) === "Not a Number")){
    alert("Make sure to enter valid information for each field!");
    preventDefault();
}

pilotStatus.innerHTML = `
<li id="pilotStatus" data-testid="pilotStatus" value="1">Pilot ${pilot.value} is ready for launch</li>
`
  copilotStatus.innerHTML = `
     <li id="copilotStatus" data-testid="copilotStatus" value="2">Co-pilot ${copilot.value} is ready for launch</li>
     `

if(fuelLevel.value < 10000){
    list.style.visibility = "visible";
    launchStatus.innerHTML = `
    <h2 id="launchStatus" data-testid="launchStatus">Shuttle not ready for launch</h2>
    `
    launchStatus.style.color = "red";
    fuelStatus.innerHTML = ` <li id="fuelStatus" data-testid="fuelStatus" value="3">Fuel level too low for launch</li>`
    
} else {
    console.log('it is getting to here');
    fuelStatus.innerHTML = `<li id="fuelStatus" data-testid="fuelStatus" value="3">Fuel level high enough for launch</li>`
};

if(cargoLevel.value > 10000){
    list.style.visibility = "visible";
    launchStatus.innerHTML = `
    <h2 id="launchStatus" data-testid="launchStatus">Shuttle not ready for launch</h2>
 `
    cargoStatus.innerHTML = `<li id="cargoStatus" data-testid="cargoStatus" value="4">Cargo mass too heavy for launch</li>`
    launchStatus.style.color = "red";
} else {
    console.log("it is catching the cargo level else statement")
    cargoStatus.innerHTML = `<li id="cargoStatus" data-testid="cargoStatus" value="4">Cargo mass low enough for launch</li>`
}


if((validateInput(pilot.value) === "Not a Number") && (validateInput(copilot.value) === "Not a Number") 
                && ((validateInput(fuelLevel.value) === "Is a Number") && (fuelLevel.value > 10000)) 
                   && ((validateInput(cargoLevel.value) === "Is a Number") && (cargoLevel.value < 10000))){
                   list.style.visibility = "visible";
                   launchStatus.innerHTML =  `
                   <h2 id="launchStatus" data-testid="launchStatus">Shuttle is ready for launch</h2>
                   `
                   launchStatus.style.color = "green";
        //            pilotStatus.innerHTML = `
        //   <li id="pilotStatus" data-testid="pilotStatus" value="1">Pilot ${pilot.value} is ready for launch</li>
        //   `
        //     copilotStatus.innerHTML = `
        //        <li id="copilotStatus" data-testid="copilotStatus" value="2">Co-pilot ${copilot.value} is ready for launch</li>
        //        `
            // fuelStatus.innerHTML = `<li id="fuelStatus" data-testid="fuelStatus" value="3">Fuel level high enough for launch</li>`
            // cargoStatus.innerHTML = `<li id="cargoStatus" data-testid="cargoStatus" value="4">Cargo mass low enough for launch</li>`
            
               }
             

            }
            
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
   let number = Math.floor((Math.random()*6));
   let index = parseFloat(number);
   let chosenPlanet = planets[index];
   return chosenPlanet;
  
  
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
