const getStoredapp = () => {
  const storeappSTR = localStorage.getItem('applist');
  if (storeappSTR) {
    return JSON.parse(storeappSTR);
  } else {
    return [];
  }
};

const addtostoreDB = (id) => {
  const storedappDta = getStoredapp();
  const idStr = String(id); 
  if (!storedappDta.includes(idStr)) {
    storedappDta.push(idStr);
    localStorage.setItem('applist', JSON.stringify(storedappDta));
  }
};

const removeFromStoreDB = (id) => {
  const storedappDta = getStoredapp();
  const updatedAppList = storedappDta.filter(appId => String(appId) !== String(id));
  localStorage.setItem('applist', JSON.stringify(updatedAppList));
};

export { addtostoreDB, getStoredapp, removeFromStoreDB };
