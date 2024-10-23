import BackgroundLevelOne from "./background-level-one.js";
import { getTileSize, getRowCount, getColumnCount } from "./util.js";

export default class World
{
    constructor()
    {
        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
        
        this.initialize();
    }

    initialize()
    {
        let bg_level_1 = new Image();
        bg_level_1.src = "img/backgroundLevel1.png";

        let fg_level_1 = new Image();
        fg_level_1.src = "img/foregroundLevel1.png";

        this.level_1 = {
            waterLayer: [],
            groundLayer: [],
            collisionLayer: [ // 15 x 20
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
                1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
            ],
            backgroundLayer: bg_level_1,
            foregroundLayer: fg_level_1
        };
        
    }

    getTile(array, row, column)
    {
        return array[getColumnCount() * row + column];
    }

    drawBackground(context)
    {
        context.drawImage(this.level_1.backgroundLayer, 0, 0);
    }

    drawForeground(context)
    {
        context.drawImage(this.level_1.foregroundLayer, 0, 0);
    }

    drawCollisionMap(context)
    {
        let tilesize = getTileSize();

        context.fillStyle = "rgba(255, 36, 0, 0.3)"; // "#ff4500"; //orange-red
        context.save();

        for (let row = 0; row < getRowCount(); row++)
        {
            for (let column = 0; column < getColumnCount(); column++)
            {
                if (this.getTile(this.level_1.collisionLayer, row, column) === 1)
                {
                    context.fillRect(column * tilesize, row * tilesize, tilesize, tilesize);     
                }
            }
        }
        context.restore();
    }

    drawGrid(context)
    {
        let tilesize = getTileSize();

        for (let row = 0; row < getRowCount(); row++)
        {
            for (let column = 0; column < getColumnCount(); column++)
            {
                context.strokeRect(column * tilesize, row * tilesize, tilesize, tilesize);
            }
        }
    }
}