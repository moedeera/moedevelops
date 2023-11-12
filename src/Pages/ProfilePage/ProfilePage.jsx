import "./ProfilePage.css";

import { BasicInfo } from "./ProfilePageComp/BasicInfo";
import { DeleteProfile } from "./ProfilePageComp/DeleteProfile";
import { MessagesBox } from "./ProfilePageComp/MessagesBox";
import { PasswordReset } from "./ProfilePageComp/PasswordReset";
export const ProfilePage = () => {
  return (
    <div className="profile-page-container">
      <MessagesBox />
      <PasswordReset />
      <BasicInfo />
      <DeleteProfile />
      <div className="profile-page-view"></div>
    </div>
  );
};
