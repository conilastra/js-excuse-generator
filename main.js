function randomExcuse() {
    let who = ['mi mamá ','el perro ','el vecino ','alguien demasiado importante ', 'el amor de mi vida ', 'Beyonce ', 'Jesús ', 'mi jefe ', 'un agente secreto '];
    let what = ['me secuestró, así que no voy a poder', 'no me dio permiso para ', 'me dijo que no podía ','está en el hospital y no voy a poder ','me dijo que se iba a acabar el mundo justo cuando íbamos a '];
    let closingLine = ['Perdón :(','Todo se derrumbó','Nos vemos en otra vida','Pa la próxima no fallo!','Te juro que me moría de ganas'];

    let excuse = prompt('Escribe lo que quieres evitar (por ejemplo: entregar una tarea, ir a la cita Tinder)');

    if (excuse == "") {
        excuse = "ir a eso"
    };

    let randomWho = Math.floor(Math.random() * (who.length));
    let randomWhat = Math.floor(Math.random() * (what.length));
    let randomClose = Math.floor(Math.random() * (closingLine.length));

    let generatedExcuse = who[randomWho] + what[randomWhat] + excuse + ". " + closingLine[randomClose];

    document.getElementById('excuse-content').innerHTML = generatedExcuse;
}

randomExcuse();



