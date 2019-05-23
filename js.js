//1.Nodevinēt mainīgos kurš iegūst ienākumu saraksta elemetu no html dokumenta
var totalincome = document.getElementById('all-income');

//2.Nodevinēt mainīgos kurš iegūst izdevumu saraksta elemetu no html dokumenta
var totaloutcome = document.getElementById('all-expenses');

//3.Nodevinēt mainīgos kurš iegūst pieejamā budžeta vertības elemetu no html dokumenta
var budgetelement = document.getElementById('budget_value');

//4.Izveidot funkciju_1, kas izmaina pieejamā budžeta vertību
function funkcija_1()
{
    totalincome.innerHTML = "696969";
}

//5.Izveidot funkciju_2, kuru izsaucot, tiek pievienoti ienākumi vai izdevumi html elementu sarakstiem
function funkcija_2()
{
    var add_type = document.getElementById('add_type').value;

    if(add_type == "+")
    {
        var newdiv = document.createElement("DIV");
        newdiv.className = "all-income";
        var newdesc = document.createTextNode("epic value time");
        newdiv.appendChild(newdesc);
        document.body.appendChild(newdiv);
    }
    else if(add_type == "-")
    {
        
    }
}

//6.Izveidot funkciju_3, kas izsaucas pēc pogas "pievienot" nospiešanas

//7.Funkcijai_3 jāpārbauda vai apraksta un summas lauks ir aizpildīts, ja nav, tad izvada paziņojumu par to, ka kāds no laukiem nav aizpildīts

//8.Funkcijai_3 ir jāizsauc funkcija_2, kas pievieno ienākumu vai izdevumu sarakstam jaunu ierakstu.

//9.Lai pārbaudītu vai izveidotās funkcijas darbojas pareizi, izsauc tās zemāk un ievieto fake datus

//10.Izsaukt funkciju_2, kas pievieno ienākumu sarakstam vertības

//11.Izsaukt funkciju_2, kas pievieno izdevumu sarakstam vertības

//12.Izsaukt funkciju_1, kas izmaina pieejamā budžeta vertību
