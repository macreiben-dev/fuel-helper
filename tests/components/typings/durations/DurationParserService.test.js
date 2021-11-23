import DurationParserService from '/src/components/typing/durations/DurationParserService'

test('should fail', () => {
    let target = new DurationParserService();

    let actual = target.Parse('1H')

    expect(actual).toBe(60)
})