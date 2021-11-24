//Elemento controlador entre la vista y el modelo de datos->Pseudo Modelo Vista Controlador
//Capturas de datos para las tabla de houseAttendance
let democratTable = document.getElementById('democrats_td');
let republicTable = document.getElementById('republicans_td');
let independentTable = document.getElementById('independents_td');
let totalTable = document.getElementById('total_td');
//house_least_engaged//house_most_engaged
let list_least_engaged=document.getElementById('senate_least_loyalty');
let list_most_engaged=document.getElementById('senate_most_loyalty');
//funcion para llenar tabla numeros de miembros y porcentaje de votos

function paintTable(congreso, partido, votos, partidoTable) {
  let item = document.createElement('td')
  item.innerHTML = congreso[partido].length
  let item2 = document.createElement('td')
  item2.innerHTML = congreso[votos].toFixed(2) + '%';//factor decimal
  partidoTable.appendChild(item)
  partidoTable.appendChild(item2)
}


function getDocument() {
  paintTable(senate_statics, 'democrats', 'democrats_average_party', democratTable)
  paintTable(senate_statics, 'republicans', 'republicans_average_party', republicTable)
  paintTable(senate_statics, 'independents', 'independents_average_party', independentTable)

  let item = document.createElement('td');
  item.innerHTML = datos.length;
  let item2 = document.createElement('td');
  item2.innerHTML = ((senate_statics.independents_average_party +
    senate_statics.republicans_average_party +
    senate_statics.democrats_average_party) / 3).toFixed(2) + '%';


  totalTable.appendChild(item)
  totalTable.appendChild(item2)

}
getDocument()
//funcion que presenta de datos de house engaged/
 function createListEngaged(array,table,engaged_votes,engaged_pct)
{ array.forEach(member => {
    let item=document.createElement('tr')//fila
    item.innerHTML=` <td><a target='_blank' href='${member.url}'>
    ${member.first_name}
    ${member.middle_name || ""}
    ${member.last_name}</a></td>
    <td>${member[engaged_votes]}</td>
    <td>${member[engaged_pct]}%</td> `
    table.appendChild(item)
});

}
//------------------------------

//llamar a funcion para menos y mas comprometidos
createListLoyalty(senate_statistics.least_loyalty,list_leastLoyalty,'total_votes','votes_with_party_pct','votes_against_party_pct');
createListLoyalty(senate_statistics.most_loyalty,list_mostLoyalty,'total_votes','votes_with_party_pct','votes_against_party_pct');