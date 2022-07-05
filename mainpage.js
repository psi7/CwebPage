function SubmitFunction(){
    var table = document.getElementById("FormTable"),
    row = table.insertR;w(-1);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    elements = document.getElementsByTagName("input");
    cell1.innerHTML = elements[0].value;
    cell2.innerHTML = elements[1].value;
};

