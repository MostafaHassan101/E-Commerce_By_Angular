export class Store {
  public Name: string;
  public Branch: string;
  public Logo: string;
  constructor(name: string, branch: string, logo: string) {
    this.Name = name;
    this.Branch = branch;
    this.Logo = logo;
  }
}
