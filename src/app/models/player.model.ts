export class Player {
    public score: number;
    public level: number;
    constructor(public name: string) {
        this.score = 0;
        this.level = 1;
    }

    rewardPoints(points: number) {
        this.score += points;
    }
}