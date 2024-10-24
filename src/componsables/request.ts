import { ofetch } from "ofetch";
import {HttpRequestEnum} from "@/componsables/enums/httpRequestEnum";
import {$message} from "@/componsables/utils/element-plus";


/**
 * 请求方法
 * @param url
 * @param requestOptions
 */
export async function $request(url: string, requestOptions?: any) {
  // 判断 requestOptions 是否存在
  if (url) {
    if (requestOptions) {
      // 判断格式是否为对象
      if (typeof requestOptions === 'object') {
        // 如果是对象，那么添加请求头
        const myHeaders = new Headers();
        myHeaders.append("Accept", "*/*");
        myHeaders.append("Connection", "keep-alive");
        myHeaders.append("Content-Type", "application/json");
        requestOptions.append('headers', myHeaders);
        // 如果是对象直接执行请求
        return await handleRequest(url, requestOptions).then((res: any) => {
          return res;
        }).catch((e: any) => {
          $message({
            type: 'error',
            message: '请求失败，请稍后重试！',
            offset: 80
          })
        })
      } else {
        // 如果不是对象，判断是否为 string
        if (typeof requestOptions === 'string') {
          // 如果requestOptions为字符串，判断是否为四种请求方式之一
          if (HttpRequestEnum[requestOptions]) {
            // 那么执行请求
            return await handleRequest(url, requestOptions).then((res: any) => {
              return res;
            }).catch((e: any) => {
              $message({
                type: 'error',
                message: '请求失败，请稍后重试！',
                offset: 80
              })
            })
          }
        }
      }
    } else {
      // 如果 requestOptions 不存在，那么默认执行 GET 请求
      const options = 'GET'
      return await handleRequest(url, options).then((res: any) => {
        return res;
      }).catch((e: any) => {
        $message({
          type: 'error',
          message: '请求失败，请稍后重试！',
          offset: 80
        })
      })
    }
  } else {
    $message({
      type: 'error',
      message: '请求地址不能为空！',
      offset: 80
    })
  }
}


/**
 * 处理请求
 * @param url
 * @param options
 */
function handleRequest(url: string, options?: any) {
  return new Promise(async (resolve, reject) => {
    await ofetch(url, options).then((res: any) => {
      resolve(res)
    }).catch((error: any) => {
      reject(error)
    })
  })
}
