fetch('http://httpstat.us/404')
  .then((response) => {
    console.log(response.ok, response.status);
    //if (!response.ok) throw new Error('Request failed');
    if (response.status == 404) throw new Error('Not Found');
    else if (response.status == 500) throw new Error('Server Error');
    else if (response.status !== 200) throw new Error('Request Failed');
    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => console.log(error));
