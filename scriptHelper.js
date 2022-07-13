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
    
//     let cargoLevel = document.querySelector("input[name=cargoMass]");
    
//     let list = document.getElementById("faultyItems")
//     // const pilotStatus = document.getElementbyId("pilotStatus");
//     // const copilotStatus = document.getElementbyId("copilotStatus");
//     let launchStatus = document.getElementbyId("launchStatus");
//     let pilotStatus = document.getElementById("pilotStatus");
//     let copilotStatus = document.getElementById("copilotStatus");
//     let fuelStatus = document.getElementById("fuelStatus");
//     let cargoStatus = document.getElementById("cargoStatus");
//     console.log("pilot is in the function " + pilot.value);
//     alert("it got to this point and pilot is " + pilot.value);
    
    if(validateInput(pilot.value) === "Not a Number"){
        
        {   pilotStatus.innerHTML = `
           <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot.value} is ready for launch</li>
           `}   
        } else if (validateInput(pilot.value) === "Is a Number"){
            alert("Make sure to enter valid information for each field!");
            
        } else if (validateInput(pilot.value) === 'Empty'){
            alert("All fields are required!");
            
        };

        if(validateInput(copilot.value) === "Not a Number"){
            { copilotStatus.innerHTML = `
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot.value} is ready for launch</li>
                `}   
            } else if (validateInput(copilot.value) === "Is a Number"){
                alert("Make sure to enter valid information for each field!");
                
            } else if (validateInput(copilot.value) === 'Empty'){
                alert("All fields are required!");
                
            };

            if(validateInput(fuelLevel.value) === "Not a Number"){
                alert("Make sure to enter valid information for each field!");
                
            } else if (validateInput(fuelLevel.value) === "Empty"){
                alert("All fields are required!");
                
            } else if(validateInput(fuelLevel.value) === "Is a Number"){
                if(fuelLevel.value < 10000){
                    list.style.visibility = "visible";
                    launchStatus.innerHTML = `
                    <h2 id="launchStatus" data-testid="launchStatus">Shuttle not ready for launch</h2>
                    `
                    launchStatus.style.color = "red";
                    fuelStatus.innerHTML = ` <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>`
                };
                }

                if(validateInput(cargoLevel.value) === "Not a Number"){
                    alert("Make sure to enter valid information for each field!");
                    
                } else if (validateInput(cargoLevel.value) === "Empty"){
                    alert("All fields are required!");
                    ;
                } else if (validateInput(cargoLevel.value) === "Is a Number"){
                    if(cargoLevel.value > 10000){
                        list.style.visibility = "visible";
                        launchStatus.innerHTML = `
                        <h2 id="launchStatus" data-testid="launchStatus">Shuttle not ready for launch</h2>
                     `
                        cargoStatus.innerHTML = `<li id="cargoStatus" data-testid="cargoStatus">Cargo mass too heavy for launch</li>`
                        launchStatus.style.color = "red";
                    }
                }


                if((validateInput(pilot.value) === "Not a Number") && (validateInput(copilot.value) === "Not a Number") 
                && ((validateInput(fuelLevel.value) === "Is a Number") && (fuelLevel.value > 10000)) 
                   && ((validateInput(cargoLevel.value) === "Is a Number") && (cargoLevel.value < 10000))){
                   list.style.visibility = "visible";
                   launchStatus.innerHTML =  `
                   <h2 id="launchStatus" data-testid="launchStatus">Shuttle is ready for launch</h2>
                   `
                   launchStatus.style.color = "green";
                   pilotStatus.innerHTML = `
          <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot.value} is ready for launch</li>
          `
          copilotStatus.innerHTML = `
               <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot.value} is ready for launch</li>
               `
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
