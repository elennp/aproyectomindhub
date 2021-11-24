let house_statics = {
  //objeto estadistico para pintarlo en DOM House
  democrats: [],
  republicans: [],
  independents: [],
  democrats_average_party: 0,
  republicans_average_party: 0,
  independents_average_party: 0,
  most_engaged: [],
  least_engaged: [],
};

let datos = Data.results[0].members.filter(
  (member) => member.total_votes != 0
);

console.log(datos)
//calculo de reresentantes por estado

function guardarMiembrosPartido(party, valor) {
  house_statics[party] = datos.filter(
    (member) => member.party === valor
  );
}


// llamo a la funcion para cada partido
guardarMiembrosPartido("democrat", "D");
guardarMiembrosPartido("republican", "R");
guardarMiembrosPartido("independent", "I");

//Calculo de porcentaje de votos por partido

function estimateHouseVotes(party, membersVotes) {
  house_statics[party].forEach((member) => {
    house_statics[membersVotes] =
      house_statics[membersVotes] +
      member.votes_with_party_pct / house_statics[party].length
  });

}

//llamo a la funcion por cada partido
estimateHouseVotes("democrat", "democrats_average_party")
estimateHouseVotes("republican", "republicans_average_party")
estimateHouseVotes("independent", "independents_average_party")
//-------------------------------------------------------------
//estimacion de mas/menos comprometidos  houseMembers= datos
function estimateEngagedMembers(votes, most, least) {
  datos.sort((membermin, membermay) => {
    if (membermin[votes] > membermay[votes])
      return 1;
    if (membermin[votes] < membermay[votes])
      return -1;
    return 0

  })
  for (let i = 0; i < (Math.round(datos.length) * 0.1); i++) { house_statics[most].push(datos[i]) }//creciente
  for (let j = datos.length - 1; j > datos.length - 1 - (Math.round(datos.length) * 0.1); j--) { house_statics[least].push(datos[j]) }//decreciente
}

estimateEngagedMembers("missed_votes_pct", "most_engaged", "least_engaged")
//---------------------------------------------------------------------------------------------------------
