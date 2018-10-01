const squareMeter = require('./7')

test('calculates area in square meters', () => {
    expect(squareMeter(15,20)).toBe(27.871)
})