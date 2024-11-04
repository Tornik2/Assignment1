import "./profile.css";
import UserInfo from "./UserInfo";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

async function ProfilePage() {
  const { user } = await getSession();
  const { nickname, email, isEmailVerified, picture } = user;

  return (
    <div className="max-width">
      <UserInfo
        username={nickname}
        email={email}
        picture={picture}
        isEmailVerified={isEmailVerified}
      />
    </div>
  );
}

export default withPageAuthRequired(ProfilePage, { returnTo: "/profile" });
