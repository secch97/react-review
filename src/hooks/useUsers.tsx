import React, { useEffect, useRef, useState } from "react";
import { User, UserList } from "../interfaces/reqRes";
import { reqResApi } from "../components/api/reqRes";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const pageRef = useRef(1);

  useEffect(() => {
    //API Call:
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const resp = await reqResApi.get<UserList>("users", {
      params: {
        page: pageRef.current,
      },
    });
    if(resp.data.data.length>0){
        setUsers(resp.data.data);
    }
    else{
        pageRef.current--;
        alert("No more data");
    }
  };

  const nextPage = () => {
    pageRef.current++;
    loadUsers();
  }

  const prevPage = () => {
    if(pageRef.current>1){
        pageRef.current--;
        loadUsers();
    }
  }

  return [users, nextPage, prevPage] as const
};

export default useUsers;
