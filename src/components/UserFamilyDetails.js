import React from 'react'

const UserFamilyDetails = () => {
  const userInfo = JSON.parse(localStorage.getItem('newData'));
  const familyInfo = JSON.parse(localStorage.getItem(''));
  console.log("dsfsn,n")
  console.log(userInfo)
  return (
    <>
    <h1>UserFamilyDetails</h1>
    <h1>{userInfo.firstName}</h1>
    </>
  )
}

export default UserFamilyDetails