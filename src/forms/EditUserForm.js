import React, { useState, useEffect } from 'react'


const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button onClick={handleClose}>編集完了</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        キャンセル
      </button>
    </form>
  )
}

export default EditUserForm