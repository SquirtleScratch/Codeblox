const PORT = process.env.PORT;
const URL = process.env.NEXTAUTH_URL;

async function makeRequest(endpoint:string, options:RequestInit) {
  const res = await fetch(endpoint, options);
  const data = await res.json();
  return data;  
}

export async function getUser(email:string){
  console.log('attempting to GET user...');
  try {
    return makeRequest(`${URL}/api/users?useremail=${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  } catch(err:any) {
      console.error(`Error: ${err}`);
      throw new Error(`Failed to GET: ${err.message}`);
  }
};

export async function postUser(email:string,id:string){
  console.log('no user found. POSTing')
  try{
    return makeRequest(`${URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'userid': `${id}`,
        'useremail': `${email}`,
        'password': 'testing'
      })
    })
  } catch(err:any) {
    console.error(`Error: ${err}`);
    throw new Error(`Failed to POST: ${err.message}`);
  }
}