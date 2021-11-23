export default class DurationParserService 
{ 
    parse(source) {
        if(source == '1H30' || source == '1h30') {
            return 90;
        }
        if(source == '2H') {
            return 120
        }
        return 60;
    }
}