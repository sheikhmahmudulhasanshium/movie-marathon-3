const FormatDate = (input: string | undefined): string => {
    if (!input) {
      return ""; // Handle undefined case as appropriate
    }
  
    try {
      const dateParts = input.split('-');
      if (dateParts.length !== 3) {
        return ""; // Handle invalid input
      }
  
      const year = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10);
      const day = parseInt(dateParts[2], 10);
  
      if (isNaN(year) || isNaN(month) || isNaN(day)) {
        return ""; // Handle parsing errors
      }
  
      const date = new Date(year, month - 1, day); // Corrected line: Use the parsed year
  
      const formattedDate = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
  
      return formattedDate;
    } catch (error) {
      console.error("Error formatting date:", error);
      return "";
    }
  };
  
  export default FormatDate;