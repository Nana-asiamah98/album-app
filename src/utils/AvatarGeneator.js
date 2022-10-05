import axios from "axios";

export const avatarGenerator = (letter) => {
  return `https://ui-avatars.com/api/?name=A${letter}&size=240`;
};
