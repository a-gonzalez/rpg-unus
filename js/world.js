export default class World
{
    constructor()
    {
        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
        
        this.initialize();
    }

    initialize()
    {
        this.level_1 = {};
    }

    drawGrid()
    {
        for (let row = 0; row < ROWS; row++)
        {
            for (let column = 0; column < COLUMNS; column++)
            {
                context.strokeRect(column * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            }
        }
    }
}