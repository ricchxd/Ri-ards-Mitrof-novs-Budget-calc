// #region Variables
const inc = document.getElementById('all_income');
const exp = document.getElementById('all_expenses');
const budg = document.getElementById('budget__value');

const tincome = document.querySelector('.total_income');
const texpenses = document.querySelector('.total_expenses');
// #endregion
getLocalStorage();


let BudgSaveData = {}, id = 0;

function TotalBudget(tbudg) {
  budg.innerHTML = parseInt(budg.innerHTML, 0) + parseInt(tbudg, 0);
  localstorage();
}

//5.additem funkcija, kuru izsaucot, tiek pievienoti ienākumi vai izdevumi html elementu sarakstiem
function additem(isincome, description, value) {
  var item = document.createElement('DIV');
  item.className += 'list_item';
  var valdiv = document.createElement('DIV');
  valdiv.className += 'list_valdivue';
  var descrdiv = document.createElement('DIV');
  descrdiv.className += 'list_description';
  descrdiv.innerHTML = description;

  if (isincome == 'income') {
    valdiv.innerHTML = '+' + value + '€';
    BudgSaveData['income' + id.toString()] = 'id:' + id + 'description:' + description + 'value:' + value;
    inc.appendChild(item);
  } else {
    valdiv.innerHTML = '-' + value + '€';
    exp.appendChild(item);
    value = -Math.abs(value);
  }
  id++;
  item.appendChild(descrdiv);
  item.appendChild(valdiv);
  updatetotals(value, isincome);
  TotalBudget(value);
}

var kinput = document.getElementById("add_value");
kinput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        addtolist();
    }
});
var kinput2 = document.getElementById("add_description");
kinput2.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        addtolist();
    }
});

function addtolist() {
  var val = document.getElementById('add_value');
  var descr = document.getElementById('add_description');
  var isitincome = document.getElementById('add_type');
  if (val.value == '' || descr.value == '') {
    alert('Aizpildi tukšos lauciņus!');
  } else {
    additem(isitincome.value, descr.value, val.value);
  }
}

function updatetotals(value, income) {
  if (income == 'income') {
    tincome.innerHTML = parseInt(tincome.innerHTML, 0) + parseInt(value, 0);
  } else {
    texpenses.innerHTML = parseInt(texpenses.innerHTML, 0) - parseInt(value, 0);
    console.log(income);
  }
}

function localstorage() {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem('income', inc.innerHTML);
    localStorage.setItem('expenses', exp.innerHTML);
    localStorage.setItem('tbudg', budg.innerHTML);
    localStorage.setItem('allincome', tincome.innerHTML);
    localStorage.setItem('allexpenses', texpenses.innerHTML);

  }
}
function clearlocal() {
  localStorage.clear();
  location.reload();
}
function getLocalStorage()
{
  inc.innerHTML = localStorage.getItem('income');
  exp.innerHTML = localStorage.getItem('expenses');
  budg.innerHTML = localStorage.getItem('tbudg');
  ifEmpty(budg);
  tincome.innerHTML = localStorage.getItem('allincome');
  ifEmpty(tincome);
  texpenses.innerHTML = localStorage.getItem('allexpenses');
  ifEmpty(texpenses);
}

function ifEmpty(element)
{
  if(element.innerHTML == '')
  {
    element.innerHTML = 0;
  }
}
//darbojas //Salabot localStorage tā, lai pēc lapas refresha nepazūd pieejamais budžets un kopējā izdevumu un ienākumu vērtība

//darbojas //Pievienot iespēju izveidot jaunu ierakstu budzeta kalkulātora izmantojot enter taustinu

//Izveidot vienu mainīgo, kurā veido sarakstu ar ienākumiem un izdevumiem un to visu glabāt objektā, kuru pēc tam saglabā localStorage

//Optimizēt kodu, atbrīvoties no liekā
//Pievienot iespēju nodzēst sarakstu elementu un tas automātiski atrēķinās nost
//ja lauki ir aizpildīti, tad pievienot ierakstu sarakstam var uzspiežot enter (Poga paliek pieejama)
//Pievienot iespēju izveidot jaunu mēnesi. Opcija Jauns mēnesis saglabās iepriekšējā mēneša datus un nodzēsīs laukus priekš jaunā mēneša.
//Pēc vajadzības var atvērt iepriekšējos mēnešus un apskatīt to ienākumus un izdevumus

    // console.log('BudgSavedData', BudgSaveData);
//TotalBudget, kas izmaina pieejamā budžeta vertību
