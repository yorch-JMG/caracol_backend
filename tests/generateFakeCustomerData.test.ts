import { generateFakeSaleRow } from "../src/dataGenScripts/generateFakeSaleRow";
import { formatDate } from "../src/dataGenScripts/formatDate";
test('makes random data from date', () => { 
	const dateForSale = formatDate(23, 2, 2018); 
	const sale = generateFakeSaleRow(dateForSale);
	console.log(sale);
  expect(0).toBe(0);
});
