export class Guess {
    guessId: number
    departement: String
    distanceTo: number
    direction: String

    constructor(
        guessId: number,
        departement: String,
        distanceTo: number,
        direction: String
    ) {
        this.guessId = guessId;
        this.departement = departement;
        this.distanceTo = distanceTo;
        this.direction = direction;
    };

}