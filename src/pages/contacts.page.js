import React, {useEffect, useState} from 'react';
import "./contacts.css"

const contacts = [{
  firstName: "R-2",
  lastName: "D-2",
  phone: "+380956319521",
  gender: "male"
  }, {
  firstName: "",
  lastName: "Palpatine",
  phone: "+380931460123",
  gender: "female"
  }, {
  firstName: "Luck",
  lastName: "Skywalker",
  phone: "+380666666666"
  }, {
  firstName: "Darth",
  lastName: "Wader",
  phone: "+380504691254",
  gender: "female"
  }, {
  firstName: "Leia",
  lastName: "Organa",
  phone: "+380739432123",
  gender: "male"
  }, {
  firstName: "Biggs",
  lastName: "Darklighter",
  phone: "+380956319521",
  gender: "male"
  }];

const Contacts = () => {
  const [data, setData] = useState(contacts);
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value)
  }
  useEffect(() => {
    const filteredData = contacts.filter(({lastName}) => lastName.indexOf(value) !== -1)
    setData(filteredData)
  },[value])
  const renderData = () => {
    return(
      data.map((contact) => {
        const {firstName, lastName, phone, gender} = contact;
        return (
          <div className='phoneCard'>
            <p className='name'>{firstName} {lastName}</p>
            <p className='phone'>{phone}</p>
            {gender && <p>{gender}</p> }
          </div>
        )
      })
    )
  }
  return(
    <div className='container'>
      <h1>Contacts List</h1>
      <input placeholder='search' type="text" value={value} onChange={onChange} />
      {data.length > 0 ? renderData() : <div className='noResults'>no results</div>}
    </div>
  )
}

export default Contacts
