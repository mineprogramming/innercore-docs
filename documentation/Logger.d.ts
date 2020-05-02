/**
 * Module used to log messages to Inner Core log and android log
 */
declare namespace Logger {
    /**
     * Writes message to the log, using specified log prefix
     * @param message message to be logged
     * @param prefix prefix of the message, can be used to filter log
     */
    function Log(message: string, prefix: string): void;

    /**
     * Logs java Throwable with full stack trace to 
     * @param error java Throwable to be logged
     */
    function LogError(error: java.lang.Throwable): void;

    /**
     * Writes logger content to file and clears all buffers
     */
    function Flush(): void;
}