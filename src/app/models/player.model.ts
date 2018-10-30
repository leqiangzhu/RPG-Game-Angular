export class Player {
    public score: number;
    constructor(public name: string, public level: number) {
        this.score = 0;
        this.level = level;
    }

    rewardPoints(points: number) {
        this.score += points;
    }



}