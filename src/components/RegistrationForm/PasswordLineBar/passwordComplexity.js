 export const getPasswordStrength = (password) => {
    if (password.length < 4) {
      return  'weak';
    } else if (password.length < 8) {
      return 'medium';
    }else if (password.length < 12) {
      return 'Fine';
    }  else {
      return 'strong';
    }
  };