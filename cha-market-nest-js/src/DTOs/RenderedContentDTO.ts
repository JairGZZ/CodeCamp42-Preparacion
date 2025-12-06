import { v4 } from "uuid";

export class RenderedContentDTO{
    public eventid:string 
    public channel:string;
    public body:string;
    public subject?:string;
}
