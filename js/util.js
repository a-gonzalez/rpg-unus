const TILE_SIZE = 32;
const COLUMNS = 15;
const ROWS = 20;

const getBackgroundPath = () =>
{
    return "../img/backgroundlevel1.png";
};

const getTileSize = () =>
{
    return TILE_SIZE;
};

const getColumnCount = () =>
{
    return COLUMNS;
};

const getRowCount = () =>
{
    return ROWS;
};

const getScreenWidth = () =>
{
    return TILE_SIZE * COLUMNS;
};

const getScreenHeight = () =>
{
    return TILE_SIZE * ROWS;
};

const LEFT = "LEFT";
const RIGHT = "RIGHT";
const UP = "UP";
const DOWN = "DOWN";

const HALF_TILE = TILE_SIZE * 0.5;

/*const drawGrid = (context) =>
{
    for (let row = 0; row < ROWS; row++)
    {
        for (let column = 0; column < COLUMNS; column++)
        {
            context.strokeRect(column * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
    }
};*/

export {
    getTileSize,
    getScreenWidth,
    getScreenHeight,
    getRowCount,
    getColumnCount,
    getBackgroundPath,
    LEFT,
    RIGHT,
    UP,
    DOWN,
    HALF_TILE
};