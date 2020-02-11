import axios from "axios";

class TypicodeEndpoint {
  static hostName: string = "https://jsonplaceholder.typicode.com";

  static getPath: string = "/posts";

  static postPath: string = "/posts";

  static putPath: string = "/posts/1";

  static deletePath: string = "/posts/1";

  static async post(title: string, body: string): Promise<any> {
    const postData = {
      title,
      body,
      userId: 1,
    };

    return axios
      .post(this.hostName + this.postPath, {
        data: postData,
      })
      .then(response => response)
      .catch(error => error);
  }
}

export default TypicodeEndpoint;
