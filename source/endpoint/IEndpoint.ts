interface IEndpoint {
  hostName: string;
  getPath: string;
  postPath: string;
  putPath: string;
  deletePath: string;
  title: string;
  body: string;
  post(): Promise<any>;
}

export default IEndpoint;