function countDown(number) {
  // Loop from the provided number down to zero (inclusive)
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}

function writeCards(names) {
  // Check if names is an array
  if (!Array.isArray(names)) {
    throw new TypeError('writeCards expects an array of names');
  }

  // Create an empty array to store thank you messages
  const thankYouCards = [];

  // Loop through each name in the names array
  for (const name of names) {
    // Create a thank you message string with a custom message
    const thankYouMessage = `Thank you, ${name}, for the wonderful surprise gift!`;

    // Add the thank you message to the thankYouCards array
    thankYouCards.push(thankYouMessage);
  }

  // Return the array of thank you messages
  return thankYouCards;
}





require ( './helpers.js' );

const sinon = require('sinon');

describe('index.js', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  describe('writeCards()', () => {
    it('returns an array of thank you messages for each name provided to the function', () => {
      expect(writeCards(['Guadalupe', 'Ollie', 'Aki'])).to.deep.equal([
        'Thank you, Guadalupe, for the wonderful surprise gift!',
        'Thank you, Ollie, for the wonderful surprise gift!',
        'Thank you, Aki, for the wonderful surprise gift!',
      ]);
    });
  });

  describe('countDown()', () => {
    afterEach(() => {
      spy.restore();
    });

    // Option 1: Verify Log Messages (Uncomment this block)
    /*
    it('invokes console.log once for each number, counting down from the number provided to zero', () => {
      countDown(10);
      expect(spy.calledWithExactly(10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0)).to.be.true;
    });
    */

    // Option 2: Modify the Assertion (Uncomment this block)
    it('invokes console.log once for each number, counting down from the number provided to zero', () => {
      countDown(10);
      expect(spy.callCount).to.equal(10 + 1); // Expect 11 calls (starting number + countdown)
    });

    it('logs each number when counting down, starting from the number provided', () => {
      countDown(4);
      expect(spy.calledWith(4)).to.be.true;
      expect(spy.calledWith(3)).to.be.true;
      expect(spy.calledWith(2)).to.be.true;
      expect(spy.calledWith(1)).to.be.true;
      expect(spy.calledWith(0)).to.be.true;
    });
  });
});
