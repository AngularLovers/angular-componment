export class GoodBlogItem {
  id:number;
  name:string;
  url:string;
  date:any;
  summary:string;

  constructor(id:number, name:string, url:string, date?:Date, summary?:string) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.date = date || new Date;
    this.summary = summary || '';
  }
}
