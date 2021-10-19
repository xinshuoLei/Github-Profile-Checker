/**
 * class for profile model
 */
export default class ProfileModel {
  /**
     * constructor for the profile class
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
    this.name = userData.name;
    this.userName = userData.login;
    this.email = userData.email;
    this.follwerCount = userData.followers.totalCount;
    this.followingCount = userData.following.totalCount;
    this.avatar = userData.avatarUrl;
    this.bio = userData.bio;
    this.website = userData.websiteUrl;
    this.createdAt = userData.createdAt;
    this.repoCount = userData.repositories.totalCount;
    this.followerCount = userData.followers.totalCount;
    this.followingCOunt = userData.following.totalCount;
  }
}
