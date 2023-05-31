"use client";

import { useState } from "react";
import { fetchUserData } from "@/lib/users";
import Button from "../common/Button";
import UserCard from "./UserCard";
import LoadingSpinner from "../common/LoadingSpinner";
import styles from "./UserList.module.css";

type UserListProps = {
  users: UserList;
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [userList, setUserList] = useState<User[]>(users.data);
  const [pageCount, setPageCount] = useState<number>(users.page);
  const [loading, setLoading] = useState<boolean>(false);
  const isPageCountMax: boolean = users.total_pages === pageCount;

  const loadMoreHandler = async () => {
    if (isPageCountMax) return;
    setLoading(true);
    try {
      setPageCount(pageCount + 1);
      const response: UserList = await fetchUserData({ page: pageCount + 1 });
      setUserList([...userList, ...response.data]);
    } catch (err) {
      return err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.users__container}>
      <div className={styles.users__list}>
        {userList.map((user: User) => (
          <UserCard
            key={user.id}
            id={user.id}
            email={user.email}
            firstName={user.first_name}
            lastName={user.last_name}
            avatar={user.avatar}
          />
        ))}
      </div>
      <div className={styles.users__button}>
        <Button
          disabled={isPageCountMax}
          onClick={() => loadMoreHandler()}
          backgroundColor="#319795"
          color="#fff"
        >
          {loading ? <LoadingSpinner /> : "Load more"}
        </Button>
      </div>
    </div>
  );
};

export default UserList;
