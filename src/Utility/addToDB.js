const getStoredapp =()=>{
    const storeappSTR =localStorage.getItem('applist')

    if (storeappSTR) {
        const storedappDta = JSON.parse(storeappSTR)
        return storedappDta
    }
    else{
        return []
    }
}

const addtostoreDB =(id)=>{
    const storedappDta = getStoredapp()
    if (storedappDta.includes(id)) {
        alert('id already exist')
    } else {
        storedappDta.push(id)
        const data = JSON.stringify(storedappDta)
        localStorage.setItem('applist', data)
        
    }
}

export {addtostoreDB, getStoredapp}