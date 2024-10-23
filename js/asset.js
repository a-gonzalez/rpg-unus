import { getTileSize, HALF_TILE } from "./util.js";

export default class Asset
{
    constructor({ game, sprite, position, scale })
    {
        //console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
        
        this.initialize({ game, sprite, position, scale });
    }

    initialize({ game, sprite, position, scale })
    {
        let tilesize = getTileSize();

        this.game = game;
        this.sprite = sprite ?? {
            sheet: new Image(),
            x: 0,
            y: 0,
            width: tilesize,
            height: tilesize
        };
        this.position = position ?? { x: 0, y: 0 };
        this.scale = scale ?? 1;

        this.destinationPosition = { x: this.position.x, y: this.position.y };
        this.distanceToTravel = { x: 0, y: 0 };

        this.width = this.sprite.width * this.scale;
        this.height = this.sprite.height * this.scale;
        this.half_width = this.width * 0.5;
        this.half_height = this.height * 0.5;
    }

    moveTowards(destination, speed)
    {
        this.distanceToTravel.x = destination.x - this.position.x;
        this.distanceToTravel.y = destination.y - this.position.y;

        //let distance = Math.sqrt(this.distanceToTravel.x ** 2 + this.distanceToTravel ** 2);
        let distance = Math.hypot(this.distanceToTravel.x, this.distanceToTravel.y);

        if (distance <= speed)
        { // if close enough, snap to position
            this.position.x = destination.x;
            this.position.y = destination.y;
        }
        else
        { // else take a step towards destination
            let stepX = this.distanceToTravel.x / distance;
            let stepY = this.distanceToTravel.y / distance;

            this.position.x += stepX * speed;
            this.position.y += stepY * speed;

            // remaining distance
            this.distanceToTravel.x = destination.x - this.position.x;
            this.distanceToTravel.y = destination.y - this.position.y;

            distance = Math.hypot(this.distanceToTravel.x, this.distanceToTravel.y);
        }
        return distance;
    }

    draw(context)
    {
        let tilesize = getTileSize();

        context.save();
        context.fillStyle = "#00ff00";
        context.fillRect(this.position.x, this.position.y, tilesize, tilesize);

        context.strokeStyle = "#ffff00";
        context.strokeRect(this.destinationPosition.x, this.destinationPosition.y, tilesize, tilesize);
        context.restore();

        context.drawImage(this.sprite.sheet, this.sprite.x * this.sprite.width, this.sprite.y * this.sprite.height, this.sprite.width, this.sprite.width, this.position.x + HALF_TILE - this.half_width, this.position.y + HALF_TILE - this.half_height, this.width, this.height);
    }
}