
//PART 1:
//This is where we put our prompts to allow the front end user to select an option that leads them to create their own company name to make it seem more personalized, they are required
//to enter each line before continuing 


console.log(`Welcome to Entrepreneurship Tycoon, where you will be climbing the entrepreneurship ladder!`)
const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');


const company = prompt('What is the name of your company?' );
const location = prompt(`Where is your home location? `);
console.log(`Congratulations ${username}, you have just created  ${company} LLC, based out of ${location}. You are starting from the ground up! You will need to build your company and network!`);


//part 2
// These are the two varibles that determine the outcome of success of the created company at the end of the game. They are let instead of const because they will be changing throughout the
//program
let money = 0
let network = 0



//part 3
//This is the outcomes that will be called at the end of the game, function is used to change the value of "let" and "network" that we set above. Top one being for money and bottom
//being for network

function lifeScenario(money){
    if(money == 0){
        log(`You have no money.`)
    } else if ( money < 20 && money > 0 ) {
        console.log(`You're doing great, you have $${money} dollars.`)
    } else if ( money >= 20){
      console.log (`You have reached Forbes top 100 under 21! You have ${money} dollars.`) 

      }
    } 
    
function lifeScenario2(network){
    if(network == 0){
        console.log(`You have no connections.`)  
    } else if( network < 50 && network > 0) {
        console.log(`Your network is expanding.`)
    } else if ( network >= 50){
        console.log(`You have reached Forbes top 100 under 21! You have on of the largest networks.`)
    }
}

//Part 4

//first option to decide which path to take. Each case allows money or network to go up based on the prompt decision, which again changed the outcome

console.log(`You are preparing for the next upcoming week. You can either go to a job fair, or pickup extra hours at your part time job.`)
 const choice = prompt(`What is your choice? Type 1 if you would like to work, and 2 if you would like to build connections.`);
switch(choice){
    case '1':
        console.log(`You earned an extra $5 with your extra part time work.`);

    money += 5;
    break;
    case '2':
        console.log(`You have expanded your network by five more people.`);
    network += 5;
    break;

    default:
        console.log(`That is not a valid option, please choose again.`);
    return;
}

//part 5.  updating user on current stats wiht money and network
console.log(`You now have $ ${money}`);
console.log(`You now have ${network} people in your network.`);
lifeScenario()
lifeScenario2()



// PART 6.   We set an array with possible outcomes here, user will receive a random outcome based on the getRandom function that we have set. 
// then the function is called and the return is assigned to a varible. The varible assigned will then be used to update network and money with the acccording random value
// pulled by the getrandom function.
 const outcomes = [
    {text: "You run into an old friend and restablished a connection.", results:{ network:10,money:0}},
    {text: "You finished a bootcamp, met lots of new people, and recieved a lot of new business.", results:{network:20, money:12}},
    {text: "You get sick and lost a day of work.", results:{network:0, money:0}},
    //below line backwards
    {text: "You get a role in a reality show, now your name and likeness is vaulable.", results:{money:25, network:25}},
]
//function
function getRandom(max){
    return Math.floor(Math.random()*max);
}

const results = getRandom(outcomes.length);
console.log(results);

const finalStep = outcomes[results];

money += finalStep.results.money;
network += finalStep.results.network;
console.log(finalStep.text);


 //Read outcomes above * and also displays result






// part 7
// Last choice before ending of the game, just as the first choice we use a prompt to allow them to create their own decision and update money and network according to the decision
// entered into the prompt
console.log(`You have the opportunity to quit your full time job to focus on building your company.`)
const choice2 = prompt(`What is your choice? Type 1 if you will quit type 2 if will stay.`)
switch(choice2){
    case '1':
    console.log(`Your earnings start slowing down, but your network expands rapidly.`);
    money += 5;
    network += 30;
    break;
    case '2':
    console.log(`You got a promotion at work!`);
    money += 15;
    network += 5;
    break;
    
    default:
        console.log(`That is not a valid option, please choose again.`);
    return;
}

// part 8
// Ending where the function are called taking into account total money and network to let them know how their new company outcome is based on their decisions and random life event
lifeScenario(money);
lifeScenario2(network);