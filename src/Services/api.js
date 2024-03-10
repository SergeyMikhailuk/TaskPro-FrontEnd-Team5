import axios from 'axios';

export async function fetchCurrent() {
  const { data } = await axios.get(`/api/users/current`);
  return data;
}
export async function fetchBoards() {
  const { data } = await axios.get(`/api/boards`);
  return data;
}
