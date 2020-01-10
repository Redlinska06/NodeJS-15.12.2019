// Zadanie 1
// W katalogu 01 znajduje się plik user.json. Wykorzystując wiedzę z poprzednich zajęć, stwórzmy aplikację
// wczytującą naszego użytkownika z pliku i zamieńmy go na obiekt JS oraz wyświetlmy w konsoli jego imię.
// Użyjmy w tym zadaniu funkcję readFileSync z wbudowanego modułu fs oraz funkcję JSON.parse do przeparsowania
// wczytanej zawartości do obiektu.

// Zabezpieczmy naszą aplikację tak aby wyłapać błąd prasowania lub odczytu pliku i poinformujmy o tym użytkownika.

// const fs = require("fs");

// try {
//   const data = fs.readFileSync("user.json", "utf-8");
//   console.log(data);
//   const user = JSON.parse(data);
//   console.log(user.name);
// } catch (error) {
//   console.log("error:", error.message);
// }

// Zadanie 2
// Stwórzmy aplikację która będzie posiadała funkcję dzielenia 2 liczb.
// Jak wiadomo JS jest ciekawym językiem, który pozwala dzielić przez 0... efektem dzielenia przez zero jest wartość Infinity, np.:
// const result = 2 / 0;
// console.log(result); // => Infinity
// Zabezpieczmy naszą aplikację tak aby funkcja dzielenia rzucała wyjątkiem w przypadtku gdy drugi parametr ma wartość 0
// (np. new Error('divide by 0')).
// Oczywiście stwórzmy przykładowe wywołanie naszej funkcji z blokiem try..catch.

// const div = (a, b) => {
//   if (b === 0) {
//     throw new Error("Dzielenie przez 0");
//   }
//   return a / b;
// };

// try {
//   const result = div(2, 0);
//   console.log(result);
// } catch (error) {
//   console.log(error.message);
// }

// Zadanie 3
// Wykorzystując składnię async stwórzmy funkcję zwracającą nasz pierwszy Promise i wyświetlmy na ekranie hello world!.
// my func ... etc...

// myFunc()
//     .then(result => {
//         console.log(result);
//     });

// const myFunc = async () => {
//   return "Hello World!";
// };

// myFunc().then(result => console.log(result));

// Zadanie 4
// Stwórzmy aplikację która będzie posiadała funkcję asynchroniczną dodawnia 2 liczb do siebie (async).
// Jeżeli wynik będzie liczbą parzystą powinniśmy wyrzucić błąd i poinformować użytkownika o tym fakcie.

// my func ... etc... add(4, 5) .then( ... ) .catch( ... );

// async function add(a, b) {
//   const result = a + b;
//   if (result % 2 === 0) {
//     throw new Error("Wynik jest liczbą parzystą");
//   }
//   return result;
// }

// add(4, 5)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error.message);
//   });

// another solution:

// const add = async (a, b) => {
//   const result = a+b;
//   if (result % 2 === 0){
//     throw new Error('Wynik parzysty');
//   }
//   return result;
// }

// add(3,6)
//   .then( result => console.log(result))
//   .catch( err => console.log(err.message));

// Zadanie 5 Zmodyfikujmy nasze zadanie 4 tak aby zamiast .then..catch użyć await.

// const add = async (a, b) => {
//   const result = a + b;
//   if (result % 2 === 0) {
//     throw new Error("Wynik jest liczbą parzystą");
//   }
//   return result;
// };

// (async () => {
//   try {
//     const result = await add(4, 4);
//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

// Zadanie 6 Wykorzystując wiedzę z poprzednich zajęć użyjmy zewnętrznej biblioteki axios i
// pobierzmy użytkownika dane wykorzystując składnię async/await.
// Endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/2

// const axios = require("axios");
// const getUser = async id => {
//   const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//   const user = await axios.get(url);
//   return user.data;
// };

// (async () => {
//   const userData = await getUser(2);
//   console.log(userData);
// })();

// Zadanie 7 Dodajmy do naszego zadania 6 obsługę błędów try..catch.

// const axios = require("axios");

// const getUser = async id => {
//   const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//   const user = await axios.get(url);
//   return user.data;
// };

// (async () => {
//   try {
//     const userData = await getUser(222);
//     console.log(userData);
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

// Zadanie 8 Wykorzystując składnię async/await zmodyfikujmy zadanie 7 tak aby pobrać kilku użytkowników
// w tej samej chwili wykorzystując Promise.all(). Wyświetlmy ich imiona w konsoli. (id użytkowników: 2, 3, 5, 7).

// const axios = require("axios");

// const users = [2, 3, 5, 7];

// const getUser = async id => {
//   const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//   const user = await axios.get(url);
//   return user.data;
// };

// const promises = users.map(id => getUser(id));

// (async () => {
//   try {
//     const userData = await Promise.all(promises);
//     userData.forEach(user => console.log(user.name));
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

// Zadanie 9 Dodajmy do naszej aplikacji z zadania 7 pobieranie pogody dla naszego użytkownika
// (z odpowiedzi weźmy main.temp i wyświetlmy na ekranie). Zadanie analogiczne jak w poprzednim
//  laboratorium z wykorzystaniem składni async/await.
// Endpoint do pogody: https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={lat}&lon={lng}

// const axios = require("axios");

// const getUser = async id => {
//   const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//   const user = await axios.get(url);
//   return user.data;
// };

// const getWeather = async (lat, lng) => {
//   const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
//   const weather = await axios.get(url);
//   return weather.data;
// };

// (async () => {
//   try {
//     const userData = await getUser(4);
//     console.log(userData.name);
//     const {
//       geo: { lat, lng }
//     } = userData.address;
//     const weather = await getWeather(lat, lng);
//     console.log(weather.main.temp);
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

// Zadanie 10 Stwórzmy aplikację która pobierze informację o użytkowniku i statystykach jego postów i komentarzy.
// Z pobranego użytkownika wyświetlmy na ekranie nazwę użytkownika oraz email.
// Pobierzmy wszystkie posty użytkownika i wyświetlmy ich ilość w konsoli.
// Dodatkowo sprawdźmy aktywność szukanego użytkownika w komentarzach i wyświetlmy łączną ilość komentarzy w konsoli.
// Endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/2
// Endpoint do postów: https://jsonplaceholder.typicode.com/posts?userId=2
// Endpoint do komentarzy: https://jsonplaceholder.typicode.com/comments?postId=11

// const axios = require("axios");

// const getUser = async id => {
//   const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//   const user = await axios.get(url);
//   return user.data;
// };

// const getPosts = async id => {
//   const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
//   const posts = await axios.get(url);
//   return posts.data;
// };

// const getComments = async id => {
//   const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
//   const comments = await axios.get(url);
//   return comments.data;
// };

// (async () => {
//   try {
//     const userData = await getUser(4);
//     const { id, name, email } = userData;
//     console.log(`${name}, e-mail - ${email}`);
//     const posts = await getPosts(id);
//     console.log(`Ilość postów użytkownika - ${posts.length}`);
//     const promises = posts.map(post => getComments(post.id));
//     const comments = await Promise.all(promises);
//     let commentsSum = 0;
//     comments.forEach(postComments => (commentsSum += postComments.length));
//     console.log(`Łączna ilość komentarzy - ${commentsSum}`);
//   } catch (err) {
//     console.log(err.message);
//   }
// })();
