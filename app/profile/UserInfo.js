"use client";

export default function UserInfo({
  username,
  email,
  picture,
  isEmailVerified,
}) {
  return (
    <div className="border-4 mt-5 flex gap-7">
      <div>
        <img className="w-72" src={picture} alt="user avatar" />
      </div>
      <div className="flex flex-col gap-7 mt-auto mb-auto">
        <h1 className="">Nickname : {`   ${username}`}</h1>
        <p> Email : {`   ${email}`}</p>
        <p className="">Email is {!isEmailVerified && "NOT"} verified</p>
      </div>
    </div>
  );
}
