let valueGender;

let userName = prompt('Введите имя');
while(!Boolean(userName)){
    userName = prompt('Введите имя');
}

let userLastName = prompt('Введите фамилию');
while(!Boolean(userLastName)){
    userLastName = prompt('Введите фамилию');
}




// let userGender = prompt('Введите Ваш пол, М или Ж');
//     while(!Boolean(userGender) && (userGender === 'М' || 'Ж') ){
//         switch(userGender){
//             case 'М' || 'м':
//                 valueGender == 'М';
//                 break
//             case 'Ж'||'ж':
//                 valueGender == 'Ж';
//                 break;
//         }
//     }

    // if ((Boolean(userGender)) && (userGender == 'М' || 'м')) {
    //     valueGender = 'М';
    // } else if 
    //     ((Boolean(userGender)) && (userGender == 'Ж' || 'ж')){
    //     valueGender = 'Ж';
    //     }
    // else {
    //     userGender = prompt ('Введите Ваш пол, М или Ж');
    // } 

// let userAge = prompt('Введите возраст');


// console.log(userName, userLastName, userGender);


// let userInput = prompt('Введите ваш возраст'),
//     value = userInput && Number(userInput);

//     if (Number.isFinite(value))  {
//         // alert(Math.pow(value, 2));
//         alert('Your age ' + userInput)
//     } else  {
//         alert('Error');
        
//     }




// let value;

// while (!Number.isFinite(value)) {
//     let userInput = prompt('Введите число'),
//     value = userInput && Number(userInput);
// }


// ( function () {
//     "use strict";

//         let user = {
//         name: 'Peter',
//         hello () {
//             // alert('Hello, my name is '+ this.name);
//             let getName = () => this.name;
//             alert('Hello, my name is ' + getName());
//         }
        
//     };
//     user.hello();
// })();