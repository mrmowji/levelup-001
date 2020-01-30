import axios from "axios";
import IEndpoint from "./IEndpoint";

class TypicodeEndpoint implements IEndpoint {
  hostName: string;

  getPath: string;

  postPath: string;

  putPath: string;

  deletePath: string;

  title: string;

  body: string;

  constructor(title: string, body: string) {
    this.hostName = "https://jsonplaceholder.typicode.com";
    this.getPath = "/posts";
    this.postPath = "/posts";
    this.putPath = "/posts/1";
    this.deletePath = "/posts/1";
    this.title = title;
    this.body = body;
  }

  async post(): Promise<any> {
    const postData = {
      title: this.title,
      body: this.body,
      userId: 1,
    };

    return axios.post(this.hostName + this.postPath, {
      data: postData
    }).then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  }
}

export default TypicodeEndpoint;