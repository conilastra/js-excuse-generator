function randomExcuse() {
    let who = ['mi mamá ','el perro ','el vecino ','alguien que no puedo delatar ', 'el amor de mi vida ', 'Beyonce ', 'Jesús ', 'mi jefe ', 'un agente secreto '];
    let what = ['me secuestró. ', 'no me dio permiso. ', 'me prohibió ir. ','está en el hospital y tengo que ir para allá. ','me dijo que venía un meteorito y que mejor que me quedara en la casa. '];
    let closingLine = ['Perdón :(','Todo se derrumbó','Nos vemos en otra vida','Pa la próxima no fallo!','Te juro que me moría de ganas'];

    let randomWho = Math.floor(Math.random() * (who.length));
    let randomWhat = Math.floor(Math.random() * (what.length));
    let randomClose = Math.floor(Math.random() * (closingLine.length));

    let generatedExcuse = who[randomWho] + what[randomWhat] + closingLine[randomClose];

    document.getElementById('excuse-content').innerHTML = generatedExcuse;
}

randomExcuse();



