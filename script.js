// require("./scriptHelper");

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
     console.log(listedPlanets);
    })
    let destination = pickPlanet(listedPlanets);
    console.log("The picked planet is: " + destination);
    event.preventDefault();
 

    form.addEventListener("submit", function(event){
  
        
        // formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
     
         event.preventDefault();
                        });
                        

    


        // let pilot = document.querySelector("input[name=pilotName]");
        
        //          if(validateInput(pilot.value) === "Not a Number"){
        //             {   pilotStatus.innerHTML = `
        //                <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot.value} is ready for launch</li>
        //                `}   
        //             } else if (validateInput(pilot.value) === "Is a Number"){
        //                 alert("Make sure to enter valid information for each field!");
                        
        //             } else if (validateInput(pilot.value) === 'Empty'){
        //                 alert("All fields are required!");
                        
        //             };
        //             event.preventDefault();
                    
        
    });
    

// window.addEventListener("load", function() {

//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   
// });