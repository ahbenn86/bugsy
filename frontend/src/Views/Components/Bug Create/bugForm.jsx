import React from 'react'
import './bugForm.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div className="bug-create">
            <h1>{props.title}</h1>
            <form>
            <lalbel>Name</lalbel>
            <input name="name" placeholder='Bug Name' required></input>
            <label>Details:</label>
            <textarea name="details" placeholder='Detailed description on the bug' required></textarea>
            <label>Priority:</label>
            <select name="priority" required>
                <option value='1'>High</option>
                <option value='2'>Mid</option>
                <option value='3'>Low</option>
            </select>
            <label>Assigned</label>
            <select name="assigned">
                <option>Angelo Bennett</option>
                <option>Jane Doe</option>
                <option>John Doe</option>
            </select>
            <label>Application Version:</label>
            <input name='version' placeholder='Application Version'></input>
            <button type='submit'>{props.title}</button>
            </form>
        </div>
    )
}