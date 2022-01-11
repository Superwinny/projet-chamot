class D2Service {

    static async sendRequest(name, lastname,email,selectedD2 ) {
      try {
        console.log('[Services][D2][sendRequest] Send Request with params', name,lastname,email,selectedD2)
        
      } catch (e) {
        console.error('[Services][D2][sendRequest] An error occurred when send request', e)
        throw new Error(e.error, e.reason, e.details)
      }
    }
}


export default D2Service
