class IllustrationService {

    static async sendRequest(name, lastname,email) {
      try {
        console.log('[Services][Illustration][sendRequest] Send Request with params', name,lastname,email)
        
      } catch (e) {
        console.error('[Services][Illustration][sendRequest] An error occurred when send request', e)
        
      }
    }
}


export default IllustrationService
