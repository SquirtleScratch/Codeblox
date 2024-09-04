const PORT = process.env.PORT;
const URL = `http://localhost:${PORT}`;

export async function getUser(email:string){
  console.log('attempting to GET user...');
  const queryString = `useremail=${email}`;
  const result = fetch(`${URL}/api/users?${queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(data => data)
    .catch(err =>
      console.error(`Error: ${err}`)
    )
  return result;
};

export async function postUser(email:string,id:number){
  console.log('no user found. POSTing')
  const result = fetch(`${URL}/api/users`, {
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
      .then(res => res.json())
      .catch(err => 
          console.error(`Error: ${err}`)
      )
  return result;
}