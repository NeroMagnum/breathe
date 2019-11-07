import font from "overprint/overprint/font";
import textgrid from "overprint/overprint/text-grid"
import cell from "overprint/overprint/cell";

const canvas = document.querySelector("#game");

const grid = new textgrid(canvas, {
    width: 80,
    height: 50,
    font: font("menlo", false, 15)
});
grid.writeCell(40,25, cell("@"))
grid.render();
grid.writeCell(40,25, cell("@", "#f90"));

const width = 40;
const height = 30;


const player = {
    x: Math.floor(width / 2),
    y: Math.floor(height / 2)
}

