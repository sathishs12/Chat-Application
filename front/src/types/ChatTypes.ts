// src/types/ChatTypes.ts
export interface ChatItem {
    id: number; // or string based on your requirement
    name: string;
    message: string;
    time: string;
    image: string;
    seen?: boolean;
    isOnline: boolean;
  }
  
  export type SelectedChat = { chat: ChatItem; type: "group" | "person" } | null;
  