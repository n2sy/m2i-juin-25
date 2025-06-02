export class Candidat {
  //   public _id: string;
  //   public prenom: string;

  constructor(
    public _id: string,
    public prenom: string,
    public nom: string,
    public age: number,
    public profession?: string,
    public avatar?: string
  ) {
    // this._id = _id;
    // this.prenom = prenom;
  }
}
// export class Candidat {
//   public _id: string;
//   public prenom: string;

//   constructor(_id: string, prenom: string) {
//     this._id = _id;
//     this.prenom = prenom;
//   }
// }
