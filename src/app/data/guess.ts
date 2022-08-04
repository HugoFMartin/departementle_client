export class Guess {
    departement: String
    distanceTo: number
    direction: String

    constructor(
        departement: String,
        distanceTo: number,
        direction: String
    ) {
        this.departement = departement;
        this.distanceTo = distanceTo;
        this.direction = direction;
    };

}