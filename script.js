import "https://cdn.jsdelivr.net/npm/beercss@3.4.12/dist/cdn/beer.min.js";
import "https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.0/dist/cdn/material-dynamic-colors.min.js";

let StreamFFN = new Audio('https://player.ffn.de/radioffn.mp3');
let StreamNDR2 = new Audio('https://icecast.ndr.de/ndr/ndr2/niedersachsen/mp3/128/stream.mp3');

function PlayFFN() {
    StreamFFN.play();
}
function PauseFFN() {
    StreamFFN.pause();
}
function StopFFN() {
    StreamFFN.load();
}
function ReloadFFN() {
    StreamFFN.load();
    StreamFFN.play();
}
function PlayNDR2() {
    StreamNDR2.play();
}
function PauseNDR2() {
    StreamNDR2.pause();
}
function StopNDR2() {
    StreamNDR2.load();
}
function ReloadNDR2() {
    StreamNDR2.load();
    StreamNDR2.play();
}
