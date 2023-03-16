 export const getPasswordStrength = (password) => {
    if (password.length < 6) {
      return  'weak';
    } else if (password.length < 10) {
      return 'medium';
    }else if (password.length < 15) {
      return 'Fine';
    }  else {
      return 'strong';
    }
};
