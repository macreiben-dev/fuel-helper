import DurationParserService from '../../../../src/components/typing/durations/DurationParserService'
import each from "jest-each"


describe('can extract duration in minute', () => {

    test('when duration is 1PPPP', () => {
        let target = new DurationParserService();
    
        let actual = target.parse('1PPP')
    
        expect(actual).toBe(0)
    })
    
    each([
      ["1H"],
      ["1h"]]).it("when duration is '%s'", (text) => {
        let target = new DurationParserService();
    
        let actual = target.parse(text)
    
        expect(actual).toBe(60)
    })

    each([
      ["2H"],
      ["2h"]]).it("when duration is '%s'", (text) => {
        let target = new DurationParserService();
    
        let actual = target.parse(text)
    
        expect(actual).toBe(120)
    })

    each([
        ["1H30", 90],
        ["1h30", 90]
      ]).it("when duration is '%s'", (text, expected) => {
        let target = new DurationParserService();

        let actual = target.parse(text)
    
        expect(actual).toBe(90)
      })

})