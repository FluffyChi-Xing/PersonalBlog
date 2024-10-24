import {$request} from "@/componsables/request";

const basePath = 'https://api.star-citizen.wiki'

/**
 * @description 获取随机图片
 */
export async function getRandomImg() {
  const api = '/api/v2/comm-link-images/random?limit=1';
  return await $request(basePath + api);
}
