import { ofetch } from "ofetch";

const documents = import.meta.glob('./*/index.txt', { eager: true });
console.log('获取document内容', documents);

const docModules: Record<string, any> = {}; // 将home下的index.txt文件内容存储到modules中

async function loadTxtContent(filePath: string): Promise<string> {
  // 确保文件路径是相对路径
  const response = await ofetch(new URL(filePath, import.meta.url).href);
  return await response;
}

Object.entries(documents).forEach(async ([key, module]) => {
  // 使用txt所在文件夹的名称作为key
  const docName = key.replace('./', '').replace('/index.txt', '');
  const filePath = module.default || module;
  docModules[docName] = await loadTxtContent(filePath);
});

export default docModules;
