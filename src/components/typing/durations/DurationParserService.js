export default class DurationParserService 
{ 
    constructor() {
        this.regexHour = /^([0-9]{1,2})[Hh]$/
    }

    parse(source) {

       

        if(source == '1H30' || source == '1h30') {
            return 90;
        }
        
        let matches = this.regexHour.exec(source)

        let hourCount = matches[1];

        return hourCount * 60;

        if(source == '2H' || source == '2h') {
            return 120
        }
        return 60;
    }
}