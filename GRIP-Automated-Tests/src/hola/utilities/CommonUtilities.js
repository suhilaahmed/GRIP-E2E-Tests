

export class CommonUtilities {

    static waitInSeconds(seconds){
        seconds = seconds *100;
        const start = new Date().getTime();
        let end = start;
        while(end < start + seconds) {
            end = new Date().getTime();
        }
    }

    static getTimeStampInMS () {
        return (new Date()).getTime();
    }

    static getCurrentDate () {

    }

}