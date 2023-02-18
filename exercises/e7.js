// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
   const clientWithLeastBalance = [{balance: Infinity}];
   for (const client of array) {
      if (client.balance > 0 && client.balance < clientWithLeastBalance[0].balance) {
         clientWithLeastBalance[0] = client;
      }
   }
   return clientWithLeastBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
