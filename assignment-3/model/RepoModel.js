/**
 * class for repo model
 */
export default class RepoModel {
  /**
     * constructor for the repo class
     * @param {*} json json repsonse from api
     */
  constructor(json) {
    this.parseJson(json);
  }

  /**
     * parse json result and store relative variables
     * @param {*} json json response from api
     */
  parseJson(json) {
    const userData = json.data.user;
    this.repos = userData.repositories.node;
  }
}
