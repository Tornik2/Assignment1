"use client";

export default function UserInfo({
  username,
  email,
  picture,
  // eslint-disable-next-line no-unused-vars
  isEmailVerified,
}) {
  return (
    <div>
      <div>
        <img className="w-52" src={picture} alt="user avatar" />
      </div>
      <div className="">
        <h1 className="">{username}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
}
