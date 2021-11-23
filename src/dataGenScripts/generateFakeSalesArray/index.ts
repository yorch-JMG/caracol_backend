import {generateFakeSaleRow} from '../generateFakeSaleRow'

export const generateFakeSalesArray = ( date : string, numberOfSales : number) => { 
  let arrayOfFakeRow = [];
  let fakeCustomerData;
  for( let i = 0 ; i < numberOfSales ; i++ ) {
    fakeCustomerData = generateFakeSaleRow(date);
    arrayOfFakeRow.push(fakeCustomerData);
  }
  return arrayOfFakeRow;
};
