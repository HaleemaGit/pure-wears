module.exports = {
    ...require('./.eslintrc.js'), // Include your existing ESLint configuration
    rules: {
      ...require('./.eslintrc.js').rules, // Include existing rules
      'no-unused-vars': 'warn', // Set 'no-unused-vars' to warning
    },
  };
  