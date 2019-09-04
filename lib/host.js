//========================================================================================
/*                                                                                      *
 *                             Require the node dependencies                            *
 *                                                                                      */
//========================================================================================
 
const Octokit = require('@octokit/rest')

//########################################################################################

module.exports = {
  /**
   * @description             this functions create a token to access github
   *   
   * @param {String} creds    the credentials of the user
   * 
   * @returns the token
   *
   * @author Ram Pandey
   */
  getAccessToken: (creds) => {
    return new Octokit({
      auth: {
        username: creds.username,
        password: creds.password,
        async on2fa () {
          // example: ask the user
          return prompt('Two-factor authentication Code:')
        }
      }
     })
  },
  createRemoteRepo:async (userObject,creds)=>{
    try{
    let repo = await userObject.repos.createForAuthenticatedUser({
      name: `${creds}.github.io`,
      description: "Hello world",
      private: "public"
    })
    return true
  } catch (error) {
      switch (error.status) {
        case 401:
          console.log("Bad credentials please enter correct details")
          return false
        case 500:
          console.log("Github servers are exprencing issues please try again later")
          return false
        case 422:
          console.log(`A repo with this name already exist please try other name or delete the previous repo`)
          return false
        default:
          console.log('Something went wrong please try again later')
          console.log(error)
          return false
      }
  }
  },
  cloneRemoteRepo:(userObject,path)=>{

  }
}