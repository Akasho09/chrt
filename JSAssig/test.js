function busyWait(ms) {
    return new Promise(resolve => {
      const start = Date.now();
      while (Date.now() - start < ms) {
        // Busy wait
      }
      resolve();
    });
  }
  
  // Usage example:
  busyWait(3000).then(() => console.log('Resolved after 3 seconds of busy wait'));
  
