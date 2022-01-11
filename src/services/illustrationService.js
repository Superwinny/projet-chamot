class IllustrationService {

    static async sendRequest(name, lastname,email,selectedFormat,selectedIllustration ) {
      try {
        console.log('[Services][Illustration][sendRequest] Send Request with params', name,lastname,email,selectedFormat,selectedIllustration)
        
      } catch (e) {
        console.error('[Services][Illustration][sendRequest] An error occurred when send request', e)
        throw new Error(e.error, e.reason, e.details)
      }
    }
}


export default IllustrationService
