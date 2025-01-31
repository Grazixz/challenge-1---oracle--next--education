var conjunto = [];

function implementNames(){
    var inputName = document.getElementById("inputNames").value;
    if (conjunto.includes(inputName)){
        alert("Nome já adicionado!");
    } else if (inputName.trim() == ""){
        alert("Nome inválido!");
    } else {
        conjunto.push(document.getElementById("inputNames").value);
        document.getElementById("names").innerHTML = "";
        for (var i = 0; i < conjunto.length; i++) {
            document.getElementById("names").innerHTML += conjunto[i] + "<br>";
        }
    } 
    console.log(inputName.alert);
};

function randomNames(){
    if (conjunto.length <= 2){
        alert("Não é possível gerar amigo secreto com menos de 3 nomes!");
    } else {
        var amigoSecreto = conjunto[Math.floor(Math.random() * conjunto.length)];
        alert("Seu amigo secreto é " + amigoSecreto);

        document.getElementById("btnAdd").disabled = true;
        document.getElementById("btnRandom").disabled = true;
    };
};

