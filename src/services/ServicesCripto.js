import axios from 'axios';

const APIClient = axios.create({
    baseURL: "https://labor3-d60e.restdb.io/rest/",
	headers: {'x-apikey': '64a2e9bc86d8c525a3ed8f63'}

});

export default {
    getTransaccion(user) {
      return APIClient.get(`/transactions?q={"user_id": "${user}"}`);
    },
  
    getTransaccionId(id){
      return APIClient.get(`/transactions/${id}`);
    },
  
    postTransaccion(user,action,type,quantity,price,date){
      return APIClient.post('/transactions', {	
          "user_id": user,
          "action": action,
          "crypto_code": type,
          "crypto_amount": quantity,
          "money": price,
          "datetime": date
      })
    },
  
    deleteTransaccion(id){
       return APIClient.delete(`/transactions/${id}`)
    },
  };
  