export class Departement {
    private name: string;
    private img: string;

    constructor(name: string, img: string) {
        this.name = name
        this.img = img;
    };

    getName(): string {
        return this.name;
    };

    setName(name: string) {
        this.name = name;
    };

    getImg(): string {
        return this.img;
    }

    setImg(img: string) {
        this.img = img;
    }
}