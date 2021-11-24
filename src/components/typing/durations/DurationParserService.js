export default class DurationParserService 
{ 
    constructor() {
        this.regexHour = /^([0-9]{1,2})[Hh]$/

        this.regexHourMinutes = /^([0-9]{1,2})[Hh]([0-9]{1,2})$/

        this.zero = 0;

        this.toMinutesCount = (hourCount) => {
            return hourCount * 60;
        }
    }

    parse(source) {

        let matchesHourMinutes = this.regexHourMinutes.exec(source)

        if(matchesHourMinutes != null) {

            let hourCount = parseInt(matchesHourMinutes[1]);
            let minuteCount = parseInt(matchesHourMinutes[2]);

            return this.toMinutesCount(hourCount) + minuteCount;
        }
        
        let matchesHourOnly = this.regexHour.exec(source)

        if(matchesHourOnly != null) {

            let hourCount = matchesHourOnly[1];

            return this.toMinutesCount(hourCount);           
        }

        return this.zero;
    }
}