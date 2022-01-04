/*
Greeting.js@0.1.8
Author : Adeoye Adefemi Opeoluwa
Github : https://github.com/opeolluwa
*/
//Get the Day from Client Machine
var _d = new Date();
var day = _d.getDay();
var hour = _d.getHours();
var new_month = (_d.getDate() == 1);
var christmas = ((_d.getMonth() == 11) && (_d.getDate() == 25));
var valentine = ((_d.getMonth() == 1) && (_d.getDate() == 14));
var message;
// an Util Function to Get Random Items in This Case, Greeting Options
function _r(array) {
    var index = Math.round(Math.random() * (array.length - 1));
    return array[index];
}
//COLLECTION OF POSSIBLE VALUES
var options = {
    monday: [
        "Hello Monday!",
        "Monday is here!",
        "Show some Monday love",
        "Another fresh start"
    ],
    tuesday: [
        "Hello"
    ],
    wednesday: [
        "Welcome Back"
    ],
    thursday: [
        "#TBT",
        "Throwback Thursday😋",
        "Time for throwback",
        "let's do some throwback",
        "Hectic week, huh? ",
    ],
    friday: [
        "#TGIF",
        "Weekend is here!",
        "Have a nice weekend",
        "How has the week been?",
        "Thank God It's Friday",
        "It's weekend",
        "Hello", "Weekend is near",
    ],
    saturday: [
        "You deserve some break",
        "Take timeout, enjoy",
        "Hangout! It's saturday",
        "#Owanbe Saturday😋",
        "Still indoor? Hangout!",
        "You deserve a great time",
        "How about some treats?"
    ],
    sunday: [
        "Happy New Week!",
        "Happy Sunday!",
        "It's a new week💃💃",
        "New week wishes",
    ],
    //---------------------------DAYTIME---------------_
    morning: [
        "Blessed morning",
        "Good Morning",
        "Trust you slept well",
        "Beautiful morning",
        "A new day",
        "Have a fruitful day"
    ],
    day_break: [
        "How is your day going",
        "How has the day being",
        "A fresh motning, huh?",
        "How's the weather?",
        "Howdy?"
    ],
    afternoon: [
        "Good afternoon!",
        "How's the weather outside",
        "How is your day going",
        "How has work been?",
        "How has your day been?",
        "How is your day going",
        "How has the day been",
        "How's the weather?",
        "Howdy?"
    ],
    evening: [
        "Good evening",
        "How was your day",
        "How did your day go",
    ],
    midnignt: [
        "You up so late ?",
        "You should probably be in bed",
        "You should probably be in bed by now",
        "Surprised to see you up so late",
        "Up so early, huh?",
        "Up so early?",
        "Working Late",
        "Hi there!",
        "Aren't you sleeping?"
    ],
    //--------------------------------Special Occasion--------------------
    new_month: [
        "Happy new month!",
        "Blessed new Month",
        "Have a Happy new month!",
        "It's a new month!"
    ],
    new_year: [
        "Happy new year",
        "Happy Holidays"
    ],
    christmas: [
        "Merry Christmas",
        "Season greetings"
    ],
    //TODO: boxing_day: [],
    valentine: [
        "It's Valentine",
        "Happy Valentine"
    ],
    other: [
        "Holla!",
        "Hello!",
        "Welcome",
        "Howdy?",
        "Ciao!"
    ]
};
//_g = greetings
var _g;
_g = {
    time: null,
    other: null,
    ocassion: null,
    day: null
};
//HANDLE DAY PROCESSING 
switch (day) {
    //If Sunday
    case 0:
        _g.day = _r(options.sunday);
        break;
    case 1:
        //If Monday
        _g.day = _r(options.monday);
        break;
    //If Thursday
    case 4:
        _g.day = _r(options.thursday);
        break;
    //If Friday 
    case 5:
        _g.day = _r(options.friday);
        break;
    //If Saturday
    case 6:
        _g.day = _r(options.saturday);
        break;
    default:
        _g.day = "";
        break;
}
//HANDLE TIME PROCESSING :: GREET BY HOUR: MORNING NIGHT, AFTERNOON & EVENING
switch (hour) {
    //If between 6:00am & 8:00am
    case (hour >= 6 && hour <= 8):
        _g.time = _r(options.morning);
        break;
    //if between 8:00AM & 10:00AM
    case (hour >= 8 && hour <= 10):
        _g.time = _r(options.day_break);
        break;
    //if afternoon 12:00PM - 3:00PM
    case (hour >= 12 && hour <= 15):
        _g.time = _r(options.afternoon);
        break;
    //if evening : 4:00PM - 8:00PM
    case (hour >= 16 && hour <= 20):
        _g.time = _r(options.evening);
        break;
    //if midnight between 1:00AM - 3:00AM
    case (hour >= 1 && hour <= 3):
        _g.time = _r(options.midnignt);
        break;
    default:
        _g.time = "";
        break;
}
// HANDLE SPECIAL OCCASIONS
_g.ocassion = (new_month) ? _r(options.new_month) :
    //christmas
    (christmas) ? _r(options.christmas) :
        //valentine
        (valentine) ? _r(options.valentine) : '';
//HANDLE EXCEPTION
_g.other = _r(options.other);
// set in message and export 
message = _g.ocassion || _g.time || _g.day || _g.other;
console.log(message);
export { message };
