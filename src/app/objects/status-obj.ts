export class Status{

  private static status: Status[] = new Array<Status>();

  public static IN_A_MEETING:Status = new Status("In a Meeting");
  public static COMMUTING:Status = new Status("Commuting");
  public static OUT_SICK:Status = new Status("Out sick");
  public static VACATIONING:Status = new Status("Out on Vaction");
  public static WORKING_REMOTELY:Status = new Status("Working remotely");

  private statuses: string;

  constructor(stat: string){
    this.statuses = stat;
    Status.status.push(this)
  }

  public getStatus(): string{
    return this.statuses;
  }

  public getAllStatus(): Status[]{
    return Status.status;
  }
}
