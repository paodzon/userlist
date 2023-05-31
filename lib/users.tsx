type UserListParams = {
  page : number
}

export const fetchUserData = async (params: UserListParams) => {
  try {
    const response = await fetch(`https://reqres.in/api/users?page=${params.page}`);
    return response.json();
  } catch (err) {
    return err;
  }
};