import faker from 'faker';
import {generateRealisticAge} from '../generateRealisticAge';
import {generateTicketTypeBasedOnAge} from '../generateTicketInfoBasedOnAge';
import {generateRandomEventId} from '../generateRandomEventId';

interface FakeCustomer {
  nombre : string,
  correoElectronico : string,
  tipoBoleto : string,
  edad : number,
  precio : number,
  fecha : string,
  idEvento : number
}

export const generateFakeSaleRow = (dateToMakeSalesTo : string) : FakeCustomer => { 
  let customer = {
    nombre : faker.name.findName(),
    correoElectronico : faker.internet.email(),
    tipoBoleto : '',
    edad : generateRealisticAge(),
    precio : 1.0,
    fecha : dateToMakeSalesTo,
    idEvento : generateRandomEventId()
  } 

  const ticketInfo = generateTicketTypeBasedOnAge(customer.edad); 
  customer.tipoBoleto = ticketInfo.tipo;
  customer.precio = ticketInfo.precio;

  return customer;
};
