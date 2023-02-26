import React from 'react'

const UserData = ({ data }) => {
    return (
        <>
            {
                data.map((curEle) => {
                    const { id, name, username, email, phone, address: { street, suite, city, zipcode } } = curEle;
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                            <td>{street}{suite}{city}{zipcode}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default UserData
