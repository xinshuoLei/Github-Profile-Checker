/**
 * class for follower and following model
 */
export default class FollowerAndFollowing {
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
    // error checking
    const userData = json.data.user;
    if (userData == null) {
      return;
    }
    this.followers = userData.followers.nodes;
    this.following = userData.following.nodes;
  }
}
