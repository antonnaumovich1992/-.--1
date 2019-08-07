(function(){

let valueAge;
let userAge;
let userGender;
let pensStatus;

    let userName = prompt('Введите имя',  '');
        while(!Boolean(userName)){
            userName = prompt('Введите имя', '');
        }

    let userLastName = prompt('Введите фамилию', '');
        while(!Boolean(userLastName)){
            userLastName = prompt('Введите фамилию', '');
        }


    (function age(){
        do {
            userAge = prompt('Сколько вам лет', '18'),
            valueAge = userAge && Number(userAge); 
        } while (!Number.isFinite(valueAge));
            if (userAge <= 0) {
                age();
            } else {
                return userAge;
            }

    }());
// console.log(userAge);

    (function gender(){
        do {
            userGender = prompt('Введите ваш пол, М/Ж','');
        } while (!Boolean(userGender));
            switch (userGender) {
                case 'М': 
                    return userGender = 'М';
                    
                case 'м': 
                    return userGender = 'М';
                    
                case 'Ж': 
                    return userGender = 'Ж';
                    
                case 'ж':
                    return userGender = 'Ж';
                    
                default: 
                    gender();
            }
    }());
//  console.log(userGender);


    if ((userGender == 'М') && (userAge >= 63)) {
        pensStatus = 'Да';
    } else if ((userGender == 'Ж') && (userAge >= 58)) {
        pensStatus = 'Да'; 
    } else pensStatus = 'Нет';

alert ('Полное имя: ' + userName + ' ' + userLastName + 
        '\nПол: ' + userGender + 
        '\nНа пенсии: ' + pensStatus);

}());