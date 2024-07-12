function time() {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0
    const now = Date.now(); // Get the current timestamp in milliseconds
    return (now - startOfDay.getTime()) / 1000; // Calculate the difference in seconds
}

console.log(`Seconds: ${time()}`);