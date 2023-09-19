import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrewid description', () => {
        const query = "andrewid";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "You andrew ID is agivone. " 
          ));
    });
    test('should return name', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Ava." 
          ));
    });
    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });
    test('should multiply numbers', () => {
        expect(QueryProcessor("What is 12 multiplied by 69?")).toEqual("828");
        expect(QueryProcessor("What is 40 multiplied by 65?")).toEqual("2600");
    });

});