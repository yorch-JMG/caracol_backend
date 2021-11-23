interface TicketInfo {
  tipo : string,
  precio : number
}
export const generateTicketTypeBasedOnAge = (age : number) : TicketInfo => {
  switch(true){
      case age > 12 && age < 65:
        return {
            tipo :'Admision general',
            precio : 60
          };

      case age >= 65:
        return {
            tipo :'Tercera edad',
            precio : 40
          };

      case age <= 12 && age >= 6:
        return {
            tipo :'Menores',
            precio : 30
          };

      case age >= 0 && age <= 5:
          return {
            tipo :'Gratuita',
            precio : 0
          };

      default:
        return {
            tipo : '',
            precio : 0
          };
    }    
  }
