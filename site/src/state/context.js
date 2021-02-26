import React, { createContext, useEffect, useState } from 'react';
import Service from "./service"

const ItemsContext = createContext([]);


const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {  
    new Service().fetchItems().then(o => {
        console.log("items length:", o.length);
        setItems(o);
    });
  }, []);

  return <ItemsContext.Provider value={items}>{children}</ItemsContext.Provider>; 
}

const UserContext = createContext([]);

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {  
      new Service().fetchUser().then(o => {
          console.log("user:", JSON.stringify(o));
          setUser(o);
      });
    }, []);
  
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>; 
  }

export {ItemsContext, ItemsContextProvider, UserContext, UserContextProvider};