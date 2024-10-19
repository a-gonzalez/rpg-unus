const TILE_SIZE = 32;
const COLUMNS = 15;
const ROWS = 20;

const getTileSize = () =>
{
    return TILE_SIZE;
};

const getScreenWidth = () =>
{
    return TILE_SIZE * COLUMNS;
};

const getScreenHeight = () =>
{
    return TILE_SIZE * ROWS;
};

const drawGrid = (context) =>
{
    for (let row = 0; row < ROWS; row++)
    {
        for (let column = 0; column < COLUMNS; column++)
        {
            context.strokeRect(column * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
    }
};

export { getTileSize, getScreenWidth, getScreenHeight, drawGrid };