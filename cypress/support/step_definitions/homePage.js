import { Before, Given, Then, defineStep } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/homePage";

let env, url, homePageObj;
//setting environment variables, url  before actual execution.
Before(() => {
    env = Cypress.env('env');
    url = Cypress.env(env).url
    cy.log(`env is ${env}`);
    homePageObj = new HomePage();
});

// Accessing the API
Given("I access the API to get music festival data", () =>{
    cy.hitTheUrl().as('details');
});

// Verified API is woking status is 200 and data is coming
Then("I verify API is working", () =>{
    cy.get('@details').should((festivalJson) =>{
        expect(festivalJson.status).to.equal(200);
        expect(festivalJson.body,"Data should not be empty").not.to.be.empty;
    });
});

// verifying every band must have festival name 
Then("I verify each band have festival name", () =>{
    cy.get('@details').should((festivalJson) =>{
        const resultData = (festivalJson.body);
        Object.entries(resultData).forEach((data) => {
            const [key, value] = data;
            expect(value.name,'Festival name is missing').not.to.be.undefined;
        });
    });
});

// Verifying all text (band names, festival names, record label) follows Pascal case
Then("I verify all text follows pascal case", () =>{
    let allTextNames = [];
    let formatedText;
    cy.get('@details').should((festivalJson) =>{
        const resultData = (festivalJson.body);
        Object.keys(resultData).forEach( function (key,index) {
            allTextNames.push(resultData[key].name);
            let bandArr = resultData[key].bands;
            Object.keys(bandArr).forEach( function(key,index){
                allTextNames.push(bandArr[index].name);
                allTextNames.push(bandArr[index].recordLabel);
            });
        });
    }).then(() => {
        allTextNames.forEach((value) => {
            formatedText = homePageObj.isPascalCase(value);
            expect(formatedText,"TestCase failed at :" +value).to.be.true;
        });
    });
});

// Verifying Festival name should not be repeated in response
Then("I verify festival names are unique", () => {
    var allTextNames = [];    
    cy.get('@details').should((festivalJson) =>{
        const resultData = (festivalJson.body);
        console.log("resultData ::" +JSON.stringify(resultData));
        Object.keys(resultData).forEach( function (key,index) {
            console.log("FestivalNames ::" +resultData[key].name);
            if(resultData[key].name != undefined)
            {
                allTextNames.push(resultData[key].name);
            }
        });
    }).then(() =>{
        console.log("allTextNames :: "+allTextNames);
        var result = homePageObj.hasDuplicates(allTextNames);
        expect(result).to.be.false;
    });
});

// Verifying band names should not be repeated under each festival array
Then("I verify band names are not repeated under each festival", () =>{
    cy.get('@details').should((festivalJson) =>{
        const resultData = (festivalJson.body);
        console.log("resultData ::" +JSON.stringify(resultData));
        Object.keys(resultData).forEach( function (key,index) {
            let allTextNames = [];
            let bandArr = resultData[key].bands;
            Object.keys(bandArr).forEach( function(key,index){
                console.log("BandNames :::: " +bandArr[index].name);
                allTextNames.push(bandArr[index].name);
            });
            console.log("allTextNames :: "+allTextNames);
            var result = homePageObj.hasDuplicates(allTextNames);
            expect(result).to.be.false;
        });
    });
});