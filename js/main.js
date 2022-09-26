
const url = '../controllers/query.php'

let div = document.getElementById('containerTable')

let tabla   = document.createElement("table");
let tblBody = document.createElement("tbody");


$(document).ready(function() {
    $('#btnInfo').click(function(e) {
        
        div.innerHTML = ""
        tabla.innerHTML = ""
        tblBody.innerHTML = ""

        $.ajax({
            type: 'GET',
            url: url,
            success: function(response) {
                let jsonData = JSON.parse(response);

                let hileraTitulo = document.createElement("tr");

                let celdaIdTitulo = document.createElement("th");
                let celdaContactNoTitulo = document.createElement("th");
                let celdaLastnameTitulo = document.createElement("th");
                let celdaCreatedTimeTitulo = document.createElement("th");

                celdaIdTitulo.innerText = "ID"
                celdaContactNoTitulo.innerText = "Contact No"
                celdaLastnameTitulo.innerText = "Lastname"
                celdaCreatedTimeTitulo.innerText = "Created Time"
                
                hileraTitulo.appendChild(celdaIdTitulo)
                hileraTitulo.appendChild(celdaContactNoTitulo)
                hileraTitulo.appendChild(celdaLastnameTitulo)
                hileraTitulo.appendChild(celdaCreatedTimeTitulo)

                tblBody.appendChild(hileraTitulo);

                for (let i = 0; i < jsonData.result.length; i++) {

                    let hilera = document.createElement("tr");

                    let celdaId = document.createElement("td");
                    let celdaContactNo = document.createElement("td");
                    let celdaLastname = document.createElement("td");
                    let celdaCreatedTime = document.createElement("td");

                    let id = document.createTextNode(jsonData.result[i].id);
                    let contactNo = document.createTextNode(jsonData.result[i].contact_no);
                    let lastname = document.createTextNode(jsonData.result[i].lastname);
                    let createdTime = document.createTextNode(jsonData.result[i].createdtime);

                    celdaId.appendChild(id);
                    celdaContactNo.appendChild(contactNo);
                    celdaLastname.appendChild(lastname);
                    celdaCreatedTime.appendChild(createdTime);

                    hilera.appendChild(celdaId);
                    hilera.appendChild(celdaContactNo);
                    hilera.appendChild(celdaLastname);
                    hilera.appendChild(celdaCreatedTime);

                    tblBody.appendChild(hilera);
                }
                
                tabla.appendChild(tblBody);
                div.appendChild(tabla);
                tabla.setAttribute("border", "1");
            }
        })
    })
})