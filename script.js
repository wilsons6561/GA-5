// require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

// const { validateInput } = require("./scriptHelper");

    


window.addEventListener("load", function(event){
    let form = document.querySelector("form");
    // let list = document.getElementById("faultyItems")
        // list.style.visibility = "visible";
        // let launchStatus = document.getElementById("launchStatus");
        // launchStatus.style.color = "red";
    // let pilotStatus = document.getElementById("pilotStatus");
    // pilotStatus.style.color = "red";
    // let copilotStatus = document.getElementById("copilotStatus");
    // copilotStatus.style.color = "blue";
    // let fuelStatus = document.getElementById("fuelStatus");
    // fuelStatus.style.color = "red";
    // let cargoStatus = document.getElementById("cargoStatus");
    // cargoStatus.style.color = "blue";
    // launchStatus.innerHTML = `<h2 id="launchStatus" data-testid="launchStatus">Shuttle not ready for launch</h2>`;
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]"); 
    let list = document.getElementById("faultyItems");     
  
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    
    listedPlanetsResponse.then(function (result) {
     listedPlanets = result
     console.log(listedPlanets);
    }).then(function(){
    let destination = pickPlanet(listedPlanets);
    console.log(destination);
    let name = destination.name;
    //diameter, star, distance, moons, imageUrl
    let diameter = destination.diameter;
    let star = destination.star;
    let distance = destination.distance;
    let moons = destination.moons;
    let imageUrl = destination.image;
    console.log(diameter);
    addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    //  console.log(listedPlanets[0]);
    })


 
//    console.log(listedPlanets[0]);
//    let destination = listedPlanets[index];
//    console.log(destination);
    // let destination = pickPlanet(listedPlanets);
    // console.log("The picked planet is: " + destination);
    // event.preventDefault();
 

    form.addEventListener("submit", function(event){
  
        
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
     
         event.preventDefault();
                        });
                        
            event.preventDefault();
                    
        
    });
    

