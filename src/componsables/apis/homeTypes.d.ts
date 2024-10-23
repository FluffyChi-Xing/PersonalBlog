export namespace HomeTypes{
  /**
   * @description homeCardTypes
   * @interface homeCardTypes
   * @param {string} label
   * @param {number} id
   * @param {string} title
   * @param {string} [desc] optional
   * @param {string[]} [img] optional
   * @param {string} [link] optional
   */
  export interface homeCardTypes {
    label: string;
    id: number;
    desc?: string;
    title: string;
    img?: string[];
    link?: string;
  }
}
