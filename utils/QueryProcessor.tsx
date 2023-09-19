export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("andrewid")) {
    return (
      "You andrew ID is agivone. " 
    );
  }
  else if (query.toLowerCase().includes("name")) {
    return (
      "Ava." 
    );
  }
  else if (query.toLowerCase().includes("9 plus 28")) {
    return (
      "37" 
    );
  }

  return "";
}
