import React from 'react'

const ScreenSetting = () => {
  return (
    <div>
        User Information
            <form>
                <label>First Name :
                    <input type="text" value="Rakesh" />
                </label>
                <label>Last Name :
                    <input type="text" value="Kumar" />
                </label>
                <label>Profile Picture :
                    <img src="" alt="profile"/>
                </label>
            </form>
    </div>
  )
}

export default ScreenSetting;
