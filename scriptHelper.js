// Write your helper functions here!
require('isomorphic-fetch');

    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    
        if(isNaN(pilotNameInput.value)){
            
            return "Not a Number";
        } else if (!isNaN(pilotNameInput.value)){
            alert("Make sure to enter valid information for each field!");
            return "Is a Number";
        } else if (pilotNameInput.value === ''){
            alert("All fields are required!")
            return "Empty";
        };

        if(isNaN(copilotNameInput.value)){
            return "Not a Number";
        } else if (!isNaN(copilotNameInput.value)){
            alert("Make sure to enter valid information for each field!");
            return "Is a Number";
        } else if (copilotNameInput.value === ''){
            alert("All fields are required!")
            return "Empty";
        };

        if(isNaN(cargoMassInput.value)){
            alert("Make sure to enter valid information for each field!");
            return "Not a Number";
        } else if (!isNaN(cargoMassInput.value)){
            return "Is a Number";
        } else if (cargoMassInput.value === ''){
            alert("All fields are required!")
            return "Empty";
        };
        
        if(isNaN(fuelLevelInput.value)){
            alert("Make sure to enter valid information for each field!");
            return "Not a Number";
        } else if (!isNaN(fuelLevelInput.value)){
            return "Is a Number";
        } else if (fuelLevelInput.value === ''){
            alert("All fields are required!")
            return "Empty";
        };
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    const pilotStatus = document.getElementbyId("pilotStatus");
    const copilotStatus = document.getElementbyId("copilotStatus");
    let faultyItemsVisability = document.querySelector("#faultyItems");
    let launchStatus = document.getElementbyId("launchStatus");
   
    pilot = validateInput(pilotNameInput);
    if(pilot = "Not a Number"){
    pilotStatus.innerHTML = `
   <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilotNameInput.value} is ready for launch</li>
   `}
    
   copilot = validateInput(copilotNameInput);
   if(copilot = "Not a Number"){
   copilotStatus.innerHTML = `
   <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilotNameInput.value} is ready for launch</li>
   `}

   fuelLevel = validateInput(fuelLevelInput);
     if (fuelLevelInput.value < 10000){
    faultyItemsVisability = "visible";
    launchStatus.innerHTML = `
    <h2 id="launchStatus" data-testid="launchStatus">Shuttle not ready for launch</h2>
    `
    launchStatus.color = "red";
    }

    cargoLevel = validateInput(cargoMassInput); 
    if (cargoMassInput.value > 10000){
    faultyItemsVisability = "visible";
    launchStatus.innerHTML = `
    <h2 id="launchStatus" data-testid="launchStatus">Shuttle not ready for launch</h2>
    `
    launchStatus.color = "red";
    }

  if((pilot = "Not a Number") && (copilot = "Not a Number") && ((fuelLevel = "Is a Number") && (fuelLevelInput.value > 10000)) 
    && ((cargoLevel = "Is a Number") && (cargoMassInput.value < 10000))){
    launchStatus.innerHTML =  `
    <h2 id="launchStatus" data-testid="launchStatus">Shuttle is ready for launch</h2>
    `
    launchStatus.color = "green";
  }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
