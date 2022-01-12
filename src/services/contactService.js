class ContactService {

    static async sendRequest(name, lastname,email,message ) {
      try {
        console.log('[Services][Contact][sendRequest] Send Request with params', name,lastname,email,message)
        
      } catch (e) {
        console.error('[Services][Contact][sendRequest] An error occurred when send request', e)
        throw new Error(e.error, e.reason, e.details)
      }
    }
}


export default ContactService
