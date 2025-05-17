let tpan = 0;
let tpsw = 0;
let tpsfl = 0;

function affStatistique() {
    let nbanv = 0;
    let nbepan = 0;
    tpan = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].type === "anime") {
            let nb = parseInt(list[i].nbEpisode);
            nbepan = nbepan + nb;
            nbanv = nbanv + 1;
            tpan = tpan + nb*22;
        }
    } 
    document.getElementById("nbepan").innerHTML = nbepan;
    document.getElementById("nbanv").innerHTML = nbanv;
    document.getElementById("tpan").innerHTML = tpan;
 
    let nbwv = 0;
    let nbepw = 0;
    tpsw = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].type === "webtoon") {
            let nb = parseInt(list[i].nbEpisode);
            nbepw = nbepw + nb;
            nbwv = nbwv + 1;
            tpsw = tpsw + nb*22;
        }
    }
    document.getElementById("nbepw").innerHTML = nbepw;
    document.getElementById("nbwv").innerHTML = nbwv;
    document.getElementById("tpsw").innerHTML = tpsw;

    let nbepfl = 0;
    let nbflv = 0;
    tpsfl = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].type === "film") {
            let nb = parseInt(list[i].nbEpisode);
            nbepfl = nbepfl + nb;
            nbflv = nbflv + 1;
            tpsfl = tpsfl + nb*22;
        }
    }
    document.getElementById("nbepfl").innerHTML = nbepfl;
    document.getElementById("nbflv").innerHTML = nbflv;
    document.getElementById("tpsfl").innerHTML = tpsfl;
}

function minute() {
    document.getElementById("tpan").innerHTML = tpan;
    document.getElementById("tpsw").innerHTML = tpsw;
    document.getElementById("tpsfl").innerHTML = tpsfl;
}

function heure() {
    let ta = tpan/60;
    let tw = tpsw/60;
    let tf = tpsfl/60;
    document.getElementById("tpan").innerHTML = ta.toFixed(2);
    document.getElementById("tpsw").innerHTML = tw.toFixed(2);
    document.getElementById("tpsfl").innerHTML = tf.toFixed(2);
}

function jour() {
    let ta = tpan/60/24;
    let tw = tpsw/60/24;
    let tf = tpsfl/60/24;
    document.getElementById("tpan").innerHTML = ta.toFixed(2);
    document.getElementById("tpsw").innerHTML = tw.toFixed(2);
    document.getElementById("tpsfl").innerHTML = tf.toFixed(2);
}