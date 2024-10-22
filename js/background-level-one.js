export default class BackgroundLevelOne
{
    constructor(path)
    {
        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);

        this.initialize(path);
    }

    initialize(path)
    {
        this.image = new Image();
        this.image.src = path;
    }

    draw(context)
    {
        context.drawImage(this.image, 0, 0);
    }
}