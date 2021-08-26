const URL = 'http://localhost:7890';

export async function getToken(loginInfo, type){
     // type -- 'signin' or 'signup'
    // user -- {email: 'adofjg@blah.com', password: '1234'}
    const authURL = `${URL}/auth/${type}`;

    const resp = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
    });
    const data = await resp.json();

    localStorage.setItem('TOKEN', data.token);
    return data.token;

}


//GET TODOS
export async function getToDos(){
    const apiURL = `${URL}/api/todos`;
    let token = localStorage.getItem('TOKEN');

    const resp = await fetch(apiURL, {
        method: 'GET',
        withCredentials: true,
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
    });
    const data = await resp.json();
    return data;
}

// CREATE NEW TODO
export async function createToDo(toDoObj){
    const apiURL = `${URL}/api/todos`;
    let token = localStorage.getItem('TOKEN');

    const resp = await fetch(apiURL, {
        method:'POST',
        withCredentials: true,
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(toDoObj),
    });
    const data = await resp.json();
    return data;
}

//UPDATE TODO
export async function updateToDo(toDoObj){
    const apiURL = `${URL}/api/todos/${toDoObj.id}`;
    let token = localStorage.getItem('TOKEN');

    const resp = await fetch(apiURL, {
        method:'PUT',
        withCredentials: true,
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(toDoObj),
    });
    const data = await resp.json();
    return data;

}