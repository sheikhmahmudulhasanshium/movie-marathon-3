const FormatTime = (input: number | undefined): string => {
    if (input === undefined || input === null) {
        return ""; // Or handle undefined as appropriate
    }

    if(input < 0) {
        return ""; // Or handle negative values as you need to
    }

    const totalMinutes = Math.round(input); // Ensure it's a whole number
    
    if(totalMinutes < 60) {
        return `${totalMinutes} min`
    }

    if (totalMinutes < 24 * 60) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        
        if (minutes == 0){
            return `${hours} hr`;
        } else {
            return `${hours} hr ${minutes} min`;
        }
    }
    
    const totalDays = totalMinutes / (24*60);

    if(totalDays < 30) {
        const days = Math.floor(totalDays);
        return `${days} day${days == 1 ? '' : 's'}`;
    }
    
    const totalMonths = totalDays / 30;
    if(totalMonths < 12 ) {
        const months = Math.floor(totalMonths);
        return `${months} month${months == 1 ? '' : 's'}`;
    }

    const years = Math.floor(totalMonths/12);
    return `${years} year${years == 1 ? '' : 's'}`;
};

export default FormatTime;