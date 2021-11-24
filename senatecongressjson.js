// Agregado a mi tabla principal 
editMyTable();
// Agregado de data a mi salect input
insertOption();

// Listener de check D "democrat"
let checkbox1 = document.getElementById('democrat');
checkbox1.addEventListener("change", validaCheckbox, false);
let checkbox2 = document.getElementById('republican');
checkbox2.addEventListener("change", validaCheckbox, false);
let checkbox3 = document.getElementById('independent');
checkbox3.addEventListener("change", validaCheckbox, false);

// Validar si el check esta en true o false 
function validaCheckbox() {
    let table = document.getElementById("senate-data");
    let checked1 = checkbox1.checked;
    let checked2 = checkbox2.checked;
    let checked3 = checkbox3.checked;

    select.value = 'all'

    table.innerHTML = "";
    if (checked1) {
        editMyTableForFilter('D');
    } else if (checked2) {
        editMyTableForFilter('R');
    } else if (checked3) {
        editMyTableForFilter('I');
    } else {
        editMyTable();
    }
}

// Editar mi tabla comun 
function editMyTable() {
    for (i = 0; i < data.results[0].members.length; i++) {
        tr = "<tr>";
        tr += "<td>" + data.results[0].members[i].first_name + "</td>";
        tr += "<td>" + data.results[0].members[i].middle_name + "</td>";
        tr += "<td>" + data.results[0].members[i].last_name + "</td>";
        tr += "<td>" + data.results[0].members[i].party + "</td>";
        tr += "<td>" + data.results[0].members[i].state + "</td>";
        tr += "<td>" + data.results[0].members[i].seniority + "</td>";
        tr += "<td>" + data.results[0].members[i].votes_with_party_pct + " %</td>";
        tr += "</tr>";
        document.getElementById("senate-data").innerHTML += tr;
    }
}

// Editar mi tabla con filtro check
function editMyTableForFilter(myInput) {
    for (i = 0; i < data.results[0].members.length; i++) {
        if (data.results[0].members[i].party == myInput) {
            tr = "<tr>";
            tr += "<td>" + data.results[0].members[i].first_name + "</td>";
            tr += "<td>" + data.results[0].members[i].middle_name + "</td>";
            tr += "<td>" + data.results[0].members[i].last_name + "</td>";
            tr += "<td>" + data.results[0].members[i].party + "</td>";
            tr += "<td>" + data.results[0].members[i].state + "</td>";
            tr += "<td>" + data.results[0].members[i].seniority + "</td>";
            tr += "<td>" + data.results[0].members[i].votes_with_party_pct + " %</td>";
            tr += "</tr>";
            document.getElementById("senate-data").innerHTML += tr;
        }
    }
}

// insertar en select option 
function insertOption() {
    let select = document.getElementById('states');

    // Retorna valores NO repetidos de la data
    Array.prototype.unique = function (a) {
        return function () { return this.filter(a) }
    }(function (a, b, c) {
        return c.indexOf(a, b + 1) < 0
    });

    let myStates = [];

    for (i = 0; i < data.results[0].members.length; i++) {
        myStates.push(data.results[0].members[i].state);
    }

    let states = myStates.unique();
    states.sort();

    for (j = 0; j < states.length; j++) {
        let option = document.createElement("option");
        option.value = states[j];
        option.text = states[j];
        select.appendChild(option);
    }
}

// Accion de select 
let select = document.getElementById('states');
select.addEventListener('change',
    function () {
        let table = document.getElementById("senate-data");
        table.innerHTML = "";
        let selectedOption = this.options[select.selectedIndex];

        if (selectedOption.value != 'all') {
            editMyTableForFilterSelect(selectedOption);
        } else {
            editMyTable();
        }


    }
);

// Filtrar select
function editMyTableForFilterSelect(selectedOption) {
    checkbox1.checked = 0;
    checkbox2.checked = 0;
    checkbox3.checked = 0;

    for (i = 0; i < data.results[0].members.length; i++) {
        if (data.results[0].members[i].state == selectedOption.value) {
            tr = "<tr>";
            tr += "<td>" + data.results[0].members[i].first_name + "</td>";
            tr += "<td>" + data.results[0].members[i].middle_name + "</td>";
            tr += "<td>" + data.results[0].members[i].last_name + "</td>";
            tr += "<td>" + data.results[0].members[i].party + "</td>";
            tr += "<td>" + data.results[0].members[i].state + "</td>";
            tr += "<td>" + data.results[0].members[i].seniority + "</td>";
            tr += "<td>" + data.results[0].members[i].votes_with_party_pct + " %</td>";
            tr += "</tr>";
            document.getElementById("senate-data").innerHTML += tr;
        }
    }
}
