
console.log(`Welcome to Entrepreneurship Tycoon, where you will be climbing the entrepreneurship ladder!`)
const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');


const company = prompt('What is the name of your company?' );
const location = prompt(`Where is your home location? `);
console.log(`Congratulations ${username}, you have just created  ${company} LLC, based out of ${location}. You are starting from the ground up! You will need to build your company and network!`);

let money = 0
let network = 0

function getRandom(max){
    return Math.floor(Math.random() * (max.length));
}

function lifeScenario(money){
    if(money == 0){
        console.log(`You have no money.`)
    } else if ( money < 20 && money > 0 ) {
        console.log(`You're doing great, you have $${money} dollars.`)
    } else if ( money >= 20){
      console.log (`You have reached Forbes top 100 under 21! You have ${money}.`) 

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
function choicePath1(){

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
}
choicePath1()
// console.log(`You now have $ ${money}`);
// console.log(`You now have ${network} people in your network.`);
lifeScenario()
lifeScenario2()

const outcomes = [
    {text: "You run into an old friend and restablished a connection.", results:{ network:10}},
    {text: "You finished a bootcamp, met lots of new people, and recieved a lot of new business.", results:{network:20, money:12}},
    {text: "You get sick and rot away at home. You gain nothing.", results:{network:0}},
    {text: "You get a role in a reality show, now your name and likeness is vaulable.", result:{money:25, network:25}},
]
 
//console.log(getRandom (outcomes))
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
lifeScenario(money);
lifeScenario2(network);