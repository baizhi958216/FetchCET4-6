import { ILevel, IResult, IStu } from "./result.interface";

export class FetchResult {
  results: IResult[] = [];
  stuJson: IStu[] = [];

  constructor(stuJson: IStu[]) {
    this.stuJson = stuJson;
  }

  async getResult(level: ILevel): Promise<IResult[]> {
    const promises: Promise<void>[] = [];
    for (let index = 0; index < this.stuJson.length; index++) {
      const element = this.stuJson[index];
      const promise = fetch(
        `https://cachecloud.neea.cn/api/latest/results/cet?km=${level}&xm=${element.name}&no=${element.id}`,
        {
          credentials: "include",
          referrer: "https://cjcx.neea.edu.cn/",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.score) {
            this.results.push({
              姓名: element.name,
              成绩: data.score,
              阅读: data.sco_rd,
              听力: data.sco_lc,
              写作: data.sco_wt,
            });
          }
        });
      promises.push(promise);
    }
    return Promise.all(promises).then(() => this.results);
  }
}
