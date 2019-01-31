export class Project {
  constructor(
  public projName: string,
  public projCreator: string,
  public projDescription: string,
  public pledgeGoal: number,
  public pledgedAmount: number,
  public backers: number
){}
}
