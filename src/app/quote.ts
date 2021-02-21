export class Quote {
    showDescription: boolean;
    constructor(
        public id: number,
        public quote: any,
        public author: string,
        public publisher: string,
        public completeDate: Date,
        public upvote:number,
        public downvote:number
        )
        {
         this.showDescription=false;
    }
}