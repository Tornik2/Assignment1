"use client";

export default function UserInfo({
  username,
  email,
  picture,
  isEmailVerified,
}) {
  return (
    <div>
      <div>
        <img className="" src={picture} alt="user avatar" />
      </div>
      <div className="">
        <h1 className="">{username}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
}
