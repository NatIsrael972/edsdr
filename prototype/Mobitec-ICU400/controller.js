
let EDSFormats = {};
let EDSData = {};
let EDSImages = {};

let screenWidth = 146,
    screenHeight = 40;

let frontEDSWidth = 144;
let frontEDSHeight = 16;

let screenMatrix,
    screenCanvas,
    screenCanvasContext,

    innerDisplay,
    innerDisplayCanvas = document.createElement('canvas'),
    innerDisplayCanvasContext = innerDisplayCanvas.getContext('2d');

function setDisplayText(lines) {
    screenMatrix.onBeginDraw();
    lines.forEach((line, i) => {
        screenMatrix.drawText(new TextObject(line, Font.fromNameString('Mobitec-6:5'), new Position(0, i * 10 + 3), 1));
    });
    screenMatrix.onEndDraw();
}

function drawFrame(text) {
    screenMatrix.onBeginDraw();

    screenMatrix.drawText(new TextObject(text, Font.fromNameString('MobitecScreen-8:5'), new Position(0, 2), 1));
    matrixPrimitives.strokeRectangle(screenMatrix, 0, 18, 144 + 2, 16 + 2);

    screenMatrix.onEndDraw();
}

function parse(code) {
    return parseFormat(EDSFormats.SMRT, EDSData.SMRT[code].front, EDSImages.SMRT, innerDisplay);
}

function setup() {
    drawFrame('Dest: 0477');

    render(parse(477), innerDisplay);
}

function startup() {
    var textSets = [
        ['Booting Sys', '', '', 'Boot: 1371-R7', 300],
        ['Staring Application', '', '', 'Bios: 1372-R13', 300],
        ['mobitec ICU 400', 'Version: 1373-R58', 300],
        ['mobitec ICU 400', 'Version: 1373-R58', 'Prg: Testpgm', 500]
    ];

    let currentDelay = 0;

    textSets.forEach((lines, index) => {
        setTimeout(() => {
            setDisplayText(lines.slice(0, -1));
        }, currentDelay);
        currentDelay += lines.slice(-1)[0];
    });

    setTimeout(() => {
        setup();
    }, currentDelay);
}

function hookDisplay(display) {
    display.onEndDraw = function () {
        display.matrix.onEndDraw();

        let imageData = innerDisplayCanvasContext.getImageData(0, 0, innerDisplayCanvas.width, innerDisplayCanvas.height);
        console.log(imageData);
        screenCanvasContext.putImageData(imageData, 1 * 6, 19 * 6);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    screenCanvas = document.getElementById('screen-canvas');
    screenCanvasContext = screenCanvas.getContext('2d');

    screenMatrix = new LEDMatrix(screenWidth, screenHeight, screenCanvas, CanvasBasedLEDMatrix, 6);
    innerDisplay = new LEDMatrix(frontEDSWidth, frontEDSHeight, innerDisplayCanvas, CanvasBasedLEDMatrix, 6);

    hookDisplay(innerDisplay);
    startup();
})
