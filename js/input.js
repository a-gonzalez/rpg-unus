import { LEFT, RIGHT, UP, DOWN } from "./util.js";

export default class Input
{
    constructor()
    {
        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);

        this.keys = [];

        addEventListener("keydown", (event) =>
        {
            //console.info(`Pressed ${event.key}`);

            if (event.key === "ArrowUp" || event.key.toLocaleLowerCase() === "w")
            {
                this.keyPressed(UP);
            }
            else if (event.key === "ArrowDown" || event.key.toLocaleLowerCase() === "s")
            {
                this.keyPressed(DOWN);
            }
            else if (event.key === "ArrowRight" || event.key.toLocaleLowerCase() === "d")
            {
                this.keyPressed(RIGHT);
            }
            else if (event.key === "ArrowLeft" || event.key.toLocaleLowerCase() === "a")
            {
                this.keyPressed(LEFT);
            }

        });

        addEventListener("keyup", (event) =>
        {
            //console.info(`Released ${event.key}`);

            if (event.key === "ArrowUp" || event.key.toLocaleLowerCase() === "w")
            {
                this.keyReleased(UP);
            }
            else if (event.key === "ArrowDown" || event.key.toLocaleLowerCase() === "s")
            {
                this.keyReleased(DOWN);
            }
            else if (event.key === "ArrowRight" || event.key.toLocaleLowerCase() === "d")
            {
                this.keyReleased(RIGHT);
            }
            else if (event.key === "ArrowLeft" || event.key.toLocaleLowerCase() === "a")
            {
                this.keyReleased(LEFT);
            }
        });
    }

    keyPressed(key)
    {
        if (this.keys.indexOf(key) === -1)
        { // if not present in array, add to
            this.keys.unshift(key);
        }
        console.info(key, this.keys);
    }

    keyReleased(key)
    {
        let index = this.keys.indexOf(key);

        if (index !== -1)
        {
            this.keys.splice(index, 1);
        }
        console.info(key, this.keys);
    }

    get lastKey()
    {
        return this.keys[0];
    }
}
