import { generateFakeSaleRow } from "../src/dataGenScripts/generateFakeSaleRow";
import { formatDate } from "../src/dataGenScripts/formatDate";
import { generateFakeSalesArray } from '../src/dataGenScripts/generateFakeSalesArray';

test('makes random data from date', () => { 
	const dateForSale = formatDate(23, 2, 2018); 
	const sale = generateFakeSaleRow(dateForSale);
	console.log(sale);
  expect(0).toBe(0);
});

test('makes dummy data for a certain date, makes an array with size 50', () => { 
	const dateForSale = formatDate(23, 2, 2018); 
	const fakeDataArray = generateFakeSalesArray(dateForSale, 50);
	console.log(fakeDataArray);
	expect(fakeDataArray.length).toBe(50);
	
});
