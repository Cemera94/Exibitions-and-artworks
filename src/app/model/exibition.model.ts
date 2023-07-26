import { ExibitionLocation } from "./exibition-location.model";

export class Exibition {
    _id: number;
    title: string;
    description: string;
    location: ExibitionLocation;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.title = obj && obj.title || "";
        this.description = obj && obj.description || "";
        this.location = obj && new ExibitionLocation(obj.location) || new ExibitionLocation();
    }
}