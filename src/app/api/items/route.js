export async function GET(){
    // 1. get access token
    const token = await getToken();
    console.log(token);
    // 2. get date from TDX API
    if (token){
        const apiData = await fetchData(token);
        return Response.json(apiData);
    }else{
        return Response.json(
            {error: 'Failed to retrieve access token'},
            {status: 401}
        );
    }
    
}

async function getToken(){
    const authUrl = "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', process.env.TDX_CLIENT_ID);
    params.append('client_secret', process.env.TDX_CLIENT_SECRET);

    try{
        const response = await fetch(authUrl,{
            method: 'POST',
            headers: {
              'content-type': 'application/x-www-form-urlencoded'
          },
          body: params,
        });

        if (response.ok){
            const data = await response.json();
            return data.access_token;
        }else{
            console.error("Error fetching token:", response.status);
        }
    }catch(error){
        console.log("Error fetching token:",error);
    }
    return null;
}

async function fetchData(token){
    const apiUrl = 'https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/YunlinCounty';

    try{
        const response = await fetch(apiUrl,{
            method: 'GET',
            headers: {
                Authorization: `bearer ${token}`,
                'Content-Type':'application/json',
            },
        });
        if(response.ok){
            const data = await response.json();
            console.log(JSON.stringify(data));
            return data;
        }else{
            console.error('Error fetching data:', response.status);
        }
    }catch(error){
        console.error('Error fetching data', error);
    }
    return null;
}