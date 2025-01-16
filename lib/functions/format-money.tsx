const FormatMoney = (amount: number | undefined): string => {
    if (amount === undefined || amount === null) {
      return "$ 0.00"; // Or any suitable default for undefined
    }
  
    if (amount === 0) {
      return "$ 0.00";
    }
  
    let scaledAmount = amount;
    let suffix = "";
  
    if (Math.abs(amount) >= 1_000_000_000) {
      scaledAmount = amount / 1_000_000_000;
      suffix = " Billion";
    } else if (Math.abs(amount) >= 1_000_000) {
      scaledAmount = amount / 1_000_000;
      suffix = " Million";
    } else if (Math.abs(amount) >= 1_000) {
      scaledAmount = amount / 1_000;
    }

    let formattedAmount = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
    }).format(scaledAmount) + suffix;

   
   if (suffix == ""){
     formattedAmount = formattedAmount.replace(".00", "");
   }


    return formattedAmount;
  };
  
  export default FormatMoney;