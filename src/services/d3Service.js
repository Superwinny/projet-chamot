class D3Service {

    static async sendRequest(name, lastname,email,selectedD3 ) {
      try {
        console.log('[Services][D3][sendRequest] Send Request with params', name,lastname,email,selectedD3)
        
      } catch (e) {
        console.error('[Services][D3][sendRequest] An error occurred when send request', e)
        throw new Error(e.error, e.reason, e.details)
      }
    }
}


export default D3Service
