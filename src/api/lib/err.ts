export class FormatError extends Error {
   culprit:string;

   /**
    * FormatError should be used when an entity
    * @param message Brief error message.
    * @param culprit Name of the improperly formatted entity.
    */
   constructor(culprit:string) {
      super();
      this.name = 'FormatError';
      this.culprit = culprit;
      this.message = `${culprit} is improperly formatted`;
   }
}
