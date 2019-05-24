//1.Nodevinēt mainīgos kurš iegūst ienākumu saraksta elemetu no html dokumenta
var totalincome = document.getElementById('all_income');

//2.Nodevinēt mainīgos kurš iegūst izdevumu saraksta elemetu no html dokumenta
var totaloutcome = document.getElementById('all_expenses');

//3.Nodevinēt mainīgos kurš iegūst pieejamā budžeta vertības elemetu no html dokumenta
var budgetelement = parseInt(document.getElementById('budget__value').innerHTML);

//4.Izveidot funkciju_1, kas izmaina pieejamā budžeta vertību
var plusminus;
var element1;
var income2 = document.getElementById('all_income');
var outcome2 = document.getElementById('all_expenses');

function funkcija_1(element1,plusminus)
{
    budgetelement = parseInt(document.getElementById('budget__value').innerHTML);

    if(plusminus == "+")
    {
        document.getElementById('budget_value').innerHTML = parseInt(budgetelement, 0) + parseInt(element1,0);
    }
    else if(plusminus == "-")
    {
        document.getElementById('budget_value').innerHTML = parseInt(budgetelement, 0) - parseInt(element1,0);
    }
}

//5.Izveidot funkciju_2, kuru izsaucot, tiek pievienoti ienākumi vai izdevumi html elementu sarakstiem
var inorout;

function funkcija_2()
{
    var add_type = document.getElementById('add_type').value;
    
    if(add_type == "income")
    {
        plusminus = "+";
        inorout = income2;
    }
    else
    {
        plusminus = "-";
        inorout = outcome2;
    }

    var div1 = document.createElement("DIV"); 
    div1.className = "list_item";
    var aye1 = document.createElement("DIV"); 
    aye1.className = "list_description";
    var aye2 = document.createElement("DIV"); 
    aye2.className = "list_value";

    var element1 = document.getElementById('add_value').value;
    var adddesc1 = document.createTextNode(document.getElementById('add_description').value);
    var addvalue1 = document.createTextNode(plusminus + element1 + "$"); 
    aye1.appendChild(adddesc1);  
    aye2.appendChild(addvalue1);  
    div1.appendChild(aye1);  
    div1.appendChild(aye2);  
    inorout.appendChild(div1);
    funkcija_1(element1, plusminus);
}

//6.Izveidot funkciju_3, kas izsaucas pēc pogas "pievienot" nospiešanas

//7.Funkcijai_3 jāpārbauda vai apraksta un summas lauks ir aizpildīts, ja nav, tad izvada paziņojumu par to, ka kāds no laukiem nav aizpildīts

//8.Funkcijai_3 ir jāizsauc funkcija_2, kas pievieno ienākumu vai izdevumu sarakstam jaunu ierakstu.

function funkcija_3()
{
    var description3 = document.getElementById('add_value').value;
    var value3 = document.getElementById('add_description').value;
    if(description3 && value3 != "")
    {
        funkcija_2();
    }
    else
    {
        console.log("oopsie, an error, please don't try again if you're too stupid to add a budget");
    }
}

//9.Lai pārbaudītu vai izveidotās funkcijas darbojas pareizi, izsauc tās zemāk un ievieto fake datus

//10.Izsaukt funkciju_2, kas pievieno ienākumu sarakstam vertības

//11.Izsaukt funkciju_2, kas pievieno izdevumu sarakstam vertības

//12.Izsaukt funkciju_1, kas izmaina pieejamā budžeta vertību
