function responseJson(response) {
      if (!response.ok) throw new Error(response.status + " " + response.statusText);
        return response.json();
}

export default function (input, init) {
      return fetch(input, init).then(responseJson);
}
