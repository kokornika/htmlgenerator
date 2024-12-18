export function splitHungarianName(name: string): { familyName: string; givenNames: string } {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 0) {
      return { familyName: '', givenNames: '' };
    } else if(parts.length === 1){
         return { familyName: '', givenNames: parts[0] };
    }
    
    const familyName = parts.pop() || '';
    const givenNames = parts.join(' ');
  
    return { familyName, givenNames };
}

export function generateHungarianMonogram(name: string): string | null {
    if(!name) return null;
  const parts = splitHungarianName(name);
  if (!parts || parts.familyName === "" && parts.givenNames === "") {
     return null;
  }
    if(parts.familyName !== ""){
        return (parts.familyName.charAt(0).toUpperCase() + parts.givenNames.charAt(0).toUpperCase()).slice(0,2);
    }

   return parts.givenNames.charAt(0).toUpperCase();

  }