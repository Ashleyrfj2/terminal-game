
console.log(`Welcome to Entrepreneurship Tycoon, where you will be climbing the entrepreneurship ladder!`)
const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');


const company = prompt('What is the name of your company?' );
const location = prompt(`Where is your home location? `);
console.log(`Congraulations ${username}, you have just created  ${company} LLC, based out of ${location}. You are starting from the ground up! You will need to build your company and network!`);

var money = 0
var network = 0

function lifeScenario(money){
    if(money == 0){
        console.log(`You have no money.`)
    } else if ( money < 50 && money > 0 ) {
        console.log(`You're doing great, you have ${money} dollars.`)
    } else if ( money > 50){
      console.log (`You have reached Forbes top 100 under 21! You have ${money}.`) 

      }
    } 
    
function lifeScenario2(network){
    if(network == 0){
        console.log(`You have no connections.`)  
    } else if( network < 50 && network > 0) {
        console.log(`You're  network is expanding.`)
    } else if ( network > 50){
        console.log(`Your have reached Forber top 100 under 21! You have on of the largest networks.`)
    }
}
function choicePath1(){

console.log(`You are preparing for the next upcomming week. You can either go to a job fair, or pickup extra hours at your part time job.`)
 const choice = prompt(`What is your choice? Type 1 if you would like to work, and 2 if you would like to build connections.`).toLowerCase();
switch(choice){
    case `1`:
        console.log(`You earned an extra $5 with your extra part time work.`);

    money += 5;
    break;
    case `2`:
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

const randomNumber = [``

]