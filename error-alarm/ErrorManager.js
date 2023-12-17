class ErrorManager {

  // Could be envs
  MINUTE_IN_MILLISECONDS = 60000
  MAX_ALLOWED_ERROR_RATE = 10

  constructor() {
    super()
    this.errorDateQueue = []
    this.lastEmailTimestamp = 0
  }

  sendEmailIfAllowed(error) {
    const currentTime = Date.now()
    if (currentTime - this.lastEmailTimestamp >= MINUTE_IN_MILLISECONDS) { 
      this.lastEmailTimestamp = currentTime
      sendEmail('Warning: High error rate detected!', error) // Email sending logic, if we want also we can send the last error on the email
    } 
  }

  addDateToQueue(error) {
    this.errorDateQueue.push({ timestamp: Date.now(), error })
    const exceededAmountOfErrors = this.errorDateQueue.length > MAX_ALLOWED_ERROR_RATE

    if (exceededAmountOfErrors) {
      this.errorDateQueue.shift()
      const timeDifference = this.errorDateQueue[9].timestamp - this.errorDateQueue[0].timestamp
      if (timeDifference < MINUTE_IN_MILLISECONDS)
        this.sendEmailIfAllowed(error)
    }  
  }

  logError(error) {
    this.addDateToQueue(error)
    // Normal execution, write to log file
    // ...
  }
}

// Singleton
module.exports = new ErrorManager()