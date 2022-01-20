/**
 * Module used to create and manipulate threads. Threads let you execute 
 * time-consuming tasks without blocking current execution thread
 */
declare namespace Threading {
    /**
     * Function used to format error messages in a custom way
     */
    type ErrorMessageFormatFunction =
        /**
         * @param error java.lang.Throwable instance or javascript exception
         * @param priority current thread priority
         */
        (error: any, priority: number) => string;


    /**
     * Function used to create formatted error message with the full debug
     * information about exception in one of the threads. Usually called by Core 
     * Engine
     * @param error java.lang.Throwable instance or javascript exception
     * @param name thread name used to localize errors if there are any
     * @param priority current thread priority
     * @param formatFunc function that formats the exception itself
     */
    function formatFatalErrorMessage(error: any, name: string, priority: number, formatFunc: ErrorMessageFormatFunction): string;

    /**
     * Creates and runs new thread with specified function as a task
     * @param name thread name used to localize errors if there are any
     * @param func function that runs in the new thread. Usually it is some 
     * time-consuming task, that is executed in the new thread to avoid blocking
     * user interfaces
     * @param priority priority of the thread (integer value). The higher 
     * priority is, the quicker the task will be executed. Default value is 0
     * @param isErrorFatal if true, all errors in the thread are considered 
     * fatal and lead to fatal error AlertDialog, formatted with *formatFunc*
     * @param formatFunc function that formats exceptions in the thread to 
     * display in fatal error AlertDialog
     * @return java.lang.Thread instance representing created thread
     */
    function initThread(name: string, func: () => void, priority?: number, isErrorFatal?: boolean, formatFunc?: ErrorMessageFormatFunction): java.lang.Thread;

    /**
     * Gets thread by its name
     * @param name name of the thread
     * @return java.lang.Thread instance representing the thread
     */
    function getThread(name: string): java.lang.Thread;
}