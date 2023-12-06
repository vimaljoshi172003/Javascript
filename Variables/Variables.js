const accountId = 44826;
let accountName = 'Vimal Joshi';
var accountPassword = 'allabout_joshi'
accountCity = 'Haldwani';
let accountState;

// accountId = 2; Not allowed

accountName = 'Joshi ji';
accountPassword= 'vimal17';
accountCity = 'Naintal';

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountName,accountPassword,accountCity,accountState]);