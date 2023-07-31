import { BaseClass } from "../BaseClass/baseClass.class";
import { User } from "../User/user.class";

export class Note extends BaseClass {
    private date: Date = new Date()
	constructor(
		private title: string,
		private description: string,
		private owner: User,
		private archived: boolean = false,
		private favorite: boolean = false,
	) {
		super();
	}

	toJson() {
		return {
			id: this.getId(),
			title: this.title,
			description: this.description,
			archived: this.getArchived(), 
            owner: this.getOwner(),
            favorite: this.getFavorite(), 
            date: this.getDate(), 
		};
	}

	getTitle(): string {
        return this.title;
    }

    getDescription(): string {
        return this.description;
    }

    getOwner(): User {
        return this.owner;
    }

    getArchived(): boolean {
        return this.archived;
    }

    getFavorite(): boolean {
        return this.favorite;
    }

    getDate(): Date {
        return this.date;
    }
}