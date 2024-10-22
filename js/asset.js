import { getTileSize } from "./util.js";

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
            x: 0, 
            y: 0,
            width: tilesize,
            height: tilesize,
            image: ""
        };
        this.position = position ?? { x: 0, y: 0 };
        this.scale = scale ?? 1;

        this.destinationPosition = { x: this.position.x, y: this.position.y };
        this.distanceToTravel = { x: 0, y: 0 };
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

        context.fillRect(this.position.x, this.position.y, tilesize, tilesize);
    }
}