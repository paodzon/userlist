"use client";

import Image from "next/image";
import styles from "./UserCard.module.css";

type UserProps = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: any;
}

const UserCard: React.FC<UserProps> = ({
  id,
  email,
  firstName,
  lastName,
  avatar,
}) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.card__image}
        src={avatar}
        width={80}
        height={80}
        alt={`${email}`}
      />
      <div className={styles.card__details}>
      <p>{`${id}. ${firstName}  ${lastName}`}</p>
      <p>{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
