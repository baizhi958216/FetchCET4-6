interface IResult {
  姓名: string;
  成绩: string;
  阅读: string;
  听力: string;
  写作: string;
}
interface IStu {
  name: string;
  id: string;
}
export enum ILevel {
  CET4 = "1",
  CET6 = "2",
}
export type { IResult, IStu };
