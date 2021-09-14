const API = '22611129-58a3168a9d70d9c0808a9c973';

function fetchApi(currentSearch, currentPage) {
  console.log(`aeyy`);
  return fetch(
    `https://pixabay.com/api/?key=${API}&q=${currentSearch}&image_type=photo&orientation=horizontal&per_page=12&page=${currentPage}`,
  ).then(res => {
    if (res.ok) {
      console.log(res.ok);
      return res.json();
    }
    console.log(res.ok);
    return Promise.reject(new Error(`No result with name ${currentSearch}`));
  });
}
const apiFetch = { fetchApi };
export default apiFetch;