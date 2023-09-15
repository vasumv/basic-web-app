export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "vvikram"
    );
  }
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "Vasu"
    );
  }
  if (query.toLowerCase().includes("plus")) {
    const regex = /(\w+) plus (\w+)/; 

    const match = query.match(regex);

    // match[1] will contain num1
    // match[2] will contain num2
    const num1 = Number(match[1]); 
    const num2 = Number(match[2]);

    return (
      String(num1 + num2)
    );
  }
  if (query.toLowerCase().includes("is the largest")) {
    
    const regex = /(\w+) plus (\w+)/; 

    const match = query.match(regex);

    // match[1] will contain num1
    // match[2] will contain num2
    const num1 = Number(match[1]); 
    const num2 = Number(match[2]);
    return (
      
    );
  }

  return "";
}
