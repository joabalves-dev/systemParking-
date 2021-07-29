let cars = [];

(function () {
    if (typeof localStorage.getItem('cars') !== 'undefined') {
        localStorage.setItem('cars', []);
    }
})()


function addCar() {
    let campos = document.querySelectorAll("input[type='text']");
    const car = {
        modelo: campos[0].value,
        placa: campos[1].value,
        entrada: dataAtualFormatada()
    }
    cars.push(car);
    addtable(cars);
    campos.forEach(e =>{
        e.value =''; 
    });
}

function addtable(elemets) {
    let table = document.querySelector('#tablecar tbody');
    table.innerHTML ='';
    elemets.forEach(element => {
        table.innerHTML += `
        <tr>
            <td>${element.modelo}</td>
            <td>${element.placa}</td>
            <td>${element.entrada}</td>
            <td></td>
            <td class="acoes">
                <ion-icon name="stop-circle" class="stop-circle" onclick="closeTime()"></ion-icon>
                <ion-icon name="trash" onclick="trashElement()"></ion-icon>
            </td>
        </tr>`;
    });
}

function dataAtualFormatada() {
    let data = new Date();
    let dia = data.getDate().toString();
    let diaF = (dia.length == 1) ? '0' + dia : dia;
    let mes = (data.getMonth() + 1).toString(); //+1 pois no getMonth() Janeiro começa com zero.
    let mesF = (mes.length == 1) ? '0' + mes : mes;
    let anoF = data.getFullYear();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundos = (data.getSeconds() < 10) ? '0' + data.getSeconds() : data.getSeconds();
    return diaF + "/" + mesF + "/" + anoF + " às " + hora + ":" + minuto + ":" + segundos;
}