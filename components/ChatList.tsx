import React, { useEffect, useState } from 'react';
import { authOptions } from "@/auth";
import { chatMembersCollectionGroupRef } from "@/lib/converters/ChatMembers";
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
import ChatListRows from "./ChatListRows";

// Define the type for your chat data
type ChatData = {
  timestamp: null;
  userId: string;
  email: string;
  isAdmin: boolean;
  chatId: string;
  image: string;
};

function ChatList() {
  // Initialize state with an empty array of ChatData
  const [initialChats, setInitialChats] = useState<ChatData[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const session = await getServerSession(authOptions);
        const chatsSnapshot = await getDocs(chatMembersCollectionGroupRef(session?.user.id!));
        // Map the documents to ChatData type
        const chatsData: ChatData[] = chatsSnapshot.docs.map(doc => ({ 
          ...doc.data(),
          timestamp: null,
        }));
        setInitialChats(chatsData);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []);

  return <ChatListRows initialChats={initialChats} />;
}

export default ChatList;