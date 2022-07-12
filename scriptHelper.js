// Write your helper functions here!
require('isomorphic-fetch');


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
    
    if(isNaN(testInput)){
        return "Not a Number"
    } else if (!isNaN(testInput)){
        if(isNaN(parseInt(str))){
            return "Empty"
        } else {
        return "Is a Number"}
        }

   
}

function formSubmission(pilot, copilot, fuelLevel, cargoLevel) {
    // let pilot = document.querySelector("input[name=pilotName]");
    // let copilot = document.querySelector("input[name=copilotName]");
    // let fuelLevel = document.querySelector("input[name=fuelLevel]");
    // let cargoLevel = document.querySelector("input[name=cargoMass]");
    const pilotStatus = document.getElementbyId("pilotStatus");
    const copilotStatus = document.getElementbyId("copilotStatus");
    let faultyItemsVisability = document.querySelector("#faultyItems");
    let launchStatus = document.getElementbyId("launchStatus");
    alert("it got to this point");
    
    if(validateInput(pilot) === "Not a Number"){
        {   pilotStatus.innerHTML = `
           <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot.value} is ready for launch</li>
           `}   
        } else if (validateInput(pilot) === "Is a Number"){
            alert("Make sure to enter valid information for each field!");
            preventDefault();
        } else if (validateInput(pilot) === 'Empty'){
            alert("All fields are required!");
            preventDefault();
        };

        if(validateInput(copilot) === "Not a Number"){
            { copilotStatus.innerHTML = `
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilotNameInput.value} is ready for launch</li>
                `}   
            } else if (validateInput(copilot) === "Is a Number"){
                alert("Make sure to enter valid information for each field!");
                preventDefault();
            } else if (validateInput(copilot) === 'Empty'){
                alert("All fields are required!");
                preventDefault();
            };

            if(validateInput(fuelLevel) === "Not a Number"){
                alert("Make sure to enter valid information for each field!");
                preventDefault();
            } else if (validateInput(fuelLevel) === "Empty"){
                alert("All fields are required!");
                preventDefault();
            } else if(validateInput(fuelLevel) === "Is a Number"){
                if(fuelLevel.value < 10000){
                    faultyItemsVisability = "visible";
                    launchStatus.innerHTML = `
                    <h2 id="launchStatus" data-testid="launchStatus">Shuttle not ready for launch</h2>
                    `
                    launchStatus.color = "red";
                };
            }

            if(validateInput(cargoLevel) === "Not a Number"){
                alert("Make sure to enter valid information for each field!");
                preventDefault();
            } else if (validateInput(cargoLevel) === "Empty"){
                alert("All fields are required!");
                preventDefault();
            } else if (validateInput(cargoLevel) === "Is a Number"){
                if(cargoLevel.value > 10000){
                    faultyItemsVisability = "visible";
                    launchStatus.innerHTML = `
                    <h2 id="launchStatus" data-testid="launchStatus">Shuttle not ready for launch</h2>
                    `
                    launchStatus.color = "red";
                }
            }


  if((pilot === "Not a Number") && (copilot === "Not a Number") && ((fuelLevel === "Is a Number") && (fuelLevel.value > 10000)) 
    && ((cargoLevel === "Is a Number") && (cargoLevel.value < 10000))){
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
