const apiUrl = 'http://localhost/greviacom';
export async function getAllUsers() {

    const response = await fetch(apiUrl + '/api/member/get');
    // return await response.json().total_rows;
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(apiUrl + '/api/member', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data })
    })
    return await response.json();
}