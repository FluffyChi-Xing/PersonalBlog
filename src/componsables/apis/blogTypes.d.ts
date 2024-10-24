export namespace BlogTypes {
  /**
   * BlogMenu
   * @param label string
   * @param route string optional
   * @param children BlogMenu[] optional
   * @param index number | string
   * @param icon any optional
   */
  export interface BlogMenu {
    index: number | string;
    icon?: any;
    label: string;
    route?: string;
    children?: BlogMenu[];
  }

  /**
   * BlogList
   * @param title string
   * @param desc string
   * @param date string
   * @param index number
   */
  export interface BlogList {
    title: string;
    desc: string;
    date: string;
    index: string;
  }
}
