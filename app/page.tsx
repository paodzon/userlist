import styles from "./page.module.css";
import { fetchUserData } from "@/lib/users";
import UserList from "@/components/users/UserList";

export default async function Home() {
  const userList: UserList = await fetchUserData({ page: 1 });

  return (
    <div className={styles.container}>
      <UserList users={userList} />
    </div>
  );
}
