import { BaseClass } from "../BaseClass/baseClass.class";
import { User } from "../User/user.class";

export class Note extends BaseClass {
    private date: Date = new Date()
	constructor(
		private title: string,
		private description: string,
		private favorite: boolean = false,
		private archived: boolean = false,
		private owner: Omit<User, 'senha'>,
  
	) {
		super();
	}

	toJSON() {
		return {
			id: this.getId(),
			title: this.getTitle(),
			description: this.getDescription(),
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

    getOwner(): Omit<User, 'senha'> {
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
    setTitle(title: string): void {
        this.title = title;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    setOwner(owner: Omit<User, 'senha'>): void  {
        this.owner = owner;
    }

    setArchived(): void {
        this.archived = !this.archived;
    }

    setFavorite(): void {
        this.favorite = !this.favorite;
    }

    setDate(date: Date): void {
        this.date = date;
    }
}