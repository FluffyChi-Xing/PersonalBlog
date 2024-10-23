import {$message} from "@/componsables/utils/element-plus";

export enum RouteEnum {
  '/' = 0,
  '/blog' = 1,
  '/gallery' = 2,
  '/friends' = 3,
  '/about' = 4,
}


/**
 * Get the key of the value
 * @param item
 */
export function useValueGetKey(item: string) {
  try {
    const index: number = RouteEnum[item as keyof typeof RouteEnum]
    return index;
  } catch (e) {
    $message({
      type: "error",
      message: '未知路由',
      offset: 80
    })
    return 0;
  }
}
