'use client'
import { useState } from "react";
import { Card} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Messenger() {
  const [users, setUsers] = useState([
    {
      userId: "1",
      username: "Dipak Raj Pandye",
      profilePicture: "https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/445507952_2217316698628877_6591381851056171530_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=NBMznyfdjJwQ7kNvgFnjMY2&_nc_zt=23&_nc_ht=scontent.fktm6-1.fna&_nc_gid=Au8bNC2UQm7LQnikUo3ur6Q&oh=00_AYBpwGjbs-SgOVIzPLUNwYKm-gmS3UQM01VXriAb4QtJGA&oe=679E2205",
      status: "online",
    },
    {
      userId: "2",
      username: "Ramesh saud",
      profilePicture: "https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/420038312_1108678543489579_1425195465872540919_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-s7WD1z9vfMQ7kNvgFnwVOx&_nc_zt=23&_nc_ht=scontent.fktm6-1.fna&_nc_gid=AgbfBHFxwv1P99dLS9oLzh5&oh=00_AYCHv5aSeZ7yA7-VD2Buv42cPZezQwL3zDY81hXWLjMIdA&oe=679E0122",
      status: "online",
    },
    {
      userId: "3",
      username: "Dammar singh Rana ",
      profilePicture: "https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-1/432755167_1623476768394711_2826086712087742880_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_ohc=Z5iDUni9UEEQ7kNvgEiv4Ij&_nc_zt=24&_nc_ht=scontent.fktm6-1.fna&_nc_gid=ApSrIH1xVgC4tvw4mrTF1Q7&oh=00_AYCr2zybvVOnXstjq61vsAMSpM5beUtyvrnnHc4_Pf4wOw&oe=679E2429",
      status: "online",
    },
    {
         userId: "4",
      username: "Robert D junior",
      profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfPIuZc60L6WVpTMkzzIt2KTwxvABlLhDlHA&s",
      status: "online",
    },
    {
        userId: "5",
      username: "Sharukh Khan",
      profilePicture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_ObshU2ins98O8AZINR-kjLdMyn2IUmNnkS3CWVW4Nb8j2yuDjUMj0q-luS1YF5pnMbZ0WFyOYxRdNFFxVQrnHQ",
      status: "offline",
    },

  ]);
  const [activeTab, setActiveTab] = useState("Chats");
  const [newMessage, setNewMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([
    { userId: "1", message: "Hello!", timestamp: "10:00 AM" },
    { userId: "2", message: "Hi, how are you?", timestamp: "10:05 AM" },
  ]);


  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { userId: "1", message: newMessage, timestamp: new Date().toLocaleTimeString() },
      ]);
      setNewMessage("");
    }
  };
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };  

  return (
      <div className="w-full h-full mx-30 p-4 flex">
      <div className="w-1/5 bg-gray-300 p-4 border-r rounded-lg">
        <h1 className="text-xl font-bold mb-4 text-blue-500">Messenger</h1>
        {["Chats", "Channels", "Status", "More"].map((tab) => (
          <Button key={tab} className={`w-15 mb-2 rounded-full ${activeTab === tab ? 'bg-blue-500 text-white' : ''}`} onClick={() => setActiveTab(tab)}>
            {tab}
          </Button>
        ))}
      </div>
      
  
      {activeTab === "Chats" && (
        <div className="w-125  border-r p-4 bg-gray-200">
          <h2 className="text-xl font-bold mb-4">Chats</h2>
          {users.map((user) => (
            <Card
              key={user.userId}
              className="flex items-center p-2 mb3 cursor-pointer  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-yellow-200 "
              onClick={() => handleUserClick(user)}
            >
              <img src={user.profilePicture} alt={user.username} className="w-12 h-12 rounded-full mr-2" />
              <div>
                <h2 className="text-sm font-normal">{user.username}</h2>
                <p className={`text-sm ${user.status === "online" ? "text-green-500" : "text-red-500"}`}>{user.status}</p>
              </div>
            </Card>
          ))}
        </div>
      )}
      
      <div className="w-1/2 bg-yellow-200 flex flex-col h-[500px]">
        {selectedUser ? (
          <>
            <h2 className="text-xl font-bold p-4 bg-gray-300">Chat  with{selectedUser.username}</h2>
            <div className="flex-grow overflow-y-auto p-4 border">
              {messages.map((msg, index) => (
                <div key={index} className={`mb-2 ${msg.userId === "1" ? "text-right" : "text-left"}`}>
                  <p className={`inline-block p-2 rounded-lg ${msg.userId === "1" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>{msg.message}</p>
                  <p className="text-xs text-black mt-1">{msg.timestamp}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center p-2 border-t">
              <Input type="text" placeholder="Type your message..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className="flex-grow mr-2" />
              <Button onClick={handleSendMessage}>Send</Button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">Select a user </div>
        )}
      </div>
    </div>
  );
}
