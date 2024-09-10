import { IMessage } from "@ptypes/messages.types";

interface IUsersMessage {
  visible: boolean;
  data?: IMessage;
}

export type { IUsersMessage };
