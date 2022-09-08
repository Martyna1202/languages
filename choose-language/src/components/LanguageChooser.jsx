import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../UseContext/LanguageContext'


function LanguageChooser() {

	const { language, setLanguage, languages } = useContext(LanguageContext)
	
	function handleChange(e){
		setLanguage(e.target.value)
	}
	
    return (
        <div>
			<form action="">
            	<label htmlFor="">Choose your language</label>
            	<select value={language} onChange={handleChange}>
					{
						languages.map((option)=> (
							<option 
								key={option.id}
								value={option.value} 
								id={option.id}
								className='option-field'
								>
								{option.language}
							</option>
					))}
				</select>
			</form>
        </div>
    )
}

export default LanguageChooser
