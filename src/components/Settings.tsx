import { useState } from 'react'
import { texturesArray } from '../constants'
import { useSettings } from '../context/SettingsContext'

const Settings = () => {
  const { currentTexture, setCurrentTexture } = useSettings()
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  return (
    <div className="flex gap-2 items-center flex-col">
      <span className="text-sm font-light cursor-pointer" onClick={() => setIsDropdownVisible((prev) => !prev)}>
        Click here to change a texture
      </span>
      {isDropdownVisible && (
        <div className="flex flex-col gap-2">
          {texturesArray.map((texture) => (
            <span className="cursor-pointer" key={texture.id} onClick={() => setCurrentTexture(texture.texture)}>
              {texture.name} {currentTexture === texture.texture ? '✓' : ''}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default Settings
