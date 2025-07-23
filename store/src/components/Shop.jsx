import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function Shop() {
    return (
        <div className='relative'>
            <FontAwesomeIcon icon={faSearch} className="b" />
            <input 
               type="search" 
               className=''
               placeholder='Pesquise'
            />
        </div>
    )
}